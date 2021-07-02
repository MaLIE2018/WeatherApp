import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { StickyHeader, Details, DetailsDay, DetailsWeek } from "./styles";
import TopNav from "./../nav/TopNav";
import { IRootState } from "../../redux/types/types";
import { H1 } from "../../theme";
import { useEffect } from "react";
import { getCelsius } from "../../lib/helper";
import getHours from "date-fns/getHours";
import getDay from "date-fns/getDay";

const Home = () => {
  const query = useSelector((state: IRootState) => state.query.query);
  const currentWeather = useSelector(
    (state: IRootState) => state.currentWeather.currentWeather
  );
  const foreCast = useSelector((state: IRootState) => state.foreCast.foreCast);
  const nextDays = useSelector((state: IRootState) => state.nextDays.nextDays);

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      if (res.ok) {
        const currentWeather = await res.json();
        dispatch({ type: "SET_CURRENT_WEATHER", payload: currentWeather });

        const res2 = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );

        if (res2.ok) {
          const foreCast = await res2.json();
          dispatch({ type: "SET_FORECAST", payload: foreCast });

          const res3 = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeather.coord.lat}&lon=${currentWeather.coord.lon}&exclude=minutely, alerts,hourly&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );

          if (res3.ok) {
            const nextDays = await res3.json();
            dispatch({ type: "SET_NEXT_DAYS", payload: nextDays });
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [query]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Row>
      <Col>
        <TopNav />
        <StickyHeader>
          <div>{currentWeather.name}</div>
          <div>{currentWeather.weather[0].description} </div>
          <H1>
            {getCelsius(currentWeather.main.temp).toFixed(0)}{" "}
            <span>&#8451;</span>{" "}
          </H1>
        </StickyHeader>
        <Details>
          <div className='dropdown-divider'></div>
          <DetailsDay>
            {foreCast.list.map((hours) => {
              return (
                <div className='hours'>
                  <span>{getHours(new Date(hours.dt_txt)).toString()}</span>
                  <span>
                    <img
                      src={`http://openweathermap.org/img/wn/${hours.weather[0].icon}@2x.png`}
                      alt=''
                    />{" "}
                  </span>
                  <span>
                    {" "}
                    {getCelsius(hours.main.temp).toFixed(0)}{" "}
                    <span>&#8451;</span>{" "}
                  </span>
                </div>
              );
            })}
          </DetailsDay>
          <DetailsWeek>
            <div className='dropdown-divider'></div>
            <ul>
              {nextDays.daily.map((day) => (
                <li>
                  <span>
                    {getDay(new Date(day.dt + nextDays.current.dt)).toString()}
                  </span>
                  <span>
                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      alt=''
                    />{" "}
                  </span>
                  <span>
                    {" "}
                    {getCelsius(day.temp.day).toFixed(0)} <span>&#8451;</span>{" "}
                  </span>
                </li>
              ))}
            </ul>
          </DetailsWeek>
        </Details>
      </Col>
    </Row>
  );
};

export default Home;
