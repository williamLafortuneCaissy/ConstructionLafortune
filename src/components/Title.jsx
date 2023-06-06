const Title = ({ as: Component = "div", className, children, ...props }) => {
    return (
        <div className={`text-4xl font-title ${className}`} {...props}>
            <Component className="mb-3">{children}</Component>
            <hr className="ml-0.5 w-32"/>
        </div>
    );
}

export default Title;