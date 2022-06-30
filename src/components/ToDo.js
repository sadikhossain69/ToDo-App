import React, { useState } from 'react';

const ToDo = () => {

    const [editTask, setEditTask] = useState(false)

    return (
        <section className='min-h-screen flex justify-center '>
            <div className="overflow-x-auto">
                <h2 className='text-center text-3xl font-semibold my-3 text-blue-600'>To-Do List</h2>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Finish Btn</th>
                            <th>Date</th>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover">
                            <th>2</th>
                            <td> <input type="radio" name="" id="" /> </td>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            {
                                editTask
                                    ?
                                    <>
                                        <td><button onClick={() => setEditTask(!editTask)} className='bg-green-600 text-white px-3 py-1 font-semibold'>Cancel</button></td>
                                    </>
                                    :
                                    <>
                                        <td><button onClick={() => setEditTask(!editTask)} className='bg-green-600 text-white px-3 py-1 font-semibold'>Edit</button></td>
                                    </>
                            }
                            
                        </tr>
                        <tr className="hover">
                            <th>2</th>
                            <td> <input type="radio" name="" id="" /> </td>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            {
                                editTask
                                    ?
                                    <>
                                        <td><button onClick={() => setEditTask(!editTask)} className='bg-green-600 text-white px-3 py-1 font-semibold'>Cancel</button></td>
                                    </>
                                    :
                                    <>
                                        <td><button onClick={() => setEditTask(!editTask)} className='bg-green-600 text-white px-3 py-1 font-semibold'>Edit</button></td>
                                    </>
                            }
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ToDo;