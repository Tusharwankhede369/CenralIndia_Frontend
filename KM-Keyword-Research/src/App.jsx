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
          <Layout className="w-full">
            <Spam />
          </Layout>}/>
          <Route
          path="/empty"
          element={
            <Layout className="w-full">
              <Empty />
            </Layout>}/>

            <Route
          path="/cont-opt"
          element={
            <Layout className="w-full">
              <ContentOpt />
            </Layout>}/>
        <Route
        path="/contact"
        element={
          <Layout className="w-full">
            <ContactForm />
          
            </Layout>}/>  
          
            <Route
        path="/Audit"
        element={
          <Layout className="w-full">
            <AuditPage />
          </Layout>}/>
     
      {/* <Route path="/" element={<LandingPage />} /> */}
      <Route
        path="*"
        element={
          <Layout className="w-full">
            <Routes>
             
              <Route path="/" element={<KeywordData />} />
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
