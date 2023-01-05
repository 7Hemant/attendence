import React, { useEffect, useState } from "react";
import style from "./style.module.css";
const AttendenceForm = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [allstudent, setStudent] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();

    if (name?.length > 0) {
      setStudent((prev) => {
        return [...prev, { name: name, rollNumber: rollNumber }];
      });
    }
    setName(" ");
    setRollNumber(" ");
  };

  return (
    <div className={style.block}>
      <form onSubmit={formHandler} className={style?.form}>
        <div className={style.formBlock}>
          <label htmlFor="studentName">Student Name</label>
          <input
            type="text"
            id="studentName"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
            required
          />
        </div>
        <div className={style.formBlock}>
          <label htmlFor="studentRoleNumber">Student Roll number</label>
          <input
            type="text"
            id="studentRoleNumber"
            value={rollNumber}
            onChange={(e) => setRollNumber(e?.target?.value)}
            required
          />
        </div>
        <button type="submit" className={style.formButton}>
          add
        </button>
      </form>
      <div>
        <h2>total number of student parent::</h2>
        <h1> {allstudent?.length}</h1>
      </div>
      <div className={style.form}>
        {allstudent.map((item, index) => (
          <div key={index} className={style.formBlock}>
            <p>
              student Name :: <span className={style.color}>{item?.name}</span>
            </p>
            <p>
              student RollNumber ::{" "}
              <span className={style.color}> {item?.rollNumber}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendenceForm;
