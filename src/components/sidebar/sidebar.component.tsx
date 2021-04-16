import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../routing/routing.helpers';

interface RouterProps {
}

const Sidebar = (props: RouterProps) => {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100 flex-md-row">
                <aside className="bg-dark w-100">
                    <nav className="navbar navbar-expand navbar-dark flex-md-column">
                    <h1 className="navbar-brand text-center">Wlm</h1>
                            <ul className="flex-md-column flex-row navbar-nav">
                                
                                <li className="nav-item py-3">
                                    <Link to={PATHS.SELFIE}>
                                        <h4 className="d-none d-md-inline ml-2"><i className="fa fa-camera" aria-hidden="true"></i> Selfie Verification</h4>
                                    </Link>
                                </li>

                                <li className="nav-item py-3">
                                    <Link to={PATHS.ID}>
                                        <h4 className="d-none d-md-inline ml-2"><i className="fa fa-id-card-o" aria-hidden="true"></i> Id Verification</h4>
                                    </Link>
                                </li>
                                <li className="nav-item py-3">
                                    <Link to={PATHS.PHOTOS}>
                                        <h4 className="d-none d-md-inline ml-2"><i className="fa fa-picture-o" aria-hidden="true"></i> Photos</h4>
                                    </Link>
                                </li>

                                <li className="nav-item py-3">
                                    <Link to={PATHS.ABOUT}>
                                        <h4 className="d-none d-md-inline ml-2"><i className="fa fa-commenting-o" aria-hidden="true"></i> About</h4>
                                    </Link>
                                </li>
                            </ul>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default Sidebar;