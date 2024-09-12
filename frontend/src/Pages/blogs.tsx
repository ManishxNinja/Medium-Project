import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const {loading, blogs} = useBlogs(); 

    if(loading) {
        return <div>
            loading....
        </div>
    }
    else {
        return (
            <div> 
                <div>
                    <AppBar />
                </div>
                <div className="flex justify-center  mt-4 ">
            
            
                    <div className="flex flex-col w-screen md: min-w-md max-w-[38rem]">
                        {blogs.map(blog => <BlogCard 
                            authorName= {blog.author.name}
                            title={blog.title}
                            content={blog.content}
                            publishedDate="Sept 11,1024"
                            id = {blog.id} 
                        />)}
                        
                    </div>
                
                </div>
            </div>
        );
    }
    
}