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
    courseInfo.map(({id, name, exercises}) => (
      <Part key={id} name={name} exercises={exercises} />
    ))
  )
}

const Course = ({course}) => {
  const {name, parts} = course
  const total = parts.reduce((acc, cur) => acc + cur.exercises, 0)
  return (
    <div>
      <Header course={name} />
      <Content courseInfo={parts} />
      <Total total={`Total of ${total} exercises`} />
    </div>
  )
}

export default Course