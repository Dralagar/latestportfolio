import "./Styles/Contact.css";

function Contact() {
  return (
    <div className="BG">
      <div className="container mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Contact</h1>
            <p className="card-text">
              Feel free to reach out and contact me! I'd love to hear from you.
            </p>
            <form
              action="https://formsubmit.co/8c1334f955f21f81b0a2bf6d1a1d526e"
              method="POST"
            >
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="george@example.com"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="0783474795"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.co/thanks.html"
              />
              <input type="hidden" name="_captcha" value="false" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
