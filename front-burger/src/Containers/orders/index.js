import React from "react";
import Logo from '../../assets/logoOrders.png'
import trash from '../../assets/trash.png'
const express = require('express')
const app = express()
import { Container, ContainerItens, Image, H1, Orders, Button} from "./styles";

function App() {
  return  <Container>

    <ContainerItens>
      <Image alt='logo' src={Logo}/>
      <H1>Pedidos</H1>

      <ul>
          <Orders>
            <p>1 Coca-Cola, 1 X-Salada</p>
            <button><img src={trash}/></button>
            <p>Bill Gates</p>
          </Orders>
      </ul>
        
      <Button>Voltar</Button>

    </ContainerItens>

    </Container>
}

export default App;
