import axios from "axios";
import { useEffect, useState } from "react"
import { Backend_URL } from "../config";

interface Blog {
    content: string
    title: string
    id: string
    name: string
}


export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const[blog, setBlog] = useState <Blog>();

    useEffect(() => {
        axios.get(` ${Backend_URL}/api/v1/blog/${localStorage.getItem("id")}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            
            setBlog(response.data.post);
            setLoading(false);
        })
    });


    return {
        loading,
        blog
    }
}


export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const[blogs, setBlogs] = useState <Blog>();


    useEffect(() => {
        axios.get(` ${Backend_URL}/api/v1/blog/bulk `, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.post);
                setLoading(false);
            })
    })

    return {
        loading,
        blogs
    }
}