const Button = ({ children, className = "" }) => {
  return (
    <button
      className={`relative transition-all before:transition-all btn before:absolute before:bg-current before:content-[''] before:inset-0 hover:before:scale-y-125 hover:before:skew-y-12 before:-z-10 before:opacity-0 hover:before:opacity-100 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
