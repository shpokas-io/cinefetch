import React from "react";
import {
  FilterDropdownProps,
  Option,
  MultiFilterDropdownProps,
} from "../../types/filterTypes";

function isMulti(
  props: FilterDropdownProps
): props is MultiFilterDropdownProps {
  return props.multi === true;
}

const FilterDropdown: React.FC<FilterDropdownProps> = (props) => {
  const { placeholder, isOpen, onToggle, multi, selected, onSelect, isDark } =
    props;
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
  let buttonLabel: string;
  if (isMulti(props)) {
    buttonLabel =
      selected.length > 0 ? `${placeholder} (${selected.length})` : placeholder;
  } else {
    buttonLabel = selected
      ? props.options.find((opt) => opt.value === selected)?.label ??
        placeholder
      : placeholder;
  }
  return (
    <div className="relative inline-block">
      <button type="button" onClick={onToggle} className={baseButtonClass}>
        <span className="truncate">{buttonLabel}</span>
        {arrowIcon}
      </button>
      {isOpen && (
        <div className={dropdownPanelClass}>
          {isMulti(props)
            ? props.options.map((option) => {
                const isSelected = selected.includes(option);
                return (
                  <label
                    key={option}
                    className="flex items-center px-3 py-2 hover:bg-gray-500 hover:bg-opacity-20 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mr-2"
                      value={option}
                      checked={isSelected}
                      onChange={() => onSelect(option)}
                    />
                    {option}
                  </label>
                );
              })
            : props.options.map((option: Option) => {
                const isSelected = selected === option.value;
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
                      checked={isSelected}
                      onChange={() => onSelect(option.value)}
                    />
                    {option.label}
                  </label>
                );
              })}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
