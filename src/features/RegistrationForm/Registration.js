import classes from './Registration.module.scss';
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

  const onNameChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setName(value));
    // dispatch(orderState.orderActions.setIsValidName(validateName(value)));
  };

  const onSurnameChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setSurname(value));
    // dispatch(orderState.orderActions.setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setTel(value));
    // dispatch(orderState.orderActions.setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target: { value } }) => {
    dispatch(orderState.orderActions.setEmail(value));
    // dispatch(orderState.orderActions.setIsValidEmail(validateEmail(value)));
  };

  const nameOptions = {
    value: orderState.name,
    isValidField: orderState.isValidName,
    onFieldChange: onNameChange,
    invalidMessage: orderState.orderData?.inputName.invalidMessage,
    type: orderState.orderData?.inputName.type,
    placeholder: orderState.orderData?.inputName.placeholder,
  };


  const surnameOptions = {
    value: orderState.surname,
    isValidField: orderState.isValidName,
    onFieldChange: onSurnameChange,
    invalidMessage: orderState.orderData?.inputSurname.invalidMessage,
    type: orderState.orderData?.inputSurname.type,
    placeholder: orderState.orderData?.inputSurname.placeholder,
  };

  const telOptions = {
    value: orderState.tel,
    isValidField: orderState.isValidTel,
    onFieldChange: onTelChange,
    invalidMessage: orderState.orderData?.inputTel.invalidMessage,
    type: orderState.orderData?.inputTel.type,
    placeholder: orderState.orderData?.inputTel.placeholder,
  };

  const emailOptions = {
    value: orderState.email,
    isValidField: orderState.isValidEmail,
    onFieldChange: onEmailChange,
    invalidMessage: orderState.orderData?.inputEmail.invalidMessage,
    type: orderState.orderData?.inputEmail.type,
    placeholder: orderState.orderData?.inputEmail.placeholder,
  };

  const formOptions = {
    nameOptions,
    surnameOptions,
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
    <div className={classes.body}>

      <h1 className={classes.title}>{orderState.orderData?.title?.content}</h1>

      <form
        className={classes.form}
      // onSubmit={handleFormSubmit}
      >
        {nameOptions && (
          <TextField
            className={classes.name}
            options={nameOptions}
          />
        )}
        {nameOptions && (
          <TextField
            className={classes.name}
            options={surnameOptions}
          />
        )}
        {emailOptions && (
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
        {/* 
        <Button
          className={classes.submit}
          label='submit'
          content={'text'}
          disabled={isSubmitDisabled}
        /> */}
      </form>
    </div>
  );
};
