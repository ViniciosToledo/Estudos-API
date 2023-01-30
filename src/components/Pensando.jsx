/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

const Pensando = () => {

  const API = 'https://rickandmortyapi.com/api/'
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetch(API + `character/`)
      .then(resultado => resultado.json())
      .then(data => { setCharacter(data.results) })
  }, [])

  return (
    <div className='Pensando'>
      {character.map(char =>
        <div>
          <p key={char.id}>{char.name}</p>
          <img src={char.image} alt='Imagem do Personagem' />
        </div>

      )}
    </div>
  )
}

export default Pensando