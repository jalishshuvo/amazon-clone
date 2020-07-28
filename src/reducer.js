// Here all the data layer logic goes
export const initialState = {
  basket: [],
  user: null,
};
// basket is an empty array

// defining and exporting function for calculating subtotal
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // action can be add or remove item from basket
  // swith chek aganst the bunch of cases
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for adding item to basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exists in basket,remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove produt (id: ${action.id}) as its not vaild`);
      }
      // colse.warn is for red consolelog no need
      return { ...state, basket: newBasket };
    default:
      // if u dont know what to do then return the state
      return state;
  }
};

export default reducer;
// this allows us to use reducer outside
