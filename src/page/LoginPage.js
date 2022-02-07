import React from 'react';
import image from '../image/unsplash.png';
import '../css/LoginPage.css';
const LoginPage = () => {
  const handleForm = () => {};

  return (
    <form onClick={handleForm}>
      <div className='loginform d-flex align-items-stretch justify-content-center'>
        <div className='d-flexbox justify-content-center user_card col-6'>
          <form>
            <div className='d-flex pb-2 justify-content-start'>
              <h1>Login</h1>
            </div>
            <div className='input-group d-flex flex-column mb-3'>
              <label
                htmlFor='formGroupExampleInput'
                id='formGroupExampleInput'
                className='form-label'
              >
                Phone Number
              </label>
              <div>
                <input
                  id='formGroupExampleInput'
                  className='form-control'
                  maxLength='10'
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  placeholder='Enter your number'
                />
              </div>
            </div>
            <div className='input-group d-flex flex-column pb-2'>
              <label htmlFor='formGroupExampleInput2' className='form-label'>
                Password
              </label>
              <div>
                <input
                  type='password'
                  className='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Enter your password'
                />
              </div>
            </div>
            <div className='form-group d-flex justify-content-between'>
              <div className='custom-control pr-sm-2 custom-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customControlInline'
                />
                <label
                  className='custom-control-label'
                  htmlFor='customControlInline'
                >
                  Remember me
                </label>
              </div>
              <div>
                <a href='#'>Forgot password?</a>
              </div>
            </div>
            <div className='d-flex justify-content-center pt-3 login_container'>
              <button className='btn submit-btn btn-lg btn-block mb-3'>
                Submit
              </button>
            </div>
            <div>
              <label className='d-flex justify-content-center login_container'>
                Don't have an account?
              </label>
              <div className='d-flex pt-2 justify-content-center links'>
                <button className='btn create-btn btn-xl btn-block'>
                  Create Account
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='col-6 d-none d-md-block d-lg-block'>
          <div className='image'>
            <img className='sideimage img-fluid' src={image} />
          </div>
        </div>
      </div>
    </form>
  );
};
export default LoginPage;
