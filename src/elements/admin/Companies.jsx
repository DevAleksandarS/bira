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
          <li>
            <button>18 East Dogwood Dr. Brooklyn, NY 11229</button>
          </li>

          <li>
            <button>171 North Prince Rd. Lockport, NY 14094</button>
          </li>

          <li>
            <button>23 San Carlos Dr. Jamaica, NY 11434</button>
          </li>

          <li>
            <button>261 Joy Ridge Ave. Bronx, NY 10460</button>
          </li>

          <li>
            <button>8705 Santa Clara St. Bronx, NY 10456</button>
          </li>

          <li>
            <button>9757 New Saddle Ave. Staten Island, NY 10312</button>
          </li>

          <li>
            <button>18 East Dogwood Dr. Brooklyn, NY 11229</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
