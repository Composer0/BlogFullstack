import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>How to reach me</h1>
      <form className="contact-form" method="POST" action="https://formsubmit.co/219035e16740563c85c8489a08b21832" 
            onSubmit="Thank You"
            >

                <input type="hidden" name="_subject" value="New Email!!!"/>
    
                <label className="contactLabel" htmlFor="name">Name</label>
                <input className="inputStyle" type="name" id="name" name="name" placeholder="Your Name" required />
                <small className="error"></small>
    
                <label className="contactLabel" htmlFor="email">Email</label>
                <input className="inputStyle" type="email" id="email" name="email" placeholder="Email Address" required />
                <small className="error"></small>
    
                <input type="hidden" name="_next" value="https://www.orionpalmer.com" />
    
                <label className="contactLabel" htmlFor="message">Message</label>
                <textarea className="inputStyle" name="message" placeholder="Your message" rows="6" required></textarea>
                <small className="error"></small>
    
                <div className="center">
                    <button className="contactButton" type="submit">Let's Talk</button>
                    <p id="success"></p>
                </div>
    
                {/* <input type="hidden" name="_captcha" value="false"/>  */}
    
                
                <input type="hidden" name="_autoresponse" value="Thank you for your message. I will reach out to you as soon as humanly possible." />
                
                <input type="hidden" name="_template" value="box" />
    
                
    
            </form>
    </div>
  )
}
