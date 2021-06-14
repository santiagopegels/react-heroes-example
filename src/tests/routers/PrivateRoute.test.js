import { mount } from "enzyme"
import { PrivateRoute } from "../../routers/PrivateRoute"
import { MemoryRouter } from "react-router-dom"



describe('Tests on <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn()

    test('should show the component if is authenticated and save into localstorage', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={true}
                    component={() => <span>Test</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(true)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

    })

    test('should block the component if is not authenticated', () => {

        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuthenticated={false}
                    component={() => <span>Test</span>}
                    {...props}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('span').exists()).toBe(false)
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')

    })


})
