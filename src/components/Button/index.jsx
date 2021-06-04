import { bool, func, number, oneOf, oneOfType, string } from "prop-types";

const Button = ({
  label = "",
  width = 60,
  height = "100%",
  color = "primary",
  backgroundColor = "tertiary",
  borderWidth = 1,
  borderStyle = "solid",
  borderColor = "primary",
  onClick = () => {},
  disabled = false,
}) => {
  const colors = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
  };

  const buttonStyles = {
    width,
    height,
    cursor: disabled ? "auto" : "pointer",
    borderWidth,
    borderStyle,
    borderColor: `var(--${colors[borderColor] || "primary"}-color)`,
    color: `var(--${colors[color] || "primary"}-color)`,
    backgroundColor: `var(--${colors[backgroundColor] || "tertiary"}-color)`,
  };

  const handleOnClick = disabled ? () => {} : onClick;

  return (
    <button style={buttonStyles} onClick={handleOnClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: string,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  color: oneOf(["primary", "secondary", "tertiary"]),
  backgroundColor: oneOf(["primary", "secondary", "tertiary"]),
  borderWidth: oneOfType([string, number]),
  borderStyle: string,
  borderColor: oneOf(["primary", "secondary", "tertiary"]),
  onClick: func,
  disabled: bool,
};

export default Button;
