import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Components from '../components/Kategory/kategory'

const Kategory = () => {

    const [items, setItems] = useState();

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios.get(`https://gardien.tokodistributor.co.id/api-web/v2/utility/home/box-category?with_staple=true`);
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

export default Kategory
