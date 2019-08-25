const dateUtility = require("../utilities/dateUtilities");
const date = dateUtility.getFormattedDate();

const emailTemplate = (requestedTowers, tech) => {
  return `
        <style  type="text/css">
            table {
                border-collapse: collapse;
                font-size: 14px;
            }
            
            th, td {
                border: 1px solid black;
                padding: 10px;
                text-align: center;
            }
            
            th {
                background-color: blue;
                color: white;
            }
        </style>
      
          <table>
            <thead>
                <th>Date</th>
                <th>(A) Work Location</th>
                <th>(B) SRO Type</th>
                <th>(C) House Street Address</th>
                <th>(D) House Key</th>
                <th>(E) Description of Work</th>
                <th>(F) Tech Number</th>
                <th>(G) Assign to Tech</th>
            </thead>
            <tbody>
            ${requestedTowers
              .map(tower => {
                return `<tr>
                    <td style="border: 1px solid black">${date}</td>
                    <td style="border: 1px solid black">${tower.city}</td>
                    <td style="border: 1px solid black">FPM</td>
                    <td style="border: 1px solid black">${tower.address}</td>
                    <td style="border: 1px solid black">${
                      tower.accountNumber
                    }</td>
                    <td style="border: 1px solid black">CTBH PM</td>
                    <td style="border: 1px solid black">${tech.techNumber}</td>
                    <td style="border: 1px solid black">${tech.firstName} ${
                  tech.lastName
                }</td>
                </tr>`;
              })
              .join("")}
            </tbody>
        </table>
      `;
};

module.exports = emailTemplate;
