import React, { useState, useRef } from "react";
import Logo from '../../assets/logoHome.png'
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container/index.js"
import { ContainerItens, Image, H1, InputLabel, Input, Button } from "./styles";

function App() {

  const [orders, setOrders] = useState([])
  const inputName = useRef()
  const inputOrder = useRef()
  const History = useHistory()

  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3000/orders", {
      order: inputOrder.current.value,
      name: inputName.current.value,
    })

    console.log(newOrder)
    setOrders(...orders, newOrder)
    History.push('/orders')
  }

    return <Container>

      <ContainerItens>
        <Image alt='logo' src={Logo} />
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1 X-Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input placeholder="Bill Gates" />

        <Button onClick={addNewOrder}>Fazer Pedido</Button>

      </ContainerItens>

    </Container>
  }

  export default App
