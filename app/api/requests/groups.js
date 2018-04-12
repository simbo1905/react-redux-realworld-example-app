
import ApiHelper from 'api/ApiHelper';
const Api = new ApiHelper();

/**
 * Fetch Organizations List
 */
export const fetchGroupsRequest = (organizationId) => Api.request().get('/groups/list/' + organizationId + '?with_users=1');

export const createGroupRequest = (payload) => Api.request().post('/groups', payload);
export const removeGroupRequest = (id) => Api.request().delete('/groups/' + id);

export function saveGroupRequestAPI(payload) {
  if (payload.id) {
    return Api.request().put('/groups/' + payload.id, payload);
  }
  return Api.request().post('/groups', payload);
}

// Users
export function attachedUsersRequest(groupId) {
  return Api.request().get('/groups/users/' + groupId);
}
export function detachUserRequest(groupId, userId) {
  return Api.request().delete('/groups/users/' + groupId + '/' + userId );
}
export function inviteUserRequest(groupId, email) {
  return Api.request().post('/groups/users', { group_id: groupId, email });
}
