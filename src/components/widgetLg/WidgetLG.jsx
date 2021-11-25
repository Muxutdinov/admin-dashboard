import React from "react";
import "./WidgetLG.css";
import myfoto from "../../assets/imgs/admin.png";

const WidgetLG = () => {
  const Button = ({ type }) => {
    return <button className={"WidgetLGButton " + type}>{type}</button>;
  };
  return (
    <div className="WidgetLG">
      <div className="WidgetLGTitle">Latest transections</div>
      <table className="WidgetLGTable">
        <tr className="WidgetLGTr">
          <th className="WidgetLGTh">Customer</th>
          <th className="WidgetLGTh">Date</th>
          <th className="WidgetLGTh">Amount</th>
          <th className="WidgetLGTh">Status</th>
        </tr>
        <tr className="WidgetLGTr">
          <td className="WidgetLGUser">
            <img src={myfoto} alt="" className="WidgetLGImg" />
            <span className="WidgetLGName">Harry Potter</span>
          </td>
          <td className="WidgetLGDate">24 Jun 2021</td>
          <td className="WidgetLGAmount">$134.00</td>
          <td className="WidgetLGStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="WidgetLGTr">
          <td className="WidgetLGUser">
            <img src={myfoto} alt="" className="WidgetLGImg" />
            <span className="WidgetLGName">Harry Potter</span>
          </td>
          <td className="WidgetLGDate">24 Jun 2021</td>
          <td className="WidgetLGAmount">$134.00</td>
          <td className="WidgetLGStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="WidgetLGTr">
          <td className="WidgetLGUser">
            <img src={myfoto} alt="" className="WidgetLGImg" />
            <span className="WidgetLGName">Harry Potter</span>
          </td>
          <td className="WidgetLGDate">24 Jun 2021</td>
          <td className="WidgetLGAmount">$134.00</td>
          <td className="WidgetLGStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="WidgetLGTr">
          <td className="WidgetLGUser">
            <img src={myfoto} alt="" className="WidgetLGImg" />
            <span className="WidgetLGName">Harry Potter</span>
          </td>
          <td className="WidgetLGDate">24 Jun 2021</td>
          <td className="WidgetLGAmount">$134.00</td>
          <td className="WidgetLGStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLG;
