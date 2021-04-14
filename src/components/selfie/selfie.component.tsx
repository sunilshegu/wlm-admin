import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const Selfie = () => {
    const products = [{ a: 1, b: 'sunil' }, { a: 2, b: 'shahul' }, { a: 103, b: 'sunil' }, { a: 102, b: 'sunil' }, { a: 101, b: 'sunil' }, { a: 11, b: 'sunil' }, { a: 111, b: 'sunil' }];
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
        }, {
            text: 'All', value: products.length
        }] // A numeric array is also available. the purpose of above example is custom the text
    };

    const columns = [{
        dataField: 'a',
        text: 'SNo'
    }, {
        dataField: 'b',
        text: 'Name'
    }];

    return (
        <div>
            <BootstrapTable keyField='a' data={products} columns={columns} pagination={paginationFactory(options)} />
        </div>
    )
}

export default Selfie;