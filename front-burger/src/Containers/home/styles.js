import styled from "styled-components";



export const ContainerItens = styled.div`

background: #0A0A10;


display: flex;
width: 414px;
height: 896px;
flex-direction: column;
`
 
export const Image = styled.img`
width: 342px;
height: 354px;
margin-top: 11px;

`

export const H1 = styled.p`

font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
text-align: center;
margin-top: 25px;
margin-bottom: 76px;

`

export const InputLabel = styled.p`
align-self: start;
margin-left: 45px;
margin-bottom: 10px;

`

export const Input = styled.input`

width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;

font-weight: 300;
font-size: 18px;
line-height: 21px;
padding: 15px;
color: #FFFFFF;
margin-bottom: 42px;

::placeholder {
    color: #FFFFFF;
    font-weight: 300;
}
`

export const Button = styled.button`

width: 342px;
height: 68px;
background: #D93856;
margin: 40px 36px 36px 51px;

font-weight: 900;
font-size: 17px;
line-height: 2px;
text-align: center;

:hover {
    cursor: pointer;
}
`