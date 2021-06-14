import React from 'react'

import { AuthContext } from "../../auth/AuthContext"
import { mount } from "enzyme"
import { DashboardRoutes } from '../../routers/DashboardRoutes'
import { MemoryRouter } from 'react-router-dom'

describe('Tests on <DahsboardRoutes />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false, 
            name: 'Test'
        }
    }

    test('should show correctly', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Test')

    })

})
