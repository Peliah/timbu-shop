import React from 'react'
import Heroe from '../../component/HeroeSection/Heroe'
import Category from '../../component/CategorySection/Category'
import Footer from '../../component/Footer'

const HomePage = () => {
    return (
        <>
            <Heroe />
            <div className='max-w-[1440px] mx-auto sm:px-10 px-4 '>
                <Category />
            </div>
            <Footer />
        </>
    )
}

export default HomePage