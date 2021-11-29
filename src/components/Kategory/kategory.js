import * as React from 'react';
import './kategory.css'
import Img1 from '../../img/1.jpeg'


export default function BoxComponent() {
    return (
        <div className='container' >
            <div className='span' >
                <img className='img' src={Img1} alt="otomotif" />
                otomotif
            </div>
        </div>

    );
}