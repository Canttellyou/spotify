import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //   children: ReactNode;
  //   className?: string;
  //   disabled?: boolean;
  //   onClick?: () => void;
  //   type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `w-full rounded-full bg-[#B72FCF] border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-bold hover:opacity-75 transition`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
