import React, { useState } from "react";
import "./AddCustomer.scss";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import apiRequest from "../../utils/apiRequest";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    phone: "",
    status: "",
  });
  console.log(customer);

  const navigate = useNavigate();

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleChange = (e) => {
    setCustomer((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await apiRequest.post("/customers", customer);
      navigate(`/customers/single/${res.data._id}`)
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };
  return (
    <div className="add">
      <div className="container">
        <div className="breadcrumbs">
          <p>PinPoint &gt; Add</p>
        </div>
        <div className="customer_detail">
          <h1>Add Customer's Details</h1>
          <p>Edit</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="left">
            <div className="input">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="address">Home Address</label>
              <input
                type="text"
                name="address"
                placeholder="Home Address"
                onChange={handleChange}
              />
            </div>
            <div className="city_country">
              <div className="city">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                />
              </div>
              <div className="country">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  onChange={handleChange}
                />
              </div>
            </div>
            {isSmallScreen && (
              <div className="right">
                <div className="input">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="number"
                    min={0}
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <label htmlFor="customerType">Customer Type</label>
                  <select
                    name="status"
                    onChange={handleChange}
                    value={customer.status}
                  >
                    <option value="new">New</option>
                    <option value="vip">VIP</option>
                    <option value="prospect">Prospect</option>
                    <option value="returning">Returning</option>
                  </select>
                </div>
                <div className="input">
                  <label htmlFor="note">Note</label>
                  <textarea
                    name="note"
                    cols="30"
                    rows="5"
                    placeholder="e.g High priority customer"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            )}
            <button type="submit">Submit</button>
          </div>
          {!isSmallScreen && (
            <div className="right">
              <div className="input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="number"
                  min={0}
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <label htmlFor="customerType">Customer Type</label>
                <select
                  name="status"
                  onChange={handleChange}
                  value={customer.status}
                >
                  <option value="New">New</option>
                  <option value="VIP">VIP</option>
                  <option value="Prospect">Prospect</option>
                  <option value="Returning">Returning</option>
                </select>
              </div>
              <div className="input">
                <label htmlFor="note">Note</label>
                <textarea
                  name="note"
                  cols="30"
                  rows="5"
                  placeholder="e.g High priority customer"
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddCustomer;
