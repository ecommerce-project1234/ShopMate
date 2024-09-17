import React, { useEffect, useState } from 'react'
import { Container, ItemCard } from '../components'



function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])


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

                {/* {products.map((product) => (
                    <div key={product.id} >
                        <ItemCard {...product} />
                    </div>
                ))} */}

                <div className="flex flex-wrap justify-center md:flex-1 lg:flex-4 xl:flex-4">
                    {products.map((product) => (
                        <div key={product.id} className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
                            <ItemCard {...product} />
                        </div>
                    ))}
                </div>

            </Container>
        </div>
    )
}

export default Home