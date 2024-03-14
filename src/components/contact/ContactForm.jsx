
const ContactForm = () => {
  return (
    <div className="contact-form">
                <h2>Get in Touch</h2>
                <p>Fill in the form below to send us a message</p>

                <form>
                             <div className="form-row split">
                                        <div className="form-column">
                                                  <label htmlFor="name">Your name <span>*</span></label>
                                                 <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-column">
                                                   <label htmlFor="email">Your email <span>*</span></label>
                                                   <input type="email" className="form-control" />
                                        </div>
                             </div>
                             <div className="form-row">
                                        <label htmlFor="subject">Subject <span>*</span></label>
                                        <input type="text"  className="form-control"/>
                             </div>
                             <div className="form-row">
                                       <label htmlFor="message">Your Message <span>*</span></label>
                                       <textarea name="" id="" cols="30" rows="10"></textarea>
                             </div>
                             <div className="form-btn">
                                      <button type="submit">Send Message</button>
                             </div>
                </form>
    </div>
  )
}

export default ContactForm