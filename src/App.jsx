const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} - {props.exercises1} units</p>
      <p>{props.part2} - {props.exercises2} units</p>
      <p>{props.part3} - {props.exercises3} units</p>
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
  const part1 = 'IT317 - Project Management for IT'
  const exercises1 = 3
  const part2 = 'IT365 - Data Analytics 1'
  const exercises2 = 3
  const part3 = 'CSIT327 - Information Management 2'
  const exercises3 = 3

  const studentInfo = {
    fullName: 'John Chardy Crayo',
    courseCode: 'CSIT340',
    section: 'G8'
  }

  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App