export type Option = {
  value: string;
  label: string;
};

export type SingleFilterDropdownProps = {
  placeholder: string;
  isOpen: boolean;
  onToggle: () => void;
  options: Option[];
  multi: false;
  selected: string;
  onSelect: (value: string) => void;
  isDark: boolean;
};

export type MultiFilterDropdownProps = {
  placeholder: string;
  isOpen: boolean;
  onToggle: () => void;
  options: string[];
  multi: true;
  selected: string[];
  onSelect: (value: string) => void;
  isDark: boolean;
};

export type FilterDropdownProps =
  | SingleFilterDropdownProps
  | MultiFilterDropdownProps;
