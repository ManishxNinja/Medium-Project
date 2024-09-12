import { Link, useNavigate } from "react-router-dom"
import { InputBox } from "./InputBox";
import {  useState } from "react";
import axios from "axios";
import { signupType } from "@manishxninja/common-app2";
import { AxiosError } from "axios";
import { Backend_URL } from "../config";

export const Auth = ({ type1 }: {type1: "signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInput , setPostInput] = useState<signupType>({
        email: "",
        password: "",
        name: "",
    });


    async function  sendRequest() {
        
        try {
            const response =  await axios.post(`${Backend_URL}/api/v1/user/${type1 === "signup"? "signup":"signin"}`,postInput);
            const jwt = response.data;
            console.log(jwt.jwt);
            localStorage.setItem("token", jwt.jwt);
            navigate("/blogs");
                
        } catch (error : unknown) {
            alert("Error while signing in")
        }
           
    }

    
    return (
    <div className=" flex justify-center items-center h-screen ">
        <div className="flex flex-col text-center min-w-96">
            <div className="flex flex-col items-center">
                <div className="font-extrabold text-3xl ">
                    Create an account
                </div>
                <div className="flex">
                    <div className="text-s ml-1">
                        {type1 === "signup"? "Already have an account" : "Create your account"}
                    </div>
                    <Link className=" pointer underline cursor-pointer ml-1 " to= {type1 === "signup"? "/signin" : "/signup" }>
                        {type1 === "signup"? "Login?" : "SignUp?" }
                    </Link>
                </div>
            </div>
            <div className="mt-4 items-start">
                {type1 === "signup" ? <InputBox
                    label="Username"
                    placeholder="Enter Your Name"
                    onChange={(e) => setPostInput(c => ({ ...c, name: e.target.value }))}
                /> : ''}
                
                <InputBox
                    label="Email"
                    placeholder="m@example.com"
                    onChange={(e) => setPostInput(c => ({ ...c, email: e.target.value }))}
                />
                <InputBox
                    label="Password"
                    placeholder=""
                    type={"Password"}
                    onChange={(e) => setPostInput(c => ({ ...c, password: e.target.value }))}
                />

            </div>
            <div className="mt-4 min-w-8 ml-2">
                <button onClick={sendRequest} className="border rounded-lg px-2 py-1 w-[350px] bg-slate-500 hover: ">
                    {type1 === "signup" ? "Sign Up":"Sign In"}
                </button>
            </div>
        </div>
        

    </div>);
}