import MovieSection from "../components/movies/MovieSection";

export default function PeoplePage() {
  return (
    <>
      <MovieSection
        title="What's Popular"
        link="/person/popular"
        stopScroll={true}
        url="person"
      />
    </>
  );
}
