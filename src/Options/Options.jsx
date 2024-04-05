
import { useState } from 'react'
import css from './Options.module.css'
export default function Options(){

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1)
  }
  return (
    <button onClick={handleClick} className={css.button}>Clicks : {clicks}</button>
  )
}