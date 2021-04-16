import React from 'react';
import { Dispatch } from 'redux';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { getSelfieUsers } from './selfie.actions';
import { SelfieUser } from './selfie.types';
import { selectSelfieUsersData } from './selfie.selectors';
import { AppState } from '../../redux/store';
import * as _ from 'underscore';
import '../component.css'

interface DispatchProps {
    getUsers: (pageNo: number) => void;
}

interface StateProps {
    usersData: SelfieUser[]
}

interface LocalState {
    selectedUser: SelfieUser
}

class Selfie extends React.Component<DispatchProps & StateProps> {
    state: LocalState = {
        selectedUser: {
            _id: '',
            firstName: '',
            lastName: '',
            mobile: '',
            images: []
        }
    }

    componentDidMount() {
        this.props.getUsers(1);
    }

    handlePageChange = (pg: { selected: number }) => {
        this.props.getUsers(pg.selected + 1);
    }

    selectUser = (selectedUserId: string): void => {
        this.setState({ selectedUser: _.findWhere(this.props.usersData, { _id: selectedUserId }) });
    }

    render(): JSX.Element {
        return (
            <div>
                <table className="table table-sm table-bordered">
                    <thead>
                        <tr>
                            <th scope="col w-100">First</th>
                            <th scope="col w-100">Last</th>
                            <th scope="col">About</th>
                            <th scope="col">Selfie</th>
                            <th scope="col">Images</th>
                            <th scope="col">Id</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.usersData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutModal" onClick={() => this.selectUser(user._id)}>About</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#selfieModal" onClick={() => this.selectUser(user._id)}>Selfie</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#photosModal" onClick={() => this.selectUser(user._id)}>Images</button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#idModal" onClick={() => this.selectUser(user._id)}>Id</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div className='custom-paginate'>
                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={100}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
                {/* About model html */}
                <div className="modal fade" id="aboutModal" role="dialog" aria-labelledby="about-modal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">About Approval</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div>
                                    {/* name section */}

                                    <h3 className='text-center text-info'>
                                        {this.state.selectedUser.firstName} &nbsp; {this.state.selectedUser.lastName}
                                    </h3>

                                </div>

                                <div>
                                    <div>
                                        <p className='p-5'>HAi friednd</p>
                                        <div>
                                            <button className="btn btn-danger pull-right ml-5 mr-3">Decline</button>
                                            <button className="btn btn-info pull-right">Approve</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                {/* selfie model html */}
                <div className="modal fade" id="selfieModal" role="dialog" aria-labelledby="selfie-modal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Selfie Approval</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div>

                                    {/* name section */}
                                    <h3 className='text-center text-info'>
                                        {this.state.selectedUser.firstName} &nbsp; {this.state.selectedUser.lastName}
                                    </h3>
                                </div>

                                <div>
                                    <div>
                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                        <div className="mt-3">
                                            <button className="btn btn-danger pull-right ml-4 mr-5">Decline</button>
                                            <button className="btn btn-info pull-right">Approve</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* Photos model html */}
                <div className="modal fade" id='photosModal' role="dialog" aria-labelledby="photos-modal" aria-hidden="true">
                    <div className="modal-photos" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Photos Approval</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    {/* name section */}
                                    <h3 className='text-center text-info'>
                                        {this.state.selectedUser.firstName} &nbsp; {this.state.selectedUser.lastName}
                                    </h3>
                                </div>

                                <div>
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                    <td>
                                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                                        <button className="btn btn-danger ml-5 mt-3">Decline</button>
                                                        <button className="btn btn-info ml-2 mt-3">Approve</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>


                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>




                {/* ID model html */}
                <div className="modal fade" id='idModal' role="dialog" aria-labelledby="id-modal" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Identification Approval</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div>

                                    {/* name section */}
                                    <h3 className='text-center text-info'>
                                        {this.state.selectedUser.firstName} &nbsp; {this.state.selectedUser.lastName}
                                    </h3>
                                </div>

                                <div>
                                    <div>
                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                        <img alt='User photos' className='img-size' src={this.state.selectedUser.images[0]} />
                                        <div className="mt-3">
                                            <button className="btn btn-danger pull-right ml-4 mr-5">Decline</button>
                                            <button className="btn btn-info pull-right">Approve</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    getUsers: (pageNo: number) => dispatch(getSelfieUsers(pageNo)),
});

const mapStateToProps = (state: AppState): StateProps => ({
    usersData: selectSelfieUsersData(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Selfie);
