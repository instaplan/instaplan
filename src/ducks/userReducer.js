import Axios from 'axios';

const initialState = {
   isSignedIn: false,

   userLocation: {} // hold city and state keys
}

const UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN';
const UPDATE_USER_IPLOCATION = 'UPDATE_USER_IPLOCATION';

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


export function updateUserIPLocation() {
   return {
      type: UPDATE_USER_IPLOCATION,
      payload: Axios.get('http://ip-api.com/json/').then(res => res.data)

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

      case `${UPDATE_USER_IPLOCATION}_FULFILLED`:
         return {
            ...state,
            userLocation: {city: payload.city, state: payload.region}

      case UPDATE_USER_ID:
         return {
            ...state,
            userId: payload

         }
      default: return state;
   }
}