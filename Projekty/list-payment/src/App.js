import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import Multiselect from 'multiselect-react-dropdown';



class App extends Component {
  state = {
    select: 'name',
    firstName: '',
    lastName: '',
    department: '',
    salary: 0,
    currency: 'usd',
    searchFirstName: '',
    searchLastName: '',
    users: [
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        department: "IT",
        salary: 3000,
        currency: "usd"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        department: "IT",
        salary: 3000.5,
        currency: "usd"
      },
      {
        id: 3,
        firstName: "Bob",
        lastName: "Colman",
        department: "Sales",
        salary: 9000,
        currency: "usd"
      },
      {
        id: 4,
        firstName: "Barbara",
        lastName: "O'Conor",
        department: "Sales",
        salary: 4000,
        currency: "usd"
      },
      {
        id: 5,
        firstName: "Adam",
        lastName: "Murphy",
        department: "Administration",
        salary: 2000,
        currency: "usd"
      },

    ],
    usersSearch: [

    ],
    selectedValues: [],
    selectDep: [

    ],

  }

  componentDidMount() {
    const users = this.state.users
    const department = users.map(user => ({ id: user.id, name: user.department }))
    function getUnique(arr, comp) {

      return arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
    }
    let finalDepartament = getUnique(department, 'name');
    this.setState({
      options: finalDepartament
    })

  }


  handleChange = (e) => {
    // console.log(e.target.type)
    // console.log(e.target.name)
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value,

    })

  }

  handleSubmit = (e) => {
    e.preventDefault()
    const users = [...this.state.users]
    let departments = users.map(user => ({ id: user.id, name: user.department }));
    const name = this.state.firstName;
    const lastName = this.state.lastName
    const department = this.state.department
    const salary = this.state.salary
    const currency = this.state.currency
    let id = users.length + 1
    users.push({ id: id, firstName: name, lastName: lastName, department: department, salary: salary, currency: currency })
    this.setState({
      users,
      id: '', firstName: '', lastName: '', department: '', salary: 0, currency: 'usd'
    }
    )
    function getUnique(arr, comp) {
      return arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
    }
    const finalDepartament = getUnique(departments, 'name');
    this.setState({
      options: finalDepartament
    })

  }

  onSelect = (selectedList, selectedItem) => {
    let selectedItems = selectedList

    // console.log(selectedItems)
    const getOption = (Array.isArray(selectedItems) ? selectedItems.map(x => x.name) : [])

    console.log(getOption)
    this.setState({
      selectedValues: getOption,
      
    })
  }

  // onRemove(selectedList, removedItem) {
  //   let selectedItems = selectedList 
  //   const getOption = (Array.isArray(selectedItems)?selectedItems.map(x =>x.name):[])

  //     console.log(getOption)
  //     this.setState({
  //       selectedValues : getOption
  //     })
  // }



  handleSubmitSearch = (e) => {
    e.preventDefault()
    const searchFirstName = this.state.searchFirstName
    const searchLastName = this.state.searchLastName
    const usersSearch = [...this.state.usersSearch]
    const users = [...this.state.users]
    const selecdedDepartaments = [...this.state.selectedValues]
    // console.log(selecdedDepartaments, "dddd")

    function getUnique(arr, comp) {
      return arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e]).map(e => arr[e]);
    }
    if (searchFirstName) {
      const nUsers = users.filter((user) => user.firstName.toLowerCase() === `${searchFirstName}`.toLowerCase())
      let finalRes = getUnique(nUsers, 'id');
      this.setState({
        usersSearch: finalRes,
        searchFirstName: ''
      })
    }
    if (searchLastName) {
      const lUsers = users.filter((user) => user.lastName.toLowerCase() === `${searchLastName}`.toLowerCase())
      let finalRes = getUnique(lUsers, 'id');
      // console.log("finalResults : ", finalRes);
      this.setState({
        usersSearch: finalRes,
        searchLastName: ''
      })
    }
    if (searchLastName && searchFirstName ){
      const allUsers = users.filter((user) => user.lastName.toLowerCase() === `${searchLastName}`.toLowerCase() && user.firstName.toLowerCase() === `${searchFirstName}`.toLowerCase())
      console.log(allUsers)
      let finalRes = getUnique(allUsers, 'id');
      // console.log("finalResults : ", finalRes);
      this.setState({
        usersSearch: finalRes,
        searchLastName: '',
        searchFirstName: ''
      })
    }
    if ((searchLastName && searchFirstName) && selecdedDepartaments.length > 0) {
      let tempItem = selecdedDepartaments

      const allUsers = users.filter((user) => user.lastName.toLowerCase() === `${searchLastName}`.toLowerCase() && user.firstName.toLowerCase() === `${searchFirstName}`.toLowerCase() && tempItem?.includes(user.department))
      console.log(allUsers)
      let finalRes = getUnique(allUsers, 'id');
      // console.log("finalResults : ", finalRes);
      this.setState({
        usersSearch: finalRes,
        searchLastName: '',
        searchFirstName: ''
      })
    }
    if ((!searchLastName && !searchFirstName) &&selecdedDepartaments.length > 0) {
      let tempItem = selecdedDepartaments

      const allUsers = users.filter((user) => tempItem?.includes(user.department))
      console.log(allUsers)
      let finalRes = getUnique(allUsers, 'id');
      // console.log("finalResults : ", finalRes);
      this.setState({
        usersSearch: finalRes,
        searchLastName: '',
        searchFirstName: ''
      })
    }

  }

  render() {


    return (
      <div className="App">
        <form className='form' onSubmit={this.handleSubmit}>
          <label htmlFor="user">Name:
            <input type="text" id='firstName' name="firstName" value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <label htmlFor="user">Last Name:
            <input type="text" id='lastName' name="lastName" value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <label htmlFor="user">Departament:
            <input type="text" id='department' name="department" value={this.state.department} onChange={this.handleChange} />
          </label>
          <label htmlFor="user">Salary:
            <input type="number" step="0.01" min="0" id='salary' name="salary" value={this.state.salary} onChange={this.handleChange} />
          </label>
          <label>
            <select id="currency" name="currency" value={this.state.currency} onChange={this.handleChange}>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
            </select>
          </label>
          <button >Dodaj</button>
          <UserList users={this.state.users}></UserList>
        </form>
        <div>
          <form className='form' onSubmit={this.handleSubmitSearch}>
            <label htmlFor="user">Name:
              <input type="text" id='searchFirstName' name="searchFirstName" value={this.state.searchFirstName} onChange={this.handleChange} onClick={this.handleUsersFilter} />
            </label>
            <label htmlFor="user">Last Name:
              <input type="text" id='searchLastName' name="searchLastName" value={this.state.searchLastName} onChange={this.handleChange} />
            </label>
            <label>Departamen:
              <Multiselect style={{
                multiselectContainer: { width: "200px", margin: "0 auto" }
              }
              }
                isMulti
                options={this.state.options} // Options to display in the dropdown
                selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.onSelect}// Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown option
                onRemove={this.onRemove}
             
              />
            </label>
            <button type='submit' >Szukaj</button>
            <UserList users={this.state.usersSearch}></UserList>
          </form>


        </div>


      </div>
    );
  }
}

export default App;
