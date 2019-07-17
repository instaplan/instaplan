const initialState = {
   isSignedIn: false,
   userId: ''
}

const UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN';
const UPDATE_USER_ID = 'UPDATE_USER_ID';

export function updateIsSignedIn(status) {
   return {
      type: UPDATE_IS_SIGNED_IN,
      payload: status
   }
}

export function updateUserID(userIdStr) {
   return {
      type: UPDATE_USER_ID,
      payload: userIdStr
   }
}

export default function userReducer(state = initialState, action) {
   const {type, payload} = action

   switch(type) {
      case UPDATE_IS_SIGNED_IN:
         return {
            ...state,
            isSignedIn: payload
         }
      case UPDATE_USER_ID:
         return {
            ...state,
            userId: payload
         }
      default: return state;
   }
}