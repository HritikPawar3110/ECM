import React from 'react'
import './Offers.css'
import exclusiveOfferModel from '../Assetes/Exclusive-offer-model.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BESTSELLERS PRODUCT</p>
            <button> Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusiveOfferModel} alt="" />
        </div>
    </div>
  )
}

export default Offers