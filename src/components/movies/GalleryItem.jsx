export default function GalleryItem({ image }) {
  return (
    <div className="card">
      <img
        className="card-movie-poster"
        width="384"
        height="216"
        src={"https://image.tmdb.org/t/p/w500" + image?.file_path}
        alt={image?.id}
        loading="lazy"
      />
    </div>
  );
}
