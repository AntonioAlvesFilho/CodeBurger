import styled from "styled-components";


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
padding: 16px;
align-items: start;
justify-content: center;
font-size: 90%;

width: 342px;
height: 125px;

background: rgba(255, 255, 255, 0.25);
border-radius: 14px;

img {
    width: 35px;
}

button {
    align-self: end;
    border: none;
    background: none;
    cursor: pointer;
    

    &:hover{
        opacity: 0.6;

        img{
            background-color: red;
        }
    }

    &:active {
        opacity: 0.8;
    }
}

p{
    font-size: 20px;
    font-style: italic;
}

`

export const Button = styled.button`

width: 342px;
height: 68px;
background: rgba(255, 255, 255, 0.14);
margin: 40px 0px;
border: none;
align-items: center;

font-weight: 900;
font-size: 17px;
line-height: 2px;
text-align: center;

:hover {
    cursor: pointer;
}
`