"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
// import "/css/style";
import "../../../public/css/style.css";
import "../../../public/css/responsive.css";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
    contactnumber: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    //   <h1>{loading ? "Processing" : "Signup"}</h1>

    //   <label htmlFor="username">username</label>
    //   <input
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //     id="username"
    //     type="text"
    //     value={user.username}
    //     onChange={(e) => setUser({ ...user, username: e.target.value })}
    //     placeholder="username"
    //   />
    //   <label htmlFor="email">email</label>
    //   <input
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //     id="email"
    //     type="text"
    //     value={user.email}
    //     onChange={(e) => setUser({ ...user, email: e.target.value })}
    //     placeholder="email"
    //   />
    //   <label htmlFor="password">password</label>
    //   <input
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    //     id="password"
    //     type="password"
    //     value={user.password}
    //     onChange={(e) => setUser({ ...user, password: e.target.value })}
    //     placeholder="password"
    //   />
    //   <button
    //     onClick={onSignup}
    //     className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
    //   >
    //     {buttonDisabled ? "No signup" : "Signup"}
    //   </button>
    //   <Link href="/login">Visit login page</Link>
    // </div>
    <section id="bg-back" className="flex items-center justify-end pe-4 ps-4 md:pe-24 md:ps-24 bg-cover bg-left-bottom" style={{ backgroundImage: "url('../../../images/bg-back.png')" }}>
      
      <div className="logo w-24   absolute top-0 left-0">
          <img src="../../images/D.E.M.O._Logo_2006.svg" alt="" />
        </div>
    <div className="inner-form">
        <form className="py-8 px-4 md:py-16 md:px-10">
            <div className="content mb-8 md:mb-10">
                <p className="wel-p text-lg md:text-xl">Welcome to <span className="font-bold">Lorem</span></p>
                <h3 className="mt-1 text-xl md:text-2xl">{loading ? "Processing" : "Sign Up"}</h3>
            </div>
            <div className="form-control mb-6">
                <label htmlFor="email" className="text-sm md:text-base">Enter your username or email </label>
                <input type="email" placeholder="Email" id="email" className="text-sm md:text-base" onChange={(e) => setUser({...user, email: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
            <div className="form-control mb-6">
                    <label htmlFor="user" className="text-sm md:text-base">User name</label>
                    <input type="text" placeholder="User name" id="user" className="text-sm md:text-base" onChange={(e) => setUser({...user, username: e.target.value})} />
                </div>
                <div className="form-control mb-6">
                    <label htmlFor="number" className="text-sm md:text-base">Contact Number</label>
                    <input type="number" placeholder="Contact Number" id="number" className="text-sm md:text-base" onChange={(e) => setUser({...user, contactnumber: e.target.value})} />
                </div>
            </div>
            <div className="form-control mb-6">
                <label htmlFor="password" className="text-sm md:text-base">Enter your Password</label>
                <input type="password" placeholder="Password" id="password" className="text-sm md:text-base" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                <Link className="text-right mt-1 block f-btn text-sm md:text-base" href="#">Forgot Password</Link>
            </div>
            <button  onClick={onSignup} type="submit" className="mt-6 md:mt-10 mx-auto block text-sm md:text-base">Sign up</button>
            <div className="flex space-x-1 justify-center pt-4 items-center"><span className="h-span" >No Account? </span> <Link className="text-center   l-btn text-sm md:text-base" href="/login">Sign in</Link></div>
        </form>
    </div>
</section>

  );
}
