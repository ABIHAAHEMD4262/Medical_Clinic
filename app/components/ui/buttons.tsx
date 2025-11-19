interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'white';
    children: React.ReactNode;
  }
  
  const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
    const variants = {
      primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20",
      secondary: "bg-slate-100 text-slate-800 hover:bg-slate-200",
      outline: "border-2 border-teal-600 text-teal-600 hover:bg-teal-50",
      white: "bg-white text-teal-700 hover:bg-gray-50 shadow-lg"
    };
  
    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
}

export default Button