import React from "react";
import { ListGroup } from "react-bootstrap";
import { useQueries, UseQueryOptions } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/types/types";
import { Favs } from "./styles";
import { CurrentWeather } from "./../../types/currentWeather";
import { getCelsius } from "../../lib/helper";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favs = useSelector((state: IRootState) => state.favorites);
  const dispatch = useDispatch();
  const getCurrentWeather = (query: string) =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((res) => res.json());

  const results = useQueries([
    ...favs.map((fav, i) => {
      return {
        queryKey: ["currentWeather", i],
        queryFn: () => getCurrentWeather(fav),
        refetchOnWindowFocus: false,
      };
    }),
  ]);

  return (
    <Favs>
      <ListGroup>
        {!favs ? (
          <div className='emptyFavs'>You can add some Favs</div>
        ) : (
          results.map((result: any) => {
            if (result.isLoading === false && result.status === "success") {
              return (
                <Link
                  to='/'
                  onClick={() =>
                    dispatch({ type: "SET_QUERY", payload: result.data.name })
                  }>
                  <ListGroup.Item>
                    {
                      <>
                        <span>{result.data.name}</span>
                        <span>
                          {" "}
                          <span>
                            <img
                              src={`http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`}
                              alt=''
                            />{" "}
                          </span>
                        </span>
                        <span>
                          {getCelsius(result.data.main.temp).toFixed(0)}{" "}
                          <span>&#8451;</span>
                        </span>
                      </>
                    }
                  </ListGroup.Item>
                </Link>
              );
            }
          })
        )}
      </ListGroup>
    </Favs>
  );
};

export default Favorites;
