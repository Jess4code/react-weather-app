import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

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
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small"
                  />
                  <label className="day">{forecastDays[idx]} </label>
                  <label className="description"> {item.weather[0].description} </label>
                  <label className="min-max"> min: {Math.round(item.main.temp_min)}°C / max: {Math.round(item.main.temp_max)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure </label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity </label>
                  <label>{item.main.humidity}%</label>
                </div>

                {/* 
                SEEMS LIKE THIS API HAVING SOME PROBLEMS IN THE CLOUD OBJECT ,
                THAT'S WHY I COMEENTED IT OUT
                 */}
                
                {/* <div className="daily-details-grid-item">
                  <label>Clouds </label>
                  <label>{item.coulds.all}</label>
                </div> */}

                <div className="daily-details-grid-item">
                  <label>Wind </label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level </label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like </label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
