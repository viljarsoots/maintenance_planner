import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import { mockDataUrl } from '../data/config.js';
import { config } from '../data/config.js';
import { axios } from '../data/config.js';
import '@trendmicro/react-modal/dist/react-modal.css';
import Modal from '../widgets/Modal/modal.js'


// *****Methods*******

// const customerDetails = (e) => {

// 	let { id } = e.target;
// 	console.log("See Details for Id: " + id);
// 	this.props.history.push('/addCustomer/' + id);
// }

// const customerMachineDetails = (e) => {

// 	let { id } = e.target;
// 	console.log("See Details for Id: " + id);
// 	this.props.history.push('/addCustomer/' + id);
// }


// const formatcustomerDetailsButtonCell = (cell, row) => {
// 	let editHandler = customerDetails;
// 	let seeMachines = customerMachineDetails;
// 	let editBtn = React.createElement('button', { id: row.id, className: "btn-success btn-sm", onClick: editHandler }, 'Edit');
// 	let seeMachinesBtn = React.createElement('button', { id: row.id, className: "btn-warning btn-sm", onClick: seeMachines }, 'See Machines');
// 	let container = React.createElement('div',{},[editBtn, seeMachinesBtn]);
// 	return container;
// }

const { SearchBar } = Search;


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
		text: 'All', value: 5000
	}]
};





export default class CustomerTableTest extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			customerData: [],
			machineData: [],
			openMachineModal: false
		};

		this.formatcustomerDetailsButtonCell = this.formatcustomerDetailsButtonCell.bind(this);
		this.customerDetails = this.customerDetails.bind(this);
		this.customerMachineDetails = this.customerMachineDetails.bind(this);
		this.handeleAddMachine = this.handeleAddMachine.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handeleGet = this.handeleGet.bind(this);
		this.openMachineModal = this.openMachineModal.bind(this);
		this.closeMachineModal = this.closeMachineModal.bind(this);
		this.handeleMachineGet = this.handeleMachineGet.bind(this);


		this.columns = [{
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

		this.machineColumns = [{
			dataField: 'id',
			text: 'ID',

		}, {
			dataField: 'machineName',
			text: 'Machine Name',

		}, {
			dataField: 'producerName',
			text: 'Producer Name',

		}, {
			dataField: 'startupDate',
			text: 'Install Date'
		}, {
			dataField: 'nrOfMaitn',
			text: 'Number of maitenences'
		}, {
			dataField: 'location',
			text: 'Location'
		}, {
			dataField: 'lastMtnDate',
			text: 'Last Maitenence Date'
		}, {
			dataField: 'action',
			text: '',
			formatter: this.formatProductDetailsButtonCell
		}];

	}


	//**************Functions*****************
	openMachineModal(id) {
		this.setState({ openMachineModal: true });
		this.handeleMachineGet(id);
	}
	closeMachineModal() {
		this.setState({ openMachineModal: false })
	}

	productDetails = (e) => {

		let { id} = e.target;
		console.log("See Details for Id: " + id);
		this.props.history.push('/addmachine/'+id);
	}

	formatProductDetailsButtonCell = (cell, row) => {
		let clickHandler = this.productDetails;
		let aBtn = React.createElement('button',{ id:row.id, className: "btn btn-success btn-lg btn-block", onClick: clickHandler }, 'Edit');
		return aBtn;
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
		this.openMachineModal(id);
	}


	formatcustomerDetailsButtonCell = (cell, row) => {
		let editHandler = this.customerDetails;
		let seeMachines = this.customerMachineDetails;
		let editBtn = React.createElement('button', { id: row.id, className: "btn-success btn-sm", onClick: editHandler }, 'Edit');
		let seeMachinesBtn = React.createElement('button', { id: row.id, className: "btn-warning btn-sm", onClick: seeMachines }, 'See Machines');
		let container = React.createElement('div', {}, [editBtn, seeMachinesBtn]);
		return container;
	}

	componentDidMount(event) {
		this.handeleGet();
	}

	handeleGet(event) {
		axios.get(mockDataUrl + "customer", config)
			.then((response) => {

				this.setState({
					customerData: response.data.data
				});
				console.log(response.data);


			}).catch((exception) => {
				console.log(exception);
			});

		//event.preventDefault();
	}

	handeleMachineGet(id) {

		axios.get(mockDataUrl + "customer/" + id, config)
			.then((response) => {

				this.setState({ machineData: response.data.data.machineSet });
				console.log(response.data.data.machineSet);


			}).catch((exception) => {
				console.log(exception);
			});
		//console.log(machineData);
		//event.preventDefault();
	}




	render() {

		const contentTable = ({ paginationProps, paginationTableProps }) => {

			return (
				<div className="container">

					<ToolkitProvider
						keyField="id"
						columns={this.columns}
						data={this.state.customerData}
						search
					>
						{
							(toolkitprops) => {

								return (
									<div>
										{
											this.state.openMachineModal &&
											<Modal size="large" onClose={this.closeMachineModal}>
												<Modal.Header>
													<Modal.Title>
														Customer Machines
												</Modal.Title>
												</Modal.Header>
												<Modal.Body padding>
													<div className="container">

														<ToolkitProvider
															keyField="id"
															columns={this.machineColumns}
															data={this.state.machineData}
															hover
															bordered={false}
															search
														>
															{
																props => (
																	<div>
																		<div className="row">
																			<div className="col-sm-8">
																			</div>
																			<div className="col-sm-4">
																				<SearchBar {...props.searchProps} />
																			</div>
																		</div>
																		<hr />
																		<BootstrapTable {...props.baseProps} />
																	</div>)
															}
														</ToolkitProvider>

													</div>
												</Modal.Body>
											</Modal>
										}
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