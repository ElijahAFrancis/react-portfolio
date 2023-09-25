import '../styles/Nav.css'

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
    <header>
      <h1>Elijah Francis</h1>
      <nav className="main-header-menu">
        <ul
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <li style={linkStyle}>
            <a href="#about">About Me</a>
          </li>
          <li style={linkStyle}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li style={linkStyle}>
            <a href="#contact">Contact</a>
          </li>
          <li style={linkStyle}>
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
    );
  }
  