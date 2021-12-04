import React, { useState, useEffect } from 'react'
import Components from '../components/Product/product'
import axios from 'axios'

const Product = () => {
    const [datas, setDatas] = useState()


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/product-recommendation?page=1`)
            console.log('product', result.data)
            setDatas(result.data)
        }
        fetchItems()
    }, [])

    return (
        <div>
            <Components datas={datas} />
        </div>
    )
}

export default Product
