import React from 'react';
import {connect} from 'react-redux';

const List = (props) => {
    return (
       <ul>
            {
                props.todos.map((todo, i) => (
                    <li key = {i}>
                        {todo.message}
                    </li>
                ))
            }
       </ul>
    )
}

const mapStateToProps = (state) => ({
   todos : state.todos.data,
});

export default connect(mapStateToProps)(List);
