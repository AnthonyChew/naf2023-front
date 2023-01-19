import React from 'react';
import googleSignIn from './assets/google_signin.jpg';
import config from '../config/env';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const googleUrl = `${config.backendUrl}/api/auth/google/login/`;
  let history = useNavigate();

  return (
    <div h-full class="h-full flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center bg-white p-5 gap-8 border-4 border-black rounded-lg">
        <button type="button" class="w-fit text-white border-4 border-black bg-[#0071C6] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => history(-1)}>
          <p class="flex-1 text-2xl font-syne text-center"> Return to Previous Page </p>
        </button>

        <a href={googleUrl}>
          <img
            src={googleSignIn}
            
            alt="Sign up and Login with Google"
            class="max-w-[300px] w-full text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          />
        </a>
      </div>
    </div>
  );
}
