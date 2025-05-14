import Header from "../components/layouts/Header";
import MovieSection from "../components/movies/MovieSection";
import Search from "../components/others/Search";

export default function HomePage() {
  return (
    <>
      <Header>
        <h1 className="title">Welcome.</h1>
        <p className="paragraph">
          Millions of movies, TV shows and people to discover. Explore now.
        </p>
        <Search />
      </Header>
      <MovieSection title="What's Popular" link="/movie/popular" />
      <MovieSection
        title="Upcoming Movies"
        background="bg-blue"
        link="/movie/upcoming"
      />
      <MovieSection title="Top Rated Movies" link="/movie/top_rated" />
    </>
  );
}
