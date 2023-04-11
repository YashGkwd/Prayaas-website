// import React, { useState } from 'react'
// import "./Contribute.css"
// import QnaCard from './QnaCard'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Contribute() {
//   const [amt,Setamt] = useState("");

//   const handleContribute = ()=>{
  
//     if(amt===""){
//       toast.warn("Please enter the amount")
//       return
//     }
//     if(isNaN(Number(amt)) || Number(amt)<10){
//       toast.warn("Amount can not be less than 10 Rs")
//       return
//     }
//     console.log( {name:"yuvraj", amount:amt})
//     fetch("http://localhost:5000/contribute/pay",{
//       method:"post",
//       headers:{
//          "Content-Type" : "application/json"
//       },
//       body:JSON.stringify({
//           name:"yuvraj",
//         amount:amt
//       })

//       })
//   .then(res=>res.json()).then(

//       data=>{if(data.link){
//         console.log(data.link)
//       window.location.href=data.link}

//       else if(data.error){
//         console.log(data.error)
//       }
//         })
//   }
//   return (
//     <>
//       <div className='contribute-cont'>
//         <ToastContainer/>
//         <div className='contribute-text'>
//         <h2  className='title-contribute'>Contribute now </h2>
//         <p className='para-contribute'>your one small help can bring a big change in the society ansdfelrgerg erg erg edrthg er etyg eth eth ....</p>
//         <div className="row g-2 align-items-center">
//       <div className="col-auto">
//         <label for="inputAmount"  className="amount">Amount</label>
//       </div>
//       <div className="col-auto">
//         <input type="number" onChange={(e)=>{Setamt(e.target.value)}} placeholder='Amount' value={amt} className="form-control" />
//       </div>
//       </div>
  
//       <button className="btn btn-primary btn-lg " onClick={handleContribute}>Contribute </button>      
//         </div>
//       </div>
//       <QnaCard question="Why should we Donate?" ans="Our donations can impact a lot on someone's life in our society. Your small donation has the power to contribute hugely in bringing smiles on faces. Your act of donation is going to inspire other people in our society and the next generation. Helping others also helps individuals to accumulate good values, humanity and kindness among themselves.In such busy life Donation gives opportunity to show gratitude. "/>
//       <QnaCard color={true} question="What kind of donations can be done by any individual?" ans="Donating also helps the donors in multiple ways. It helps in keeping mental health good as the act of donation gives a feeling of happiness. Donation camps in schools and college helps in inculcating moral values among  th youth who are the future of our nation."/>
//       <QnaCard question="What kind of donations can be done by any individual?" ans="Donation impacts the same if it is any form. Donation can be money, toys, books, food, medicine , etc  directly to needy or through any NGO.  Donating your energy for social causes like organising any social event or participating in  any of them like tree plantation, clean Indian Mission, etc. is also counted as a valuable donation which is termed as Shram Daan. Blood Donation is also a great way to add your contribution in betterment of the lives of people."/>
     
//     </>
//   )
// }

// export default Contribute
