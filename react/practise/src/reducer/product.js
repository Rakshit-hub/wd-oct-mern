const productInitialState=[{
    id:1,name:'marker',price:'15',description:'white-board-marker',available:true
}]
const productReducer=(state=productInitialState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':{
            return[...state,action.payload]
        }
        case 'REMOVE_PRODUCT':{
           return state.filter(product=>
               product.id!=action.payload
           )
        }
        default:{
            return [...state]
        }
    }

}
export default productReducer