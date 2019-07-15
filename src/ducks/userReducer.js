const initialState = {
   isSignedIn: false
}

const UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN';

export function updateIsSignedIn(status) {
   return {
      type: UPDATE_IS_SIGNED_IN,
      payload: status
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
      default: return state;
   }
}