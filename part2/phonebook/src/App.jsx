import { useState, useEffect } from 'react'
import { getAll, addContact, deleteContact } from './services'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const baseURL = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  useEffect(() => {
    getAll(baseURL)
      .then((response) => setPersons(response))
  }, [])

  const handleContactSubmission = event => {
    event.preventDefault()

    // if person already exists, inform user and don't submit
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the phonebook`)
      return
    }

    const newContact = {
      name: newName,
      number: newNumber
    }

    addContact(baseURL, newContact)
      .then(response => {
        setPersons([...persons, response])
        return response
      })
      .then(response => {
        setSuccessMessage(`${response.name} Successfully added`)
        setTimeout(() => {
          setSuccessMessage('')
        }, 3000);
      })

    setNewName('')
    setNewNumber('')
  }

  const handleContactDeletion = (id) => {
    const {name} = persons.find(person => person.id === id)
    if(confirm(`would you really like to remove ${name}`)) {
      deleteContact(`${baseURL}/${id}`)
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>

      {successMessage ? <span class='success-message'>{successMessage}</span> : ''}

      <h2>Add a new</h2>

      <PersonForm 
      handleContactSubmission={handleContactSubmission}
      name={newName}
      number={newNumber}
      setNewName={setNewName}
      setNewNumber={setNewNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={persons} handleDeletion={handleContactDeletion}/>
    </div>
  )
}

export default App