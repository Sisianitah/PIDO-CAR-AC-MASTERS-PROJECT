// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';


// import ContactMessages from './Pages/ContactMessages';
// import Customers from './Pages/Payments';
// import Payments from './Pages/Customers';
// import Services from './Pages/Services';
// import Testimonials from './Pages/Testimonials';
// import Dashboard from './Pages/Dashboard';
// // import Bookings from './Pages/Bookings';
// // import Blog from './Pages/Blog';
// import Bookings from './Pages/Bookings';
// // import AddAdmin from './Pages/AddAdmin';
// // import AdminsList from './Pages/AdminsList';
// // import Login from './Pages/Login';
// // import MyProfile from './Pages/MyProfile';
 

// function App() {
//   return (
//     <Router>
//       <div className='d-flex'>
//         <Sidebar/>

//         <div className="flex-grow-1 p-4 bg-light min-vh-100">
//           <Routes>
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
            
//             <Route path="/contact-messages" element={<ContactMessages />} />
//             <Route path="/customers" element={<Customers />} />
//             <Route path="/payments" element={<Payments />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/dashboard" element={<Dashboard/>} />
//             {/* <Route path="/bookings" element={<Bookings/>} /> */}
//             {/* <Route path="/blog" element={<Blog />} /> */}
//             <Route path="/bookings" element={<Bookings />} />
//             {/* <Route path="/add-admin" element={<AddAdmin/>} />
//              <Route path="/adminslist" element={<AdminsList/>} /> */}
//              {/* <Route path="/login" element={<Login />} /> */}
//              {/* <Route path="/my-profile" element={<MyProfile />} /> */}
             
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Customers from "./pages/Customers";
// import Bookings from "./pages/Bookings";
// import Payments from "./pages/Payments";
// import ContactMessages from "./pages/ContactMessages";
// import ServicesDashboard from "./pages/Services";
// import TestimonialsDashboard from "./pages/Testimonials";

// // Website Components & Pages
// import Navbar from "./WebsiteComponents/Navbar";
// import Footer from "./WebsiteComponents/Footer";
// import Home from "./WebsitePages/Home";
// import WebsiteServices from "./WebsitePages/Services";
// import Blogs from "./WebsitePages/Blogs";
// import Contact from "./WebsitePages/Contact";
// import AboutUs from "./WebsitePages/AboutUs";
// import SignUp from "./WebsitePages/SignUp";
// import WebsiteTestimonials from "./WebsitePages/Testimonials";

// // Custom hook to determine if current route is part of the dashboard
// function useIsDashboard() {
//   const location = useLocation();
//   return location.pathname.startsWith("/dashboard");
// }

// function AppContent() {
//   const isDashboard = useIsDashboard();

//   return (
//     isDashboard ? (
//       <div className="d-flex">
//         <Sidebar />
//         <div className="flex-grow-1 p-4 bg-light min-vh-100">
//           <Routes>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/dashboard/contact-messages" element={<ContactMessages />} />
//             <Route path="/dashboard/customers" element={<Customers />} />
//             <Route path="/dashboard/payments" element={<Payments />} />
//             <Route path="/dashboard/services" element={<ServicesDashboard />} />
//             <Route path="/dashboard/testimonials" element={<TestimonialsDashboard />} />
//             <Route path="/dashboard/bookings" element={<Bookings />} />
//             <Route path="/" element={<Navigate to="/dashboard" replace />} />
//           </Routes>
//         </div>
//       </div>
//     ) : (
//       <>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<WebsiteServices />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/sign-up" element={<SignUp />} />
//           <Route path="/testimonials" element={<WebsiteTestimonials />} />
//         </Routes>
//         <Footer />
//       </>
//     )
//   );
// }

// export default function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Website components
import Navbar from "./WebsiteComponents/Navbar";
import LoginModal from "./WebsiteComponents/LoginModal";
import Testimonials from "./WebsiteComponents/Testimonials";

// Website pages
import Home from "./WebsitePages/Home";
import WebsiteServices from "./WebsitePages/Services";
import Blogs from "./WebsitePages/Blogs";

// Dashboard components
import Sidebar from "./Components/Sidebar";

// Dashboard pages
import Dashboard from "./Pages/Dashboard";
import Customers from "./Pages/Customers";
import Bookings from "./Pages/Bookings";
import Payments from "./Pages/Payments";
import ContactMessages from "./Pages/ContactMessages";
import DashboardServices from "./Pages/Services";

function App() {
  const isDashboard = window.location.pathname.startsWith("/dashboard");

  return (
    <Router>
      <div className="App">
        {!isDashboard && <Navbar />}

        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<WebsiteServices />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<LoginModal />} />

          {/* Dashboard Routes */}
          {isDashboard && (
            <>
              <Sidebar />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/customers" element={<Customers />} />
              <Route path="/dashboard/bookings" element={<Bookings />} />
              <Route path="/dashboard/payments" element={<Payments />} />
              <Route path="/dashboard/messages" element={<ContactMessages />} />
              <Route path="/dashboard/services" element={<DashboardServices />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

