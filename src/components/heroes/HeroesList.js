import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeoresByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
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
