import React, { Component } from "react";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../assets/table.css";
import ProgressStatus from "./ProgressStatus";

class ProgressTable extends Component {
  render() {
    return (
      <div className="ProgressTable">
        <div className="tg-wrap">
          <table className="tg table">
            <tr>
              <th className="tg-0pky" colSpan="4">
                Batch
              </th>
              <th className="tg-0pky" colSpan="5">
                Documents
              </th>
            </tr>
            <tbody>
              <tr className="thead-light">
                <td className="tg-0pky">Name</td>
                <td className="tg-0pky">Step</td>
                <td className="tg-0pky">Action</td>
                <td className="tg-0pky">Progress</td>
                <td className="tg-0pky">AutoIndexing</td>
                <td className="tg-0pky">Validation</td>
                <td className="tg-0pky">Manual Indexing</td>
                <td className="tg-0pky">Denied</td>
                <td className="tg-0pky">No. of docs</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="failed" />
                </td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="working" />
                </td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="pending" />
                </td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
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
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
              </tr>
              <tr>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">
                  <ProgressStatus status="working" />
                </td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
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
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
                <td className="tg-0pky">rrr</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="tg-0pky totalTable">
                  <b>
                    Total batches{" "}
                    <i>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </i>
                  </b>
                </td>
                <td className="tg-0pky">8</td>
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
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">0</td>
                <td className="tg-0pky">0</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default ProgressTable;
