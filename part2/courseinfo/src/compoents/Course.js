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
const Part=(props)=>{
  return(
    <div>

    <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )

}
const Content=(props)=>{
  
  return(
    <div>
    <Part  part={props.parts[0]} />
    <Part  part={props.parts[1]}/>
    <Part  part={props.parts[2]}/>
    </div>
  )
  

}
const Total=(props)=>{
  return(
    <div>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </div>
  )

}
export default Course