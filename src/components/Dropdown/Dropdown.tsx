import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ $disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: white;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
}) => {
  return (
    <StyledSelect $disabled={disabled} disabled={disabled}>
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
