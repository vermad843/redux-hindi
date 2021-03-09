import React from 'react';
import {connect} from 'react-redux';

const AddTodo = (props) => {
    return (
        <form 
            onSubmit={(e) => {
            e.preventDefault();
            let input = e.target.userInput.value;
            console.log(input);
        }}>
             <input type="text" name="userInput"/>
             <button>Submit</button>
        </form>
    )
}

export default connect()(AddTodo);
