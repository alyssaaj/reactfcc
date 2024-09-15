import profileImg from '../assets/profileImg.png'
import mail from '../assets/Mail.svg'
import linkedIn from '../assets/linkedin.svg'
function Info() {

    return (
      <>
        <img className='info-img' src={profileImg}></img>
        <h1 className='info-name'>Alyssa Jordan</h1>
        <h3 className='info-title'>Frontend Developer</h3>
        <a href="http://www.alyssajordan.com" target='_blank'><p className='info-web'>alyssajordan.com</p></a>

        <div className='info-btns-container'>
            <button className="info-btn" id="info-btn-mail" type="button"
              onClick={() => window.location = 'mailto:alyssamariejordan@gmail.com'}>
              <img src={mail}></img>
                Email
            </button>
            <button className="info-btn" id="info-btn-link" type="button" 
              onClick={() => window.open("https://www.linkedin.com/in/alyssa-jordan/", '_blank')}>
              <img src={linkedIn}></img>
                LinkedIn
            </button>
        </div>
  
      </>
    )
  }
  
  export default Info