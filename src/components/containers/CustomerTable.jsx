import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import {mockDataUrl} from '../data/config.js';
import {config} from '../data/config.js';
import {axios} from '../data/config.js';
import {agent} from '../data/config.js';


const { SearchBar } = Search;


const customTotal = (from, to, size) => (
	<span className="react-bootstrap-table-pagination">
		Showing {from} to {to} of {size} Results
  </span>
);

export default class CustomerTable extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
				customerData: []
			};

		this.formatcustomerDetailsButtonCell=this.formatcustomerDetailsButtonCell.bind(this);
		this.customerDetails=this.customerDetails.bind(this);
		this.customerMachineDetails=this.customerMachineDetails.bind(this);
		this.handeleAddMachine=this.handeleAddMachine.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handeleGet = this.handeleGet.bind(this);
	}
	handeleAddMachine = () => {
		this.props.history.push("/addCustomer");
	}

	customerDetails = (e) => {

		let { id } = e.target;
		console.log("See Details for Id: " + id);
		this.props.history.push('/addCustomer/' + id);
	}

	customerMachineDetails = (e) => {

		let { id } = e.target;
		console.log("See Details for Id: " + id);
		this.props.history.push('/addCustomer/' + id);
	}


	formatcustomerDetailsButtonCell = (cell, row) => {
		let editHandler = this.customerDetails;
		let seeMachines = this.customerMachineDetails;
		let editBtn = React.createElement('button', { id: row.id, className: "btn-success btn-sm", onClick: editHandler }, 'Edit');
		let seeMachinesBtn = React.createElement('button', { id: row.id, className: "btn-warning btn-sm", onClick: seeMachines }, 'See Machines');
		let container = React.createElement('div',{},[editBtn, seeMachinesBtn]);
		return container;
	}

	componentDidMount(event){    
		this.handeleGet();
	   }

	   handeleGet(event) {
        axios.get(mockDataUrl+"customer", config)
            .then((response) => {

				this.setState({customerData: response.data.data});
				// console.log(response.data);


			}).catch((exception) => {
                console.log(exception);
            });

         //event.preventDefault();
    }




	render() {

		
		
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
				text: 'All', value: this.state.customerData.length
			}] // A numeric array is also available. the purpose of above example is custom the text
		};

		const columns = [{
			dataField: 'id',
			text: 'ID',
		
		}, {
			dataField: 'name',
			text: 'Customer Name',
		
		}, {
			dataField: 'address',
			text: 'Customer Address',
		
		}, {
			dataField: 'location',
			text: 'Production Location'
		}, {
			dataField: 'action',
			text: '',
			formatter: this.formatcustomerDetailsButtonCell
		}];

		const contentTable = ({ paginationProps, paginationTableProps }) => {

			return (
				<div className="container">

					<ToolkitProvider
						keyField="id"
						columns={columns}
						data={this.state.customerData}
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
										<button type="button" className="btn btn-secondary" onClick={this.handeleAddMachine}>Add New Customer</button>
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
					<div className="row" id="pagination">
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
			<div id="machineTable">
				<h2>Customer Table</h2>

				<PaginationProvider pagination={paginationFactory(paginationConfig)} >
					{contentTable}
				</PaginationProvider>

			</div>
		);


	}


}