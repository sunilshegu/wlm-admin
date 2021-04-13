import React from 'react';
import { Link } from 'react-router-dom';

interface RouterProps {
}

const Sidebar = (props: RouterProps) => {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100 flex-column flex-md-row">
                <aside className="col-lg-12 p-0 bg-dark flex-shrink-1">
                    <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
                        <div className="collapse navbar-collapse ">
                            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">

                                <li className="nav-item">
                                    <Link to={'/dashboard/selfie'}>
                                        <i className="fa fa-book fa-fw"></i>
                                        <span className="d-none d-md-inline">Selfie Verification</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/dashboard/id'}>
                                        <i className="fa fa-cog fa-fw"></i>
                                        <span className="d-none d-md-inline">Id Verification</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/dashboard/images'}>
                                        <i className="fa fa-heart codeply fa-fw"></i>
                                        <span className="d-none d-md-inline">Images</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </aside>
            </div>
        </div>
    )
}

export default Sidebar;