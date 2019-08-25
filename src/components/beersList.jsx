import React from 'react'
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';

class BeersList extends React.Component {
    render() {
        const column = [{
        Header: 'Image',
        accessor:"image_url",
        Cell: row => <img src={row.value} style={{height: '100px'}} alt={row.value}></img>
    }, {
        Header: 'Name',
        id: 'name',
        filterable: true,
        accessor: d => d.name,
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, {keys: ['name']}),
        filterAll: true
    }, {
       Header: 'TagLine',
        accessor: 'tagline'
    }];
    return(
        <ReactTable data={this.props.beers} columns={column} defaultPageSize={20}/>
    );
        

    
    }
   
}

export default BeersList;