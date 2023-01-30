const initialState = {
  cartAr: [],
};
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_CART":
      const productInCart = state.cartAr.find(
        (index) => index.id === action.payload.id
      );
      if (!productInCart) {
        let newProduct = {
          ...action.payload,
          totalAmount: action.payload.price,
        };
        return {
          cartAr: [...state.cartAr, newProduct],
        };
        console.log(state.cartAr);
      } else {
        let newCart = state.cartAr;
        //Findindex trả về vị trí
        const objIndex = newCart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        if (newCart[objIndex].qty === undefined) {
          newCart[objIndex].qty = 2;
        } else {
          newCart[objIndex].qty = newCart[objIndex].qty + 1;
        }
        newCart[objIndex].totalAmount =
          newCart[objIndex].qty * newCart[objIndex].price;
        return { cartAr: [...newCart] };
      }
    case "ADD_QUANTITY":
      let array = state.cartAr;
      const addQuantityIndex = array.findIndex(
        (obj) => obj.id === action.payload
      );
      array[addQuantityIndex].qty = array[addQuantityIndex].qty + 1;
      array[addQuantityIndex].totalAmount =
      array[addQuantityIndex].qty * array[addQuantityIndex].price;
      return { cartAr: [...array]};
      case "MINUS_QUANTITY":
      let minus = state.cartAr;
      const minusQuantityIndex = minus.findIndex(
        (obj) => obj.id === action.payload
      );
      if (minus[minusQuantityIndex].qty !==1) {
        minus[minusQuantityIndex].qty = minus[minusQuantityIndex].qty - 1;
        minus[minusQuantityIndex].totalAmount =
        minus[minusQuantityIndex].qty * minus[minusQuantityIndex].price;
      } else{
        let checkConfirm=window.confirm("Bạn có muốn xóa sản phẩm này ko ?");
        if(checkConfirm){      
            minus.splice(minusQuantityIndex,1);
        }
      }
      return { cartAr: [...minus]};
      case "DELETE_PRODUCTCART":
      let arrDelete= state.cartAr;
      const deleteItem= arrDelete.findIndex(
        (obj) => obj.id === action.payload
      );
      let checkConfirm=window.confirm("Bạn có muốn xóa sản phẩm này ko ?");
      if(checkConfirm){
        arrDelete.splice(deleteItem,1);
      }
      return { cartAr: [...arrDelete]};
      case "BUY":
        let listCartBuy=action.payload;
        console.log(listCartBuy);
        return {cartAr: [...listCartBuy]};
    default:
      return state;
  }
};
export default cart;
