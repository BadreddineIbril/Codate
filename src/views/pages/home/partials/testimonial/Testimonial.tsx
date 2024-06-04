import { Reviews } from "./helpers";

export default function Testimonial() {
  return (
    <section id="testimonial" className="testimonial-container">
      <div className="headlines section-head">
        <div className="title">
          <h5>
            <span className="material-symbols-outlined">local_activity</span>
            Testimonial
          </h5>
          <h1>Honest Reviews from Devs Like You</h1>
        </div>
      </div>
      <div className="testimonial-box">
        {
          Reviews.map((item, i) => (
            <a 
              className="review-card" 
              key={i} 
              href={"https://www.producthunt.com/posts/codate?comment="+item.comment_code} 
              target="_blank"
            >
              <div className="head">
                <div className="owner">
                  <img src={item.img} alt={item.name} className="picture" />
                  <div className="info">
                    <h4>{item.name}</h4>
                    <span>@{item.username}</span>
                  </div>
                </div>
              </div>
              <div className="review-content">
                <article>{item.review}</article>
                <span className="date">May 24, 2024</span>
              </div>
            </a>
          ))
        }
      </div>
    </section>
  );
}
