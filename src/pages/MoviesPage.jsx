import MovieSection from "../components/movies/MovieSection";

export default function MoviesPage() {
  return (
    <>
      <MovieSection
        title="What's Popular"
        link="/movie/popular"
        stopScroll={true}
      />
    </>
  );
}
