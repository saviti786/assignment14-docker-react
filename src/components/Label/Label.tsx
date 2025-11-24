import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<{ $color?: string }>`
  color: ${(props) => props.$color || '#121212ff'};
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Label: React.FC<LabelProps> = ({ text, color, className }) => {
  return (
    <StyledLabel $color={color} className={className}>
      {text}
    </StyledLabel>
  );
};

export default Label;
