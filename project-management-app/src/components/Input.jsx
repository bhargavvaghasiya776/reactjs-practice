export default function Input({label,isTextarea, ref, ...props}) {
    const className = "w-full p-1 border-b-2 border-stone-300 rounded-md bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
       {isTextarea ? <textarea ref={ref} className={className} {...props}></textarea> : <input ref={ref} className={className} {...props} />}
    </p>
}