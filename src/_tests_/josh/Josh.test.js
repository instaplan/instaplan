import {updateEvents, updateFilterCategory, updateFilterQuery, } from '../../ducks/eventsReducer';
import {updateIsSignedIn, updateUserIPLocation} from '../../ducks/userReducer'

test('updateFilterCategory should return a type of UPDATE_FILTER_CATEGORY', () => {
    expect(updateFilterCategory().type).toEqual('UPDATE_FILTER_CATEGORY')
})
test('updateIsSignedIn should return a type of UPDATE_IS_SIGNED_IN', () => {
    expect(updateIsSignedIn().type).toEqual('UPDATE_IS_SIGNED_IN')
})
test('updateUserIPLocation should return a type of UPDATE_USER_IPLOCATION', () => {
    expect(updateUserIPLocation().type).toEqual('UPDATE_USER_IPLOCATION')
})

test('updateFilterQuery should return a type of UPDATE_FILTER_QUERY', () => {
    expect(updateFilterQuery().type).toEqual('UPDATE_FILTER_QUERY')
})

test('updateEvents should return a type of UPDATE_EVENTS', () => {
    expect(updateEvents().type).toEqual('UPDATE_EVENTS')
})