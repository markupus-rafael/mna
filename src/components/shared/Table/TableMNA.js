import React, {useState} from 'react';
import PropTypes from "prop-types";
 import { Table  } from 'semantic-ui-react'
import _ from 'lodash';

const tableData = [
    { name: 'John', age: 15, gender: 'Male' },
    { name: 'Amber', age: 40, gender: 'Female' },
    { name: 'Leslie', age: 25, gender: 'Other' },
    { name: 'Ben', age: 70, gender: 'Male' },
];

const TableMNA = ({className, children}) =>{
    const [table, setTable] = useState({
      column: null,
      data: tableData,
      direction: null,
    });

    const handleSort = clickedColumn => () => {
        const { column, data, direction } = table;

        if (column !== clickedColumn) {
            return  setTable({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            });

        }

        setTable({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    };
    const { column, data, direction } = table;

    return (
        <div className={` ${className}`}>
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={handleSort('name')}
                        >
                            Name
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            className="sorted"
                            sorted={column === 'age' ? direction : null}
                            onClick={handleSort('age')}
                        >
                            Age
                        </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gender' ? direction : null}
                            onClick={handleSort('gender')}
                        >
                            Gender
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ age, gender, name }) => (
                        <Table.Row key={name}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{age}</Table.Cell>
                            <Table.Cell>{gender}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}


TableMNA.propTypes = {
    className: PropTypes.string,
};

export default TableMNA;



// import { Select, Spin } from 'antd';
// import debounce from 'lodash/debounce';
//
// const { Option } = Select;
//
// class UserRemoteSelect extends React.Component {
//     constructor(props) {
//         super(props);
//         this.lastFetchId = 0;
//         this.fetchUser = debounce(this.fetchUser, 800);
//     }
//
//     state = {
//         data: [],
//         value: [],
//         fetching: false,
//     };
//
//     fetchUser = value => {
//         console.log('fetching user', value);
//         this.lastFetchId += 1;
//         const fetchId = this.lastFetchId;
//         this.setState({ data: [], fetching: true });
//         fetch('https://randomuser.me/api/?results=5')
//             .then(response => response.json())
//             .then(body => {
//                 if (fetchId !== this.lastFetchId) {
//                     // for fetch callback order
//                     return;
//                 }
//                 const data = body.results.map(user => ({
//                     text: `${user.name.first} ${user.name.last}`,
//                     value: user.login.username,
//                 }));
//                 this.setState({ data, fetching: false });
//             });
//     };
//
//     handleChange = value => {
//         this.setState({
//             value,
//             data: [],
//             fetching: false,
//         });
//     };
//
//     render() {
//         const { fetching, data, value } = this.state;
//         return (
//             <Select
//                 mode="multiple"
//                 labelInValue
//                 value={value}
//                 placeholder="Select users"
//                 notFoundContent={fetching ? <Spin size="small" /> : null}
//                 filterOption={false}
//                 onSearch={this.fetchUser}
//                 onChange={this.handleChange}
//                 style={{ width: '100%' }}
//             >
//                 {data.map(d => (
//                     <Option key={d.value}>{d.text}</Option>
//                 ))}
//             </Select>
//         );
//     }
// }
//
// ReactDOM.render(<UserRemoteSelect />, mountNode);
