import React, { useEffect, useState } from "react";
import "./List.scss";
import noData from "../../assets/noData.png";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import apiRequest from "../../utils/apiRequest";

const List = () => {
  const  c= useLoaderData();
  const [search, setSearch] = useState("");
  const [customers, setCustomers] = useState(c);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiRequest.get(`/customers?search=${search}`);
        setCustomers(res.data)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  const isLargeScreen = useMediaQuery("(min-width: 1506px)");

  return (
    <div className="list">
      <div className="container">
        {!customers && (
          <div className="noData">
            <img src={noData} alt="" />
            <h1>No List Available</h1>
          </div>
        )}
        {customers && (
          <div className="content">
            <div className="breadcrumbs">
              <p>PinPoint &gt; List</p>
            </div>
            <div className="search">
              <span>
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search Customer's name"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <hr />
            {customers.map((c) => (
              <Link to={`/customers/single/${c._id}`} className="linkss" key={c.id}>
                <div className="listBox">
                  <div className="name">
                    <span className="icon">
                      <FaRegUser />
                    </span>
                    <span>{c.name.substring(0, 18)}.</span>
                  </div>
                  <div className="otherInfo">
                    <span className="icon">
                      <SlLocationPin />
                    </span>
                    <span>{c.city}</span>
                    <span>-</span>
                    {isLargeScreen && (
                      <p className="comment">{c.note.substring(0, 60)}...</p>
                    )}
                    {!isLargeScreen && (
                      <p className="comment">{c.note.substring(0, 35)}...</p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
