import React from 'react';


const Itemcard = (props) => {
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card">
                <div class="card-header">
                    <img src={props.img} alt="rover" />
                </div>
                <div class="card-body">
                    <span class="tag tag-teal">{props.produk}</span>
                    {props.desc}
                    <h5 className="harga">
                        RP.{props.price}
                    </h5>
                    <h5 >{props.lokasi}</h5>

                </div>
            </div>

        </div>

    )
}

export default Itemcard