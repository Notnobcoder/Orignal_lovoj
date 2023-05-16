import "./App.scss";

import {
  Dashboard,
  MainCard,
  Video,
  Signin,
  Signup,
  LandingPage,
  CreateAccount,
  AboutUs,
  Product,
  HelpCenter,
  ContactUs,
  Jobs,
  OurTeam,
  AdminLogin,
  ForgetAdminPassword,
  ForgetAdminStoreNub,
  MultipleStepAdminForm,
  MediaDesign,
  Customize,
  AddToWishList,
} from "./modules/index";

import Maps from "./modules/dashboard/map";

import { Route, Routes } from "react-router-dom";
import MaterialDashboard from "./pages/dashboard/MaterialDashboard";
import { OptVerification } from "./modules/OptVerification";
import { Page404 } from "./modules/404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Video />} />
          <Route path="girdview" element={<MainCard />} />
          <Route path="map" element={<Maps />} />
        </Route>
        {/* Authentciation Routes */}
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/otp-verification" element={<OptVerification />} />
        <Route
          path="/admin/ForgetAdminPassword"
          element={<ForgetAdminPassword />}
        />
        <Route
          path="/admin/ForgetAdminStoreNub"
          element={<ForgetAdminStoreNub />}
        />

        <Route
          path="account-registration/:userwork"
          element={<CreateAccount />}
        />
        {/* Pages Routes Start */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/media-design" element={<MediaDesign />} />
        <Route path="/MaterialDashboard" element={<MaterialDashboard />} />

        {/* admin Routes Start */}
        <Route path="/admin/:storeNumber" element={<MultipleStepAdminForm />} />
        {/* Customization Routes */}
        <Route path="/customize/:storeNumber" element={<Customize />} />
        <Route
          path="/customize/:storeNumber/addtowishlist"
          element={<AddToWishList />}
        />
        {/* <Route path="/customize/:storeNumber" element={<Customize/>}/> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
