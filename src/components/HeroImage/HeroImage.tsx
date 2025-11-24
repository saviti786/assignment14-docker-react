import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const Wrapper = styled.div<{ $disabled?: boolean }>`
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  display: block;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

export const HeroImage: React.FC<
  HeroImageProps & React.HTMLAttributes<HTMLDivElement>
> = ({ src, alt, title, subtitle, className, disabled = false, ...rest }) => {
  return (
    <div className={className || 'card'}>
      <Wrapper $disabled={disabled} {...rest}>
        <BackgroundImage src={src} alt={alt} />
        <OverlayText>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </OverlayText>
      </Wrapper>
    </div>
  );
};

export default HeroImage;
