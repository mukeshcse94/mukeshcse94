import React from 'react'
import {Link} from 'react-router-dom'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div>
            
                    
        
        <div className="product_card">
            <Link id="btn_view" to={`/detail/${product._id}`}>
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <p>{product.description}</p>
            </div>
            </Link>
            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
        </div>
    )
}

export default ProductItem
