import Axios from 'axios';

const initialState = {
   events: [],
   filteredEvents: [],
   filterCategory: '',
   filterQuery: '',
   hoverMap: ''
}

const UPDATE_EVENTS = 'UPDATE_EVENTS';
const UPDATE_FILTERED_EVENTS = 'UPDATE_FILTERED_EVENTS';
const UPDATE_FILTER_CATEGORY = 'UPDATE_FILTER_CATEGORY';
const UPDATE_FILTER_QUERY = 'UPDATE_FILTER_QUERY';

export function updateEvents(locationObj) {
   return {
      type: UPDATE_EVENTS,
      payload: Axios
         .post('/api/ebevents/', locationObj)
         .then(res => res.data)
   }
}

export function updateFilterCategory(str) {
   return {
      type: UPDATE_FILTER_CATEGORY,
      payload: str
   }
}

export function updateFilterQuery(str) {
   return {
      type: UPDATE_FILTER_QUERY,
      payload: str
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
      case UPDATE_FILTER_CATEGORY:
         return {
            ...state,
            filterCategory: payload
         }
      case UPDATE_FILTER_QUERY:
         return {
            ...state,
            filterQuery: payload
         }
      default: return state;
   }
}