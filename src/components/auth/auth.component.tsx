import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { loginAction, updateLoginError } from './auth.actions';
import { AppState } from './../../redux/store';
import { selectAuthErrorMessage } from './auth.selectors';

export interface LoginState {
    mobile: string;
    password: string;
    error?: string;
}

interface DispatchProps {
    login: (data: LoginState) => void;
    updateLoginError: (message: string) => void;
}

interface StateProps {
    error: string
}

class Login extends React.Component<DispatchProps & StateProps> {
    state: LoginState = {
        mobile: '',
        password: '',
    };

    handleOnChange = (value: string, key: string): void => {
        if (key === 'mobile') {
            this.setState({ mobile: value })
        } else if (key === 'password') {
            this.setState({ password: value });
        }
    }

    submit = () => {
        this.props.updateLoginError('');
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
                        <div>
                            <span className="text-danger alert-danger">{this.props.error}</span>
                        </div>
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
    login: (data: LoginState) => dispatch(loginAction(data)),
    updateLoginError: (message: string) => dispatch(updateLoginError(message))
    
});

const mapStateToProps = (state: AppState): StateProps => ({
    error: selectAuthErrorMessage(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
