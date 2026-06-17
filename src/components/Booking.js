import { useState } from 'react';
import { CLINIC, SERVICE_OPTIONS } from '../data/clinicData';

function Booking() {
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Parent Name: ${form.parentName}`,
      `Child Name: ${form.childName}`,
      `Child Age: ${form.childAge}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Preferred Date: ${form.date}`,
      `Message: ${form.message}`,
    ].join('\n');

    const mailto = `mailto:${CLINIC.email}?subject=Appointment Request - Akira Children's Clinic&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="booking" className="section booking">
      <div className="container">
        <div className="booking__grid">
          <div className="booking__info animate-on-scroll">
            <span className="section-label">Appointment</span>
            <h2 className="section-title">Book Your Consultation</h2>
            <p className="section-text">
              Schedule a visit with Dr. S. Kiran Kumar for expert pediatric care.
              Fill in the form and we&apos;ll confirm your appointment shortly.
            </p>

            <div className="booking__timings">
              <h4>Clinic Timings</h4>
              <p>{CLINIC.timings}</p>
            </div>

            <a href={CLINIC.phoneLinks[0]} className="btn btn--emergency btn--lg">
              <span>📞</span> Call Now — Emergency
            </a>
          </div>

          <div className="booking__form-wrap animate-on-scroll">
            {submitted ? (
              <div className="booking__success">
                <div className="booking__success-icon">✅</div>
                <h3>Request Sent!</h3>
                <p>Your appointment request has been prepared. Please send the email to complete your booking.</p>
                <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
                  Book Another
                </button>
              </div>
            ) : (
              <form className="booking__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="parentName">Parent Name</label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="childName">Child Name</label>
                    <input
                      type="text"
                      id="childName"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      required
                      placeholder="Child's name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="childAge">Child Age</label>
                    <input
                      type="text"
                      id="childAge"
                      name="childAge"
                      value={form.childAge}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 2 years"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Select Service</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose a service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Any additional details..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--primary btn--lg btn--full">
                  Book Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
