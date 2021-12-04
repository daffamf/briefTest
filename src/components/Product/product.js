
import React from 'react'
import './product.css'

function Product({ datas }) {
    return (
        <div>
            <h1 className=''> Product List</h1>
            <hr />
            {datas && datas.data.map(item =>
                <div class="container" key={item.product_code}>
                    <div class="card">
                        <div class="card-header">
                            <img src={item.image_uri} alt="rover" />
                        </div>
                        <div class="card-body">
                            <span class="tag tag-teal">{item.sub_menucategory_name}</span>
                            {item.product_name}
                            <h5 className="harga">
                                RP.{item.normal_price}
                            </h5>
                            <h5 >{item.location}</h5>

                        </div>
                    </div>
                </div>
            )}
            <button className='load'>
                Lihat Lainnyah..
            </button>
            <hr />
        </div>

    )
}

export default Product
