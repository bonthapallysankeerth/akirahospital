import { CLINIC, REVIEWS } from '../data/clinicData';

function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Patient Reviews</span>
          <h2 className="section-title">What Parents Say</h2>
        </div>

        <div className="reviews__summary animate-on-scroll">
          <div className="reviews__rating-box">
            <div className="reviews__stars">⭐⭐⭐⭐⭐</div>
            <div className="reviews__score">{CLINIC.rating} Rating</div>
            <div className="reviews__count">{CLINIC.reviewCount}+ Reviews</div>
            <div className="reviews__google">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google Reviews
            </div>
          </div>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="review-card animate-on-scroll"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="review-card__header">
                <div className="review-card__avatar">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="review-card__author">{review.author}</div>
                  <div className="review-card__stars">
                    {'⭐'.repeat(review.stars)}
                  </div>
                </div>
              </div>
              <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
