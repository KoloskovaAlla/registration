/**
 * @typedef {import('./types').InputTextProps} InputTextProps
 */

/**
 * @function InputText
 * @param {InputTextProps} props
 * @returns {JSX.Element}
 */

export const InputText = (props) => (
  <input
    type="text"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);
