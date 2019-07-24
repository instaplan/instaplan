import { updateIsSignedIn } from "../ducks/userReducer";

test("expect payload to be false", () => {

    expect(updateIsSignedIn(false)).toEqual({
        type: "UPDATE_IS_SIGNED_IN",
        payload: false
    })})

test("expect payload to be false", () => {
    const UPDATE_IS_SIGNED_IN = "UPDATE_IS_SIGNED_IN";
    expect(updateIsSignedIn(false).toEqual({
        type: UPDATE_IS_SIGNED_IN,
        payload: false
    }))
})
test("expect payload to be false", () => {
    const UPDATE_IS_SIGNED_IN = "UPDATE_IS_SIGNED_IN";
    expect(updateIsSignedIn(false).toEqual({
        type: UPDATE_IS_SIGNED_IN,
        payload: false
    }))
})
test("expect payload to be false", () => {
    const UPDATE_IS_SIGNED_IN = "UPDATE_IS_SIGNED_IN";
    expect(updateIsSignedIn(false).toEqual({
        type: UPDATE_IS_SIGNED_IN,
        payload: false
    }))
})
test("expect payload to be false", () => {
    const UPDATE_IS_SIGNED_IN = "UPDATE_IS_SIGNED_IN";
    expect(updateIsSignedIn(false).toEqual({
        type: UPDATE_IS_SIGNED_IN,
        payload: false
    }))
})