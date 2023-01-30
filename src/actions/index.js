export const act_listCart=(value)=>{
    console.log(value);
    return{
        type: "LIST_CART",
        payload: value,
    } ;
};
export const act_addQuantity=(value)=>{
    return{
        type: "ADD_QUANTITY",
        payload: value,
    } ;
};
export const act_minusQuantity=(value)=>{
    return{
        type: "MINUS_QUANTITY",
        payload: value,
    } ;
};
export const act_delete=(value)=>{
    return{
        type: "DELETE_PRODUCTCART",
        payload: value,
    } ;
}
export const act_buy=(value)=>{
    return{
        type: "BUY",
        payload: value,
    }
}