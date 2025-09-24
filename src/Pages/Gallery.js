import React from "react";
import "./Gallery.css";

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
