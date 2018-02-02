class Footer extends React.Component{
  render(){
    return(
      <div className='contact'>
        <a className='icon github' href='https://github.com/lastingman'><i className="fa fa-2x fa-github-square"></i></a>
        <a className='icon linkedin' href='https://www.linkedin.com/in/likezheng/'><i className="fa fa-2x fa-linkedin-square"></i></a>
        <a className='icon codepen' href='https://codepen.io/Lastingman/'><i className="fa fa-2x fa-codepen"></i></a>
      </div>
    );
  }
}

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
