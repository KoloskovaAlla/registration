export interface Options {
  value: string;
  isValidField: boolean;
  onFieldChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  invalidMessage?: string;
  placeholder?: string;
};

export interface TextFieldProps {
  className: string;
  options: Options;
};
