
import Description from '../Description/Description'
import Options from '../Options/Options'


import css from './App.module.css'

export default function App(){
  return (
    <div className={css.container}>

      <Description />
      <Options />
      <Options />
      <Options />

    </div>
  )

}
