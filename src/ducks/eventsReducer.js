import Axios from 'axios';

const initialState = {
   events: [],
   filteredEvents: [],
   filterCategory: '',
   filterQuery: ''
}

const UPDATE_EVENTS = 'UPDATE_EVENTS';

export function updateEvents(locationObj) {

   return {
      type: UPDATE_EVENTS,
      payload: Axios
         .post('/api/ebevents/', locationObj)
         .then(res => res.data)
   }
}

export default function eventsReducer(state = initialState, action) {
   const {type, payload} = action

   switch(type) {
      case `${UPDATE_EVENTS}_FULFILLED`:
         return {
            ...state,
            events: payload
         }
      default: return state;
   }
}