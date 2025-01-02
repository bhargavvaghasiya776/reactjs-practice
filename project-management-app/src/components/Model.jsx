import { createPortal } from "react-dom";
import { useRef, useImperativeHandle } from "react";
import Button from "./Button.jsx";

export default function Model({children, btnLable, ref}) {
    const  dialog = useRef();
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal()
        },
        close() {
            dialog.current.close()
        }
    }))

    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 shodow-md rounded-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button>{btnLable}</Button>
        </form>
    </dialog>, document.getElementById('modal-root'))
}