import React from 'react'
import './CityCard.css'

export const CityCard = ({
    cityName,
    cityTemperature,
    weatherText
}) => {
  return (
    <div className='weather-card'>
        <h3>{cityName}</h3>
        <i>{weatherText}</i>
        <div className='temperatures'>
          <h4>{cityTemperature.Metric.Value + ' °' + cityTemperature.Metric.Unit}</h4>
          <h4>{cityTemperature.Imperial.Value + ' °' + cityTemperature.Imperial.Unit}</h4>
        </div>
    </div>
  )
}
