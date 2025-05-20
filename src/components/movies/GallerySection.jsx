import GalleryItem from "./GalleryItem";
import useFetch from "../../hooks/useFetch";

export default function GallerySection({ id }) {
  const { data } = useFetch(`/movie/${id}/images`);

  return (
    <section className="movie-section">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div id="gallery" className="scroll-wrapper">
          {data?.backdrops && data?.backdrops.length
            ? data?.backdrops.map((image, index) => (
                <GalleryItem key={index} image={image} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
