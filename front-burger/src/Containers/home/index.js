import React, { useState, useRef } from "react";
import Logo from '../../assets/logoHome.png'
import axios from "axios";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container/"
import ContainerItens from "../../components/ContainerItens";
import H1 from "../../components/Title";
import { Button } from "../../components/Button/styles";
import { Image, InputLabel, Input} from "./styles";

const Home = () => {

  const [orders, setOrders] = useState([]);
  const inputOrder = useRef()
  const inputName= useRef()
  const History = useHistory()


  async function addNewOrder() {

    const { data: newOrder } = await axios.post("http://localhost:3200/orders", {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    })



    if (newOrder.order === "" || newOrder.clientName === "") {
      alert("Please fill all fields")
    }

    else {
      setOrders([...orders, newOrder])
      History.push("/orders")
    }
  }           

    return <Container>

      <ContainerItens>
        <Image alt='logo' src={Logo} />
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Ex: 1 Coca-Cola, 1 X-Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input  ref={inputName} placeholder="Ex: Bill Gates" />

        <Button onClick={addNewOrder}>Fazer Pedido</Button>

      </ContainerItens>
    </Container>
  }

  export default Home