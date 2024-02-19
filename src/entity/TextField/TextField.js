import { useState } from 'react';
import { InputText } from 'shared/ui';

/**
 * @typedef {import('./types').TextFieldProps} TextFieldProps
 */

/**
 * @function TextField
 * @param {TextFieldProps} props
 * @returns {null | JSX.Element}
 */

export const TextField = ({ className, options }) => {

  const {
    value,
    isValidField,
    onFieldChange,
    invalidMessage,
    placeholder,
    hasUserTyped,
  } = options;

  return (
    <label className={className}>
      <InputText
        placeholder={placeholder}
        value={value}
        onChange={onFieldChange}
      />

      {hasUserTyped && !isValidField && <span>{invalidMessage}</span>}
    </label>
  );
};
