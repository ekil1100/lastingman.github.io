class Navbar extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div className="like-navbar">
        <ul className='navbar-list'>
          <li className='navbar-item'><a href="/" className='navbar-link'>Like</a></li>
          <li className='navbar-item'><a href="#about" className='navbar-link'>Experience</a></li>
          <li className='navbar-item'><a href="#project" className='navbar-link'>Project</a></li>
          <li className='navbar-item'><a href="#resume" className='navbar-link'>Resume</a></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);
