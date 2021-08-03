import React from 'react'
import SearchBox from '../../components/SearchBox'
import Adds from '../../containers/Adds/Adds'
import Categories from '../../containers/Categories'
import Container from '../../containers/container'
import Premium from '../../containers/Premium/Premium'
import './Home.css'

const Home = () => {
    return (
        <>
        <Container>
            <SearchBox />
                <div className="home container">
                    <h1 className="text-center">Главные категории</h1>
                    <Categories />
                </div>
            <Premium />
            <Adds />
        </Container>
        </>
    )
}

export default Home
