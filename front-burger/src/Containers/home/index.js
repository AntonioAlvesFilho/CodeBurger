import React from "react";
import Logo from '../../assets/logoHome.png'

import { Container, ContainerItens, Image, H1, InputLabel, Input, Button} from "./styles";

function App() {
  return  <Container>

    <ContainerItens>
      <Image alt='logo' src={Logo}/>
      <H1>Faça seu pedido!</H1>

      <InputLabel>Pedido</InputLabel>
      <Input placeholder="1 Coca-Cola, 1 X-Salada" />

      <InputLabel>Nome do Cliente</InputLabel>
      <Input placeholder="Bill Gates" />
        
      <Button>Fazer Pedido</Button>

    </ContainerItens>

    </Container>
}

export default App;
