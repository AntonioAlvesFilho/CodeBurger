const { request, response } = require('express')
const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const list = express () 
list.use(cors())

list.use(express.json())

const orders = []


const checkOrder = (request, response, next) => {
    const {id} = request.params

    const index = orders.findIndex(orderI => orderI.id === id)

    if (index < 0) {
        return response.status(404).json({error: "User not found"})
    }

    request.index = index
    next()
}

list.post('/orders', (request, response)=> {
    const {order, price, clientName, status} = request.body
    const {id} = {id:uuid.v4()}


    const ordered = {id, order, price, clientName, status}

    if (order == "" || price == "" || clientName == "") {
        return response.status(400).json("Please Complete All Fields")
    }

    orders.push(ordered)

    return response.status(201).json(orders)
})

list.get('/orders', (request, response) => {

    return response.json(orders)
})

list.put('/orders/:id', checkOrder, (request, response) => {
    const {id} = request.params 
    const {clientName, price, order, status} = request.body

    const index = request.index

    const updateOrder = {id, order, price, clientName, status}

    orders[index] = updateOrder

 return response.json(updateOrder)
})

list.patch('/orders/:id',checkOrder, (request, response) => {
    
const index = request.index


if (orders[index].status == "Em Preparação") {

    orders[index].status ="Pronto"
    return response.json(orders[index])
}
if (orders[index].status == "Pronto") {

    orders[index].status ="Em Preparação"
    return response.json(orders[index])
}

})

list.delete('/orders/:id',checkOrder, (request, response) => {

const index = request.index

    orders.splice(index, 1)
    return response.status(200).json("order deleted")
})



list.listen(3200, () => {
    console.log('😉 server started on port 3200')
})
