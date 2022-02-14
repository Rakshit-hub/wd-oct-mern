export const addProduct=(n)=>{
    return {type:'ADD_PRODUCT',payload:n}
}
export const removeProduct=(n)=>{
    return {type:'REMOVE_PRODUCT',payload:n}
}
export const markavailable=(n)=>{
    return{type:'MARK_AVAILABLE',payload:n}
}