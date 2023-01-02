import React from "react";
import avatar from "../../img/employee.jpg";

export default function SideNav() {
  return (
    <nav>
      <img src={avatar} alt="Avatar" />

      <p>
        Aleksandar
        <br />
        Spasojevic
      </p>

      <ul>
        <li>
          <button>
            Dashboard <div className="active-nav-btn"></div>
          </button>
        </li>
        <li>
          <button>
            Companies <div className="active-nav-btn"></div>
          </button>
        </li>
        <li>
          <button>
            Teams&Emloyes <div className="active-nav-btn"></div>
          </button>
        </li>
        <li>
          <button>
            Create Account <div className="active-nav-btn"></div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
