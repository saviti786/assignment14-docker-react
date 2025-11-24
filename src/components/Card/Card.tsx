import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ $disabled?: boolean }>`
  width: 100%;
  max-width: 320px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    transform: ${(props) => (props.$disabled ? 'none' : 'translateY(-4px)')};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`;

const Text = styled.p`
  font-size: 0.95rem;
  color: #333;
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  image,
  className,
  disabled = false,
}) => {
  return (
    <div className={className || 'card'}>
      <StyledCard $disabled={disabled} data-testid="card">
        {image && <Image src={image} alt={title} />}
        <Content>
          <Title>{title}</Title>
          <Text>{content}</Text>
        </Content>
      </StyledCard>
    </div>
  );
};

export default Card;
