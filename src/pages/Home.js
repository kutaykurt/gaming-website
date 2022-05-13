import React, { useState, useEffect, useRef } from 'react'
import {getList} from '../components/List'
import './styles/Home.css'

function Home() {
  const [list, setList] = useState([])
  const [noOfElement, setNoOfElement] = useState(7)
  const loadMore = () => {
    setNoOfElement(7 + noOfElement)
    
  }
  
  const gamesRef = useRef();

  useEffect(() => {
    if(gamesRef.current)
    gamesRef.current.scrollIntoView({ behavior: 'smooth', block: "end", alignToTop: false, inline: "center",})
  })
  
  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        console.log(items);
        if(mounted) {
          setList(items)
        }
      })
    }, [])

  

  

  return (
    <div className='Home'>
      <div className='list'>
        {list.slice(0, noOfElement).map((item, index) => {
          return(
            <div className='list-box' key={index}>
              <img src={item.image} alt="Spiel-Bild" className='list-image'/>
              <h4>{item.name}</h4>
              <h4>{item.price}</h4>
            </div>
          )})}
      </div>
        
    <div className='load-more-button' ref={gamesRef}>
      <button onClick={() => loadMore()}>Load More</button>
    </div>

      

    </div>
  )
}

export default Home