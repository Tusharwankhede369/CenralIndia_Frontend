import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import KeywordData from "./Components/ShowData/keywordData.jsx";
import LandingPage from "./Components/LangingPage/landingPage.jsx";
import LoginPage from "./Components/Login&Registation/loginForm.jsx";
import SignupPage from "./Components/Login&Registation/signupForm.jsx";
import Layout from "./Components/Layout.jsx";
import Chatbot from "./aibot.jsx"
import Spam from "./Components/SidePanel/spam.jsx";
import Empty from "./Components/SidePanel/Empty.jsx";
import ContactForm from "./Components/SidePanel/Contact.jsx";
import ContentOpt from "./Components/SidePanel/Contentopt.jsx";
import AuditPage from "./Components/SidePanel/Audit.jsx";
import Blog from "./Components/SidePanel/Blog.jsx";
// Remove the duplicate Layout definition
// const Layout = ({ children }) => {
//   const location = useLocation();
//   const showSidepanel = !["/login", "/register"].includes(location.pathname);
//   const showNavbar = !["/login", "/register"].includes(location.pathname);

//   return (
//     <div>
//       {showNavbar && <Navbar />}
//       <div className="app flex flex-col md:flex-row h-screen">
//         {showSidepanel && <Sidepanel className="w-full md:w-1/4" />}
//         <div className="content-container flex-grow">{children}</div>
//       </div>
//     </div>
//   );
// };

const AppContent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/aibot" element={<Chatbot />} />
      <Route
        path="/spam-detection"
        element={
          <Layout className="w-full" LinkofImg="https://lottie.host/9d712c6b-5413-486e-bc5d-1477d2b061f0/HUwsT0dsuC.lottie"
>
            <Spam />
          </Layout>} />
      <Route
        path="/empty"
        element={
          <Layout className="w-full">
            <Empty />
          </Layout>} />

      <Route
        path="/cont-opt"
        element={
          <Layout className="w-full"  LinkofImg="https://lottie.host/aada9a93-1929-4ad4-bb41-3883b6f8021e/1Us2bN6bnA.lottie">
            <ContentOpt
/>
          </Layout>} />
      {/* home: "",
    about: "", */}
      <Route
        path="/contact"
        element={
          <Layout className="w-full" LinkofImg="https://lottie.host/f5f33659-c497-493d-ae83-43837bcf9e02/1JpkTt1fEr.lottie">
            <ContactForm />

          </Layout>} />

      <Route
        path="/Audit"
        element={
          <Layout className="w-full" LinkofImg="https://lottie.host/eebc029a-c709-44e5-866a-d0e04143118e/AzzblQE4Uo.lottie"
 >
            <AuditPage />
          </Layout>} />
          <Route
        path="/Blog"
        element={
          <Layout className="w-full" LinkofImg="https://lottie.host/75aeb228-1d12-4623-a206-f20319f8a680/KYWA7g98T2.lottie"

 >
            <Blog />
          </Layout>} />
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route
        path="*"
        element={
          <Layout className="w-full">
            <Routes>

              <Route
               path="/" element={
                <KeywordData LinkofImg="https://lottie.host/8695e13a-7d68-4db9-a3d2-a534947507d1/AcbU5EoJwW.lottie" />} />
              {/* Add other routes here */}
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <Router basename="/">
      <AppContent />
    </Router>
  );
}

export default App;
