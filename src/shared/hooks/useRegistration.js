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
const getState = (store) => store.registrationReducer;

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

  useEffect(() => {
    const isRegistrationDataValid = state.isValidName &&
      state.isValidSurname &&
      state.isValidEmail &&
      state.isValidTel;
    dispatch(registrationActions.setIsSubmitDisabled(!isRegistrationDataValid));
  }, [dispatch, state]);


  Object.assign(registrationActions, { sendRegistration, getRegistration });

  return {
    ...state,
    registrationActions,
  };
};
