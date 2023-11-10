import React, {useState} from "react";
import { searchCustomers } from '../stubApi';
import { Link } from 'react-router-dom';


export default function SearchBox() {
    const [filteredData, setFilteredData] = useState([]);
    const changeSearchTermHandler = (ev) => {
        const list = searchCustomers(ev.target.value);
        setFilteredData(list);
    };
  
    return (
        <div>
            <div className="input-group mb-3">
                <input type="text" onChange={changeSearchTermHandler} className="form-control" placeholder="Search People" aria-label="Search" aria-describedby="button-addon2"/>
            </div>
            <div className="list-group">
            {
                filteredData.map((item, index) => (
                    <Link className="tc" to={`/details/${item.email}`}>
                        <div className="list-group-item list-group-item-action" aria-current="true">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{item.name}</h5>
                            </div>
                            <p className="mb-1">{item.email}</p>
                            <small>{item.address.town}</small>
                        </div>
                    </Link>
                    
                ))
            }
            </div>
        </div>
    );

}