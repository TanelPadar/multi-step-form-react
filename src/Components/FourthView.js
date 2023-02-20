import React, {useState} from 'react';
import './css/Views.css';
import pro from "../images/icon-pro.svg";

function FourthView({view, setView, billing, checked, setChecked, plan, setPlan, price , addonPrice}) {

    const plans = [
        {name: 'arcadePlan', mo: price.arcadeMo, yr: price.arcadeYr},
        {name: 'advancedPlan', mo: price.advancedMo, yr: price.advancedYr},
        {name: 'proPlan', mo: price.proMo, yr: price.proYr}
    ];

    const addonData = [
        { key: "service", completed: checked.ServiceCompleted, monthlyPrice: addonPrice.serviceMo, yearlyPrice: addonPrice.serviceYr },
        { key: "storage", completed: checked.StorageCompleted, monthlyPrice: addonPrice.storageMo, yearlyPrice: addonPrice.storageYr },
        { key: "profile", completed: checked.ProfileCompleted, monthlyPrice: addonPrice.profileMo, yearlyPrice: addonPrice.profileYr }
    ];


    const services = [
        {
            name: 'Online Service',
            completed: checked.ServiceCompleted
        },
        {
            name: 'Larger Storage',
            completed: checked.StorageCompleted
        },
        {
            name: 'Customizable profile',
            completed: checked.ProfileCompleted
        }
    ];

    const handleBack = () => {
        setView({...view, view4: false, view3: true});
    }

    const handleNext = () => {
        setView({...view, view4: false, view5: true});
    }



    return (
        <div>
            <div className="d-block">
                <div className="header">Finishing up</div>
                <div className="paragraph-text mb-4">Double-check everything looks OK before confirming.</div>
                <div className="summary-card border rounded d-flex flex-column">
                    <div className="d-flex w-100 justify-content-between align-items-center border-bottom">
                        <div className="d-block p-3">
                            {plans.map(({name, mo, yr}) => {
                                if (!plan[name]) return null;
                                return (
                                    <p className="arcade-monthly">
                                        {name.charAt(0).toUpperCase() + name.slice(1)} ({billing ? 'Yearly' : 'Monthly'})
                                    </p>
                                );
                            })}
                            <a href="" className="change">Change</a>
                        </div>
                        <div>
                            {plans.map(({ name, mo, yr }) => {
                                if (!plan[name]) return null;
                                return (
                                    <p className="price pe-3">{billing ? '$' + yr + '/yr' : '$' + mo + '/mo'}</p>
                                );
                            })}
                        </div>
                    </div>
                    <div className="d-flex w-100 justify-content-between align-items-center border-bottom">
                        <div className="d-block p-3">
                            {services.map(({ name, completed }) => (
                                completed === true && (
                                    <p className="services">{name}</p>
                                )
                            ))}
                        </div>
                        <div className="d-block">
                            {addonData.map((data) => (
                                <p key={data.key} className="price2 pe-3">
                                    {billing === false && data.completed ? data.monthlyPrice : ''}
                                    {billing === true && data.completed ? data.yearlyPrice : ''}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-between">
                <button onClick={handleBack} className="back-button">Go back</button>
                <button onClick={handleNext} className="confirm-btn btn btn-primary">Confirm</button>
            </div>
        </div>

    )
}

export default FourthView;