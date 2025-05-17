import { useEffect, useState } from "react";
import { baseURL, options } from "../../services/api";
import GalleryItem from "./GalleryItem";

export default function GallerySection({ id }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages();

    return () => setImages([]);
  }, []);

  const getImages = async () => {
    try {
      const res = await fetch(`${baseURL}/movie/${id}/images`, options);

      if (!res.ok) {
        throw new Error("Can not get image.");
      }

      const { backdrops } = await res.json();
      setImages(backdrops);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="movie-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div id="gallery" className="scroll-wrapper">
          {images && images.length
            ? images.map((image, index) => (
                <GalleryItem key={index} image={image} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
