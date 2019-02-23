import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    people: [
      {
        id: 1,
        name: "John",
        surname: "Doe",
        phone: "123-456-789",
        isFavorite: false
      },
      {
        id: 2,
        name: "Steve",
        surname: "Stevens",
        phone: "987-654-321",
        isFavorite: true
      }
    ],
    nameInputValue: "",
  };

toggleFavorite = personId=>{
  this.setState({
    people: this.state.people.map(person => 
      person.id !== personId? person : {...person, isFavorite : !person.isFavorite})
  }) 
}

removePerson = personId => {
  this.setState({
    people: this.state.people.filter(person => person.id !== personId),
  });
};
handleNameChange = (event) =>{
  this.setState({
    nameInputValue: event.target.value
  })
}
addPerson = () => {
  this.setState({
    people: this.state.people.concat({
      id: Date.now(),
      name: this.state.nameInputValue,
      surname: "",
      phone: "",
      isFavorite: false
    }),
    nameInputValue: ""
  })
}
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        <form>
          <input onChange={this.handleNameChange} value={this.state.nameInputValue}></input>
          <div onClick={this.addPerson}>add</div>
        </form>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
            {this.state.people.map(person => (
              person.isFavorite ? 
              <tr className="favorite" key={person.id}>
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.phone}</td>
              <td>
                <button onClick={()=>this.toggleFavorite(person.id)}>Favorite</button>
                <button onClick={()=>this.removePerson(person.id)}>Delete</button>
              </td>
              </tr>
              :
              <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.phone}</td>
              <td>
                <button onClick={()=>this.toggleFavorite(person.id)}>Favorite</button>
                <button onClick={()=>this.removePerson(person.id)}>Delete</button>
              </td>
              </tr>

              
              
          
            ))}
            </tbody>
            </table>
        </header>
      </div>
    );
  }
}

export default App;
