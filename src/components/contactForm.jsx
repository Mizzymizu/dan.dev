import { useState } from 'react';
import { validateEmail } from '';

function Contact () {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Used to reset the contact form to empty after form submission (pass or fail)
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    // Message submisson
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    return (
        <section>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                </div>
            </form>
        </section>
    )
}

export default Contact;