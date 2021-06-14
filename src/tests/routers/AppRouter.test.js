import { mount } from "enzyme"
import { AppRouter } from "../../routers/AppRouter"
import { AuthContext } from "../../auth/AuthContext"

describe('Test on <AppRouter/>', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should show login view if the user is not authenticated', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()

    })

    test(`should marvel's component if the user is authenticated`, () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Test'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        )

        expect(wrapper.find('.navbar').exists()).toBe(true)

    })


})
