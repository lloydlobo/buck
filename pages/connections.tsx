import Layout from "../components/Layout";
import { SetStateAction, useState } from 'react';

type Contact = { name: string, email: string }

const contacts: Contact[] = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

// https://codesandbox.io/s/sqenxp?file=/App.js&utm_medium=sandpack
// https://beta.reactjs.org/learn/managing-state#preserving-and-resetting-state
export default function ConnectionsScreen({
}) {
    const [to, setTo] = useState(contacts[0]);

    return (
        <>
            <Layout title="Connections">
                <div className="grid place-content-center mt-8 gap-4">
                    <div className="card bg-base-300 p-8">
                        <ContactList
                            contacts={contacts}
                            selectedContact={to}
                            onSelect={(contact: SetStateAction<Contact>) => setTo(contact)}
                        />
                        <Chat contact={to} />
                    </div>
                </div>
            </Layout>
        </>
    )
}

type ContactList = {
    selectedContact?: Contact,
    contacts: Contact[],
    onSelect: (contact: SetStateAction<Contact>) => void,
}

function ContactList({
    selectedContact,
    contacts,
    onSelect
}: ContactList): JSX.Element {
    return (
        <section className="contact-list">
            <ul className="flex gap-4 mb-4 input-group ">
                {contacts.map(contact =>
                    <li key={contact.email}>
                        <button
                            className="btn"
                            onClick={() => {
                                onSelect(contact);
                            }}
                        >
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    );
}

function Chat({ contact }: { contact: Contact }): JSX.Element {
    const [text, setText] = useState('');

    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={e => setText(e.target.value)}
                className={'mb-4 h-[16ch] w-full py-4 px-2 bg-base-200'}
            />
            <br />
            <button className="btn btn-primary w-full">
                Send to {contact.email}
            </button>
        </section>
    );
}
