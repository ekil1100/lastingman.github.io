import resume from '../../resume_2018_v2.pdf';


class About extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div className='like-about'>
        <p className='title'>About</p>
        <div className='contact'>
          <a className='icon github' href='https://github.com/lastingman'><i className="fa fa-2x fa-github-square"></i></a>
          <a className='icon linkedin' href='https://www.linkedin.com/in/likezheng/'><i className="fa fa-2x fa-linkedin-square"></i></a>
          <a className='icon codepen' href='https://codepen.io/Lastingman/'><i className="fa fa-2x fa-codepen"></i></a>
        </div>
        <p className='text-center'>Front-end Engineer</p>
        {/*<p className='text-center'>React & Redux, Javascript, Python</p>*/}
        <p className='title'>Experience</p>
        <ul>
          <li>Jan-2018~Feb-2018 Tweebaa Inc. (Hangzhou, China)</li>
          <li>May-2017~Aug-2017 Daowen Network Technology (Hangzhou, China)</li>
          <li>May-2014~Aug-2014 Zhejiang Equity Exchange (Hangzhou, China)</li>
          <li>Sep-2012~Dec-2017 Computer Engineering (University of Guelph)</li>
        </ul>
        <p className='title'>Project</p>
        <ul>
          <li>
            <a href='https://github.com/lastingman/webpack-react-scaffolding'>webpack-react-scaffolding</a>
            <div></div>
          </li>
        </ul>
        <a href='https://github.com/lastingman' className='view-more'>view more...</a>
        <p className='title'>Resume</p>
        <div className='resume'>
          <a href={resume} download="Resume-LikeZheng" className="button"><i className="fa fa-download"></i><span> Download Resume</span></a>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <About />,
  document.getElementById('about')
);
