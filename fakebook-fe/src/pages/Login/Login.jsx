import "./Login.scss";

const Login = () => {
    return ( 
        <div className="login-container">
            <div className="login-left">
                <h1>fakebook</h1>
                <p>Connect with friends and the world around you on Facebook.</p>
            </div>

            <div className="login-right">
                <div className="login-form">
                    <input type="text" name="email" id="email" placeholder="Email or phone number" />
                    <input type="password" name="password" id="password" placeholder="Password" />
                    <button className="btn-login">Log In</button>
                    <a href="#">Forgot password?</a>
                    <button className="btn-create-account">Create new account</button>
                </div>
                <p><a href="#">Create a Page</a> for a celebrity, brand or business.</p>
            </div>
        </div>
     );
}
 
export default Login;