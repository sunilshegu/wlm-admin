import React from 'react';
import { Dispatch } from 'redux';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import { getSelfieUsers } from './selfie.actions';
import { SelfieUser } from './selfie.types';
import { selectSelfieUsersData } from './selfie.selectors';
import { AppState } from '../../redux/store';

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

    render(): JSX.Element {
        const options = {
            paginationSize: 4,
            pageStartIndex: 0,
            // alwaysShowAllBtns: true, // Always show next and previous button
            // withFirstAndLast: false, // Hide the going to First and Last page button
            // hideSizePerPage: true, // Hide the sizePerPage dropdown always
            // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            disablePageTitle: true,
            onPageChange: function (p: number, sp: number) {
                console.log(p)
            },
            sizePerPageList: [{
                text: '5', value: 5
            }, {
                text: '10', value: 10
            }]
        };

        const columns = [{
            dataField: 'firstName',
            text: 'First Name'
        }, {
            dataField: 'mobile',
            text: 'Phone'
        }, {
            dataField: 'lastName',
            editorRenderer: () => (
                <button>Hello</button>
            ),
            text: 'Approve'
        }];
        const data = {
            columnDefs: [
                {headerName: 'Make', field: 'make'},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price'}

            ],
            rowData: [
                {make: 'Toyota', model: 'Celica', price: 35000},
                {make: 'Ford', model: 'Mondeo', price: 32000},
                {make: 'Porsche', model: 'Boxter', price: 72000}
            ]
        }

        return (
            
            <div>
                {/* <BootstrapTable 
                    keyField='mobile'
                    data={this.props.usersData} columns={columns}
                    pagination={paginationFactory(options)}
                    cellEdit={ cellEditFactory({}) }
                    /> */}
                <AgGridReact
                    columnDefs={data.columnDefs}
                    rowData={data.rowData}>
                </AgGridReact>
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
