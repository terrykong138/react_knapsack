import React from 'react'

const CartItem = ({imageSourceP,  itemTitleP, themeP, priceP, itemCountP,itemsSumP}) => {
  return (
    <div className='card flex-row-between'>
        <div className="box flex-row">
            <img src={imageSourceP} alt={itemTitleP}></img>
            <div className="box flex-column">
                <h3>{itemTitleP}</h3>
                <h4>{themeP}</h4>
                <h3>${priceP}</h3>
            </div>

        </div>
        <div className='box flex-row'>
            <div className='box flex-row'>
                <button>-</button>
                <a>{itemCountP}</a>
                <button>+</button>
            </div>
            <div className='box flex-column'>
                <h3>${itemsSumP}</h3>
                <button className='btn-small'>Remove</button>
            </div>
            
        </div>
    </div>
  )
}

export default CartItem