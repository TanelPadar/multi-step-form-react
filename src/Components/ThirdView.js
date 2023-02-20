import React, {useState} from 'react';
import './css/Views.css';
import pro from "../images/icon-pro.svg";

function ThirdView({ view, setView, billing, checked, setChecked }) {

    const handleBack = () => {
        setView({ ...view, view3: false, view2: true});
    }

    const handleNext = () => {
        setView({...view, view3 : false, view4 : true});
    }

    console.log(view)

    return (
        <div>
        <div className="d-block">
            <div className="header">Pick add-ons</div>
            <div className="paragraph-text mb-4">Add-ons help you enchance your gaming experience.</div>
            <div className="add-ons-card border rounded align-items-center d-flex justify-content-between">
                    <div className="d-flex px-3">
                        <div className="px-2">
                        <label>
                            <input onChange={() => setChecked({...checked, ServiceCompleted : !checked.ServiceCompleted})}
                                   type="checkbox"
                                   id="service"
                                   checked={checked.ServiceCompleted}/>
                                <span className="checkmark"></span>
                        </label>
                        </div>
                        <div>
                        <p className="service-info">Online Service</p>
                        <p className="service-desc">Access to multiplayer games</p>
                        </div>
                    </div>
                    <div className="service-price px-3">{billing === true ?
                        '+$10/yr' :
                        '+$1/mo'
                    }</div>
            </div>
            <div className="add-ons-card border rounded align-items-center d-flex justify-content-between my-2">
                <div className="d-flex px-3">
                    <div className="px-2">
                        <label>
                            <input onChange={() => setChecked({...checked, StorageCompleted : !checked.StorageCompleted})}
                                   type="checkbox"
                                   id="service"
                                   checked={checked.StorageCompleted}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <p className="service-info">Large storage</p>
                        <p className="service-desc">Extra 1TB of cloud save</p>
                    </div>
                </div>
                <div className="service-price px-3">{billing === true ?
                    '+$20/yr' :
                    '+$2/mo'
                }</div>

            </div>
            <div className="add-ons-card border rounded align-items-center d-flex justify-content-between">
                <div className="d-flex px-3">
                    <div className="px-2">
                        <label>
                            <input onChange={() => setChecked({...checked, ProfileCompleted : !checked.ProfileCompleted})}
                                   type="checkbox"
                                   id="service"
                                   checked={checked.ProfileCompleted}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div>
                        <p className="service-info">Customizable profile</p>
                        <p className="service-desc">Custom theme on your profile</p>
                    </div>
                </div>
                <div className="service-price px-3">{billing === true ?
                    '+$20/yr' :
                    '+$2/mo'
                }</div>
            </div>
        </div>
            <div className="mt-5 d-flex justify-content-between">
                <button onClick={handleBack} className="back-button">Go back</button>
                <button onClick={handleNext} className="next-step-btn btn btn-primary">Next Step</button>
            </div>
        </div>

    )
}

export default ThirdView;