import React from 'react'
import "./CardProduct.css"

function CardProduct({ cardImg, cardTitle, cardButton, cardPrice }) {
    return (
        <div className='card'>
            <div>
                <img className='card-img' src={cardImg} alt="card-img" />
            </div>
            <div className='card-container-description'>
                <h3 className='card-title'>{cardTitle}</h3>
                <button className='card-button'>{cardButton}</button>
            </div>
            <span className='card-price'>{cardPrice}</span>
        </div>
    )
}

export default CardProduct
