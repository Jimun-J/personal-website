import { useRef, useState, forwardRef } from 'react';
import emailjs from 'emailjs-com'
import './Contact.css'

import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Contact = () => {
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [fail, setFail] = useState(false);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_5b32c4j", "template_fvqt6fa", formRef.current, "kr1gZfk-Rkl2lIMiX")
      .then((result) => {
        console.log(result.text);
        setOpen(true);
      }, (error) => {
        console.log(error.text);
        setFail(true);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setFail(false);
  };


  return (
    <div className="Contact" id="Contact" name="Contact">
      <div className="contact">
      <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <div className="c-title">
              Let's Start a Conversation
            </div>
            <div className="c-info">
              <div className="c-info-item">
                <SmartphoneIcon className="icon" sx={{fontSize: 32}}/>
                <span className="icon-desc">778 887 6612</span>
              </div>
              <div className="c-info-item">
                <EmailIcon className="icon" sx={{fontSize: 32}}/> 
                <span className="icon-desc">wkdwlans009@gmail.com</span>
              </div>
              <div className="c-info-item">
                <RoomIcon className="icon" sx={{fontSize: 32}}/>
                <span className="icon-desc">707 Como Lake Ave, Coquitlam, BC, Canada</span>
              </div>
            </div>
          </div>
          <div className="c-right">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder='Message' name="message" style={{width: "100%"}} />
              <button>Submit</button>
            </form>
          </div>
        </div>

        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            You Message is Successfully Sent!
          </Alert>
        </Snackbar>

        <Snackbar open={fail} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            You Message Cannot be Sent!
          </Alert>
        </Snackbar>
      </div>

    </div>
  )
}

export default Contact