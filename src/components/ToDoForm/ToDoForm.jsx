import React, { useState } from 'react';
import PropTypes from 'prop-types';

ToDoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function ToDoForm(props) {

    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleOnChangeInput(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(!onSubmit) return;

        const formValue = {
            title: value,
        };
        onSubmit(formValue);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleOnChangeInput} />
        </form>
    );
}

export default ToDoForm;