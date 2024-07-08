import React from 'react'
import Heroe from '../../component/HeroeSection/Heroe'
import Category from '../../component/CategorySection/Category'
import Footer from '../../component/Footer'

const HomePage = () => {
    return (
        <>
            <Heroe />
            <div className='px-28'>
                <Category />
            </div>
            <Footer />
        </>
    )
}

export default HomePage