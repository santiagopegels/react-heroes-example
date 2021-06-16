import { mount } from "enzyme"
import { HeroScreen } from "../../../components/heroes/HeroScreen"
import { MemoryRouter } from "react-router-dom"

describe('Tests on <HomeScreen />', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }


    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen
                history={history}
            />
        </MemoryRouter>
    )

    test('should show the component redirect if there are no arguments in the URL', () => {

        expect(wrapper.find('Redirect').exists()).toBe(true)
    })


})
