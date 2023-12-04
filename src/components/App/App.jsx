// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { GlobalStyle } from 'styles';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { AppContainer, ContactsTitle, MainTitle } from './App.styled';
import {  useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

// const localStorageKey = 'contacts';
export const App = () => {
  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   const savedContacts = window.localStorage.getItem(localStorageKey);
  //   if (savedContacts) {
  //     setContacts(JSON.parse(savedContacts));
  //   }
  // }, [])
  
  // useEffect(() => {
  //   if (contacts.length > 0) {
  //     window.localStorage.setItem(localStorageKey, JSON.stringify(contacts));
  //   } else {
  //     window.localStorage.removeItem(localStorageKey);
  //   }
  // }, [contacts])

  // const addContact = ({name, number}) => {

  //   const newContact = {
  //     name,
  //     number,
  //     id: nanoid(),
  //   };

  //   const isExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  //   if (isExist) {
  //     return alert(`${name} is alredy in contacts.`);
  //   }

  //   setContacts(prevState => [...prevState, newContact]
  //   )
  // }

  // const changeFilter = e => {
  //   setFilter(e.currentTarget.value)
  // }

  // const deleteContact = (contactId) => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  // }

  //   const normalizedFilter = filter.toLowerCase().trim();

  //   const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
    <AppContainer>
      <MainTitle>Phonebook</MainTitle>
        <ContactForm />
        
        {contacts.length > 0 ? (
          <>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter />
            <ContactList />
          </>
        ) : null}

      <GlobalStyle />
    </AppContainer>
    );

}



