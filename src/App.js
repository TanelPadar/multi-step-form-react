import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import FirstView from './Components/FirstView.js';
import SecondView from './Components/SecondView.js';
import ThirdView from './Components/ThirdView.js';
import FourthView from "./Components/FourthView";
import FifthView from "./Components/FifthView";

function App() {

    const [view, setView] = useState({
        view1: true, view2: false, view3: false, view4: false, view5: false
    });

    const [price, setPrice] = useState({
        arcadeMo: 9,
        advancedMo: 12,
        proMo: 15,
        arcadeYr: 90,
        advancedYr: 120,
        proYr: 150
    });

    const [billing, setBilling] = useState(false);

    const [plan, setPlan] = useState({
        arcadePlan: false,
        advancedPlan: false,
        proPlan: false,
    });

    const[checked, setChecked] = useState({
        ServiceCompleted: false,
        StorageCompleted: false,
        ProfileCompleted: false
    });

    const[addonPrice, setAddonPrice] = useState({
        serviceMo: '+$1/mo',
        storageMo: '+$2/mo',
        profileMo: '+$2/mo',
        serviceYr: '+$10/yr',
        storageYr: '+$20/yr',
        profileYr: '+$20/yr'
    })




    return (

        <div className="container-fluid align-content-center  mh-100 ">
            <div className="container rounded bg-white px-4 mt-5">
                <div className="taust bg-white rounded row justify-content-center py-3 px-0  ">
                    <div className="col-3 pic rounded d-flex flex-column">
                        <div className="d-flex  align-items-center w-auto mt-5">
                            <div className="circle mx-3" style={{
                                backgroundColor: view.view1 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
                                color: view.view1 === true ? 'black' : 'white'
                            }}> 1
                            </div>
                            <div class="d-block">
                                <div className="step">step 1</div>
                                <div className="step-info">YOUR INFO</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center w-auto">
                            <div className="circle mx-3" style={{
                                backgroundColor: view.view2 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
                                color: view.view2 === true ? 'black' : 'white'
                            }}>2
                            </div>
                            <div className="d-block">
                                <div className="step">step 2</div>
                                <div className="step-info">SELECT PLAN</div>
                            </div>
                        </div>
                        <div className="d-flex  align-items-center w-auto">
                            <div className="circle mx-3" style={{
                                backgroundColor: view.view3 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
                                color: view.view3 === true ? 'black' : 'white'
                            }}>3
                            </div>
                            <div className="d-block">
                                <div className="step">step 3</div>
                                <div className="step-info">ADD-ONS</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="circle mx-3" style={{
                                backgroundColor: view.view4 === true ? 'hsl(206, 94%, 87%)' : 'transparent',
                                color: view.view4 === true ? 'black' : 'white'
                            }}>4
                            </div>
                            <div className="d-block">
                                <div className="step">step 4</div>
                                <div className="step-info">SUMMARY</div>
                            </div>
                        </div>

                    </div>
                    <div className="content col-9 d-flex justify-content-center mt-5">
                        {view.view1 ? <FirstView view={view} setView={setView}/> : null}
                        {view.view2 ? <SecondView view={view} setView={setView} billing={billing} setBilling={setBilling}
                                        plan={plan} setPlan={setPlan} price={price} setPrice={setPrice}/> : null}
                        {view.view3 ? <ThirdView view={view} setView={setView} checked={checked} setChecked={setChecked}  /> : null}
                        {view.view4 ? <FourthView addonPrice={addonPrice} view={view} setView={setView} billing={billing} setBilling={setBilling}
                                                  plan={plan} setPlan={setPlan} checked={checked}  price={price}  /> : null}
                        {view.view5 ? <FifthView view={view} setView={setView} /> : null}

                    </div>
                </div>
            </div>
        </div>);
}

export default App;
