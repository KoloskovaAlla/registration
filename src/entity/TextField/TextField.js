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
    placeholder
  } = options;

  return (
    <label className={className}>
      <InputText
        placeholder={placeholder}
        value={value}
        onChange={onFieldChange}
      />

      {!isValidField && <span>{invalidMessage}</span>}
    </label>
  );
};
