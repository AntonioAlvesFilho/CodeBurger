import styled from "styled-components";



 
export const Image = styled.img`
width: 246px;
height: 354px;
margin-top: 11px;

`
export const Ul = styled.ul`
height: 300px;
padding-right: 10px;
overflow: auto;
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #555; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

::-webkit-scrollbar-thumb:active {
  background: #333; 
}

`

export const Orders = styled.li`
margin-bottom: 25px;
display: flex;
flex-direction: column;
padding: 16px;
align-items: start;
justify-content: center;
font-size: 90%;


width: 320px;
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
