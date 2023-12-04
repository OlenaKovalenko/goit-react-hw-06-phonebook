import { ContactItem } from "components/ContactItem/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    // const dispatch = useDispatch();

    return (
        <ul>
            {contacts.map(contact => (
                <ContactItem key={contact.id} />
            ))}
        </ul>
    )
};