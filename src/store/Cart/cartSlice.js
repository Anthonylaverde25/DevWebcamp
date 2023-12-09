import { ClassSharp } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
    totalItems: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const { id, nombre, descripcion, precio, tecnologia } = action.payload;

      const indexProduct = state.products.findIndex(
        (product) => product.id === id
      );

      if (indexProduct !== -1) {
        state.products[indexProduct].cantidad++;
        state.products[indexProduct].totalProducto =
          state.products[indexProduct].cantidad * precio;
      } else {
        state.products.push({
          id,
          nombre,
          precio,
          descripcion,
          cantidad: 1,
          totalProducto: precio,
          tecnologia,
        });
      }

      state.total += action.payload.precio;
      state.totalItems++;
    },

    removeItem: (state, { payload }) => {
      const productID = payload;
      const removedProduct = state.products.find(
        (product) => product.id === productID
      );

      if (removedProduct) {
        state.total -= removedProduct.totalProducto;
        state.totalItems -= removedProduct.cantidad;
        state.products = state.products.filter(
          (product) => product.id !== productID
        );
      }
    },

    clearCart: (state) => {
      state.total = 0;
      state.totalItems = 0;
      state.products = [];
    },

    increaseProduct: (state, action) => {
      const productID = action.payload;

      const product = state.products.find(
        (product) => product.id === productID
      );

      if (product) {
        product.cantidad++;
        state.total += product.precio;
        state.totalItems++;
      } else {
        console.log(`el producto no se encuentra en el carrito`);
      }
    },

    decreaseProduct: (state, action) => {
      const productID = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === productID
      );

      if (index !== -1) {
        const product = state.products[index];

        if (product.cantidad === 1) {
          state.totalItems--;
          state.total -= product.precio;
          state.products.splice(index, 1);
        } else if (product.cantidad > 1) {
          product.cantidad--;
          state.totalItems--;
          state.total -= product.precio;
          product.totalProducto = product.cantidad * product.precio;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItem,
  removeItem,
  clearCart,
  increaseProduct,
  decreaseProduct,
  products,
} = cartSlice.actions;
