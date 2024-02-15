import classes from './RegistrationForm.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useOrder } from 'shared/hooks';
import {
  TextField,
  
} from 'entity';

// import {
//   TextField,
//   SelectField,
// } from 'entity';

// import {
//   Checkbox,
//   Button,
// } from 'shared/ui';


export const RegistrationForm = () => {

  const dispatch = useDispatch();
  const orderState = useOrder();

  useEffect(() => {
    dispatch(orderState.orderActions.getOrder());
  }, [dispatch, orderState.orderActions.getOrder]);

  useEffect(() => {
    console.log(orderState?.orderData);
  }, [dispatch, orderState]);


  const nameOptions = {
    value: orderState.name,
    isValidField: orderState.isValidName,
    // onFieldChange: onNameChange,
    // invalidMessage: orderState.orderData?.inputName.invalidMessage,
    // type: orderState.orderData?.inputName.type,
    // placeholder: orderState.orderData?.inputName.placeholder,
  };

  const telOptions = {
    value: orderState.tel,
    isValidField: orderState.isValidTel,
    // onFieldChange: onTelChange,
    invalidMessage: orderState.orderData?.inputTel.invalidMessage,
    type: orderState.orderData?.inputTel.type,
    placeholder: orderState.orderData?.inputTel.placeholder,
  };

  const emailOptions = {
    value: orderState.email,
    isValidField: orderState.isValidEmail,
    // onFieldChange: onEmailChange,
    invalidMessage: orderState.orderData?.inputEmail.invalidMessage,
    type: orderState.orderData?.inputEmail.type,
    placeholder: orderState.orderData?.inputEmail.placeholder,
  };

  const formOptions = {
    nameOptions,
    telOptions,
    emailOptions,
  };

  // const {
  //   nameOptions,
  //   telOptions,
  //   emailOptions,
  //   connectOptions,
  //   checkboxOptions,
  //   submitOptions,
  // } = formOptions;

  // const {
  //   handleFormSubmit,
  //   isSubmitDisabled,
  // } = submitOptions;

  return (
    <form
    // className={classes.form}      
    // onSubmit={handleFormSubmit}
    >
      {nameOptions && (
        <TextField
          className={classes.name}
          options={nameOptions}
        />
      )}
      {/* {emailOptions && (
        <TextField
          className={classes.email}
          options={emailOptions}
        />
      )}
      {telOptions && (
        <TextField
          className={classes.tel}
          options={telOptions}
        />
      )}


      <Button
        className={classes.submit}
        label='submit'
        content={'text'}
        disabled={isSubmitDisabled}
      /> */}
    </form>
  );
};
