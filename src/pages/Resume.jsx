import Resume from '../assets/images/resume1024_1.jpg'
import '../styles/Resume.css'

export default function Contact() {
  
    return (
        <resume id="resume">
            <h3>Resume</h3>
            <figure><img src={Resume} alt="resume" /></figure>
        </resume>
    );
}