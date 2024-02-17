import classes from './Registration.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRegistration } from 'shared/hooks';
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


export const Registration = () => {
  const dispatch = useDispatch();
  const registrationState = useRegistration();

  // useEffect(() => {
  //   dispatch(registrationState.orderActions.getRegistration());
  // }, [dispatch, registrationState.orderActions.getRegistration]);

  useEffect(() => {
    console.log(registrationState.orderActions)
  }, []);

  useEffect(() => {
    console.log(registrationState?.orderData);
  }, [dispatch, registrationState]);

  const onNameChange = ({ target: { value } }) => {
    dispatch(registrationState.orderActions.setName(value));
    // dispatch(registrationState.orderActions.setIsValidName(validateName(value)));
  };

  const onSurnameChange = ({ target: { value } }) => {
    dispatch(registrationState.orderActions.setSurname(value));
    // dispatch(registrationState.orderActions.setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target: { value } }) => {
    dispatch(registrationState.orderActions.setTel(value));
    // dispatch(registrationState.orderActions.setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target: { value } }) => {
    dispatch(registrationState.orderActions.setEmail(value));
    // dispatch(registrationState.orderActions.setIsValidEmail(validateEmail(value)));
  };

  const nameOptions = {
    value: registrationState.name,
    isValidField: registrationState.isValidName,
    onFieldChange: onNameChange,
    invalidMessage: registrationState.orderData?.inputName.invalidMessage,
    type: registrationState.orderData?.inputName.type,
    placeholder: registrationState.orderData?.inputName.placeholder,
  };

  const surnameOptions = {
    value: registrationState.surname,
    isValidField: registrationState.isValidName,
    onFieldChange: onSurnameChange,
    invalidMessage: registrationState.orderData?.inputSurname.invalidMessage,
    type: registrationState.orderData?.inputSurname.type,
    placeholder: registrationState.orderData?.inputSurname.placeholder,
  };

  const telOptions = {
    value: registrationState.tel,
    isValidField: registrationState.isValidTel,
    onFieldChange: onTelChange,
    invalidMessage: registrationState.orderData?.inputTel.invalidMessage,
    type: registrationState.orderData?.inputTel.type,
    placeholder: registrationState.orderData?.inputTel.placeholder,
  };

  const emailOptions = {
    value: registrationState.email,
    isValidField: registrationState.isValidEmail,
    onFieldChange: onEmailChange,
    invalidMessage: registrationState.orderData?.inputEmail.invalidMessage,
    type: registrationState.orderData?.inputEmail.type,
    placeholder: registrationState.orderData?.inputEmail.placeholder,
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

      <h1 className={classes.title}>{registrationState.orderData?.title?.content}</h1>

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
