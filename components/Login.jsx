import { signIn } from "next-auth/client";
import Image from "next/image";
import React from "react";
import Leaf from "../assets/icons/leaf.svg";
const Login = () => {
  return (
    <div>
      <div className="grid place-items-center mt-10">
        <Image src={Leaf} alt="Leaf" height={250} width={250} />
        <h1 className="text-center my-3 font-bold text-green-900">
          Login With
          <span className="text-blue-600 border-blue-500 border-2 p-1 ml-3 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={signIn}
          >
            Facebook
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Login;
