/**
 * User: Reducer
 */

 import constants from './constants';
 const initialState = null;

 export default (state = initialState, action) => {
   switch (action.type) {

     /**
      * Set user
      */
       case constants.USER_SET:
        return Object.assign({}, action.payload);

       default:
         return state;
   }
 }
