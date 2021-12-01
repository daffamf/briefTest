
import React, { useState } from 'react'
import './product.css'

const Product = ({ items }) => {


    const [visable, setVisable] = useState(3)

    const showMoreItems = () => {
        setVisable((prevValue) => prevValue + 3)
    }


    console.log('ddd', items.data)
    

    return (
        <section className='py-4'>
            
            <h1 className='container'> Product List</h1>
            <hr />
            {/* {items.data.filter(item => ( */}

                <div className='row justify-content-center' key={''}>
                    <div className="col-11 col-md-6 col-lg-3 nx-0 mb-4" >
                        <div className='card p-0 overflow-hidden h-100 shadow'>
                            <img src={`https://assets.tokodistributor.com/product/8ca84f7ced38aba69595f4516bb89284`} className='card-img-top' />
                            <div className="card-body">
                                <h5 className='card-tittle'>{'BANDUNG'}</h5>
                                <p className='Card-text'>{'Rp.4200000'}</p>
                            </div>

                        </div>

                    </div>

                </div>
                
            {/* ))} */}

            <button className='load' onClick={showMoreItems}>
                Lihat Lainnyah..
            </button>

            <hr />

        </section>
    )
}

export default Product
