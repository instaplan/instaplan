import {updateIsSignedIn, updateUserId, updateUserIPLocation} from '../../ducks/userReducer';

test('Expect type to be UPDATE_IS_SIGNED_IN', () => {
   expect(updateIsSignedIn().type).toEqual('UPDATE_IS_SIGNED_IN')
})

test('Expect payload to be false', () => {
   expect(updateIsSignedIn(false).payload).toEqual(false)
})

test('Expect type to be UPDATE_USER_ID', () => {
   expect(updateUserId().type).toEqual('UPDATE_USER_ID')
})

test('Expect payload to be new user id', () => {
   expect(updateUserId('Ab234bc').payload).toEqual('Ab234bc')
})

test('Expect type to be UPDATE_USER_IPLOCATION', () => {
   expect(updateUserIPLocation().type).toEqual('UPDATE_USER_IPLOCATION')
})