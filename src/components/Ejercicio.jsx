import React from 'react'
import { useState } from 'react'

export const Ejercicio = ({year}) => {

    const [yearNow, setYearNow] = useState(year)

    const siguiente = e => {
        setYearNow(yearNow + 1)
    }

    const anterior = e => {
        setYearNow(yearNow -1)
    }
  return (
    <div>
        <h2>Ejercicio con Eventos y useState</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>
        <p>
        <button type="button" onClick={siguiente} class="btn btn-secondary">Siguiente</button>
            &nbsp;
        <button type="button" onClick={anterior} class="btn btn-secondary">Anterior</button>
        </p>
    </div>
  )
}


