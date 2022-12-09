import { Flex,
  FormPart,
  MiddleLayer,
  MediaLogin
 } from "./styles";
import { IoPersonCircle, 
  IoKeySharp,
  IoEye, 
  IoLogoFacebook, 
  IoLogoTwitter, 
  IoLogoGoogle 
  } from 'react-icons/io5';
import './App.css';

function App() {


  return (
    <>
        <Flex>

          <div className="leftScreen">

             <FormPart>
                <div className="email">
                  <div className="personIcon"> <IoPersonCircle id="icon"/> </div>
                  <input type="text" name="username" id="username" placeholder='Username or email' />
                </div>
                
                <div className="password">
                  <div className="passwordIcon"> <IoKeySharp id="icon"/> </div>
                  <input type="password" name="password" id="password" placeholder='Password' />
                  <div className="visibility"> <IoEye /> </div>
                </div>
             </FormPart>

          <MiddleLayer>
            <div className="rem">
              <input type="checkbox" name="remember_me" id="rem_me" />
              <label htmlFor="remember_me">Remember me</label>
              <button id="log">Login</button>
            </div>

            <div className="regFor">
              <p id="reg" style={{color: 'rgb(48, 114, 238)'}}>Register</p>
              <p id="forg">Forgot password?</p>
            </div>

            <div className="linethr">
              <hr id="lefthr" />
              <p>or</p>
              <hr id="righthr" />
            </div>
          </MiddleLayer>

            <MediaLogin>
                <div className="mediabox">
                  <div className="icon" style={{backgroundColor: '#3b5998'}}>< IoLogoFacebook /></div>
                  <div className="text" style={{backgroundColor: '#1b77f2'}}>LOGIN WITH FACEBOOK</div>
                </div>

                <div className="mediabox">
                  <div className="icon" style={{backgroundColor: '#0084b4'}}>< IoLogoTwitter /></div>
                  <div className="text" style={{backgroundColor: '#00aced'}}>LOGIN WITH TWITTER</div>
                </div>

                <div className="mediabox">
                  <div className="icon" style={{backgroundColor: '#ea4335'}}>< IoLogoGoogle/></div>
                  <div className="text" style={{backgroundColor: '#ff3e30'}}>LOGIN WITH GOOGLE</div>
                </div>
            </MediaLogin>

          </div>

          <div className="right">
            {/* image acts as background */}
          </div>
          
        </Flex>
    </>
  );
}

export default App;
