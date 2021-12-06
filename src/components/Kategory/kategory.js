import React from 'react';
import './kategory.css'
import ItemKategori from './itemKategori';




function KategoryComponent({ items }) {

    return (
        <div>
              <h1 className=''> Kategory List</h1>
            <hr />
            {items
                ? items.data.map((item) => (
                  <ItemKategori img={item.icon} desc={item.category_name} />
                  
                ))
                : "loading..."
            }


        </div>

    );
}
export default KategoryComponent