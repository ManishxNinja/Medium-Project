import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"




export const Signup = () => {


    return <>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div >
                <Auth type1={ "signup"} />
            </div>
            <div className="invisible md:visible">
                <Quote />
            </div>
            
        </div>
        
    </>
}