class Navbar extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div className="like-navbar pure-menu pure-menu-horizontal pure-menu-fixed">
        <a className="pure-menu-heading" href="/">Like</a>
        <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="#about" className="pure-menu-link">About</a></li>
            <li className="pure-menu-item"><a href="#project" className="pure-menu-link">Project</a></li>
            <li className="pure-menu-item"><a href="#resume" className="pure-menu-link">Resume</a></li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);
