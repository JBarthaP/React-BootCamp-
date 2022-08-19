import { useState } from "react"

const Persons = ({ persons, filter }) => {
    return (
        <div>
            {persons.filter((person) => {
                if (filter === '') return true;
                else {
                    const nameToLowercase = person.name.toLowerCase()
                    return nameToLowercase.indexOf(filter) !== -1

                }
            }).map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>)
}

const Filter = ({ setFilter }) => {

    const handleFilter = (event) => {
        const filterToLowerCase = event.target.value.toLowerCase();
        setFilter(filterToLowerCase)
    }

    return (
        <div>
            <p>
                filter shown with
                <input onChange={handleFilter}></input>
            </p>
        </div>
    )
}

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleChange = event => setNewName(event.target.value)
    const handleChangeNumber = event => setNewNumber(event.target.value)

    /*
    The function 'some' helps as to know if the name already exists
    This function searchs if in the array is any object with the description
    callback function 
    */
    const handleSubmit = (event) => {
        event.preventDefault();
        const newObject = { name: newName, number: newNumber }
        const isAlreadyExists = persons.some((person) => person.name === newName)
        if (!isAlreadyExists) {
            const copy = [...persons, newObject]
            setPersons(copy);
        } else {
            alert(newName + ' is already added to phonebook')
        }
        setNewName('')
        setNewNumber('')
    }
    return (
        <form>
            <div>
                name: <input value={newName} onChange={handleChange} />
                <br></br>
                number: <input value={newNumber} onChange={handleChangeNumber} />
            </div>
            <div>
                <button type="submit" onClick={handleSubmit} >add</button>
            </div>
        </form>
    )
}


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [filter, setFilter] = useState('')



    return (
        <div>
            <h2>Phonebook</h2>

            <Filter filter={filter} setFilter={setFilter} />

            <h2>Add a new</h2>
            <PersonForm persons={persons} setPersons={setPersons} />

            <h2>Numbers</h2>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

export default App;