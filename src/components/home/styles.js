import styled from "styled-components";



export const StickyHeader = styled.div`
    position: sticky;
    top: 60px;
    min-height: 300px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Details = styled.div`
    

`

export const DetailsDay = styled.div`
    display: flex;
    flex-direction:row;
    flex-wrap: nowrap;
    overflow-x:auto;
    .hours{
      display: flex;
      flex-direction:column;
    }

`


export const DetailsWeek = styled.div`
      ul{
        list-style-type: none;
        padding: 0;
        li{
          display:flex;
          justify-content:space-between;
        }
      }

`