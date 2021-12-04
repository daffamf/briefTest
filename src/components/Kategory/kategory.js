import React from 'react';
import './kategory.css'




function KategoryComponent({ items }) {

    return (
        <div>
            {items
                ? items.data.map((item) => (
                    <lu>
                        <div className='span' key={item.category_id}>
                            <img className='img' src={item.icon} alt="" />
                            {item.category_name}
                        </div>
                    </lu>
                ))
                : "loading..."
            }


        </div>

    );
}
export default KategoryComponent