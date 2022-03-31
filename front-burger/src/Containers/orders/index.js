import React from "react";
import Logo from '../../assets/logoOrders.png'
import trash from '../../assets/trash.png'
import { useHistory } from "react-router-dom";
import Container from "../../components/Container";
import { ContainerItens, Image, H1, Orders, Button} from "./styles";

// const History = useHistory()

const Return = () =>{

  // return History.push('/')
}

function App() {
  return  <Container>

    <ContainerItens>
      <Image alt='logo' src={Logo}/>
      <H1>Pedidos</H1>

      <ul>
          <Orders>
            <h2>1 Coca-Cola, 1 X-Salada</h2>
            <button><img alt="delete-button" src={trash}/></button>
            <p>Bill Gates</p>
          </Orders>
      </ul>
        
      <Button goBack={true} onClick={Return}>Voltar</Button>

    </ContainerItens>

    </Container>
}

export default App;
