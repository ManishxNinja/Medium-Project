import { AppBar } from "./AppBar"


export const BlogCon = ({title , content , authorName}: {title: string, content: string, authorName: string}) => {


    return <div>

        <AppBar />
        <div className=" grid grid-cols-12 h-full mt-24">
            <div className="col-span-8 flex-col ml-10 mr-2 ">
                <div className="font-bold text-4xl mb-1">
                    {title}
                </div>
                <div className="font-thin text-slate-400 mb-2">
                    Posted On September 12,2024
                </div>
                <div>
                    {content}
                </div>
            </div>
            <div className=" col-span-4  h-full">
                <div className="ml-4 font-bold">
                    Author
                </div>
                <div className="flex gap-3 ml-10 mt-4">
                    <div className="flex flex-col justify-center">
                        <div className="h-4 w-4 rounded-lg bg-slate-200 mt-1" />
                    </div>
                    
                    <div>
                        {authorName}
                    </div>
                </div>
                

                
            </div>

            

        </div>
    </div>
}