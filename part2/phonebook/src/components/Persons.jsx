
const DeleteButton = ({id, handleDeletion}) => <button onClick={() => handleDeletion(id)}>Delete</button>

const Persons = ({persons, handleDeletion}) => persons.map(({name, number, id}) => {
  return <li>{name}: {number} <DeleteButton handleDeletion={handleDeletion} id={id}/></li>
})

export default Persons