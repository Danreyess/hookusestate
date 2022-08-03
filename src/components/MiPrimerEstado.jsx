import React from 'react'
import { useState } from 'react'

export const MiPrimerEstado = () => {

/*const nombre = "Daniel"
    const cambiarNombre = e => {
        nombre = "Daniel Reyes"
    } */

    const [nombre, setNombre] = useState("Daniel Reyes")

    const cambiarNombre = e => {
        setNombre("Daniel")
    }
    
  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        <button type="button" onClick={cambiarNombre} class="btn btn-secondary">Cambiar</button>
    </div>
  )
}
