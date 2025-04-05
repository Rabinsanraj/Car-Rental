import { useLocation } from 'react-router-dom';

function PaymentOptions() {
    const location = useLocation();
    const formData = location.state;

    if (!formData) {
        return <div className="container mt-4"><p>No data found. Please go back and fill the form again.</p></div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Payment Information</h2>
            <ul className="list-group">
                <li className="list-group-item"><strong>First Name:</strong> {formData.firstname}</li>
                <li className="list-group-item"><strong>Last Name:</strong> {formData.lastname}</li>
                <li className="list-group-item"><strong>No of Persons:</strong> {formData.persons}</li>
                <li className="list-group-item"><strong>Company Name:</strong> {formData.company}</li>
                <li className="list-group-item"><strong>Street Address:</strong> {formData.address}</li>
                <li className="list-group-item"><strong>Country:</strong> {formData.country}</li>
                <li className="list-group-item"><strong>City:</strong> {formData.city}</li>
                <li className="list-group-item"><strong>Pincode:</strong> {formData.pincode}</li>
                <li className="list-group-item"><strong>Email:</strong> {formData.email}</li>
                <li className="list-group-item"><strong>Phone:</strong> {formData.phone}</li>
                <li className="list-group-item"><strong>Additional Info:</strong> {formData.addinfo}</li>
            </ul>
        </div>
    );
}

export default PaymentOptions;


import { useLocation } from "react-router-dom";

export function PaymentOptions() {
  const { state } = useLocation();

  return (
    <div className="container mt-5">
      <h1 className="fw-bold">Payment Options</h1>
      <div className="card p-4 mt-4">
        <h4>Rental Type: {state?.rentalType}</h4>
        <h4>Booking Type: {state?.bookingType}</h4>
        <h4>Start: {state?.startDate} at {state?.startTime}</h4>
        <h4>End: {state?.endDate} at {state?.endTime}</h4>
      </div>
    </div>
  );
}
