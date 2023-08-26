import React from 'react';

const SingleBirthday = ({image,name,age}) => {
    return (
        <>
        <div className="d-flex gap-2 mb-3 bg-light p-2 border shadow">
            <div className="image">
                <img
                    style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        objectFit: "cover",
                    }}
                src={image} alt=""
                />
            </div>
            <div className="details">
                <h5>{name}</h5>
                <h6>{age} Years</h6>
            </div>
            <div className="button d-flex ms-auto align-self-center">
                    <button On Click="btn btn-dark">Remove</button>
            </div>
        </div>
        </>
    );
};

export  default SingleBirthday;             