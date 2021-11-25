import { createElement, FC, ButtonHTMLAttributes } from "react"
import "./index.css";

interface ButtonProps extends ButtonHTMLAttributes<any> {
    component?: string;
}

const Button: FC<ButtonProps> = ({ component = "button", className = "", children, ...rest }) => {
    return createElement(component, {
        ...rest,
        className: `btn ${className} `
    }, children)
}

export default Button