import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=> category === item.category);
            products.Copy = productsCopy.filter((item)=> subCategory === item.subCategory);

            setRelated(productsCopy.slice(0, 5));
        }
    })

  return (
    <div>
      
    </div>
  )
}

export default RelatedProducts
