import React, { useEffect, useState } from "react";
import "./Customer.scss";
import { useMediaQuery } from "@custom-react-hooks/use-media-query";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { PiCityLight } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoIosBicycle } from "react-icons/io";
import { FaCarRear, FaChevronDown } from "react-icons/fa6";
import { MyMapComponent } from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";

const Customer = () => {
  const customer = useLoaderData();
  const [open, setOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width: 1506px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [position, setPosition] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    const geo = navigator.geolocation;

    const onSuccess = (position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    };

    const onError = (error) => {
      console.log("Error Retrieving Geolocation", error);
    };

    const watcher = geo.watchPosition(onSuccess, onError);

    return () => geo.clearWatch(watcher);
  }, []);

  return (
    <div className="customer">
      <div className="container">
        <div className="breadcrumbs">
          <p>PinPoint &gt; List</p>
        </div>
        {isLargeScreen && (
          <div className="content">
            <div className="left">
              <MyMapComponent location={position} />
            </div>
            <div className="right">
              <h1>{customer.name}</h1>
              <ul>
                <li>
                  <div className="distance">
                    Distance:
                    <div className="cycle">
                      <span>
                        <IoIosBicycle />
                      </span>
                      <span>30km</span>
                    </div>
                    <div className="car">
                      <span>
                        <FaCarRear />
                      </span>
                      <span>30km</span>
                    </div>
                  </div>
                </li>
                <li>
                  <span>
                    <HiOutlineMail />
                  </span>
                  <span>{customer.email}</span>
                </li>
                <li>
                  <span>
                    <IoLocationOutline />
                  </span>
                  <span>{customer.address}</span>
                </li>
                <li>
                  <span>
                    <PiCityLight />
                  </span>
                  <span>{customer.city}</span>
                </li>
                <li>
                  <span>
                    <IoIosPhonePortrait />
                  </span>
                  <span>{customer.phone}</span>
                </li>
                <li>
                  <span>
                    <CiUser />
                  </span>
                  <span>{customer.status}</span>
                </li>
                <li className="note">
                  <span>
                    <FaRegComment />
                  </span>
                  <span>"{customer.note}"</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!isLargeScreen && (
          <div className="content">
            <div className="mapp">
              <MyMapComponent location={position} />
            </div>
            <div className="overlay">
              <div className="center">
                <div className="name" onClick={() => setOpen(!open)}>
                  <h1>{customer.name}</h1>
                  <span className={open ? "rotate" : ""}>
                    <FaChevronDown />
                  </span>
                </div>
                <div className={open ? "show" : "hide"}>
                  <ul>
                    {!isSmallScreen && (
                      <li>
                        <div className="distance">
                          Distance:
                          <div className="cycle">
                            <span>
                              <IoIosBicycle />
                            </span>
                            <span>30km</span>
                          </div>
                          <div className="car">
                            <span>
                              <FaCarRear />
                            </span>
                            <span>30km</span>
                          </div>
                        </div>
                      </li>
                    )}
                    {isSmallScreen && (
                      <li>
                        <div className="distance">
                          Dist:
                          <div className="cycle">
                            <span>
                              <IoIosBicycle />
                            </span>
                            <span>30km</span>
                          </div>
                          <div className="car">
                            <span>
                              <FaCarRear />
                            </span>
                            <span>30km</span>
                          </div>
                        </div>
                      </li>
                    )}
                    <li>
                      <span>
                        <HiOutlineMail />
                      </span>
                      <span>{customer.email}</span>
                    </li>
                    <li>
                      <span>
                        <IoLocationOutline />
                      </span>
                      <span>{customer.address}</span>
                    </li>
                    <li>
                      <span>
                        <PiCityLight />
                      </span>
                      <span>{customer.city}</span>
                    </li>
                    <li>
                      <span>
                        <IoIosPhonePortrait />
                      </span>
                      <span>{customer.phone}</span>
                    </li>
                    <li>
                      <span>
                        <CiUser />
                      </span>
                      <span>{customer.status}</span>
                    </li>
                    <li className="note">
                      <span>
                        <FaRegComment />
                      </span>
                      <span>"{customer.note}"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customer;
