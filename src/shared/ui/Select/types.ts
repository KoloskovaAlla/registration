export interface Option {
  value: string;
  content: string;
};

export interface SelectProps {
  options: Option[];
  value: string;
  className?: string;
  onChange: any;
  disabled?: boolean;
  emptyOption: boolean;
};
