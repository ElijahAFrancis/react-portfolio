import profilePicture from '../assets/images/profile-picture.jpg'
import '../styles/About.css'

export default function About() {
  
    return (
    <about id="about">
        <div>
            <h2>Hello! I'm Eli</h2>
            <p>I am a web developer located in Columbus Ohio. I have experience in HTML, CSS, JavaScript, Node, Express, SQL, MongoDB, and React.</p>
        </div>
            <img src={profilePicture} alt="ElijahAFrancis" />
    </about>
    );
}
  