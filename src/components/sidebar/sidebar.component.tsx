import React from 'react';
import { Link } from 'react-router-dom';

interface RouterProps {
}

const Sidebar = (props: RouterProps) => {
    return (
        <div className="container-fluid">
            <div className="row min-vh-100 flex-column flex-md-row">
                <aside className="col-12 col-md-2 p-0 bg-dark flex-shrink-1">
                    <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
                        <div className="collapse navbar-collapse ">
                            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">

                                <li className="nav-item">
                                    <Link to={'/dashboard/comp1'}>
                                        <i className="fa fa-book fa-fw"></i>
                                        <span className="d-none d-md-inline">Selfie Verification</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/dashboard/comp2'}>
                                        <i className="fa fa-cog fa-fw"></i>
                                        <span className="d-none d-md-inline">Id Verification</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/dashboard/comp3'}>
                                        <i className="fa fa-heart codeply fa-fw"></i>
                                        <span className="d-none d-md-inline">Codeply</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <i className="fa fa-star codeply fa-fw"></i>
                                    <span className="d-none d-md-inline">Link</span>
                                </li>

                                <li className="nav-item">
                                    <i className="fa fa-star fa-fw"></i>
                                    <span className="d-none d-md-inline">Link</span>
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
