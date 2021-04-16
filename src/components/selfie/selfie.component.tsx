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
                            <th scope="col">Check</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.usersData.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.selectUser(user._id)}>Check</button>
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

                {/* model html */}
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {this.state.selectedUser.firstName}
                                {this.state.selectedUser.lastName}

                                <div className='img-size'>
                                    <img alt='User photos' src={this.state.selectedUser.images[0]} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
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
