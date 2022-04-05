import './style.scss';

const SignUPForm = () =>
{
    return ( 
        <section>
            <h2>Try it free 7 days <small> then $20/mo. thereafter</small></h2>
            <form className="form_container">
                <input placeholder="First Name" type="text"/>
                <input placeholder="Last Name" type="text"/>
                <input placeholder="Email Address" type="email"/>
                <input placeholder="Password" type="password" />
                <button type="submit">CLAIM YOUR FREE TRIAL</button>
                <span>by clicking the button, you are agreeing to our <strong>Terms and Services</strong></span>
            </form>
        </section>
     );
}
 
export default SignUPForm;