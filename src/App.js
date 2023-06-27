import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
    isFavorite: false,
  }

  onAddContact = event => {
    event.preventDefault()
    const {  name, mobileNo } = this.state
    
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    }
    this.setState(prev => ({
      contactsList: [...prev.contactsList, newContact],
      name: '',
      mobileNo: '',
    }))
  }

  getFavoriteContact = id => {
  
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  deleteSelectedContact = (id) => {
    const { contactsList } = this.state
    const result = contactsList.filter(eachContact => (
      eachContact.id!==id
    ))
    this.setState({contactsList:result})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
               type="text"
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
              required
            />
            <input
             type="tel"
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
              required
            />
            <button
              type="submit"
              className="button"
              onAddContact={this.onAddContact}
            >
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                getFavoriteContact={this.getFavoriteContact}
                deleteSelectedContact={this.deleteSelectedContact}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
