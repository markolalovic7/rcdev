import React, { Component } from "react";
import ProgressStatus from "../ProgressStatus";
import {
  faLongArrowAltRight,
  faAngleDoubleLeft,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/table.css";

class CompletedBatches extends Component {
  render() {
    return (
      <div className="CompletedBatches">
        <div className="tg-wrap">
          <table className="tg table">
            <thead>
              <tr>
                <th className="tg-0pky">Batch</th>
                <th className="tg-0pky"> </th>
                <th className="tg-0pky"> </th>
                <th className="tg-0pky"> </th>
                <th className="tg-0pky"> </th>
              </tr>
            </thead>
            <tbody>
              <tr className="thead-light">
                <td className="tg-0pky">Name</td>
                <td className="tg-0pky">Step</td>
                <td className="tg-0pky">Action</td>
                <td className="tg-0pky">Progress</td>
                <td className="tg-0pky">No. of docs</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="completed" />
                </td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="completed" />
                </td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="completed" />
                </td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="completed" />
                </td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="completed" />
                </td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="completed" />
                </td>
                <td className="tg-0pky">rrr</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="tg-0pky">
                  <i>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                  </i>
                  <b>
                    {" "}
                    <span className="active">1</span> 2 3 ... 8{" "}
                  </b>
                  <i>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                  </i>
                </td>
                <td className="tg-0pky totalTable">1-8 of 8 batches</td>
                <td className="tg-0pky emptyTable" />
                <td className="tg-0pky totalTable">
                  <b>
                    Total documents{" "}
                    <i>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </i>
                  </b>
                </td>
                <td className="tg-0pky">0</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default CompletedBatches;
