import React from "react";
import {
  FilterDropdownProps,
  Option,
  MultiFilterDropdownProps,
} from "../../types/filterTypes";

const isMulti = (
  props: FilterDropdownProps
): props is MultiFilterDropdownProps => props.multi === true;

const getButtonLabel = (props: FilterDropdownProps): string => {
  const { placeholder, selected, multi } = props;
  if (multi) {
    const multiSelected = selected;
    return multiSelected.length > 0
      ? `${placeholder} (${multiSelected.length})`
      : placeholder;
  } else {
    const options = props.options;
    const selectedOption = options.find(
      (opt: Option) => opt.value === selected
    );
    return selectedOption ? selectedOption.label : placeholder;
  }
};

const renderOptions = (props: FilterDropdownProps) => {
  const { selected, onSelect } = props;
  if (isMulti(props)) {
    const options = props.options;
    const multiSelected = selected;
    return options.map((option: string) => {
      const isChecked = multiSelected.includes(option);
      return (
        <label
          key={option}
          className="flex items-center px-3 py-2 hover:bg-gray-500 hover:bg-opacity-20 cursor-pointer"
        >
          <input
            type="checkbox"
            className="mr-2"
            value={option}
            checked={isChecked}
            onChange={() => onSelect(option)}
          />
          {option}
        </label>
      );
    });
  }
  const options = props.options;
  return options.map((option: Option) => {
    const isChecked = selected === option.value;
    return (
      <label
        key={option.value}
        className="flex items-center px-3 py-2 hover:bg-gray-500 hover:bg-opacity-20 cursor-pointer"
      >
        <input
          type="radio"
          className="mr-2"
          name="singleSelect"
          value={option.value}
          checked={isChecked}
          onChange={() => onSelect(option.value)}
        />
        {option.label}
      </label>
    );
  });
};

const FilterDropdown: React.FC<FilterDropdownProps> = (props) => {
  const { isOpen, onToggle, multi, isDark } = props;
  const darkModeBg = isDark
    ? "bg-gray-700 text-white"
    : "bg-gray-200 text-black";
  const buttonWidth = multi ? "w-40" : "w-32";
  const baseButtonClass = `cursor-pointer appearance-none px-3 py-2 rounded-md border-none focus:outline-none transition ${darkModeBg} ${buttonWidth} flex items-center justify-between`;
  const dropdownPanelClass = `absolute mt-1 right-0 w-48 rounded-md shadow-lg z-10 ${
    isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
  }`;
  const arrowIcon = (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M5.5 7l4 4 4-4H5.5z" />
    </svg>
  );
  const buttonLabel = getButtonLabel(props);
  return (
    <div className="relative inline-block">
      <button type="button" onClick={onToggle} className={baseButtonClass}>
        <span className="truncate">{buttonLabel}</span>
        {arrowIcon}
      </button>
      {isOpen && (
        <div className={dropdownPanelClass}>{renderOptions(props)}</div>
      )}
    </div>
  );
};

export default FilterDropdown;
