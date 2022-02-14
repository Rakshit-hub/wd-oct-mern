const cart=[]
function add2Cart(cart,item){
    const result=cart.find(function(cartItem){
        return cartItem==item.id
    })
    //if product id matches -result-will be the element in the  array
    //else result will be undefined

    if(result){
        result.quantity=result.quantity+item.quantity
    }else {
        cart.push(item)
    }
    return cart
}

console.log(cart)
console.log(add2Cart(cart,{id:1, name:'marker',price:10,quantity:1}))
console.log(add2Cart(cart,{id:2, name:'scale',price:5,quantity:1}))
console.log(add2Cart(cart,{id:1, name:'marker',price:10,quantity:1}))