const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} - {props.exercises} units
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1.name} exercises={props.part1.exercises} />
      <Part name={props.part2.name} exercises={props.part2.exercises} />
      <Part name={props.part3.name} exercises={props.part3.exercises} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of total units: {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'CSIT340 - Industry Elective 1'
  
  const part1 = {
    name: 'IT317 - Project Management for IT',
    exercises: 3
  }
  const part2 = {
    name: 'IT365 - Data Analytics 1',
    exercises: 3
  }
  const part3 = {
    name: 'CSIT327 - Information Management 2',
    exercises: 3
  }

  const studentInfo = {
    fullName: 'John Chardy Crayo',
    courseCode: 'CSIT340',
    section: 'G8'
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App