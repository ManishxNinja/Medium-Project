
import { BlogCon } from "../components/BlogCon";
import { useBlog } from "../hooks"


export const Blog = () => {

    const { loading , blog } = useBlog();

    if(loading) {
        return <div>
            loading....
        </div>
    }

    return <>
        <div>
         <BlogCon
            authorName= {blog.author.name}
            title={blog.title}
            content={blog.content}
        />
        </div>
        
    </>
}