import React, { useEffect, useState } from 'react'
import Components from '../components/Carousel/carousel'
import axios from 'axios'

const Carousel = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/utility/home/banner-web`)

            console.log(result.data)
            setItems(result.data)
        }
        fetchItems()


    }, [])

    return (
        <div>
            <Components items={items} />
        </div>
    )
}

export default Carousel

