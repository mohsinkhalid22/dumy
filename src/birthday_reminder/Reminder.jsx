import React from 'react';
import SingleBirthday from "./SingleBirthday";
import { data } from './data';

const Reminder = () => {
    const [bdays,setBdays] = useState(data);
    console.log(bdays); 
    return (
        <>
            <div className="container p-3 rounded-4 col-lg-6 mx-auto my-3 card">
                <h1 className="display-4 text-center ">
                    {data.length} Birthdays Today
                </h1>
                {data.map((birthdays) => {
                    return <SingleBirthday {...birthdays} />;
                })} 
                <div className="my-4 btn btn-dark" onClick={() => setBdays([])}>Remove All </div>
            </div>  



        </>

    
    );
};

export default Reminder;