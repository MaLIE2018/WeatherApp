import { Navbar } from "react-bootstrap";
import styled from "styled-components";


export const BottomNavStyled =styled(Navbar)`
  display: flex;
  flex-direction: column;
  padding: 0;
  div:last-of-type{
   width:100%;
   display: flex;
   justify-content: space-between;
   padding: 0.7rem 1.3rem;
  }
  .dropdown-divider{
    margin-left: -15px;
    margin-right: -15px;
    width: 100%;
  }
  a{
    background-color: transparent;
    border-color: transparent;
    color: white;
    &:hover{
      background-color: transparent;
      border-color: transparent;
    }
    &:focus{
      background-color: transparent;
      border-color: transparent;
    }
    &:active{
      background-color: transparent;
      border-color: transparent;
    }
  }
`