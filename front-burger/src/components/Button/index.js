import React from "react";
import { Button as ButtonA } from "./styles";

const Button = ({children, ...rest}) => {
    return <ButtonA {...rest}>{children}</ButtonA>
}

export default Button