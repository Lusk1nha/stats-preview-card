import './styles/Card.scss';

export function Card() {
  return (
    <main>
      <img src="/image-header-desktop.jpg" alt="card header" />

      <div className="textContainer">
        <h1 className="title">Get <strong>insights</strong> that help your business grow.</h1>
      
        <p>
          Discover the benefits of data analytics
          and make better decisions regarding revenue,
          customer experience, and overall efficiency.
        </p>

        <div className="infoContainer">
          <div className="infos">
            <strong>10k+</strong>
            <h6>Companies</h6>
          </div>

          <div className="infos">
            <strong>314</strong>
            <h6>Templates</h6>
          </div>

          <div className="infos">
            <strong>12M+</strong>
            <h6>Queries</h6>
          </div>
        </div>
      </div>
    </main>
  )
}