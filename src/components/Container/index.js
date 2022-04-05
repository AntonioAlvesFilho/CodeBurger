import React from "react";
import { Container as BackScreen } from "./styles.js";

const Container = (props) =>{
    return <BackScreen>{props.children}</BackScreen>
}

export default Container