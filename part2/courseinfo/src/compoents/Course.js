import React from 'react'
const Course=({course})=>{
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total  parts={course.parts}/>
    </div>

  )

}


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Part=({parts})=>{
  return(
    
    <div>
        {parts.map(part=><p key={part.id}>{part.name} {part.exercises}</p>)}

    
    </div>
  )

}
const Content=(props)=>{
  
  return(
    <div>
    <Part  parts={props.parts} />
    
    </div>
  )
  

}
const Total=({parts})=>{
  return(
    <div>
      <p>
        Totals of {parts.reduce((acc,p)=>acc+p.exercises,0)} exercises 
      </p>
    </div>
  )

}
export default Course