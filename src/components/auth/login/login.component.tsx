import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { loginAction, loginFailedAction } from '../auth.actions';
import { RouteProps } from 'react-router-dom';
import { selectAuthErrorMessage } from '../auth.selectors';
import { isValidEmail, isValidPassword } from '../../../helpers/validation.helpers';

export interface LoginState {
    mobile: string;
    otp: string;
    prevPath?: string;
}

interface DispatchProps {
    login: (data: LoginState) => void;
}

interface Validations {
    mobile: boolean;
    otp: boolean;
}

const Login = (props: DispatchProps & RouteProps) => {

    const [mobile, setMobile] = useState('');
    const [otp, setOTP] = useState('');
    const [isValid, setValidations] = useState<Validations>({ mobile: true, otp: true });
    const errorMessage = useSelector(selectAuthErrorMessage);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loginFailedAction(null));
    }, [dispatch]);

    const setValidationsStatus = (value: string, key: string) => {
        let status = true;
        if (key === 'email') {
            status = isValidEmail(value);
        } else if (key === 'password') {
            status = isValidPassword(value);
        }
        setValidations({ ...isValid, [key]: status });
    }

    const handleOnChange = (value: string, key: keyof Validations) => {
        if (!isValid[key]) {
            setValidationsStatus(value, key);
        }

        if (key === 'mobile') {
            setMobile(value);
        } else if (key === 'otp') {
            setOTP(value);
        }
    }

    return (
        <div className="row mt-5 align-middle">
                <form className="w-25 container mt-5 align-middle">
                    
                    <h3 className="mt-5">
                        Login
					    </h3>
                        <span className="text-danger alert-danger">{errorMessage}</span>
                    <div>
                        <input id="mobile" placeholder='mobile' className='form-control mt-3' type="text"
                            value={mobile}
                            onChange={(e) => handleOnChange(e.target.value, 'mobile')} required />
                    </div>

                    <div>
                        <input id="otp" placeholder='otp' className='form-control mt-3' type="password"
                            value={otp}
                            onChange={(e) => handleOnChange(e.target.value, 'otp')} required />
                    </div>
                    
                    <div className='text-center'>
                        <button id="submit" type='button' className='btn-info mt-3 px-2'
                            disabled={!isValid.mobile || !isValid.otp || !mobile || !otp}
                            onClick={() => props.login({ mobile, otp })}>Submit
                        </button>
                    </div>
                </form>
                </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    login: (data: LoginState) => {
        console.log('---login---')
        dispatch(loginAction(data))
    }
})

export default connect(null, mapDispatchToProps)(Login);
