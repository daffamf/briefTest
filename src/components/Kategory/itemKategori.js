import React from 'react';

const ItemKategori = (props) => {
    return (
        <div>
            <div className='span'>
                <img className='img' src={props.img} alt="" />
                {props.desc}
            </div>
        </div>
    )
}

export default ItemKategori