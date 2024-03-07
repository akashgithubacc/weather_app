import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();

  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  console.log(forecastDays);

  return (
    <>
      <label className="title"> Daily </label>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          {data.list.splice(0, 7).map((item, idx) => (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-detials-grid-item">
                    <label>Pressure</label>
                    <label> {Math.round(item.main.pressure)} hPa</label>
                  </div>
                  <div className="daily-detials-grid-item">
                    <label>Humidity</label>
                    <label> {Math.round(item.main.humidity)} %</label>
                  </div>
                  <div className="daily-detials-grid-item">
                    <label>Clouds</label>
                    <label> {item.clouds.all} %</label>
                  </div>
                  <div className="daily-detials-grid-item">
                    <label>Wind Speed</label>
                    <label> {Math.round(item.wind.speed)} m/s</label>
                  </div>
                  <div className="daily-detials-grid-item">
                    <label>Feels Like</label>
                    <label> {Math.round(item.main.feels_like)} °C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Forecast;
