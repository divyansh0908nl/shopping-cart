import * as React from "react";

interface ButtonProps {
  additionalClasses?: string;
  text: string;
  onClick: () => void;
}
export const Button = ({additionalClasses, text, onClick}: ButtonProps) => {
  return <button className={`bg-blue-500 px-4 py-2 rounded-md ${additionalClasses}`}>{text}</button>;
};
