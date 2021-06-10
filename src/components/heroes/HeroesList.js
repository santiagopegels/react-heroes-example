import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="card-columns">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    >
                    </HeroCard>
                ))
            }
        </div>
    )
}
