import React from "react";
import "./Gallery.css";
// import heroImg1 from "../Assets/IMG_20250128_145646_545.jpg";
// import heroImg2 from "../Assets/IMG_20250621_122806_908.jpg";
// import heroImg3 from "../Assets/IMG_20250323_131214_543.jpg";

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
  "/images/gallery7.jpg",
  "/images/gallery8.jpg",
];

function Gallery() {
  return (
    <div className="gallery-page">
      {/* Title */}
      <h2 className="text-center fw-bold py-4">OUR GALLERY</h2>

      {/* Image Grid */}
      <div className="container">
        <div className="row">
          {images.map((src, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <img src={src} alt={`Gallery ${index}`} className="img-fluid gallery-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
