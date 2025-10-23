import React from "react";
import { useSelector } from "react-redux";
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const ExpRow = ({ experience }) => {
  const { profile } = useSelector((state) => state.profile);
  if (!profile?.experience || profile.experience.length === 0) {
    return (
      <tr>
        <td colSpan="4">No experience added yet.</td>
      </tr>
    );
  }
  return (
    <>
      <>
        {experience.map((exp) => (
          <tr key={exp._id}>
            <td>{exp.company}</td>
            <td className="hide-sm">{exp.title}</td>
            <td className="hide-sm">
              {formatDate(exp.from)} -{" "}
              {exp.current ? "Present" : formatDate(exp.to)}
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </>
    </>
  );
};

export default ExpRow;
