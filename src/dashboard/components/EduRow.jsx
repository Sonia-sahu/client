import React from "react";
import { useSelector } from "react-redux";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
const EduRow = ({ education }) => {
  const { profile } = useSelector((state) => state.profile);

  if (!profile?.education || profile.education.length === 0) {
    return (
      <tr>
        <td colSpan="4">No education added yet.</td>
      </tr>
    );
  }
  return (
    <>
      {education.map((edu) => (
        <tr key={edu._id}>
          <td>{edu.school}</td>
          <td className="hide-sm">{edu.degree}</td>
          <td className="hide-sm">
            {formatDate(edu.from)} -{" "}
            {edu.current ? "Present" : formatDate(edu.to)}
          </td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default EduRow;
