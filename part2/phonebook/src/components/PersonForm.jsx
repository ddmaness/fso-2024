const DetailInput = ({label, state, setState}) => {
  return (
    <div>
      {label}: <input value={state} onChange={(e) => setState(e.target.value)} />
    </div>
  )
}

const PersonForm = ({name, number, handleContactSubmission, setNewName, setNewNumber}) => {
  return (
    <form onSubmit={handleContactSubmission}>
      <DetailInput label='name' state={name} setState={setNewName}/>
      <DetailInput label='number' state={number} setState={setNewNumber} />
      <div>
        <button type="submit">Add name</button>
      </div>
    </form>
  )
}

export default PersonForm