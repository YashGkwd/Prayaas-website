import React from 'react'
import "./Contribute.css"
function Contribute() {
  
  return (
    <>
      <div className='contribute-cont'>
        <div className='contribute-text'>
        <h2  className='title-contribute'>Contribute now </h2>
        <p className='para-contribute'>your one small help can bring a big change in the society ansdfelrgerg erg erg edrthg er etyg eth eth ....</p>
        <div className="row g-2 align-items-center">
      <div className="col-auto">
        <label for="inputAmount" className="amount">Amount</label>
      </div>
      <div className="col-auto">
        <input type="number"  className="form-control" />
      </div>
      </div>
  
      <button className="btn btn-primary btn-lg " type="submit">Contribute </button>
        
        </div>

      
      </div>
    </>
  )
}

export default Contribute
