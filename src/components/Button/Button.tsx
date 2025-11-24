import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<{ $backgroundColor?: string }>`
  background-color: ${(props) => props.$backgroundColor || '#007bff'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? props.$backgroundColor || '#007bff' : '#0056b3'};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className,
  backgroundColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      className={className}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
