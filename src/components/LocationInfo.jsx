import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <article className='initial'>
        <h2 className='initial__subtitle'>{location?.name}</h2>
        <ul className='initial__list'>
            <li className='initial__list-item'><span className='initial__label'>Type: </span>{location?.type}</li>
            <li className='initial__list-item'><span className='initial__label'>Dimension: </span>{location?.dimension}</li>
            <li className='initial__list-item'><span className='initial__label'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default LocationInfo