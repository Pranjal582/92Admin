import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from './AdminPanel/components/Login/Login'
import { useEffect } from "react";
import MainDashBord from './AdminPanel/components/Dashbord/MainHome'
import AllUsers from "./AdminPanel/components/Users/AllUsers";
import OrderHome from "./AdminPanel/components/Orders/OrderHome";
import ViewOrder from "./AdminPanel/components/Orders/ViewOrder";
import ViewDoc from "./AdminPanel/components/Orders/ViewDoc";
import Agreements from "./AdminPanel/components/Aggrement/Agreements";
import Contact from "./AdminPanel/components/Contact/Contact";
import EditContact from "./AdminPanel/components/Contact/EditContact";
import UserSettings from "./AdminPanel/Settings/UserSettings";
import ForgotPassword from './AdminPanel/components/ForgetPassword/ForgotPassword'

import EnterPassword from './AdminPanel/components/ForgetPassword/NewPassword'
import OPTpage from "./AdminPanel/components/ForgetPassword/OTPpage";


function App() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

  return (
    <>
      <Routes>
         {/* <-----------------Admin-Panel------------------>  */}
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<MainDashBord />} />
        <Route path="/order-list" element={<OrderHome />} />
        <Route path="/view-order" element={<ViewOrder />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/view-doc" element={<ViewDoc />} />
        <Route path="/agreement" element={<Agreements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit-contact" element={<EditContact />} />
        <Route path="/user-settings" element={< UserSettings/>} />

        {/* password reset  */}

        <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/otp" element={<OPTpage/>} />
          <Route path="/newpassword" element={<EnterPassword/>} />
               
      </Routes>
    </>
  );
}

export default App;
