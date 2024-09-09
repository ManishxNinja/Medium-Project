import { ChangeEvent } from "react";

interface InputTypes {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string,
}

export const InputBox = ({ label, placeholder , onChange , type} : InputTypes) => {
    return <div className="ml-2">
        <div className="font-medium text-left text-sm py-2 px-2">
            {label}
        </div>
        <input type= {type|| "text"} onChange={onChange} placeholder={placeholder} className="w-[95%] px-2 py-1 border rounded border-slate-200 hover:border-blue-500 focus:border-blue-900"></input>
    </div>
}