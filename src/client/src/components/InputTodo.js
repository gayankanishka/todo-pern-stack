import React, { Fragment, useState } from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState('');

    async function onSubmitForm(e) {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch('http://localhost:5000/todos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            // TODO: need to find a better way to this
            window.location = '/';
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">PERN Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;
