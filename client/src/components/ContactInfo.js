import emailjs from 'emailjs-com';

function ContactInfo() {

    function sendEmail(e) {
      e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
  
      emailjs.sendForm('service_v3bpdl8', 'template_4nl0spn', e.target, 'EhI_xZcAYhshS9nyo')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
    }
  
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="html_message" />
        <input type="submit" value="Send" />
        <div class="g-recaptcha" data-sitekey="6LcOSF4jAAAAAHJx88mdVNetu4rHhViMOuVOt6nR"></div>
      </form>
    );
  }

  export default ContactInfo;