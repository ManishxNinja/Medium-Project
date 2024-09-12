import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string
}

export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
} : BlogCardProps) => {


    return <Link to={`/blog/${id}`}>
    <div onClick={() => {
        localStorage.setItem("id", id);
    }} className="border-b-2 border-slate-300 ">
        <div className="flex mt-4">
            <div className="flex flex-col justify-center ">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName}/> 
                </div>
            </div>
            
            <div className="ml-2 font-bold text-sm">
                {authorName}
            </div>
            <div className="flex flex-col justify-center p-1">
                <div className=" h-1 w-1 bg-slate-300 rounded-full"></div>
            </div>
            
            <div className="ml-1 text-sm font-light">
                {publishedDate}
            </div>
        </div>
        
        <div className="text-xl font-bold mt-1">
            {title}
        </div>
        <div className="text-md font-thin mt-1">
            {content.length > 100? content.slice(0,100) + "..." : content}
        </div>
        <div className="text-slate-300 text-sm font-thin mt-1 mb-3 ">
            {`${Math.ceil(content.length / 100)} minutes`}
        </div>
        
    </div>
    </Link>
}