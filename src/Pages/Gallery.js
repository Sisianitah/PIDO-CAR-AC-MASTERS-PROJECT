import React from "react";
import "./Gallery.css";
import gallery1 from "../Assets/IMG_20250621_122806_908.jpg";
import gallery2 from "../Assets/IMG_20250323_131214_543.jpg";
import gallery3 from "../Assets/WhatsApp Image 2025-07-27 at 06.57.46_fc5b4a3e.jpg";
import gallery4 from "../Assets/WhatsApp Image 2025-07-27 at 06.58.15_fb48a1be.jpg";
import gallery5 from "../Assets/WhatsApp Image 2025-07-27 at 06.57.46_fc5b4a3e.jpg";
import gallery6 from "../Assets/IMG_20250128_145646_545.jpg";
import gallery7 from "../Assets/IMG_20250323_131214_543.jpg";
import gallery8 from "../Assets/WhatsApp Image 2025-08-01 at 22.55.30_1629e010.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

function Gallery() {
  return (
    <div className="gallery-page">
      <h2 className="text-center fw-bold py-4">OUR GALLERY</h2>

      <div className="container">
        <div className="row">
          {images.map((src, index) => (
            <div
              className="col-md-3 col-sm-6 mb-4"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="img-fluid gallery-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
