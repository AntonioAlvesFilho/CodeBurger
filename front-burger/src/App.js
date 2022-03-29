import React from "react";
import Logo from './assets/logo.png'

import { Container, P, ContainerItens, Image} from "./home/styles";

function App() {
  return  <Container>

    <ContainerItens>
      <Image alt='logo' src={Logo}/>
      <P>divmain</P>

    </ContainerItens>

    </Container>
}

export default App;
