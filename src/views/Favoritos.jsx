import React from 'react'
import Galeria from '../components/Galeria'

const Favoritos = () => {
  return (
    <div>
      <h1 className='titulo'> Fotos Favoritas </h1>

      <Galeria fav={true}></Galeria>
    </div>
  )
}

export default Favoritos
