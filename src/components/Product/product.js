
import React, { useState } from 'react'
import './product.css'
import Itemcard from './itemCard'


function Product({ datas,}) {

    const [load, setload] = useState(5)

    const loadMore = () => {
        setload((prevvalue) => prevvalue + 10)
    }
   

    return (
        <div>
            <h1 className=''> Product List</h1>
            <hr />
           
            {datas && datas.data.slice(0, load).map((item, index) => {
                return (
                    <Itemcard
                        img={item.image_uri}
                        produk={item.mainmenu_name}
                        price={item.normal_price}
                        desc={item.product_name}
                        lokasi={item.location}
                        key={index} />
                )

            })}
          
            <button className='load' onClick={loadMore}>
                Lihat Lainnyah..
            </button>
            <hr />
        </div>

    )
}

export default Product
