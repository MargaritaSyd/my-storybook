import './MyButton.css';

export interface ButtonProps {
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const MyButton = ({
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`component-button ${size}`}
      style={{ backgroundColor }}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};
