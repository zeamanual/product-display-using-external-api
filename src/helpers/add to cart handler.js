import React from 'react'

function addToCartHandler(cartContextData,data) {
    let alreadyAdded=false
    let {pId,img,title,price}=data

    cartContextData.cartData.products.forEach(product=>{
        if(product.id==pId){
            alreadyAdded=true
        }
    })
    console.log('allreeeddy added',alreadyAdded)
    if(!alreadyAdded){
        let newCount = cartContextData.cartData.count+1
        cartContextData.cartData.products.push({
            id:pId,
            img,
            title,
            price
        })
        let newProductsList = cartContextData.cartData.products
        cartContextData.setCartData(
            {
                count:newCount,
                products:newProductsList
            }
        )
    }else{

    }


}

export default addToCartHandler