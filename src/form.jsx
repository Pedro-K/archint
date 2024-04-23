import './form.css'
import mobileBanner from './assets/mobileBanner.png'
import banner from './assets/banner.png'
import logo from '/Logo.png'

function form() {
  

  return (
    <>
      <div id="grid-container">
        <img src={ mobileBanner } alt="Imagem da janela de um predio" id='mobileBanner'/>
        <img src={ banner } alt="Imagem da janela de um predio" id='banner'/>
        <div className="container" id='content'>
          <div>
            <img src={ logo } className="logo" alt="logo Archint" />
            <h1>Archint</h1>
          </div>
          <p className='label'>A new way to experience real state in the infinite virtual space.</p>

          <form id='login'>
            <h2>Login</h2>

            <div className="input-email">
              <label htmlFor="input-email">Email</label>
              <input type="mail" name="input-email" id="input-email"/>
            </div>

            <div className="input-password">
              <label htmlFor="input-password" className='password'>Password</label>
              <input type="password" name="input-password" id="input-password"/>
              <i className='password'></i>
            </div>

            <div className='extras'>
              <div className="checkBoxButton">
                  <input type="checkbox" name="input-checkbox" id="input-checkbox" />
                  <label htmlFor="input-checkbox">Remember me</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>

            <div className="formButtons">
              <button className='buttonLogin' type='button'>Login</button>
              <button className='buttonSignUp' type='button'>Sign Up</button>
            </div>
            
            <div className='otherLogins'>
              <p>Or, login with</p>
              <div className="otherButtons">
                <button type='button'>Facebook</button>
                <button type='button'>Linked In</button>
                <button type='button'>Google</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default form
