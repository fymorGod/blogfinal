import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";

export function Auth({ setActive }) {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleAuth(e) {
    e.preventDefault();
    setError('');
    try {
        await signIn(email, password);
        navigate('/');
        toast.success("login Sucess");
    } catch (err) {
        setError(err.message);
        console.log(err.message);
    }
}

  return (
    <div className="container-fluid mb-4">
      <div className="container">
        <div className="col-12 text-center">
          <div className="text-center heading py-2">
            Sign-in 
          </div>
        </div>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <form className="row" onSubmit={handleAuth}>            
              <div className="col-12 py-3">
                <input
                  type="email"
                  className="form-control input-text-box"
                  placeholder="Email"
                  
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12 py-3">
                <input
                  type="password"
                  className="form-control input-text-box"
                  placeholder="Password"
                  
                  onChange={e => setPassword(e.target.value)}
                />
              </div>            
              <div className="col-12 py-3 text-center">
                <button
                  className={`btn btn-sign-in`}
                  type="submit"
                >
                  Sign-in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
