import React, {useEffect, useState} from "react";
import './css/Views.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import arcade from '../images/icon-arcade.svg'
import advanced from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'


function SecondView({view, setView, billing, setBilling, plan, setPlan, price, setPrice}) {
    const handleBack = () => {
        setView({...view, view1: true, view2: false});
    }

    const handleNext = () => {
        setView({...view, view2: false, view3: true});
    }

    const handleToggle = () => {
        setBilling(!billing);
    }

    return (
        <div>
            <div className="d-block">
                <div className="header">Select your plan</div>
                <div className="paragraph-text mb-4">You have the option of monthly or yearly billing.</div>
                <div className="row">
                    <div onClick={() => setPlan({...plan, arcadePlan: !plan.arcadePlan})} className="card col-3 mx-2"
                         style={{
                             backgroundColor: plan.arcadePlan === true ? 'hsl(233, 44%, 96%)' : 'transparent',
                             borderColor: plan.arcadePlan === true ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'
                         }}>
                        <div className="d-flex mt-3">
                            <img src={arcade}/>
                        </div>
                        <div className="d-block mt-4">
                            <h6>Arcade</h6>
                            <p>${billing ? price.arcadeYr + '/yr' : price.arcadeMo + '/mo'}</p>
                        </div>
                    </div>
                    <div className="card col-3" onClick={() => setPlan({...plan, advancedPlan: !plan.advancedPlan})}
                         style={{
                             backgroundColor: plan.advancedPlan === true ? 'hsl(233, 44%, 96%)' : 'transparent',
                             borderColor: plan.advancedPlan === true ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'
                         }}>
                        <div className="d-flex mt-3">
                            <img src={advanced}/>
                        </div>
                        <div className="d-block mt-4">
                            <h6>Advanced</h6>
                            <p>{billing ? price.advancedYr + '/yr' : price.advancedMo + '/mo'}</p>
                        </div>
                    </div>
                    <div className="card col-3 mx-2" onClick={() => setPlan({...plan, proPlan: !plan.proPlan})} style={{
                        backgroundColor: plan.proPlan === true ? 'hsl(233, 44%, 96%)' : 'transparent',
                        borderColor: plan.proPlan === true ? 'hsl(243, 100%, 62%)' : 'hsl(229, 24%, 87%)'
                    }}>
                        <div className="d-flex mt-3">
                            <img src={pro}/>
                        </div>
                        <div className="d-block mt-4">
                            <h6>Pro</h6>
                            <p>${billing ? price.proYr + '/yr' : price.proMo + '/mo'}</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 toggle-container bg-light rounded justify-content-center d-flex align-items-center">
                    Monthly
                    <label className="switch mx-2">
                        <input onChange={handleToggle} type="checkbox" checked={billing}/>
                        <span className="slider round"></span>
                    </label>
                    Yearly
                </div>
                <div className="mt-5 d-flex justify-content-between">
                    <button onClick={handleBack} className="back-button">Go back</button>
                    <button onClick={handleNext} className="next-step-btn btn btn-primary">Next Step</button>
                </div>
            </div>
        </div>
    )
}

export default SecondView;