import { Image } from "phosphor-react";
import React from "react";
import "../../style/admin-create-account/admin-create-account.css";

export default function CreateAccount() {
  return (
    <div className="admin-create-account">
      <form className="add">
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          style={{ display: "none" }}
        />
        <label
          className="add-image"
          htmlFor="file"
          style={{ cursor: "pointer" }}
        >
          <Image size={40} color="#333" weight="bold" />
        </label>
        <label htmlFor="ename">Employee Full Name:</label>
        <input type="text" id="ename" name="ename" />
        <label htmlFor="eposition">Employee Position:</label>
        <select id="eposition" name="eposition">
          <option value="tickets-manager">Tickets Manager</option>
          <option value="technical-support">Technical Support</option>
          <option value="ticketing">Ticketing</option>
        </select>
        <label htmlFor="team">Team:</label>
        <select id="team" name="team">
          <option value="team1">Team 1</option>
          <option value="team2">Team 2</option>
        </select>

        <input className="button" type="submit" value="Add Employee" />
      </form>

      <form className="add">
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          style={{ display: "none" }}
        />
        <label
          className="add-image"
          htmlFor="file"
          style={{ cursor: "pointer" }}
        >
          <Image size={40} color="#333" weight="bold" />
        </label>
        <label htmlFor="cname">Company Name:</label>
        <input type="text" id="cname" name="cname" />
        <label htmlFor="ceo">CEO:</label>
        <input type="text" id="ceo" name="ceo" />

        <input className="button" type="submit" value="Add Company" />
      </form>
    </div>
  );
}
