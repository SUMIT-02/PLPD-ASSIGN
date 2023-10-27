"use client";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

function Signin() {
  const [fields, setFields] = useState({ email: "", password: "", name: "" });
  const { email, password, name } = fields;
  const router = useRouter();

  const onChangeHelper = (name) => (e) => {
    setFields({ ...fields, [name]: e.target.value });
  };

  const onClick = () => {
    if (!email || !password || !name) {
      return alert("All Field are required");
    }
    router.push("/pricing");
  };
  return (
    <div className="h-screen p-5 bg-black flex items-center justify-center">
      <div className="p-10 bg-white rounded-md w-3/12 flex flex-col items-center">
        <span className="font-semibold text-xl">Create account</span>
        <div className="flex flex-col mt-10 w-full">
          <span className="font-semibold text-sm">Name</span>
          <input
            type="text"
            className="focus:outline-none border mt-1 w-full text-lg px-2 p-1 rounded-sm"
            onChange={onChangeHelper("name")}
            value={name}
          />
        </div>
        <div className="flex flex-col mt-5 w-full">
          <span className="font-semibold text-sm">Email</span>
          <input
            type="text"
            className="focus:outline-none border mt-1 w-full text-lg px-2 p-1 rounded-sm"
            onChange={onChangeHelper("email")}
            value={email}
          />
        </div>
        <div className="flex flex-col mt-5 w-full">
          <span className="font-semibold text-sm">Password</span>
          <input
            type="password"
            className="focus:outline-none border mt-1 w-full text-lg px-2 p-1 rounded-sm"
            onChange={onChangeHelper("password")}
            value={password}
          />
        </div>{" "}
        <button
          className="mt-10 cursor-pointer bg-c-orange px-3 p-2 rounded-md text-lg font-medium text-white w-full"
          onClick={onClick}
        >
          Sign Up
        </button>
        <span className="font-semibold text-sm ml-2 mt-8">
          New to MyApp?{" "}
          <Link href="/signup" className="text-c-orange font-normal">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;
