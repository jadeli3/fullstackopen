const Header = ({course}) => {
  return(
    <div>
      <p>Name of the course: {course}</p>
    </div>
  )
}

const Part = ({ part_num, exercises }) => {
  return(
    <div>
      <p>The content: {part_num}, the number of exercises: {exercises}</p>
    </div>
  )
}

const Content = ({ part_1, part_2, part_3, exercises_1,exercises_2,exercises_3}) => {
  return(
    <div>
      <Part part_num = {part_1} exercises = {exercises_1}/>
      <Part part_num = {part_2} exercises = {exercises_2}/>
      <Part part_num = {part_3} exercises = {exercises_3}/>
    </div>
  )
}

const Total = ({total}) => {
  return(
    <div>
      <p>Total number of exercises: {total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part_1={part1} exercises_1={exercises1} 
        part_2={part2} exercises_2={exercises2}
        part_3={part3} exercises_3={exercises3}
      />


      <Total total = {exercises1+exercises2+exercises3} />
    </div>
  )
}

export default App