
import React from "react";

// This type defines the only valid values for the 'type' attribute of a button element.
// You can use any name for this type, but 'ButtonType' is descriptive and common.
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: ButtonType;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  className = "button-default",
  disabled = false,
  onClick,
  type = "button",
  loading = false,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!loading) {
      onClick?.(e);
    }
  };

  return (
    <button
      type={type}
      className={className + (loading ? " button-loading" : "")}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-busy={loading}
      {...rest}
    >
      {iconLeft && !loading && (
        <span className="button-default-icon button-default-icon-left">
          {iconLeft}
        </span>
      )}
      <span className="button-default-text">
        {loading ? (
          <span className="button-loading-spinner" aria-label="در حال بارگذاری..." />
        ) : (
          children
        )}
      </span>
      {iconRight && !loading && (
        <span className="button-default-icon button-default-icon-right">
          {iconRight}
        </span>
      )}
    </button>
  );
};

export default Button;