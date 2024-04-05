

import css from './Options.module.css'


export default function Options({ clickFeedback, clickReset, reviews }) {
    
  const anyReviews = reviews.good !== 0 || reviews.neutral !== 0 || reviews.bad !== 0;
  return (
      <div className={css.btnCont}>
          <button className={css.btn} onClick={() => clickFeedback('good')}>Good</button>
          <button className={css.btn} onClick={() => clickFeedback('neutral')}>Neutral</button>
          <button className={css.btn} onClick={() => clickFeedback('bad')}>Bad</button>
          {anyReviews && <button className={css.btnReset} onClick={clickReset}>Reset</button>}
  </div>
 )
}