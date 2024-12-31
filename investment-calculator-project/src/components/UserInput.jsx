import { useState } from "react"

export default function UserInput({onChangeUserInput, userInput}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" id="initialInvestment" name="initialInvestment" value={userInput.initialInvestment} onChange={(e) => onChangeUserInput(e.target.id, e.target.value)} required/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" id="annualInvestment" name="annualInvestment" value={userInput.annualInvestment} onChange={(e) => onChangeUserInput(e.target.id, e.target.value)} required/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" id="expectedReturn" name="expectedReturn" value={userInput.expectedReturn} onChange={(e) => onChangeUserInput(e.target.id, e.target.value)} required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" id="duration" name="duration" value={userInput.duration} onChange={(e) => onChangeUserInput(e.target.id, e.target.value)} required/>
                </p>
            </div>
        </section>
    )
}