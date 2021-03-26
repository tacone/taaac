import humanizeString from "humanize-string";
import React from "react";

function Result({ name }) {
  return (
    <>
      <table className="table results-table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">{humanizeString(name)}</th>
            <th scope="col">Entries</th>
            <th scope="col">%</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Result;
