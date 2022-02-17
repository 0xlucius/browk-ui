import React from "react";
import { colors, typography } from "./theme";
import styled, { css } from "styled-components";

const variations = {
  fill: css<ButtonProps>`
    background-color: ${(props) =>
      props.disabled ? colors.primaryDisabled : colors.primary};

    &:hover {
      background-color: ${colors.primaryHover};
    }

    &:active {
      background-color: ${colors.primaryActive};
    }

    &:focus {
      border: 2px solid rgba(17, 17, 17, 0.48);
    }
  `,
};

export interface ButtonProps {
  text?: string;
  variation?: keyof typeof variations;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  font-weight: 700;
  font-weight: bold;
  border-radius: 4px;
  display: inline-block;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.primary ? colors.white : colors.primary)};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  ${(props) => variations[props.variation || "fill"]}

  &:active {
    border: solid 2px #1b116e;
    padding: ${(props) =>
      props.size === "small"
        ? "5px 23px 6px"
        : props.size === "medium"
        ? "7px 28px 9px"
        : "12px 28px 14px"};
  }
`;

const Button = ({
  size,
  variation,
  primary,
  disabled,
  text,
  onClick,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      variation={variation}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
