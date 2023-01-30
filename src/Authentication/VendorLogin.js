import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useNavigate } from "react-router-dom";

import './tabsStyle.css';

function VendorLogin(props) {

  const [tabIndex, setTabIndex] = useState(0);

  const signUpCallback= () => {
    setTabIndex(0);
  }

  const { parentCallBack } = props;
  let history = useNavigate();

  return (
    <div class="h-full flex flex-col items-center justify-center">
      <div class="flex flex-col bg-white p-5 gap-8 border-4 border-black overflow-y-auto rounded-lg pt-10">
          <button type="button" class="w-fit m-auto bg-blue-600 text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => history(-1)}>
            <p class="flex-1 text-xl font-syne text-center"> Return to Previous Page </p>
          </button>

          <div class="p-2">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
              <TabList >
                <Tab>Login</Tab>
                <Tab >Sign Up</Tab>
              </TabList>

              <TabPanel>
                <LoginForm user="vendor" parentCallBack={parentCallBack} />
              </TabPanel>

              <TabPanel >
                <SignUpForm parentCallBack={signUpCallback} />
              </TabPanel>
            </Tabs>
          </div>
      </div >
    </div >
  );
}

export default VendorLogin;
