interface ButtonProps {
  /*
   *! Represents the props for a button component.
   *? additionalClasses: Optional CSS classes for the button.
   ** text: The text content of the button.
   *# onClick: Callback function for button click event.
   */
  additionalClasses?: string;
  text: string;
  onClick: () => void;
}

/**
 * -----------------------------------------------------------------------------
 * Renders a button component with specified text, additional classes, and
 * onClick event handler.
 *
 * @param ButtonProps
 * @returns
 */
export function Button({ additionalClasses, text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-md bg-blue-500 px-4 py-2 ${additionalClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
