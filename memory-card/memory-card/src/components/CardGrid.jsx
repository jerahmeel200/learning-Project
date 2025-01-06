import React from 'react'
import Card from './Card'

const CardGrid = ({cards, onClickCard}) => {
  return (
    <dive className="grid grid-rows-4 grid-flow-col gap-4">
            {cards.map((card)=>(
                <Card card={card} onClick={onClickCard}/>
            ))}
    </dive>
  )
}

export default CardGrid