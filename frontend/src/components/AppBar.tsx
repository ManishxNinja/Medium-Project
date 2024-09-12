import { Link } from "react-router-dom"
import { Avatar } from "./Avatar"


export const AppBar = () => {
    return <div className=" w-[98vw] ">
        <div className="flex justify-between">
            <div className="px-4 py-4 text-xl font-bold mt-1">
                Medium
            </div>

            <div className="px-4 py-4 flex gap-10">
                <Link to={`/publish`} >
                    <div className="flex flex-col justify-center mt-1">
                        <button className="bg-green-700 rounded-md py-1 px-2 w-20 text-slate-300">New</button>
                    </div>
                </Link>
                <Avatar name="Manish" size = {10}/>
            </div>

        </div>
        <div className="h-1 w-screen bg-slate-300">

        </div>
    </div>
}