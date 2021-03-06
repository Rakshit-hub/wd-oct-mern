const productinitialState=[
    {id:1,name:'marker',price:15,description:'white board marker',available:true}
]
const productsReducer=(state=productinitialState,action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':{
            return [...state,action.payload]
        }
        case 'REMOVE_PRODUCT':{
            return state.filter(product=>product.id!=action.payload)
        }
        case 'MARK_AVAILABlE':{
            return state.map(product=>{
                if(product.id===action.payload){
                    return{...product,...{available:!product.available}}
                }else{
                    return{...product}
                }
            })
        }
        default:{
            return[...state]
        }
    }
}
export default productsReducer