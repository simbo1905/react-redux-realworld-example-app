// /**
//  * Request helper
//  *
//  * Used as a base for all requests made in the app
//  */
//
//   import axios from 'axios';
//   import config from '@/config/api';
//   import Cookies from 'js-cookie';
//   const { baseURL } = config;
//
//   // Create instance
//   const request = axios.create({
//     baseURL,
//     validateStatus: function (status) {
//       if (status >= 400) {
//         return false;
//       }
//
//       return status >= 200 && status < 300; // default
//     },
//   });
//
//   // Request interceptor
//   request.interceptors.request.use((config) => {
//     const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3N0YWdpbmcudW5pcWtleS5ldS9hcGkvbG9naW4iLCJpYXQiOjE1MjAyNjY0MzgsImV4cCI6MTUyMDI3MDAzOCwibmJmIjoxNTIwMjY2NDM4LCJqdGkiOiJjaHJuYVJmR0c1ZDV0RVhhIiwic3ViIjoiZTgxZDJiYTAtMjA4MC0xMWU4LWE0OGQtYzliMTg0MDc3MDIzIiwicHJ2IjoiZjkzMDdlYjVmMjljNzJhOTBkYmFhZWYwZTI2ZjAyNjJlZGU4NmY1NSIsImRldmljZSI6ImU4OWVlNDkwLTIwODAtMTFlOC1iMTYwLTYzMDkwZGYyMDEwOSJ9.i_Buzf0YHa6l2wPeRXyy-SwyyFR7QsOQf4ofni_xU0o';
//   // Add auth token before request
//   // console.log('Attaching Authorization', `Bearer ${Cookies.get('token')}`);
//   config.headers.common = {
//       Authorization: token,
//   };
//     return config;
//   }, (error) => {
//     return Promise.reject(error);
//   });
//
//   // Response interceptor
//   request.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     (error) => {
//       return Promise.reject(error);
//     },
//   );
//
//   // Headers
//   request.defaults.headers.common = {
//     Accept: 'application/json',
//     'X-Requested-With': 'XMLHttpRequest',
//   };
//
//   export default request;
