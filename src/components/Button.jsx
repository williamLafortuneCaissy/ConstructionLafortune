const Button = ({ as: Component = "button", className, children, ...props }) => {
    return (
    <Component className={`bg-orange text-white px-12 py-2 rounded-full inline-block shadow-md hover:-translate-y-0.5 transition-transform ${className}`} {...props}>{children}</Component>
    );
}

export default Button;