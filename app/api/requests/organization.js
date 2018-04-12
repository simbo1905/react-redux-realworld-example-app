
import ApiHelper from 'api/ApiHelper';
const Api = new ApiHelper();

/**
 * Fetch Organizations List
 */
export const fetchOrganizationsRequest = () => Api.request().get('/organizations');
