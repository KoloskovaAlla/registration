import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'shared/constants/api';
import { mocData } from 'data/db';

const onGetRegistration = async (_, thunkAPI) => {
  try {
    const data = mocData;
    if (data.message) throw new Error(data.message);
    return thunkAPI.fulfillWithValue(data.form);
  } catch (error) {
    const /** @type {*} */ { message } = error;
    console.error(message);
    return thunkAPI.rejectWithValue(message);
  }
};

/** @type {any} */
const getRegistration = createAsyncThunk(
  'registration/getRegistration',
  onGetRegistration,
);

const onSendRegistration = async (registration, thunkAPI) => {
  try {
    const endpoint = 'clients';
    const url = `${API_BASE_URL}/${endpoint}/.json`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registration)
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
const sendRegistration = createAsyncThunk(
  'registration/sendRegistration',
  onSendRegistration,
);

/**
 * @typedef {import('./types').RegistrationData} RegistrationData
 */

const initialState = {
  isModalActive: false,
  isLoading: false,
  /** @type {null | RegistrationData} */
  registrationData: null,
  errorMessage: '',
  name: '',
  isValidName: false,
  surname: '',
  isValidSurname: false,
  tel: '',
  isValidTel: false,
  email: '',
  isValidEmail: false,
  isSubmitDisabled: true,
  isSending: false,
  isRegistrationSended: false,
  isDataSent: false,
};

export const registrationSlice = createSlice({
  name: 'registration',
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
    setSurname: (state, { payload }) => {
      state.surname = payload;
    },
    setIsValidSurname: (state, { payload }) => {
      state.isValidSurname = payload;
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
    setIsSubmitDisabled: (state, { payload }) => {
      state.isSubmitDisabled = payload;
    },
    setIsDataSent: (state, { payload }) => {
      state.isDataSent = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRegistration.pending, (state) => {
        state.isLoading = true;
        state.registrationData = null;
        state.errorMessage = '';
      })
      .addCase(getRegistration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.registrationData = payload;
        state.errorMessage = '';
      })
      .addCase(getRegistration.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.registrationData = {};
        state.errorMessage = payload;
      })
      .addCase(sendRegistration.pending, (state) => {
        state.isSending = true;
        state.isRegistrationSended = false;
        state.errorMessage = '';
      })
      .addCase(sendRegistration.fulfilled, (state) => {
        state.isSending = false;
        state.isRegistrationSended = true;
        state.errorMessage = '';
      })
      .addCase(sendRegistration.rejected, (state, { payload }) => {
        state.isSending = false;
        state.isRegistrationSended = false;
        state.errorMessage = payload;
      });
  }

});

export { getRegistration };
export { sendRegistration };
export const { reducer: registrationReducer } = registrationSlice;
export const registrationActions = registrationSlice.actions;
