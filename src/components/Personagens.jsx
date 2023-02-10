import React, { useState, useEffect } from 'react'

const Personagens = () => {
  let [count, setCount] = useState(1)
  const API = 'https://rickandmortyapi.com/api/'
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(API + `character/?page=${count}`)
      .then(resultado => resultado.json())
      .then(data => { setCharacter(data.results) })
    setLoading(false)

  }, [count])

  const nextPage = () => {
    if (count < 42) {
      setCount(count + 1)
      window.scrollTo(0, 0);
    }
  }

  const previousPage = () => {
    if (count > 1) {
      setCount(count - 1)
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      {loading ? <h1>Loading</h1> :
        <>
          <div className='Personagens'>
            {character.map(char =>
              <div className='card'>
                <div className='infos'>
                  <div>{char.status}</div>
                  <div>{char.species}</div>
                </div>
                <img src={char.image} alt='Imagem do Personagem' />
                <p key={char.id}>{char.name}</p>

              </div>

            )}
          </div>
          <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
        </>
      }
    </>

  )
}

export default Personagens