import Course from "./Course";
import { useState } from "react";

function Courses({courses,removeCourse}) {
   const [index, setIndex] = useState(0);
   const {content,title,price} =courses[index]
   
   return ( 
   <div className="courseMainDiv">
     <div>
        <h2>Kurslarım</h2>            
     </div>
        <div className="cardDiv">
        <div className="card">
        <div className="cardTitlePrice">
          <h2 className="cardTitle">{title}</h2>
          <h4 className="cardPrice">{price}TL</h4>
        </div>
        <p>{content}</p>
        
     </div> 
         {
            // courses.map((course)=>{
            //    return(
            //         <Course  key={course.id} {...course} removeOneCourse= {removeCourse}/>
            //         // course={course}
            //    )
            // })
         }
        </div>
   </div> );
}

export default Courses;