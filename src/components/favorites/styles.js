import styled from "styled-components";

export const Favs = styled.section`
    height: 100vh;
    margin: 0 -15px;
    .emptyFavs{
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content:center;
    }
    a{
      text-decoration: none;
      color: inherit;
    }
    .list-group-item{
      background-color: transparent;
      display: flex;
      justify-content:space-between;
      align-items:center;
    }
`