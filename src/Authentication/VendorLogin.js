import React, { useState } from "react";
import LoginForm from "./LoginForm";
//import SignUpForm from "./SignUpForm";
import 'react-tabs/style/react-tabs.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';

import './tabsStyle.css';

function VendorLogin(props) {
  const [open, setOpen] = useState(true);

  let history = useNavigate();

  return (
    <div >
      <Modal
        isOpen={open}
      >
        <div class="w-fit top-1/2 left-1/2 right-auto bottom-auto pt-2 -translate-x-1/2 -translate-y-1/2 border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current ">
          <button type="button" class="w-fit ml-auto mr-auto text-white border-4 border-black bg-#0071C6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-large rounded-lg text-sm px-3 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => history(-1)}>
            <p class="flex-1 text-xl font-syne text-center"> Return to Previous Page </p>
          </button>

          <div class="p-2">
            <Tabs>
              <TabList >
                <Tab >Sign Up</Tab>
                <Tab>Login</Tab>
              </TabList>

              <TabPanel>
                <LoginForm user="vendor" />
              </TabPanel>

              <TabPanel >
                {/* <SignUpForm /> */}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Modal >
    </div >
  );
}

export default VendorLogin;
