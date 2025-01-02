import { useRef } from "react";

import Input from "./Input";
import Model from "./Model";

export default function NewProject({onAdd, onCancel}) {
    const model= useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handelSave(){
        const titleValue = title.current.value;
        const descriptionValue = description.current.value;
        const dueDateValue = dueDate.current.value;

        if(titleValue.trim() === '' || descriptionValue.trim() === '' || dueDateValue.trim() === '') {
            model.current.open();
            return;
        }
        onAdd({
            title : titleValue,
            description : descriptionValue,
            dueDate : dueDateValue
        })


    }


    return  <>
    <Model ref={model} btnLable="Close"> 
        <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>Please provide valid value for every input.</p>
    </Model>
    <div className="w-[35rem] mt-16">
        <menu className="flex item-center justify-end gap-4 my-4">
            <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 hover:bg-stone-950 text-stone-50" onClick={handelSave}>Save</button></li>
        </menu>
        <div>
            <Input type="text" ref={title} label={"Title"} />
            <Input ref={description} label={"Description"} isTextarea />
            <Input type="date" ref={dueDate} label={"Due Date"} />

        </div>
    </div>
    </>
}