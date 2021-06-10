import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher'

export const HeroesList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <ul>
            {
                heroes.map( hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }
        </ul>
    )
}
