import axios from "axios"
import { AppBar } from "../components/AppBar"
import { Backend_URL } from "../config"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"





export const Publish = () => {

    const[ title , setTitle ] = useState("");
    const[content, setContent] = useState("");
    const navigate = useNavigate();

    useEffect(( ) => {
        console.log(title);
        console.log(content);
    },[title,content]);

    async function handleClick() {
        
        try {
            const response = await axios.post(`${Backend_URL}/api/v1/blog/upload`, {
                title,
                content
            }, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
            localStorage.setItem("id",response.data.id)
            navigate(`/blog/${response.data.id}`)
        } catch(error) {
            console.log("Request error")
        }

        
        
    }

    return <div>
        <AppBar />
        <div className=" flex justify-center items-center w-full">
            <div className="flex flex-col">
                <div className="max-w-[60vw]">
                    <input type="text" onChange={(e) => {
                        setTitle(e.target.value);
                    }} placeholder="Title" className="border mt-32 rounded-md p-2 w-[30vw]"></input>
                </div>
                <div>
                    <textarea onChange={(e) => {
                        setContent(e.target.value);
                    }} placeholder="Content" className="border mt-3 rounded-md p-2 w-[50vw] h-[200px]"></textarea>
                </div>
                <button
                    onClick={handleClick}
                    className="mt-2 border rounded w-20 p-1 bg-slate-500 hover:bg-blue-700 text-white"
                    >
                    Publish
                </button>

            </div>
            
        </div>
    </div>
}