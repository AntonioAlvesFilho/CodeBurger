import styled from "styled-components";


export const Container = styled.div`
    background-color: black;
    display: flex;
    height: 100vh;
    justify-content: center;


`
export const ContainerItens = styled.div`

background: #0A0A10;


display: flex;
width: 414px;
height: 896px;
flex-direction: column;
`
 
export const Image = styled.img`
width: 246px;
height: 354px;
margin-top: 11px;

`

export const H1 = styled.p`

font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
margin-top: 36px;
margin-bottom: 76px;

`
export const Orders = styled.li`

display: flex;
flex-direction: column;
align-items: flex-start;


width: 342px;
height: 101px;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;



img {
    background-color: red;
    
}

button {
    align-self: flex-start;
    border: none;
    background: none;
    cursor: pointer;
    

    &:hover{
        opacity: 0.6;
    }

    &:active {
        opacity: 0.8;
    }
}

`

export const Button = styled.button`

width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
margin: 40px 36px 36px 51px;
border: none;

font-weight: 900;
font-size: 17px;
line-height: 2px;
text-align: center;

:hover {
    cursor: pointer;
}
`