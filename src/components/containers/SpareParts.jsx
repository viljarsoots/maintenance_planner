import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import { productsData } from '../data/ProductsData.js';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import { spareParts } from '../data/SpareParts.js';



const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerAlign: 'center'
	
	
  }, {
	dataField: 'partCode',
    text: 'Partcode',
    headerAlign: 'center'
	
}, {
	dataField: 'partName',
    text: 'Part Name',
    headerAlign: 'center'
	
}, {
	dataField: 'quantity',
    text: 'Quantity',
    headerAlign: 'center'
}, {
	dataField: 'purchasePrice',
    text: 'Purchase Price',
    headerAlign: 'center'
}, {
	dataField: 'salesPrice',
    text: 'Sales price',
    headerAlign: 'center'
}, {
	dataField: 'location',
    text: 'Location',
    headerAlign: 'center'
}, {
	dataField: 'producer',
    text: 'Producer',
    headerAlign: 'center'
}];


const customTotal = (from, to, size) => (
	<span className="react-bootstrap-table-pagination">
		Showing {from} to {to} of {size} Results
  </span>
);

const paginationConfig = {
	custom: true,
	paginationSize: 3,
	pageStartIndex: 1,
	firstPageText: 'First',
	prePageText: 'Back',
	nextPageText: 'Next',
	lastPageText: 'Last',
	nextPageTitle: 'First page',
	prePageTitle: 'Pre page',
	firstPageTitle: 'Next page',
	lastPageTitle: 'Last page',
	showTotal: true,
	paginationTotalRenderer: customTotal,
	sizePerPageList: [{
		text: '10', value: 10
	}, {
		text: '25', value: 25
	}, {
		text: '50', value: 50
	}, {
		text: '100', value: 100
	}, {
		text: 'All', value: productsData.length
	}] // A numeric array is also available. the purpose of above example is custom the text
};


export default class SpareParts extends React.Component {

	constructor(props) {
		super(props);
	}




	render() {

		const contentTable = ({ paginationProps, paginationTableProps }) => {

			return (
				<div className= "container">

					<ToolkitProvider
						keyField="id"
						columns={columns}
						data={spareParts}
						search
					>
						{
							(toolkitprops) => {

								return (
									<div>
										<div className="row">
											<div className="col-sm-8">
											</div>
											<div className="col-sm-4">
												<SearchBar {...toolkitprops.searchProps} />
											</div>
										</div>
										<br />

										<BootstrapTable
											striped
											hover
											{...toolkitprops.baseProps}
											{...paginationTableProps}
										/>

									</div>);


							}
						}
					</ToolkitProvider>
					<div className="row" id= "pagination">
						<div className="col-sm">
							<div className="row justify-content-start">
								<SizePerPageDropdownStandalone {...paginationProps} />
							</div>
						</div>
						<div className="col-sm">
							<div className="row justify-content-end">
								<PaginationListStandalone {...paginationProps} />
							</div>
						</div>
					</div>
				</div>
			);
		}


		return (
			<div id= "partsTable">
				<h2>Parts Table</h2>

				<PaginationProvider pagination={paginationFactory(paginationConfig)} >
					{contentTable}
				</PaginationProvider>

			</div>
		);


	}


}