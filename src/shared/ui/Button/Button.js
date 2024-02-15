import { IconClose, IconMoon, IconSun } from 'shared/icons/';

const icons = {
  close: <IconClose />,
  sun: <IconSun />,
  moon: <IconMoon />
};

/**
 * @typedef {import('./types').ButtonProps} Props
 * @typedef {import('react').ReactElement} Element
 */

/** @type {(props: Props) => Element} */
export const Button = ({
  content,
  label,
  onClickButton,
  className,
  iconName,
  disabled
}) => {
  switch (content) {
    case 'icon':
      return (
        <button
          onClick={onClickButton}
          className={className}
        >
          {icons[iconName]}
        </button>
      );
    case 'text':
      return (
        <button
          onClick={onClickButton}
          className={className}
          disabled={disabled}
          type="submit"
        >
          {label}
        </button>
      );
    default:
      return <button></button>;
  };

  return (
    <button
      onClick={onClickButton}
      className={className}
    >
      {icons[iconName]}
    </button>
  );
};
