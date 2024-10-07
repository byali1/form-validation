import './App.css';
import { userValidation } from './Validation';

function App() {

  const createUser = async (event) => {
    event.preventDefault();
  
    let formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
    };
  
    try {
      
      await userValidation.validate(formData, { abortEarly: false });
      alert('You signed in successfully!');
    } catch (err) {
      const errorMessages = err.inner.map(e => e.message).join('\n');
      alert(`Form is not valid. Please check the errors below:\n${errorMessages}`);
    }
  };
  
  

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center">Sign up</h2>
            <form className='form' onSubmit={createUser}>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" required />
              </div>


              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>


              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" required />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" required />
              </div>


              <div className='text-center'>
                <button type="submit" className="btn btn-primary w-25">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
