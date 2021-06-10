import React from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'

export const SearchScreen = () => {
    const heroesFiltered = heroes

    const [formValues, handleInputChange] = useForm({
        searchText: ""
    })

    const { searchText } = formValues

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchText);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn btn-outline-primary btn-block m-1"
                            >
                                Search...
                        </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}
