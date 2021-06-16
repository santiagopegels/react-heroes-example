import { mount } from "enzyme"
import { Navbar } from "../../components/ui/NavBar"
import { AuthContext } from "../../auth/AuthContext"
import { MemoryRouter, Router } from "react-router-dom"
import { types } from "../../types/types"

describe('Test on <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Test'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name)

    })

    test('should call logout and use the history', () => {
        wrapper.find('button').prop('onClick')()

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })

        expect(historyMock.replace).toHaveBeenCalledWith('/login')
    })



})
