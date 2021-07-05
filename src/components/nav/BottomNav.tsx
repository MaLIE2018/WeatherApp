import { BsListUl } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { IRootState } from "../../redux/types/types.js";
import { BottomNavStyled } from "./styles.js";
import { BiListPlus, BiListCheck } from "react-icons/bi";

const BottomNav = ({ location }: RouteComponentProps) => {
  const { pathname } = location;
  const favs = useSelector((state: IRootState) => state.favorites);
  const currentWeather = useSelector(
    (state: IRootState) => state.currentWeather
  );
  const dispatch = useDispatch();
  return (
    <BottomNavStyled fixed='bottom'>
      <div className='dropdown-divider'></div>
      <div>
        {favs.find((fav) => fav === currentWeather.name) ? (
          <BiListCheck
            size='1.5rem'
            onClick={(e) => {
              e.preventDefault();
              dispatch({
                type: "REMOVE_FAVORITE",
                payload: currentWeather.name,
              });
            }}
          />
        ) : (
          <BiListPlus
            size='1.5rem'
            onClick={(e) => {
              e.preventDefault();
              dispatch({ type: "ADD_FAVORITE", payload: currentWeather.name });
            }}
          />
        )}
        <a href='/favorites'>
          <BsListUl size='1.5rem' />
        </a>
      </div>
    </BottomNavStyled>
  );
};

export default withRouter(BottomNav);
