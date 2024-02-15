import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';
import { mocData } from 'data/db';

/**
 * @typedef {import('./types').OrderFromAPI} OrderFromAPI
 * @typedef {import('./types').ThunkAPI} ThunkAPI
 */

/**
 * @function onGetOrder
 * @param {null} _
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<OrderFromAPI | string>}
 */

const onGetOrder = async (_, thunkAPI) => {
  try {
    const data = mocData;    
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.modal);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {any} */
const getOrder = createAsyncThunk(
  'order/getOrder',
  onGetOrder
);

/**
 * @typedef {import('./types').Order} Order
 */

/**
 * @function onSendOrder
 * @param {Order} order
 * @param {ThunkAPI} thunkAPI
 * @returns {Promise<boolean | string>}}
 */

const onSendOrder = async (order, thunkAPI) => {
  try {
    const endpoint = 'orders';
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });
    if (!response.ok) throw new Error('Failed to fetch');
    return thunkAPI.fulfillWithValue(response.ok);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {any} */
const sendOrder = createAsyncThunk(
  'order/sendOrder',
  onSendOrder
);

/**
 * @typedef {import('./types').OrderData} OrderData
 */

const initialState = {
  isModalActive: false,
  isLoading: false,
  /** @type {null | OrderData} */
  orderData: null,
  errorMessage: '',
  name: '',
  isValidName: true,
  tel: '',
  isValidTel: true,
  email: '',
  isValidEmail: true,
  connection: '',
  isValidConnection: true,
  isChecked: false,
  isSubmitDisabled: true,
  isSending: false,
  isOrderSended: false,
  isDataSent: false,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setIsModalActive: (state, { payload }) => {
      state.isModalActive = payload;
    },
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setIsValidName: (state, { payload }) => {
      state.isValidName = payload;
    },
    setTel: (state, { payload }) => {
      state.tel = payload;
    },
    setIsValidTel: (state, { payload }) => {
      state.isValidTel = payload;
    },
    setEmail: (state, { payload }) => {
      state.email = payload;
    },
    setIsValidEmail: (state, { payload }) => {
      state.isValidEmail = payload;
    },
    setConnection: (state, { payload }) => {
      state.connection = payload;
    },
    setIsValidConnection: (state, { payload }) => {
      state.isValidConnection = payload;
    },
    setIsChecked: (state, { payload }) => {
      state.isChecked = payload;
    },
    setIsSubmitDisabled: (state, { payload }) => {
      state.isSubmitDisabled = payload;
    },
    setIsDataSent: (state, { payload }) => {
      state.isDataSent = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
        state.orderData = null;
        state.errorMessage = '';
      })
      .addCase(getOrder.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.orderData = payload;
        state.errorMessage = '';
      })
      .addCase(getOrder.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.orderData = {};
        state.errorMessage = payload;
      })
      .addCase(sendOrder.pending, (state) => {
        state.isSending = true;
        state.isOrderSended = false;
        state.errorMessage = '';
      })
      .addCase(sendOrder.fulfilled, (state) => {
        state.isSending = false;
        state.isOrderSended = true;
        state.errorMessage = '';
      })
      .addCase(sendOrder.rejected, (state, { payload }) => {
        state.isSending = false;
        state.isOrderSended = false;
        state.errorMessage = payload;
      });
  }

});

export { getOrder };
export { sendOrder };
export const { reducer: orderReducer } = orderSlice;
export const orderActions = orderSlice.actions;
