import React, { useState,useEffect } from 'react'
import Components from '../components/Product/product'
import axios from 'axios'

const Product=()=> {
    const [items , setItems]=useState([])
   

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=1`)
            console.log('product',result.data)
            setItems(result.data)
        }
        fetchItems()
    },[])

    return (
        <div>
            <Components items={items} />
        </div>
    )
}

export default Product
