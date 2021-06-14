import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('Test on authReducer', () => {

    test('should return default state', () => {
        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })
    })

    test('should authenticate and put the username', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Test'
            }
        }
        const state = authReducer({ logged: false }, action)

        expect(state).toEqual({
            logged: true,
            name: 'Test'
        })

    })

    test('should delete the username and logged put on false', () => {

        const action = {
            type: types.logout,
        }
        const state = authReducer({ logged: true, name: 'Test' }, action)

        expect(state).toEqual({
            logged: false
        })

    })

})
