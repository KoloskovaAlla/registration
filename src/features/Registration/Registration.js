import classes from './Registration.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRegistration } from 'shared/hooks';
import {
  TextField,
} from 'entity';

import {
  validateName,
  //добавить проверку фамилии
  validateTel,
  validateEmail,  
  classNames
} from 'shared/utils';

// import {
//   TextField,
//   SelectField,
// } from 'entity';

import {  
  Button,
} from 'shared/ui';


export const Registration = () => {
  const dispatch = useDispatch();
  const registrationState = useRegistration();

  useEffect(() => {
    dispatch(registrationState.registrationActions.getRegistration());
  }, [dispatch, registrationState.registrationActions.getRegistration]);
  

  const onNameChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setName(value));
    dispatch(registrationState.registrationActions.setIsValidName(validateName(value)));
  };

  const onSurnameChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setSurname(value));
    dispatch(registrationState.registrationActions.setIsValidName(validateName(value)));
  };

  const onTelChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setTel(value));
    dispatch(registrationState.registrationActions.setIsValidTel(validateTel(value)));
  };

  const onEmailChange = ({ target: { value } }) => {
    dispatch(registrationState.registrationActions.setEmail(value));
    dispatch(registrationState.registrationActions.setIsValidEmail(validateEmail(value)));
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
    isValidField: registrationState.isValidSurname,
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

    const handleFormSubmit = (event) => {
      event.preventDefault();

      // console.log(registrationState.isValidName)
      // console.log(registrationState.isValidName)
      // console.log(registrationState.isValidName)
      // console.log(registrationState.isValidName)

      const isRegistrationDataValid = registrationState.isValidName &&
      // registrationState.isValidSurname &&
      registrationState.isValidTel &&
      registrationState.isValidEmail;

      
      if (isRegistrationDataValid) {
        console.log('отправка');
        const registrationData = {        
          name: registrationState.name,
          surname: registrationState.surname,
          tel: registrationState.tel,
          email: registrationState.email,        
        };
        dispatch(registrationState?.registrationActions.sendRegistration(registrationData));
        dispatch(registrationState?.registrationActions.setIsDataSent(true));
      };
  };
  const { isDataSent } = useRegistration();
  useEffect(() => {
    console.log(isDataSent);
  }, [isDataSent]);

  const { isSubmitDisabled } = registrationState; 

  return (
    <div className={classes.body}>

      <h1 className={classes.title}>{registrationState.registrationData?.title?.content}</h1>

      <form
        className={classes.form}
        onSubmit={handleFormSubmit}
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
        
        <Button
          className={classes.submit}
          label='РЕГИСТРАЦИЯ'
          content={'text'}
          disabled={isSubmitDisabled}
        />
      </form>
    </div>
  );
};
