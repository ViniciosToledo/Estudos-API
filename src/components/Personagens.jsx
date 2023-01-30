/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'

const Personagens = () => {
  let [count, setCount] = useState(1)
  const API = 'https://rickandmortyapi.com/api/'
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetch(API + `character/?page=${count}`)
      .then(resultado => resultado.json())
      .then(data => { setCharacter(data.results) })
  })

  const nextPage = () => {
    if (count < 42) {
      setCount(count + 1)
    }
  }

  const previousPage = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div className='Personagens'>
        {character.map(char =>
          <div>
            <p key={char.id}>{char.name}</p>
            <img src={char.image} alt='Imagem do Personagem' />
          </div>

        )}
      </div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </>

  )
}

export default Personagens