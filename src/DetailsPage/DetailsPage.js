import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCustomer } from '../stubApi';

const DetailsPage = () => {
    const { item } = useParams();
    const [customerDetails, setCustomerDetails] = useState({name:"",telephone:"",address:{street:"",town:"",postode:""},description:"",url:""});

    useEffect(() => {
        getCustomer(item).then(details => {
          console.log("Customer details::", details);
          setCustomerDetails(details);
        });
        
    }, []);
    return (
      <div>
        
        {/* Render item details here */}
        <div className="card">
            <div className="card-header">
                {customerDetails.name}
            </div>
            <div className="card-body">
                <h5 className="card-title">{customerDetails.address.street},{customerDetails.address.town},{customerDetails.address.postode}</h5>
                <p className="card-text">{customerDetails.telephone}</p>
                <p className="card-text">{customerDetails.description}</p>
                <a href={customerDetails.url} target="_blank" className="btn btn-primary">Personal Website</a>
                <Link to="/" className="ml-1"><div className="btn btn-primary ml-1">Back</div></Link>
            </div>
        </div>
      </div>
    );
  };
  
  export default DetailsPage;