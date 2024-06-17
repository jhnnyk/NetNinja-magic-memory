import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped }) {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className='card'>
      <div className={flipped ? 'flipped' : ''}>
        <img src={card.src} className='front' alt="card front" />
        <img
          className='back'
          src='/img/cover.png'
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  )
}

