import React, { Component } from "react";

class SelectedFiles extends Component {
  render() {
    return (
      <div className="SelectedFiles">
        <div className="tg-wrap table-wrap">
          <div className="table-responsive">
            <table className="table align-items-center table-flush">
              <tr>
                <th className="tg-0pky">Selected files</th>
                <th className="tg-0pky"> </th>
                <th className="tg-0pky"> </th>
                <th className="tg-0pky"> </th>
                <th className="tg-0pky"> </th>
              </tr>
              <tr className="thead-light">
                <th>Name</th>
                <th>Size</th>
                <th>Progress</th>
                <th>Upload</th>
                <th>Remove</th>
              </tr>
              <tr>
                <td>06313370414151.5ba3915ebae2c.gif</td>
                <td>8.75 MB</td>
                <td>0 %</td>
                <td>upload</td>
                <td>remove</td>
              </tr>
              <tr>
                <td>06313370414151.5ba3915ebae2c.gif</td>
                <td>8.75 MB</td>
                <td>0 %</td>
                <td>upload</td>
                <td>remove</td>
              </tr>
              <tr>
                <td>06313370414151.5ba3915ebae2c.gif</td>
                <td>8.75 MB</td>
                <td>0 %</td>
                <td>upload</td>
                <td>remove</td>
              </tr>
              <tr>
                <td>06313370414151.5ba3915ebae2c.gif</td>
                <td>8.75 MB</td>
                <td>0 %</td>
                <td>upload</td>
                <td>remove</td>
              </tr>
              <tr>
                <td>06313370414151.5ba3915ebae2c.gif</td>
                <td>8.75 MB</td>
                <td>0 %</td>
                <td>upload</td>
                <td>remove</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectedFiles;
