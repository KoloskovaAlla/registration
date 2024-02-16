import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import { useDispatch } from 'react-redux';
import { orderActions, sendOrder, getOrder, } from '../reducers/orderSlice';

/**
 * @typedef {import('./types').OrderState} OrderState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */
const getState = (store) => store.orderReducer;

/**
 * @function useOrder
 * @returns {OrderState}
 */

export const useOrder = () => {
  const dispatch = useDispatch();
  const state = useSelector(getState);
  const { isModalActive } = state;

  useEffect(() => {
    localStorage.setItem('isModalActive', isModalActive);
  }, [isModalActive]);

  useEffect(() => {
    const isFormValid = state.isValidName &&
      state.isValidTel &&
      state.isValidEmail &&
      state.isValidConnection &&
      state.isChecked;
    dispatch(orderActions.setIsSubmitDisabled(!isFormValid));
  }, [dispatch, state]);

  Object.assign(orderActions, { sendOrder, getOrder });

  return {
    ...state,
    orderActions,
  };
};
