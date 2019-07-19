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
      // get only today's events
         // create day for today YYYY-MM-DD
         const todayDate = new Date().toJSON();
         const currentDate = Date.parse(`${todayDate.substr(5, 2)}/${todayDate.substr(8, 2)}/${todayDate.substr(0, 4)}`);
         // format event start and end date for each item and confirm todays date falls in between
         let todayEvents = payload.filter(event => {
            const startDate = event.start.local;
            const endDate = event.end.local;
            
            const fromDate = Date.parse(`${startDate.substr(5, 2)}/${startDate.substr(8, 2)}/${startDate.substr(0, 4)}`);
            const toDate = Date.parse(`${endDate.substr(5, 2)}/${endDate.substr(8, 2)}/${endDate.substr(0, 4)}`);
            return fromDate <= currentDate && currentDate <= toDate;
         })
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