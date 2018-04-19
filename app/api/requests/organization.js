
import ApiHelper from 'api/ApiHelper';
const Api = new ApiHelper();

/**
 * Fetch Organizations List
 */
export const fetchOrganizationsRequest = () => Api.request().get('/organizations');

/**
 * Create organization
 */

export const createOrganizationRequest = (data) => Api.request().post('/organizations', data);
