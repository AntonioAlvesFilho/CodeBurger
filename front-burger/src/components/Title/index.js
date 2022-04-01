import React from "react";
import { H1 as Title} from "./styles";

const H1 = (props) => {
    return <Title>{props.children}</Title>
}

export default H1