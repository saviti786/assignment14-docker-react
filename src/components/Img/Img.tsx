import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ $disabled?: boolean }>`
  display: block;
  max-width: 100%;
  height: auto;
  opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "default")};
  border-radius: 8px;
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  className,
  disabled = false,
}) => {
  return (
    <div className={className || "card"}>
    <StyledImg
      src={src}
      alt={alt}
      width={width}
      height={height}
      $disabled={disabled}
    />
    </div>
  );
};

export default Img;
