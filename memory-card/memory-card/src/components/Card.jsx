import React from 'react'

const Card = ({card, onClick}) => {
  return (
    <div onClick={()=> onClick(card.id)}>
           <img src={card.images.downsized.url} alt={card.title} />
           <p>{card.title}</p>
        
    </div>
  )
}

export default Card