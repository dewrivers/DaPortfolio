import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xm-12">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
                                </div>
                                <h3> Web Design</h3>
                                <p>I just acept proyects that im sure i can improve </p>
                            </div>
                        </div> 
                        {/* - */}
                        <div className="col-md-6 col-xm-12">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
                                </div>
                                <h3> Web Development</h3>
                                <p>I use the best tecnologies and more adequate for your project.</p>
                            </div>
                        </div> 
                        {/* - */}
                    </div>
                </div>
            </div>
    )
}

export default Services
