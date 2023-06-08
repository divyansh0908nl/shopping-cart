interface ButtonProps {
  additionalClasses?: string;
  text: string;
  onClick: () => void;
}
export function Button({ additionalClasses, text, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-md bg-blue-500 px-4 py-2 ${additionalClasses}`}
    >
      {text}
    </button>
  );
}
