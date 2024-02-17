import { useSelector } from 'react-redux';
import { useEffect } from 'react';


import { useDispatch } from 'react-redux';
import { registrationActions, sendRegistration, getRegistration, } from 'shared/reducers/registrationSlice';

/**
 * @typedef {import('./types').RegistrationState} RegistrationState
 */

/**
 * @function getState
 * @param {Object} store
 * @returns {Object}
 */
const getState = (store) => store.RegistrationReducer;

/**
 * @function useRegistration
 * @returns {RegistrationState}
 */

export const useRegistration = () => {
  const dispatch = useDispatch();
  const state = useSelector(getState);
  // const { isModalActive } = state;

  // useEffect(() => {
  //   localStorage.setItem('isModalActive', isModalActive);
  // }, [isModalActive]);

  // useEffect(() => {
  //   const isFormValid = state.isValidName &&
  //     state.isValidTel &&
  //     state.isValidEmail &&
  //     state.isValidConnection &&
  //     state.isChecked;
  //   dispatch(registrationActions.setIsSubmitDisabled(!isFormValid));
  // }, [dispatch, state]);

  Object.assign(registrationActions, { sendRegistration, getRegistration });

  return {
    ...state,
    registrationActions,
  };
};
