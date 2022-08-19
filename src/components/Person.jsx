const Person = ({persons,filterPerson}) => {
    return (
        persons.filter(person => person.name.toLowerCase().includes(filterPerson))
    )
}

export default Person;