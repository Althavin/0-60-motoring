interface ButtonProps {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string;
  styles?: string;
}

const Button = ({ type, onClick, text ,styles}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary border-2 rounded-md border-transparent px-4 py-3 text-white   hover:bg-white hover:text-primary hover:border-primary transition 1s  text-xl  ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
