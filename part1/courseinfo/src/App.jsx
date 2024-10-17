const Header = ({course}) => (
  <h1>{course}</h1>
)

const Total = ({total}) => (
  <p>
    {total}
  </p>
)

const Part = ({name, exercises}) => (
  <p>
    {name} {exercises}
  </p>
)

const Content = ({courseInfo}) => {
  return (
    courseInfo.map((course, index) => (
      <Part key={index} name={course.name} exercises={course.exercises} />
    ))
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content courseInfo={course.parts}/>
      <Total total={course.parts.map(part => part.exercises).reduce((prev, current) => prev + current, 0)} />
    </div>
  )
}

export default App