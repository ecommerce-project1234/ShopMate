import React, { useState } from 'react'
import { Container, ItemCard } from '../components'



function Home() {
    return (
        <div className="w-full py-8">
            <Container>
                <div className='flex flex-wrap'>
                    <div className='w-full p-2'>
                        <h1 className='text-2xl font-bold pb-4'>Star Products</h1>
                    </div>
                </div>
            </Container>
            <Container>
                <div id="products" className='flex flex-wrap'>
                    <ItemCard length={12} />
                </div>
            </Container>
        </div>
    )
}

export default Home