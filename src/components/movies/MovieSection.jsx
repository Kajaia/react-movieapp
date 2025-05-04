export default function MovieSection({ title, background, link }) {
  return (
    <section className={`movie-section ${background}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="scroll-wrapper">
          <div className="card">
            <span className="badge">70%</span>
            <img
              className="card-movie-poster"
              width="200"
              height="300"
              src="https://image.tmdb.org/t/p/w500"
              alt=""
              loading="lazy"
            />
            <div className="card-body">
              <h3 className="card-movie-title">Title</h3>
              <p className="card-movie-date">Release date</p>
              <a href="/movie-details.html?id=" className="link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
