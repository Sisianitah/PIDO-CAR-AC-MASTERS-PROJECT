// import React, { useEffect, useState } from "react";
// // from flask_cors import CORS
// import "./Testimonials.css";
// import { Link } from "react-router-dom";

// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/testimonials/") // Flask backend
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((err) => console.error("Error fetching testimonials:", err));
//   }, []);

//   return (
//     <section className="testimonials-section">
//       <h2>TESTIMONIALS</h2>
//       <h2>SOME OF OUR SATISFIED CUSTOMERS</h2>

//       <div className="testimonials-container">
//         {testimonials.length > 0 ? (
//           testimonials.map((review, index) => (
//             <div key={index} className="testimonial-card">
//               <h3>{review.customer_id || "Anonymous"}</h3>
//               <div className="stars">
//                 {Array(review.rating)
//                   .fill()
//                   .map((_, i) => (
//                     <span key={i}>★</span>
//                   ))}
//               </div>
//               <p className="comment">{review.comment}</p>
//               <p className="source">
//                 {review.date_posted ? `Posted on ${review.date_posted}` : ""}
//               </p>
//             </div>
//           ))
//         ) : (
//           <p>No testimonials available yet.</p>
//         )}
//       </div>

//       <Link to="/contact">
//         <button className="feedback-button">Give Branch Feedback</button>
//       </Link>
//     </section>
//   );
// };

// export default Testimonials;





























import React from "react";
import "./Testimonials.css";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "IJJO EMMANUEL",
    rating: 5,
    source: "Review from Google",
    comment:
      "Very good, professional and honest service from the team. The mechanics are very knowledgeable and their work is very good. Your car even gets a free wash!",
  },
  {
    name: "RHENIN BAHATI",
    rating: 5,
    source: "Review from Google",
    comment:
      "Had my car serviced in less time than I expected and it hadn't given me any issues. Great service.",
  },
  {
    name: "RYAN NTAMBI",
    rating: 5,
    source: "Review from Google",
    comment:
      "Great, efficient and friendly service at an affordable price!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>TESTIMONIALS</h2> 
      <h2>SOME OF OUR SATISFIED CUSTOMERS</h2>
      <div className="testimonials-container">
        {testimonials.map((review, index) => (
          <div key={index} className="testimonial-card">
            <h3>{review.name}</h3>
            <div className="stars">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <span key={i}>★</span>
                ))}
            </div>
            <p className="source">{review.source}</p>
            <p className="comment">{review.comment}</p>
          </div>
        ))}
      </div>
      <Link to="/contact">
      <button className="feedback-button">Give Branch Feedback</button>
      </Link>
    </section>
  );
};

export default Testimonials;
