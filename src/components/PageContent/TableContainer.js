import React, { useState } from 'react';
import PropTypes from "prop-types";
import SearchInput from "../shared/Form/SearchInput";
import Select from "../shared/Select/Select";

const options = [
    { key: 'show 5', text: 'show 5', value: 'show 5' },
    { key: 'show 6', text: 'show 6', value: 'show 6' },
    { key: 'show 7', text: 'show 7', value: 'show 7' },
];

const TableContainer = (props) => {
    const [table, setTable] = useState({
        searchQuery: '',
        showItemsOnPage: 'show 5',
        perPage: '',
        currentPage: '',
    });

    const onSearch = (e) => {
        console.log(e)
       return () => setTimeout(() => {
            console.log(e);
        }, 300)
        // return setTable({
        //     ...table,
        //     [e.target.name]: e.target.value
        // })
    };

    const onShowItemsTable = (e) => {
      //  console.log(data);
        return (e) => {
            console.log(e);
            console.log(e);
        }
        // return setTable({
        //     ...table,
        //     [e.target.name]: e.target.value
        // })
    };

    console.log(table);

    return (
             <>
                 <div className="flexbox-row">
                     <SearchInput name="searchQuery"
                                  debounceDelay={800}
                                  onChange={onSearch}
                     />
                     <Select options={options}
                             defaultUpward
                             name="showItemsOnPage"
                             onShowItemsTable={onShowItemsTable}
                             value={table.showItemsOnPage}
                             placeholder="e=test" medium />
                 </div>

            </>
    )
};

export default TableContainer;