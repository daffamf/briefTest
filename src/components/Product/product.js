import React, { useState } from 'react'
import Img1 from '../../img/1.jpeg'
import './product.css'

const product = () => {
    // const [noOfElement, setnoOfElemet] = useState(20)
    // const loadmore = () => {
    //     setnoOfElemet(noOfElement + noOfElement);

    // }

    return (
        <section className='py-4'>
            <h1 className='container'> Product List</h1>
            <hr />
            <div className='row justify-content-center'>
                <div className="col-11 col-md-6 col-lg-3 nx-0 mb-4">
                    <div className='card p-0 overflow-hidden h-100 shadow'>
                        <img src={Img1} className='card-img-top' />
                        <div className="card-body">
                            <h5 className='card-tittle'>Card Tittle</h5>
                            <p className='Card-text'>Card Desc</p>
                        </div>

                    </div>
                </div>

            </div>
           
            <button className='load'  onClick={() => ('')}>
                Lihat Lainnyah..
            </button>
          
            <hr />

        </section>
    )
}

export default product
