function Course({id,content,title,price,removeOneCourse}) {
    
     return (
     <div>
        <div className="cardTitlePrice">
          <h2 className="cardTitle">{title}</h2>
          <h4 className="cardPrice">{price}TL</h4>
        </div>
        <button className="cardDeleteBtn" onClick={()=>removeOneCourse(id)}>Sil</button>
     </div>  
     );
}

export default Course;