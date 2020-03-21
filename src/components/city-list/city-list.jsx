import React from "react";
import {CITIES} from "../../const";
import {activeCityType, onCityClickType} from "../../types";

const CityList = ({activeCity, onCityClick}) => {
  const cities = CITIES;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => {
            return (
              <li key={city} className="locations__item">
                <a className={`locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`} href="#" onClick={() => {
                  onCityClick(city);
                }}>
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  onCityClick: onCityClickType,
  activeCity: activeCityType
};

export default CityList;
