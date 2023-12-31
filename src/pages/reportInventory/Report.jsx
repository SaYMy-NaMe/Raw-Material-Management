import { useEffect, useState } from "react";
import "./report.css";
import { baseUrl } from "../../utils/baseUrl";
import { getStoredData } from "../../utils/localStorage";

import Spinner from "../../components/spinner/Spinner";
import dateFormatter from "../../utils/dateFormatter";
import NoDataFound from "../../components/NoDataFound";
const Report = () => {
  const [isLoading, setLoading] = useState(false);

  const [report, setReports] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}/report/getAllReports`, {
      headers: {
        Authorization: `${getStoredData("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.status == "200") {
          setReports(data.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
        alert("An error occurred during see Reports. Please try again.");
      });
  }, []);

  return (
    <div id="report">
      {isLoading ? (
        <Spinner />
      ) : (
        <div id="seeReport">
          {report?.length < 1 ? (
            <NoDataFound />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Report Id</th>
                  <th>Item Id</th>
                  <th>Item Name</th>
                  <th>Total Quantity In</th>
                  <th>Total Quantity Out</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Balance</th>
                  <th>Manager Id</th>
                  <th>Manager Name</th>
                </tr>
              </thead>
              <tbody>
                {report?.map((report) => (
                  <tr key={report?.id}>
                    <td>{report?.id}</td>
                    <td>{report?.item?.id}</td>
                    <td>{report?.item?.item_name}</td>
                    <td>{report?.total_quantity_in}</td>
                    <td>{report?.total_quantity_out}</td>
                    <td>{dateFormatter(report?.start_date)}</td>
                    <td>{dateFormatter(report?.end_date)}</td>
                    <td>{report?.balance}</td>
                    <td>{report?.creator?.ex_id}</td>
                    <td>{report?.creator?.ex_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Report;
