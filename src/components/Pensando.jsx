import React from 'react'

const Pensando = () => {

  const API = 'https://rickandmortyapi.com/api/'
  const characters = []

  fetch(API+'character')
  .then(async function(res) {
    
    characters = await res.json().results
    
  })
  .catch(function(err) {
    console.log(err)
  });

  console.log(characters)

  return (
    <div>

    </div>
  )
}

export default Pensando