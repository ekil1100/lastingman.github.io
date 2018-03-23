import resume from '../../Resume-LikeZheng.pdf';


class About extends React.Component {
  constructor(args) {
    super(args);
  }

  render() {
    return (
      <div className='like-about'>
        <p className='title'>Like Zheng</p>
        <p className='text-center'>Front-end Developer</p>
        <p className='text-center'>Javascript, React+Redux, Python</p>
        <p className='title'>Experience</p>
        <ul>
          <li>May-2017~Aug-2017 Daowen Network Technology (Hangzhou, China)</li>
          <li>May-2014~Aug-2014 Zhejiang Equity Exchange (Hangzhou, China)</li>
          <li>Sep-2012~Dec-2017 Computer Engineering (University of Guelph)</li>
        </ul>
        <p className='title'>Projects</p>
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
