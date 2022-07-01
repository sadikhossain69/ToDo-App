import React from 'react';

const SingleToDo = ({task}) => {

    const {date, taskInput, index } = task

    return (
        <>
            <tr className="hover">
                            <th>{index}</th>
                            <td> <p><input type="radio" name="" id="" /></p> </td>
                            <td>{date}</td>
                            <td>{taskInput}</td>
                            <td><button>Edit</button></td>
                        </tr>
        </>
    );
};

export default SingleToDo;