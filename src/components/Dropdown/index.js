import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const CustomToggle = React.forwardRef(
  ({ children, onClick, disabled, ...rest }, ref) => {
    return (
      <a
        href=" "
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick(e);
        }}
        {...rest}
      >
        {children}
        <FontAwesomeIcon icon={faAngleDown} />
      </a>
    );
  }
);

const CustomDropdown = React.forwardRef(
  ({ onChange, options, value: inputValue }, ref) => {
    const currentOption = useMemo(() => {
      return options.find((item) => item.key === inputValue?.key) || options[0];
    }, [inputValue, options]);

    return (
      <Dropdown className="customDropdown" ref={ref}>
        <Dropdown.Toggle as={CustomToggle} className="dropdownToggle">
          <span className="dropDownText">{currentOption?.label}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {options.map((option) => {
            const isActive = currentOption.key === option.key;

            return (
              <Dropdown.Item
                key={option.key}
                disabled={isActive}
                onClick={() => onChange && onChange(option)}
                name={option.key}
              >
                {option.label}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
);

CustomDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default CustomDropdown;
