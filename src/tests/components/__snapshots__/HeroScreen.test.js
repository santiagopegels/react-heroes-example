import { mount } from "enzyme"
import { HeroScreen } from "../../../components/heroes/HeroScreen"
import { MemoryRouter, Route } from "react-router-dom"

describe('Tests on <HomeScreen />', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }

    test('should show the component redirect if there are no arguments in the URL', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen
                    history={history}
                />
            </MemoryRouter>
        )

        expect(wrapper.find('Redirect').exists()).toBe(true)
    })

    test('should show a Hero if exists', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={HeroScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('.row').exists()).toBe(true)
    })

    test('should return to previous screen with PUSH', () => {

        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route
                    path="/hero/:heroId"
                    component={() => <HeroScreen history={history} />}
                />
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')()
        expect(history.push).toHaveBeenCalledWith('/')
        expect(history.goBack).not.toHaveBeenCalled()

    })




})
