import React, { Component } from "react";
import {Row, Card, Col} from "reactstrap";
import { Link } from "react-router-dom";
import { getBackendAPI } from "../../helpers/backend";

// import images
import bg from "../../assets/images/bg.jpg";
import logoDark from "../../assets/images/logo-dark.png";
import {Footer, Header, Loader} from "../../components/General";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: { names: 'Sign Up' },
      titleHeader: 'Sign Up',
      breadcrumbs: [
        {
          id: 1,
          title: 'Home',
          classicon: 'fa fa-angle-right',
          aria: 'true'
        },
        {
          id: 2,
          title: 'Sign Up',
          classicon: '',
          aria: 'true'
        }
      ],
      email_error: false,
      phone_error: false,
      password_error: false,
      registering: false,
      error_message: null
    };
  }

  onRegister = async(e) => {
    const { history } = this.props;
    e.preventDefault();
    let useremail = document.getElementById('useremail').value;
    let phone = document.getElementById('phone').value;
    let userpassword = document.getElementById('userpassword').value;
    let confirmpassword = document.getElementById('confirmpassword').value;
    this.setState({ email_error: false, phone_error: false, password_error: false, error_message: null });
    // Validate
    if(useremail.trim().length === 0 || !this.validateEmail(useremail)){
      this.setState({email_error: true});
      return;
    }
    if(phone.trim().length === 0){
      this.setState({phone_error: true});
      return;
    }
    if(userpassword.trim().length === 0 || userpassword !== confirmpassword){
      this.setState({password_error: true});
      return;
    }

    try{
      this.setState({registering: true});
      await getBackendAPI().registerUser(useremail, phone, userpassword);
      history.push('/login');
    } catch(e){
      console.log('error', e);
      this.setState({error_message: 'Register Failed!'});
    }
    this.setState({registering: false});
  }

  
  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const { headers, titleHeader, email_error, phone_error, password_error, registering, error_message } = this.state;
    return (
        <div className="sign-up bg-body3">
          <div className="boxed">
            {/*<Loader />*/}
            {/*<TopBar />*/}

            <Header data={headers}/>

            <div className="page-title">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="page-title-heading">
                      <h1 className="h1-title">{titleHeader}</h1>
                    </div>
                    <ul className="breadcrumbs">
                      {
                        this.state.breadcrumbs.map(data =>(
                            <li key={data.id} ><Link to="#" title="">{data.title}<i className={data.classicon} aria-hidden={data.aria}></i></Link></li>
                        ))
                      }
                    </ul>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <section className="flat-row pd-auth">
              <div className="page-content">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="col-md-3"/>
                      <div className="col-md-6">
                        {error_message?<div className="error-container"><span>{error_message}</span></div>:null}
                        <form className="mt-4 auth-form" action="#">
                          <div className="form-group">
                            <label htmlFor="useremail">Email</label>
                            <input
                              type="email"
                              className={email_error?"form-control error":"form-control"}
                              id="useremail"
                              placeholder="Enter email"
                            />
                            {email_error?<label className="error_message">Email is not correct.</label>:null}
                          </div>

                          <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                              type="number"
                              className={phone_error?"form-control error":"form-control"}
                              id="phone"
                              placeholder="Enter phone number"
                            />
                            {phone_error?<label className="error_message">Please input phone number.</label>:null}
                          </div>

                          <div className="form-group">
                            <label htmlFor="userpassword">Password</label>
                            <input
                              type="password"
                              className={password_error?"form-control error":"form-control"}
                              id="userpassword"
                              placeholder="Enter password"
                            />
                            {password_error?<label className="error_message">Please input password correctly.</label>:null}
                          </div>

                          <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <input
                                type="password"
                                className={password_error?"form-control error":"form-control"}
                                id="confirmpassword"
                                placeholder="Confirm password"
                            />
                            {password_error?<label className="error_message">Please input password correctly.</label>:null}
                          </div>

                          <Row className="form-group">
                            <Col sm="12" className="text-right">
                              <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                onClick={this.onRegister}
                                disabled={registering}
                              >
                                Register
                              </button>
                            </Col>
                          </Row>

                          <Row className="form-group">
                            <Col sm="12">
                              <p className="mb-0">
                                By registering you agree to the 5G Mall{" "}
                                <Link to="#" className="text-primary">
                                  Terms of Use
                                </Link>
                              </p>
                            </Col>
                          </Row>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </div>
    );
  }
}

export default Register;
