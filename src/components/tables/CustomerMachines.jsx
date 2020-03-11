import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import paginationFactory, { PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import {mockDataUrl, config, axios} from '../data/config.js';


const { SearchBar } = Search;

const customTotal = (from, to, size) => (
	<span className="react-bootstrap-table-pagination">
		Showing {from} to {to} of {size} Results
  </span>
);

export default class CustomerMachines extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
				machineData: []
			};

		this.formatProductDetailsButtonCell=this.formatProductDetailsButtonCell.bind(this);
        this.productDetails=this.productDetails.bind(this);
		this.handeleAddMachine=this.handeleAddMachine.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
		this.handeleGet = this.handeleGet.bind(this);
	}
	handeleAddMachine = () => {
		this.props.history.push("/addmachine/");
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

	componentDidMount(){    
		this.handeleGet();
	   }

	   handeleGet(event) {
        axios.get(mockDataUrl+"customer/1", config)
            .then((response) => {

				this.setState({machineData: response.data.data.machineSet});
                 console.log(response.data.data.machineSet);


			}).catch((exception) => {
                console.log(exception);
            });
            //console.log(machineData);
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
				text: 'All', value: this.state.machineData.length
			}] // A numeric array is also available. the purpose of above example is custom the text
		};

		const columns = [{
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

		const contentTable = ({ paginationProps, paginationTableProps }) => {

			return (
				<div className="container">

					<ToolkitProvider
						keyField="id"
						columns={columns}
						data={this.state.machineData}
						hover
                        bordered={false}
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
										<button type="button" className="btn btn-secondary" onClick={this.handeleAddMachine}>Add New Machine</button>
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
				<h2>Customer Machine Table</h2>

				<PaginationProvider pagination={paginationFactory(paginationConfig)} >
					{contentTable}
				</PaginationProvider>

			</div>
		);


	}


}