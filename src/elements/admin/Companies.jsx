import { Phone, Envelope } from "phosphor-react";
import React from "react";
import "../../style/admin-companies/admin-companies.css";
import Logo from "../../img/company.jpg";

export default function Companies() {
  return (
    <div className="admin-companies">
      <div className="company">
        <img src={Logo} alt="Company image" />
        <h3>EasyBurger</h3>
        <div className="flex-jcc">
          <p>
            CEO: <span>Mark Bind</span>
          </p>
          <div className="flex-gap05">
            <button>
              <Phone size={28} color="#333" weight="bold" />
            </button>
            <button>
              <Envelope size={28} color="#333" weight="bold" />
            </button>
          </div>
        </div>

        <div className="line"></div>

        <p className="ticket">
          Tickets: <span>540</span>
        </p>

        <p className="location-p">Locations:</p>
        <ul>
          <li>18 East Dogwood Dr. Brooklyn, NY 11229</li>
          <li>New York</li>
          <li>New York</li>
          <li>New York</li>
          <li>New York</li>
          <li>New York</li>
          <li>New York</li>
          <li>New York</li>
        </ul>
      </div>
    </div>
  );
}
