
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./styles/residentinfo.css"



const ResidentInfo = ({url}) => {
    const [resident, setresident] = useState()
    useEffect(() => {
        axios.get(url)
        .then(res => setresident(res.data))
        .catch(err => console.log(err))
    },[])
    
    console.log(resident)
  
  return (
    <article className='card'>
        <header className='card__header'>
        <img className='card__img' src={resident?.image} alt="" />
        <div className='circle__container'>
            <span className={`circle ${resident?.status}`}></span>
            <span className='card__status'>{resident?.status}</span>
        </div>
        </header>
        <section className='card__body'>
            <h3 className='card__name'>{resident?.name}</h3>
            <hr className='hr' />
            <ul className='card__list'>
                <li className='card__item'><span className='card__span'>specie</span> {resident?.species}</li>
                <li className='card__item'><span className='card__span'>origin</span> {resident?.origin.name}</li>
                <li className='card__item'><span className='card__span'>episodie where appear</span> {resident?.episode.length} </li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentInfo