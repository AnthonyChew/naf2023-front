/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
import roundTo from '../utils/RoundingOff';

const initState = {
  addedProducts: [{"_id":"63981c3eb0bbbfdcb97e7048","name":"Kodak ColorPlus 200 - 1 roll","attribute1":"Exposures","attribute2":"","canCollect":false,"canDeliver":false,"category":"Others","colours":["36 Exposures"],"isPreOrder":false,"price":8.5,"sizes":[],"quantity":[[2]],"leadTime":99,"date_uploaded":"2022-02-15T03:25:56+00:00","vendorId":"61ec64a2f69f4991768c6ba9","vendorSurcharge":0,"vendorName":"$£an Film Corner","additionalPurchases":[],"image":"https://d2godzlxew2yaw.cloudfront.net/ColorPlus%20200%20135-1643695316640.jpg","stock":[[99]],"size":null,"colour":null,"variations":[{"_id":"63981c3eb0bbbfdcb97e7048","name":"Kodak ColorPlus 200 - 1 roll","attribute1":"Exposures","attribute2":"","canCollect":false,"canDeliver":false,"category":"Others","colours":["36 Exposures"],"isPreOrder":false,"price":8.5,"sizes":[],"quantity":2,"leadTime":99,"date_uploaded":"2022-02-15T03:25:56+00:00","vendorId":"61ec64a2f69f4991768c6ba9","vendorSurcharge":0,"vendorName":"$£an Film Corner","additionalPurchases":[],"image":"https://d2godzlxew2yaw.cloudfront.net/ColorPlus%20200%20135-1643695316640.jpg","stock":[[99]],"size":null,"colour":"36 Exposures"}],"totalQty":2},{"_id":"63981f78b0bbbfdcb97e704c","name":"Lavendar Rain Handmade Earrings","attribute1":"","attribute2":"","canCollect":false,"canDeliver":true,"category":"Accessories","colours":[],"isPreOrder":true,"price":9.8,"sizes":[],"quantity":[[2]],"leadTime":16,"date_uploaded":"2022-02-08T15:50:02+00:00","vendorId":"61f789bc787b1b1902cb41af","vendorSurcharge":1,"vendorName":"The Guy That Makes Jewelry ","additionalPurchases":[],"image":"https://d2godzlxew2yaw.cloudfront.net/IMG_2311-1644334866244.JPG","stock":[[99]],"size":null,"colour":null,"variations":[{"_id":"63981f78b0bbbfdcb97e704c","name":"Lavendar Rain Handmade Earrings","attribute1":"","attribute2":"","canCollect":false,"canDeliver":true,"category":"Accessories","colours":[],"isPreOrder":true,"price":9.8,"sizes":[],"quantity":2,"leadTime":16,"date_uploaded":"2022-02-08T15:50:02+00:00","vendorId":"61f789bc787b1b1902cb41af","vendorSurcharge":1,"vendorName":"The Guy That Makes Jewelry ","additionalPurchases":[],"image":"https://d2godzlxew2yaw.cloudfront.net/IMG_2311-1644334866244.JPG","stock":[[99]],"size":null,"colour":null}],"totalQty":2}],
  total: 0,
};

export const addProductToCart = (product) => async (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    data: product,
  });
};

export const removeProductFromCart = (_id, size, colour) => async (
  dispatch
) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    data: {
      _id,
      size,
      colour,
    },
  });
};

export const changeQtyInCart = (product, type, stock) => async (dispatch) => {
  dispatch({
    type: 'CHANGE_QTY_FROM_CART',
    data: {
      product,
      type,
      stock,
    },
  });
};

export const resetCart = () => async (dispatch) => {
  dispatch({
    type: 'RESET',
  });
};

const cartReducer = (state = initState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'ADD_TO_CART': {
      const addedProduct = action.data;
      // console.log('Added product: ' + addedProduct);
      const newTotal = state.total + addedProduct.price * addedProduct.quantity;
      const itemExists = state.addedProducts.find(
        (product) => addedProduct._id === product._id
      );
      if (itemExists) {
        let row = 0;
        let col = 0;
        if (addedProduct.colours.length !== 0) {
          row = addedProduct.colours.indexOf(addedProduct.colour);
        }
        if (addedProduct.sizes.length !== 0) {
          col = addedProduct.sizes.indexOf(addedProduct.size);
        }
        // console.log(itemExists);
        // console.log(itemExists.quantity[row][col]);
        // console.log(addedProduct.stock[row][col]);
        // console.log(addedProduct.quantity);
        if (
          itemExists.quantity[row][col] + addedProduct.quantity <=
          addedProduct.stock[row][col]
        ) {
          itemExists.quantity[row][col] += addedProduct.quantity;
          itemExists.totalQty += addedProduct.quantity;
        } else {
          alert('Insufficient stock. Check your cart.');
          return state;
        }
        // console.log(
        //   ` new added product (exists) ${JSON.stringify(itemExists)}`
        // );
        return {
          ...state,
          addedProducts: state.addedProducts.map((product) => {
            if (product._id !== addedProduct._id) {
              return product;
            } else {
              // updates the variation in quantity FIXME: get r_id of this when change to using the table?
              const { variations } = product;
              const varExists = variations.find(
                (pdt) =>
                  pdt.colour === addedProduct.colour &&
                  pdt.size === addedProduct.size
              );
              if (varExists) {
                product.variations = variations.map((pdt) => {
                  if (
                    pdt.colour === addedProduct.colour &&
                    pdt.size === addedProduct.size
                  ) {
                    pdt.quantity += addedProduct.quantity;
                  }
                  return pdt;
                });
              } else {
                product.variations = [...variations, addedProduct];
              }
              return product;
            }
          }),
          total: roundTo(newTotal),
        };
      }
      //Does not exist
      let newProduct = {};
      // create the 2d matrix
      let quantity;
      if (addedProduct.colours.length !== 0) {
        quantity = [];
        addedProduct.colours.forEach((colour, i) => {
          quantity.push([]);
          if (addedProduct.sizes.length !== 0) {
            addedProduct.sizes.forEach((size) => {
              if (
                colour === addedProduct.colour &&
                addedProduct.size === size
              ) {
                quantity[i].push(addedProduct.quantity);
              } else {
                quantity[i].push(0);
              }
            });
          } else {
            if (colour === addedProduct.colour) {
              quantity[i].push(addedProduct.quantity);
            } else {
              quantity[i].push(0);
            }
          }
        });
      } else {
        quantity = [[]];
        if (addedProduct.sizes.length !== 0) {
          addedProduct.sizes.forEach((size, i) => {
            if (addedProduct.size === size) {
              quantity[0].push(addedProduct.quantity);
            } else {
              quantity[0].push(0);
            }
          });
        } else {
          quantity[0].push(addedProduct.quantity);
        }
      }
      newProduct = {
        ...addedProduct,
        variations: [addedProduct],
        quantity: quantity,
        totalQty: addedProduct.quantity,
        colour: null,
        size: null,
      };
      // console.log(` new added product ${JSON.stringify(newProduct)}`);
      return {
        ...state,
        addedProducts: [...state.addedProducts, newProduct],
        total: roundTo(newTotal),
      };
    }
    // Make this adjustable for diff variations
    case 'REMOVE_FROM_CART': {
      const { _id, colour, size } = action.data;
      // Find the product with _id
      const itemExists = state.addedProducts.find(
        (product) => _id === product._id
      );
      const { variations, colours, sizes, price } = itemExists;
      // Set quantity to 0
      let row = 0;
      let col = 0;
      if (colours.length !== 0) {
        row = colours.indexOf(colour);
      }
      if (sizes.length !== 0) {
        col = sizes.indexOf(size);
      }
      const qty = itemExists.quantity[row][col];
      itemExists.quantity[row][col] = 0;
      itemExists.totalQty -= qty;

      // Find the remainder variations
      const remainingVariations = variations.filter(
        (variation) => variation.colour !== colour || variation.size !== size
      );
      // Set variations to the remainders
      itemExists.variations = remainingVariations;

      let remainingProducts = state.addedProducts;
      // If no more variations, remove the product
      if (remainingVariations.length === 0) {
        remainingProducts = remainingProducts.filter(
          (product) => product._id !== _id
        );
      } else {
        //Else, replace the existing product with the changed product
        remainingProducts = remainingProducts.map((product) =>
          product._id !== _id ? product : itemExists
        );
      }
      const newTotal = state.total - price * qty;
      if (remainingProducts.length > 0) {
        return {
          ...state,
          addedProducts: remainingProducts,
          total: roundTo(newTotal),
        };
      } else {
        return initState;
      }
    }
    case 'CHANGE_QTY_FROM_CART': {
      const changeProduct = action.data.product;
      // console.log(changeProduct);
      const stock = action.data.stock;
      const changeType = action.data.type;
      const itemExists = state.addedProducts.find(
        (product) => changeProduct._id === product._id
      );
      const { variations, quantity } = itemExists;
      let row = 0;
      let col = 0;
      if (changeProduct.colours.length !== 0) {
        row = changeProduct.colours.indexOf(changeProduct.colour);
      }
      if (changeProduct.sizes.length !== 0) {
        col = changeProduct.sizes.indexOf(changeProduct.size);
      }
      let newTotal = roundTo(state.total);
      //FIXME remove variations if using table
      //console.log(stock);
      
      const newVariations = variations.map((pdt) => {
        if (
          pdt.colour === changeProduct.colour &&
          pdt.size === changeProduct.size
        ) {
          if (
            changeType === 'INCREASE' &&
            quantity[row][col] < stock[row][col]
          ) {
            quantity[row][col] += 1;
            pdt.quantity += 1;
            itemExists.totalQty += 1;
            newTotal = roundTo(state.total + pdt.price);
          } else if (changeType === 'DECREASE') {
            quantity[row][col] -= 1;
            pdt.quantity -= 1;
            itemExists.totalQty -= 1;
            newTotal = roundTo(state.total - pdt.price);
          }
        }
        return pdt;
      });
      let updateProduct = null;
      updateProduct = {
        ...itemExists,
        quantity,
        variations: newVariations,
      };
      const changedProducts = state.addedProducts.map((product) =>
        product._id !== changeProduct._id ? product : updateProduct
      );
      return {
        ...state,
        total: newTotal,
        addedProducts: changedProducts,
      };
    }
    case 'RESET':
      return initState;
    default:
      return state;
  }
};
export default cartReducer;
