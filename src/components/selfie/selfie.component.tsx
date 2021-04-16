import React from 'react';
import { Dispatch } from 'redux';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { getSelfieUsers } from './selfie.actions';
import { SelfieUser } from './selfie.types';
import { selectSelfieUsersData } from './selfie.selectors';
import { AppState } from '../../redux/store';
import '../component.css'

interface DispatchProps {
    getUsers: () => void;
}

interface StateProps {
    usersData: SelfieUser[]
}

class Selfie extends React.Component<DispatchProps & StateProps> {
    componentDidMount() {
        this.props.getUsers();
    }

    handlePageChange = (pg: any) => {
        console.log('--->', pg)
    }

    render(): JSX.Element {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Check</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.usersData.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">1</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>
                                        <button>Check</button>
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
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
    getUsers: () => dispatch(getSelfieUsers()),
});

const mapStateToProps = (state: AppState): StateProps => ({
    usersData: selectSelfieUsersData(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Selfie);
