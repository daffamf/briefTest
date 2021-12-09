import React from 'react';

const ItemKategori = (props) => {
    return (
        <div>
            <div className="">
            <div className='span'>
                <img className='img' src={props.img} alt="" />
                {props.desc}
            </div>
        </div>
        </div>
    )
}

export default ItemKategori