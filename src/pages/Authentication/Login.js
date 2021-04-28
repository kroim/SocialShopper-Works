import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Card } from "reactstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";


import { loginUser as loginUserAction } from "../../store/actions";
import PropTypes from 'prop-types';
import {Footer, Header, Loader} from "../../components/General";


class Login extends Component {
  static propTypes = {
    history: PropTypes.object,
    loginUser: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      headers: { names: 'Login' },
      titleHeader: 'Login',
      breadcrumbs: [
        {
          id: 1,
          title: 'Home',
          classicon: 'fa fa-angle-right',
          aria: 'true'
        },
        {
          id: 2,
          title: 'Login',
          classicon: '',
          aria: 'true'
        }
      ]
    };
  }

  onLogin = (e) => {
    const { loginUser, history } = this.props;
    let email = document.getElementById('email').value;
    let userpassword = document.getElementById('userpassword').value;
    if(email.trim().length && userpassword.trim().length){
      loginUser({email: email, password: userpassword}, history);
    }
    e.preventDefault();
  }

  render() {
    const { headers, titleHeader } = this.state;
    return (
      <div className="login bg-body3">
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

                    <form className="mt-4 auth-form" action="#">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="userpassword">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                        />
                      </div>

                      <Row className="form-group">
                        <Col sm={6}>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customControlInline"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customControlInline"
                            >
                              Remember me
                            </label>
                          </div>
                        </Col>

                        <Col sm="6" className="text-right">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            onClick={this.onLogin}
                          >
                            Log In
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                    <div className="col-md-3"/>
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

const mapDispatchToProps = dispatch => ({
  loginUser: (param1, param2) => dispatch(loginUserAction(param1, param2)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
