import { Formik} from 'formik';
import * as Yup from 'yup';
import { BtnAddContact, ErrorMsg, FormLabel, StyledField, StyledForm } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
    number: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
        message: 'Invalid Phone Number!',
        excludeEmptyString: false,
    })
    .required('Phone number is required!')
    .max(15, 'Invalid phone number!'),
});


export const ContactForm = () => {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
    
    const handleSubmit = newContact => {


    const isExist = contacts.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

    if (isExist) {
        return alert(`${newContact.name} is alredy in contacts.`);
    }

        dispatch(addContact(newContact));
    
    }
    
    
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const name = e.target.elements.name.value;
    //     const number = e.target.elements.number.value;

    // const isExist = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    // if (isExist) {
    //     return alert(`${name} is alredy in contacts.`);
    // }

    // dispatch(addContact({ name, number }));
    // }

    return (
        <Formik
        initialValues={{
            name: '',
            number: '',
        }}
        
        validationSchema={validationSchema}
        
        onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.resetForm();
        }}
        >
        <StyledForm>
            <FormLabel htmlFor="name">Name</FormLabel>
            <StyledField type="text" name="name" id="name" autoComplete="off" placeholder="John Smith" />
            <ErrorMsg name="name" component="div" />

            <FormLabel htmlFor="number">Number</FormLabel>
            <StyledField type="tel" name="number" id="number" autoComplete="off" placeholder="+380..." />
            <ErrorMsg name="number" component="div" />

            <BtnAddContact type="submit">Add contact</BtnAddContact>
        </StyledForm>
    </Formik>
)
} 
    
    
