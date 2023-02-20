import React from "react";
import thankYou from '../images/icon-thank-you.svg'
import './css/Views.css';

function FiftView(){

    return(
        <div className="d-flex flex-column justify-content-center align-items-center mb-5">
            <img  className="mb-4" src={thankYou} />
            <h2>Thank you!</h2>
            <p className="text-wrap">Thanks for confirming your subscrption.
                We hope you have fun using our platform.
                If you ever need support, please feel free to email us
                at support@loremgaming.com.
            </p>

        </div>
    )
}

export default FiftView;