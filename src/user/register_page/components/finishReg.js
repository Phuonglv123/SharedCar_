import React from 'react';
import './finishReg.scss';
import { NavLink } from 'react-router-dom';

const finishReg = () => {
    return (
        <div className="text-center" id="divsuccess">
            <i className="far fa-check-circle aaaa"></i>
            <h2 className="mt-4">Registered successfully</h2>
        </div>
    );
};

export default finishReg;