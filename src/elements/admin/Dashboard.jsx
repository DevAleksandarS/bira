import React from "react";
import "../../style/admin-dashboard/admin-dashboard.css";
import ChartLine from "../ChartLine";

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <div className="dash-cont all-solved-tickets">
        <h2>All Solved Tickets</h2>
        <div className="line"></div>
        <ChartLine />
      </div>

      <div className="dash-cont avg-response-time">
        <h2>Avg. Response Time</h2>
        <div className="line"></div>
        <p>00m00s</p>
      </div>

      <div className="dash-cont avg-solve-ticket">
        <h2>Avg. Solving Time</h2>
        <div className="line"></div>
        <p>00m00s</p>
      </div>

      <div className="dash-cont best-employee">
        <h2>Top Employees</h2>
        <div className="line"></div>
        <ul>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
          <li>
            <p>Aleksandar S.</p>

            <div>50</div>
          </li>
        </ul>
      </div>

      <div className="dash-cont companies-with-most-tickets">
        <h2>Companies With Most Tickets</h2>
        <div className="line"></div>
        <ChartLine />
      </div>
    </div>
  );
}
