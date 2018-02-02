

class About extends React.Component {
  constructor(args) {
    super(args);
  }

  render(){
    return(
      <div className='like-about'>
        <p className='title'>About</p>
        <ul>
          <li>Front-end Engineering</li>
          <li>React & Redux, Javascript, Python, C#</li>
          <li>Experience: </li>
          <ul>
            <li>May. 2014 - Aug. 2014s, Bachelor of Computer Engineering, University of Guelph</li>
            <li>Sept. 2012 - Dec. 2017, Bachelor of Computer Engineering, University of Guelph</li>
          </ul>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <About />,
  document.getElementById('about')
);
