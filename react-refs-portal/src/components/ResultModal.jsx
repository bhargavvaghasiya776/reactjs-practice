import { useState,useRef,useImperativeHandle } from "react";
import { createPortal } from 'react-dom';

export default function ResultModal({ref, targetTime, remainingTime, onReset}) {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime*1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal();
            }
        };
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            {userLost && <h2>You lost!</h2>}
            {!userLost && <h2>Your Score: {score}%</h2>}
            <p>Target time: <strong>{targetTime}</strong> seconds</p>
            <p>You Stoped the timer with <strong>{formatedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    );
}