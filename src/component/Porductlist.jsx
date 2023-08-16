import React from 'react'

const Porductlist = (props) => {
    const {productName,productPrice} =props;
  return (
    <div>
        <h1>{productName}</h1>
        <h1>{productPrice}</h1>
    </div>
  )
}

export default Porductlist