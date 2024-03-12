import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div>
        <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="category">
            {props.category}
        </div>

        <div className="price">
        <div className="item-price-new">
            ${props.new_price}
        </div>
        <div className="item-price-old">
           ${props.old_price}
        </div>
        </div>
        
        <div className="stock">
           <p>Stock {props.stock} </p>
        </div>
        </div>
    </div>
  )
}

export default Item