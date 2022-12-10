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
  IoLogoGoogle, 
  IoEyeOffOutline
  } from 'react-icons/io5';
import './App.css';
import { useState } from "react";


function App() {
//testing login button


  function letArt () {
    console.log('in am clicked');
  }

//switching password visibility 

    const [isVisible, setVisible] = useState(false);
    const toggle = () => {
      setVisible(!isVisible);
    };

  return (
    <>
        <Flex>

          <div className="leftScreen">

             <FormPart>
                <div className="email">
                  <div className="personIcon"> <IoPersonCircle id="icon"/> </div>
                  <input type="text" name="username" id="username" placeholder='Username or email' required />
                </div>
                
                <div className="password">
                  <div className="passwordIcon"> <IoKeySharp id="icon"/> </div>
                  <input  name="password" id="password" placeholder='Password'
                   type={!isVisible ? "password" : "text"}
                   required/>
                  <div className="visibility"
                   onClick={toggle}> {isVisible ? <IoEye />  : <IoEyeOffOutline />} </div>
                </div>
             </FormPart>

          <MiddleLayer>
            <div className="rem">
              <input type="checkbox" name="remember_me" id="rem_me" />
              <label htmlFor="remember_me">Remember me</label>
              <button onClick={letArt} id="log">Login</button>
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
                  <div className="icon" style={{backgroundColor: '#3b5998', paddingTop: 14}}>< IoLogoFacebook /></div>
                  <div className="text" style={{backgroundColor: '#1b77f2', paddingTop: 17}} onClick={() => window.location = 'mubaraqmuhammad06@gmail.com'}>LOGIN WITH FACEBOOK</div>
                </div>

                <div className="mediabox">
                  <div className="icon" style={{backgroundColor: '#0084b4' , paddingTop: 14}}>< IoLogoTwitter /></div>
                  <div className="text" style={{backgroundColor: '#00aced' , paddingTop: 17}}>LOGIN WITH TWITTER</div>
                </div>

                <div className="mediabox">
                  <div className="icon" style={{backgroundColor: '#ea4335', paddingTop: 14}}>< IoLogoGoogle/></div>
                  <div className="text" style={{backgroundColor: '#ff3e30', paddingTop: 17}}>LOGIN WITH GOOGLE</div>
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
