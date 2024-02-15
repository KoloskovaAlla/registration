import { useDispatch } from 'react-redux';

/**
 * @typedef {import('./types').CheckboxProps} CheckboxProps
 * @typedef {import('react').ReactElement} Element
 */

/**
 * @function Checkbox
 * @param {CheckboxProps} props
 * @returns {Element}
 */

export const Checkbox = ({ options }) => {
  const dispatch = useDispatch();

  const { isChecked, setIsChecked } = options;

  const handleCheckboxChange = () => {
    dispatch(setIsChecked(!isChecked));
  };

  return (
    <input
      type={'checkbox'}
      checked={isChecked}
      onChange={handleCheckboxChange}
    />
  );
};
