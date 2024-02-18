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

  useEffect(() => {
    dispatch(registrationState.registrationActions.getRegistration());
  }, [dispatch, registrationState.registrationActions.getRegistration]);

  useEffect(() => {
    console.log(registrationState);
  }, [dispatch, registrationState]);

  const onNameChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setName(value));
    // dispatch(registrationState.orderActions.setIsValidName(validateName(value)));
  };

  const onSurnameChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setSurname(value));
    // dispatch(registrationState.orderActions.setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setTel(value));
    // dispatch(registrationState.orderActions.setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setEmail(value));
    // dispatch(registrationState.orderActions.setIsValidEmail(validateEmail(value)));
  };

  const nameOptions = {
    value: registrationState.name,
    isValidField: registrationState.isValidName,
    onFieldChange: onNameChange,
    invalidMessage: registrationState.registrationData?.inputName.invalidMessage,
    type: registrationState.registrationData?.inputName.type,
    placeholder: registrationState.registrationData?.inputName.placeholder,
  };

  const surnameOptions = {
    value: registrationState.surname,
    isValidField: registrationState.isValidName,
    onFieldChange: onSurnameChange,
    invalidMessage: registrationState.registrationData?.inputSurname.invalidMessage,
    type: registrationState.registrationData?.inputSurname.type,
    placeholder: registrationState.registrationData?.inputSurname.placeholder,
  };

  const telOptions = {
    value: registrationState.tel,
    isValidField: registrationState.isValidTel,
    onFieldChange: onTelChange,
    invalidMessage: registrationState.registrationData?.inputTel.invalidMessage,
    type: registrationState.registrationData?.inputTel.type,
    placeholder: registrationState.registrationData?.inputTel.placeholder,
  };

  const emailOptions = {
    value: registrationState.email,
    isValidField: registrationState.isValidEmail,
    onFieldChange: onEmailChange,
    invalidMessage: registrationState.registrationData?.inputEmail.invalidMessage,
    type: registrationState.registrationData?.inputEmail.type,
    placeholder: registrationState.registrationData?.inputEmail.placeholder,
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

      <h1 className={classes.title}>{registrationState.registrationData?.title?.content}</h1>

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
