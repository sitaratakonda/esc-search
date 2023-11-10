import axios from 'axios';
const ENDPOINT_URL_PROD = "https://5x5eoevn52sp5ekwkm72phtpt40qntxo.lambda-url.us-east-2.on.aws/customers";


export const searchCustomers = (searchTerm) => {   
    let promise = new Promise((resolve, reject) => {
        let url = `${ENDPOINT_URL_PROD}?name=${searchTerm}`;
        axios.get(url).then(response => {
            if (response) {
                resolve(response.data);
            }
        })
        .catch((error) => resolve({items:[]}));
    });
    return promise;
}
export const getCustomer = (email) => {   
    let promise = new Promise((resolve, reject) => {
        
        axios.get(`${ENDPOINT_URL_PROD}/${email}`).then(response => {
            if (response) {
                resolve(response.data);
            }
        })
        .catch((error) => resolve({items:[]}));
    });
    return promise;
}

//   export const searchCustomers = (searchTerm) => {
//     searchTerm = searchTerm.toLowerCase();
//     return customers.ctRoot.filter((customer) =>
//       customer.name.toLowerCase().includes(searchTerm)
//     );
//   };

//   export const getCustomer = (email) => {
//     return customers.ctRoot.filter((customer) =>
//         customer.email.toLowerCase() === email
//     );
//   }

 


  