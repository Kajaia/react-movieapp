import Header from "../components/layouts/Header";
import MovieSection from "../components/movies/MovieSection";

export default function HomePage() {
  return (
    <>
      <Header>
        <h1 className="title">Welcome.</h1>
        <p className="paragraph">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <input
          className="search"
          type="search"
          placeholder="Search for a movie, tv show, person..."
        />
      </Header>
      <MovieSection title="What's Popular" link="popular" />
      <MovieSection
        title="Upcoming Movies"
        background="bg-blue"
        link="upcoming"
      />
      <MovieSection title="Top Rated Movies" link="top_rated" />
    </>
  );
}
