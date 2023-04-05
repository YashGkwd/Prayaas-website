import React,{useState} from 'react';
import EventCard from './EventCard';
import "./Events2.css"
import bg1 from "../../assets/background1.jpg"
import RegisterForm from './RegisterForm';

function Events() {
  const [ reg, Setreg] = useState(false)
  function getReg(x){
    Setreg(x)
    console.log(x)
  }
 
  return (
    <>
    <div className='event-cont ' >
   { reg && <RegisterForm getReg={getReg}/>}
       <h2 className='event-title'>EVENTS at PRAYAAS</h2>
    </div>
 
    <EventCard img={bg1} register={true} getReg={getReg} 
     details={{name:"Daan Utsav", date:"12/4/23", 
    para:"Daan Utsav, also known as the Joy of Giving Week, is  an event conducted by the NGO Goonj all over India. It runs for eight days every year. It is an initiative where people are encouraged to donate their old, usable belongings. This material is then distributed among needy people. The Prayaas Club helps the NGO conduct it in Nagpur.Before the event begins, the members of the Prayaas Club distribute pamphlets in parks and other public places, telling people more about the event and urging them to come forward and donate. About 20 centres are set up across Nagpur, two in VNIT, to receive the donated material. 	At the end of the event, the collected material is sorted into different categories. These include Men's clothes, Women's clothes, Children's clothes, Utensils, Blankets and many more. This sorted material is then sent to Goonj's headquarters in Delhi. From there, the material is placed in kit bags and distributed among needy people."}}  />
   
   <EventCard img={bg1} register={true} getReg={getReg} 
     details={{name:"Blood Donation", date:"12/4/23", 
    para: "We PRAYAAS club conduct BLOOD DONATION camp in our institute every year on the occasions of Republic day and Independence day in collaboration with NMC Blood Bank, Government medical college, and Indira Gandhi Medical college which are known to be the prominent medical colleges in the city. This is our effort to contribute our best towards saving lives of people. VNIT students, professors and nagpurkars donate blood as a sign of patriotism and kindness on these days."}}       />

    <EventCard img={bg1} register={true} getReg={getReg} 
     details={{name:"Guest Lecture", date:"12/4/23", 
    para: "some"}}       />

    <EventCard img={bg1} register={true} getReg={getReg} 
     details={{name:"Vigyaasa", date:"12/4/23", 
    para: "Vigyaasa is an initiative by the Prayaas Club to instill curiosity in young minds and provide a platform for underprivileged students to showcase their problem-solving skills. The students from government schools visit VNIT with their projects, and the institute rewards the group with the best project. A few days before the event, the club members visit government schools near the college, meet the principals, and explain the initiative. The interested students are then interviewed, and the selected students are divided into groups. Some students from the club act as 'mentors' for the students participating from the school. These mentors visit the school regularly, helping the students with the scientific concepts, checking on the model progress, and motivating the students. The club invites Honourable Director of VNIT and other professors and Dean's to attend the program and grade the projects. On the day of the event, the mentors escort the participating students to the college with their projects. Here, they explain the ideas behind their projects and answer the questions that the grading team asks. The program ends with the announcement of the winners and a prize distribution ceremony. The students are then given a college tour before being escorted back to their schools."}}       />

    <EventCard img={bg1} register={true} getReg={getReg} 
     details={{name:"Wish Tree", date:"12/4/23", 
    para: "We all grown up with the infinite wishes in our minds. Some of them were fulfilled and some are the one for which we are working hard. At the initial stages of our life we have got immense support from our parents to fullfill our wishes and we are fortunate for that. But not everyone in the society get that amount of support and belief. For them we the Prayas team of VNIT, Nagpur are trying to help to know the wishes and fulfilling them with the best of our capabilities.Prayaas club members go to various NGOs, Orphanages, government schools etc to  interact with the children, know their wishes ,collect them with their names and other details and Hang the Wish cards on Our 'Wish tree'.The wishes kept hanging on the tree for people, professors, students of our college read them and whoever is wanting to help them they Fulfill the wish.Prayaas team always work their best for helping the society and spreading the social awareness. Wish tree is one such event of Prayas of helping the society."}}       />

    <EventCard img={bg1} register={true} getReg={getReg} 
     details={{name:"Tree plantation", date:"12/4/23", 
    para: "some"}}       />
   
    </>
  )
}

export default Events

