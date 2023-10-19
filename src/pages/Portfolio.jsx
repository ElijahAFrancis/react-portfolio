import spacebook from '../assets/images/spacebook.png'
import movieTracker from '../assets/images/movie-tracker.png'
import instaclip from '../assets/images/instaclip.png'
import filler from '../assets/images/Townscaper 2022-06-22 12-11-51.png'
import '../styles/Portfolio.css'

export default function Portfolio() {
  
    return (
        <section id="portfolio">
            <h3>My Work</h3>
            <div class="projects">
                <section class="card" id="firstCard">
                    <h4>InstaClip</h4>
                    <a href="https://instaclip-5c26d78800f1.herokuapp.com/" target="_blank"><img src={instaclip} alt="instaclip" /></a>
                </section>
                <section class="card" id="firstCard">
                    <h4>Spacebook</h4>
                    <a href="https://spacebook-socialmedia-app-9c15fa4095df.herokuapp.com/" target="_blank"><img src={spacebook} alt="spacebook" /></a>
                </section>
                <section class="card">
                    <h4>Movie Tracker</h4>
                    <a href="https://yajiit.github.io/Movie-Info-Retreiver/" target="_blank"><img src={movieTracker} alt="movie-tracker" /></a>
                </section>
                <section class="card">
                    <h4>Project 3</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={filler} /></a>
                </section>
                <section class="card">
                    <h4>Project 4</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={filler} /></a>
                </section>
                <section class="card">
                    <h4>Project 5</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={filler} /></a>
                </section>
                <section class="card">
                    <h4>Project 6</h4>
                    <a href="https://www.youtube.com/watch?v=iik25wqIuFo" target="_blank"><img src={filler} /></a>
                </section>
            </div>
        </section>
    );
}