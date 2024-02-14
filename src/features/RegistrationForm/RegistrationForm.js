import classes from './Form.module.scss';

import {
  TextField,
  SelectField,
} from 'entity';

import {
  Checkbox,
  Button,
} from 'shared/ui';


export const Form = ({ formOptions }) => {
  const {
    nameOptions,
    telOptions,
    emailOptions,
    connectOptions,
    checkboxOptions,
    submitOptions,
  } = formOptions;

  const {
    handleFormSubmit,
    isSubmitDisabled,
  } = submitOptions;

  return (
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
        label='submit'
        content={'text'}
        disabled={isSubmitDisabled}
      />
    </form>
  );
};
