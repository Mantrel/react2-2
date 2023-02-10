import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import MiContexto from '../context/MiContexto.jsx';
import { Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';
import { Container } from 'react-bootstrap';

const Foto = ({ fav, foto }) => {
  const { fotos, setFotos } = useContext(MiContexto);

  const setFavorito = (id) => {
    const fotoClick = fotos.findIndex((f) => f.id === id);
    fotos[fotoClick].liked = !fotos[fotoClick].liked;
    setFotos([...fotos]);
  }

  return (


    
      <button className='butonsito'>
        <div class="contenedor">
          <img src={foto.src.small} />


          {!fav && <Button onClick={() => setFavorito(foto.id)} variant="transparent">
            <FaHeart style={{ color: foto.liked ? "red" : "white" }} className='iconoheart'></FaHeart>
            <div class="texto-encima">{foto.alt}</div>
          </Button>}
        </div>
      </button>
    







  )
}

export default Foto
