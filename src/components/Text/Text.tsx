import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledInput = styled.input<{ $disabled?: boolean }>`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'text')};
`;

export const Text: React.FC<TextProps> = ({
  placeholder = 'Enter text',
  value,
  disabled = false,
}) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      $disabled={disabled}
      readOnly
    />
  );
};

export default Text;
