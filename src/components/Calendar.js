import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {

    const [selected, setSelected] = useState(new Date())

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    console.log(footer)

    return (
        <section className='flex justify-center items-center flex-col md:flex-row'>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
            />
            <div className='space-y-2'>
                <input className='input input-bordered' type="text" placeholder='Add Your Task' /> <br />
                <button className='bg-green-600 text-white px-5 py-1 rounded hover:scale-125 duration-300 ease-in-out'>Add</button>
            </div>
        </section>
    );
};

export default Calendar;