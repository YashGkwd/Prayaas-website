import React, { useState } from 'react'

function RegisterForm() {
  const [name, SetName] = useState("")
  const [cont, SetCont] = useState("")
  const [add, SetAdd] = useState("")
  const [wish, SetWish] = useState("")

  function postData(){
   
    fetch("http://localhost:5000/register",{
      method:"post",
      headers:{
         "Content-Type" : "application/json"
      },
      body:JSON.stringify({
          name:name,
          contact:cont,
         Address:  add,
         wish_description:wish
      })

      })
  .then(res=>res.json()).then(
      data=>{console.log(data)
          if(data.message){
             
          }
      }
      )
  }
  return (
  <>
  <div className="">
          <div  className="overlay"></div>
         

        <div tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> 
    <div className="modal-dialog" style={{overflowY:"scroll", maxHeight:"85%",  marginTop: "50px", marginBottom:"50px"}} > 
        <div className="modal-content"> 
            <div className="modal-header"> 
                <h3 className="modal-title"> Registration for Event name</h3> 
            </div> 
            <div className="modal-body">
            <div className="form-group">
  <label htmlFor="comment" className='label'>Name</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" onChange={(e)=>{SetName(e.target.value)}} value={name} id="colFormLabel" placeholder="Name"/>
  </div>
</div>

<div className="form-group">
  <label htmlFor="comment" className='label'>WhatsApp Contact:</label>
  <div className="col-sm-10">
    <input type="tel" className="form-control" id="colFormLabel" onChange={(e)=>{SetCont(e.target.value)}} value={cont} placeholder="contact no."/>
  </div>
</div>

<div className="form-group">
  <label htmlFor="comment" className='label'>Address:</label>
  <textarea className="form-control" rows="5" onChange={(e)=>{SetAdd(e.target.value)}} value={add} id="comment"></textarea>
</div>

<div className="form-group">
  <label htmlFor="comment" className='label'>Wish Description</label>
  <textarea className="form-control" rows="5" onChange={(e)=>{SetWish(e.target.value)}} value={wish} id="comment"></textarea>
</div>




              </div> 
            <div className="modal-footer">
            <button type="button" onClick={postData} className="submit-btn">Submit</button>
             </div> 
        </div> 
    </div> 
</div> 
</div> 

  </>
  )
}

export default RegisterForm
