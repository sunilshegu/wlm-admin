import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loginAction } from '../auth.actions';
import { RouteProps } from 'react-router-dom';

export interface LoginState {
    mobile: string;
    password: string;
    error?: string;
}

interface DispatchProps {
    login: (data: LoginState) => void;
}

class Login extends React.Component<DispatchProps & RouteProps> {
    state: LoginState = {
        mobile: '',
        password: '',
        error: ''
    };

    handleOnChange = (value: string, key: string): void => {
        if (key === 'mobile') {
            this.setState({ mobile: value })
        } else if (key === 'password') {
            this.setState({ password: value });
        }
    }

    submit = () => {
        console.log(this.state.password, this.state.mobile)
        this.props.login({
            mobile: this.state.mobile,
            password: this.state.password
        })
    }

    render() {
        return (
            <div className="row mt-5 align-middle">
                <form className="w-25 container mt-5 align-middle">

                    <h3 className="mt-5">
                        Login
					    </h3>
                    <span className="text-danger alert-danger">{this.state.error}</span>
                    <div>
                        <input id="mobile" placeholder='mobile' className='form-control mt-3' type="text"
                            value={this.state.mobile}
                            onChange={(e) => this.handleOnChange(e.target.value, 'mobile')} required />
                    </div>

                    <div>
                        <input id="password" placeholder='password' className='form-control mt-3' type="password"
                            value={this.state.password}
                            onChange={(e) => this.handleOnChange(e.target.value, 'password')} required />
                    </div>

                    <div className='text-center'>
                        <button id="submit" type='button' className='btn-info mt-3 px-2'
                            onClick={() => this.submit()}>Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    };
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    login: (data: LoginState) => {
        dispatch(loginAction(data))
    }
})

export default connect(null, mapDispatchToProps)(Login);
