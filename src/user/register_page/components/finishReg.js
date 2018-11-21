import React from 'react';
import './finishReg.scss';
import { NavLink } from 'react-router-dom';

const finishReg = () => {
    return (
        <div className="text-center" id="divsuccess">
            <div className="sucesscircle m-auto">
                <i class="fas fa-check"></i>
                <h4 className="mt-2">Successfully</h4>
            </div>
        </div>
    );
};

export default finishReg;