import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: ' 040-123456' },
    { name: 'Ada Lovelace', number: ' 39-44-5323523' },
    { name: 'Dan Abramov', number: ' 12-43-234345' },
    { name: 'Mary Poppendieck', number: ' 39-23-6423122' }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPerson , setFilterPerson ] = useState('')


  const addPerson = (event) => {
    event.preventDefault();
    if(persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }else{
      const newPerson = {
        name: newName,
        number: ' ' + newNumber,
      }
      setPersons(persons.concat(newPerson));
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with <input value={filterPerson} onChange={event => setFilterPerson(event.target.value)} /></p>
      <h3>add a new</h3>
      <form>
        <div>
        name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons
        .filter(person => person.name.toLowerCase().includes(filterPerson))
        .map(person => <div key={person.number}>{person.name}{person.number}</div>)
        }
    </div>
  )
}

export default App
