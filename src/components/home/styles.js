import styled from "styled-components";
import {PageItemWrapper as StickyHeaderWrapper} from "../helper/PageItemWrapper.tsx"


export const StickyHeader = styled(StickyHeaderWrapper)`
  position: sticky;
  top: 60px;
  min-height: 300px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: -1050;
  opacity: ${(props) => (props.inView ? 0 : 1)};
  transition: opacity 0.2s ease;
 
`;

export const Details = styled.div`
  z-index: 1050;
  .dropdown-divider{
    margin-left: -15px;
    margin-right: -15px;
  }
`;

export const DetailsDay = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-left: -15px;
  margin-right: -15px;
  .hours {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const DetailsWeek = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
