import React from 'react';
import "./Events.css"

function Events() {
  const a =2;
  return (
    <section>
        <div className="leftBox">
            <div className="content">
                <h1 >
                    Events 
                </h1>
                 
<p>
                    With the idea of imparting programming
                    knowledge, Mr. Sandeep Jain, an IIT
                    Roorkee alumnus started a dream,
                    GeeksforGeeks. Whether programming
                    excites you or you feel stifled,
                    wondering how to prepare for
                    interview questions or
                    how to ace data structures and
                    algorithms, GeeksforGeeks is a
                    one-stop solution. With every
                    tick of time, we are adding arrows
                    in our quiver. From articles on
                    various computer science subjects
                    to programming problems for practice,
                    from basic to premium courses, from
                    technologies to entrance examinations,
                    we have been building ample content
                    with superior quality. In a short
                    span, we have built a community of
                    1 Million+ Geeks around the world, 20,000+
                    Contributors and 500+ Campus Ambassadors
                    in various colleges across the nation.
                    Our success stories include a lot of
                    students who benefitted in their
                    placements and landed jobs at tech
                    giants. Our vision is to build a gigantic
                    network of geeks and we are only a
                    fraction of it yet.
                </p>
 
            </div>
        </div>
  
        <div className="events">
            <ul>
                <li>
                    <div className="time">
                        <h2>
                            15 <span>March</span>
                        </h2>
                    </div>
                    <div className="details">
                        <h3>
                            Where is the event happening?
                        </h3>
                         
<p>
                            With the idea of imparting programming
                            knowledge, Mr. Sandeep Jain, an IIT
                            Roorkee alumnus started a dream,
                            GeeksforGeeks. Whether programming
                            excites you or you feel stifled,
                            how to ace data structures and
                            algorithms, GeeksforGeeks is a
                            one-stop solution.
                        </p>
 
  
                        <a href="google.com">View Details</a>
                    </div>
                    {/* <div style="clear: both;"></div> */}
                </li>
  
                <li>
                    <div className="time">
                        <h2>
                            27 <span>May</span>
                        </h2>
                    </div>
                    <div className="details">
                        <h3>
                            Where is the event happening?
                        </h3>
                         
<p>
                            With the idea of imparting programming
                            knowledge, Mr. Sandeep Jain, an IIT
                            Roorkee alumnus started a dream,
                            GeeksforGeeks. Whether programming
                            excites you or you feel stifled,
                            how to ace data structures and
                            algorithms, GeeksforGeeks is a
                            one-stop solution.
                        </p>
 
                        <a href="#">View Details</a>
                    </div>
                    {/* <div style="clear:both;"></div> */}
                    <h1 style={{ paddingRight:a+'rem'}} >Hi there!</h1>
                    <div>
    		<h1 style={{ paddingRight:a+'rem'}} >Hi there!</h1>    	
    	</div>
                </li>
  
                <li>
                    <div className="time">
                        <h2>
                            12<span>August</span>
                        </h2>
                    </div>
                    <div className="details">
                        <h3>
                            Where is the event happening?
                        </h3>
                         
<p>
                            With the idea of imparting programming
                            knowledge, Mr. Sandeep Jain, an IIT
                            Roorkee alumnus started a dream,
                            GeeksforGeeks. Whether programming
                            excites you or you feel stifled,
                            how to ace data structures and
                            algorithms, GeeksforGeeks is a
                            one-stop solution.
                        </p>
 
  
                        <a href="google.com">View Details</a>
                    </div>
                    {/* <div style="clear:both;"></div> */}
                    <h1 style={{ paddingRight:a+'rem'}} >Hi there!</h1>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Events

