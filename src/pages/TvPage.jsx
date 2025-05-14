import MovieSection from "../components/movies/MovieSection";

export default function TvPage() {
  return (
    <>
      <MovieSection
        title="What's Popular"
        link="/tv/popular"
        stopScroll={true}
        url="tv"
      />
    </>
  );
}
