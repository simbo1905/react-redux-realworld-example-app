/**
* Auth requests
*/

import ApiHelper from 'api/ApiHelper';
import thinbus from 'thinbus-srp/client';
const Api = new ApiHelper();

// RFC 5054 2048bit constants
const rfc5054 = {
  N_base10: '21766174458617435773191008891802753781907668374255538511144643224689886235383840957210909013086056401571399717235807266581649606472148410291413364152197364477180887395655483738115072677402235101762521901569820740293149529620419333266262073471054548368736039519702486226506248861060256971802984953561121442680157668000761429988222457090413873973970171927093992114751765168063614761119615476233422096442783117971236371647333871414335895773474667308967050807005509320424799678417036867928316761272274230314067548291133582479583061439577559347101961771406173684378522703483495337037655006751328447510550299250924469288819',
  g_base10: '2',
  k_base16: '5b9e8ef059c6b32ea59fc1d322d37f04aa30bae5aa9003b8321e21ddb04e300',
};

// generate the client session class from the client session factory closure
const SRP6JavascriptClientSession = thinbus(rfc5054.N_base10, rfc5054.g_base10, rfc5054.k_base16);

/**
* Challenge
*/

export const challengeRequest = (userId) => Api.request().post('/challenge', {
  id: userId,
});

/**
* Sign in
*/

export const logInRequest = (formValues) => challengeRequest(formValues.id).then((challengeResponse) => {
  const srpClient = new SRP6JavascriptClientSession();

  try {
    srpClient.step1(formValues.email, formValues.password);
  } catch (e) {
    console.log('srpClient step1 failure', e);
  }
  const credentials = srpClient.step2(challengeResponse.data.salt, challengeResponse.data.b);

  const values = {
    id: formValues.id,
    password: `${credentials.M1}:${credentials.A}`,
  };

  // Do the actual login
  return Api.request().post('/login', values).then((res) => res).catch((err) => err);
});

/**
* Sign up
*/

export const signUpRequest = (data) => {
  const srpClient = new SRP6JavascriptClientSession();

  const { name, email, password } = data;
  const passwordSalt = srpClient.generateRandomSalt();
  const passwordVerifier = srpClient.generateVerifier(passwordSalt, email, password);

  return Api.request().post('/signup', {
    name,
    email,
    password_salt: passwordSalt,
    password_verifier: passwordVerifier,
  }).then((res) => {
    if (res.status === 201) {
      return res;
    }
    throw new Error(res);
  }).catch((err) => err);
};

/**
* Log out
*/

export const logOutRequest = () => Api.request()('/logout').then((response) => response).catch((error) => error);

/**
 * Check QR token
 * @param guid
 */
export const qrRequest = (guid) => Api.request().post('/devices/token', guid)
  .then((response) => {
    if (response.status === 200) {
      return response;
    }
    throw new Error(response);
  }).catch((error) => error);
