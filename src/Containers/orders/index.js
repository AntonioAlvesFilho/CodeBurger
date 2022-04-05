import React, {useEffect, useState} from "react";

import Logo from '../../assets/logoOrders.png'
import trash from '../../assets/trash.png'

import Container from "../../components/Container";
import ContainerItens from "../../components/ContainerItens/";
import H1 from "../../components/Title";
import { Button } from "../../components/Button/styles";
import { Image, Orders, Ul} from "./styles";

import { useHistory } from "react-router-dom";
import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([])
  const History = useHistory()

  useEffect (() => {
    async function fetchUsers () {
      const {data: newOrders} = await axios.get("http://localhost:3200/orders")
      setOrders(newOrders)
    }

    fetchUsers()
  },[])

  async function deleteOrder (orderId) {
    await axios.delete(`http://localhost:3200/orders/${orderId}`)
    const deleteOrder = orders.filter((order) => order.id !==  orderId)

    setOrders(deleteOrder)
  }

  const Return = () =>{

   History.push('/')
  
  }
  
  return  <Container>

    <ContainerItens>
      <Image alt='logo' src={Logo}/>
      <H1>Pedidos</H1>

      <Ul>
        {orders.map((order) => (
          <Orders key={order.id}>
            <p>{order.order}</p> 
            <button onClick={() => deleteOrder(order.id)}><img alt="delete-button" src={trash}/></button>
            <p>{order.clientName}</p>
          </Orders>
        ))}
      </Ul>
        
      <Button goBack={true} onClick={Return}>Voltar</Button>

    </ContainerItens>

    </Container>
}

export default Order;
