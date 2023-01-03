import React from "react";
import "../../style/admin-teams-employes/admin-teams-employes.css";
import employeeImg from "../../img/employee.jpg";
import { ChatDots } from "phosphor-react";

export default function TeamsEmployes() {
  return (
    <div className="admin-teams-employes">
      <div className="filter">
        <p>Filter</p>
        <ul>
          <li>
            <input type="checkbox" id="team1" name="team1" value="team1" />
            <label for="team1"> Team 1</label>
          </li>

          <li>
            <input type="checkbox" id="team2" name="team2" value="team2" />
            <label for="team2"> Team 2</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="tehnical-support"
              name="tehnical-support"
              value="tehnical-support"
            />
            <label for="tehnical-support"> Tehnical support</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="ticket-support"
              name="ticket-support"
              value="ticket-support"
            />
            <label for="ticket-support"> Ticket support</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="team-management"
              name="team-management"
              value="team-management"
            />
            <label for="team-management"> Team management</label>
          </li>

          <li>
            <input
              type="checkbox"
              id="ticket-supervise"
              name="ticket-supervise"
              value="ticket-supervise"
            />
            <label for="ticket-supervise"> Ticket Supervise</label>
          </li>
        </ul>
      </div>

      <div className="employee">
        <img src={employeeImg} />
        <div>
          <p className="name">Aleksandar Spasojevic</p>
          <p className="desc">Team 1, Admin</p>
          <button>
            <ChatDots size={24} color="#333" weight="bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
