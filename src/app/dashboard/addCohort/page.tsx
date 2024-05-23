"use client";
import CSVReader from "react-csv-reader";
import { useState } from "react";

export default function AddCohort() {
  const [formData, setFormData] = useState({
    code: "",
    startDate: "",
    endDate: "",
    zoomRoom: "",
    zoomRoomLink: "",
    zoomRoomHostKey: "",
    zoomAccountLogin: "",
    zoomAccountPassword: "",
    ghTeamLink: "",
    cohortFolderLink: "",
  });
  const [csvData, setCSVData] = useState([]);

  function handleCSVData(data: any, fileInfo: any) {
    console.log({ data, fileInfo });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ formData, csvData });
  }

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header: any) => header.toLowerCase().replace(/\W/g, "_"),
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <label htmlFor="code">
          {" "}
          Cohort Code:{" "}
          <input
            type="text"
            name="code"
            value={formData.code}
            onChange={handleChange}
            placeholder="cohort code"
          />{" "}
        </label>
        <label htmlFor="startDate">
          Cohort Start Date:{" "}
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            placeholder="start date"
          />
        </label>
        <label htmlFor="endDate">
          Cohort End Date:{" "}
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="end date"
          />
        </label>
        <label htmlFor="zoomRoom">
          Zoom Room:{" "}
          <input
            type="text"
            name="zoomRoom"
            value={formData.zoomRoom}
            onChange={handleChange}
            placeholder="zoom room"
          />
        </label>
        <label htmlFor="zoomRoomLink">
          Zoom Room Link:{" "}
          <input
            type="text"
            name="zoomRoomLink"
            value={formData.zoomRoomLink}
            onChange={handleChange}
            placeholder="zoom room link"
          />
        </label>
        <label htmlFor="zoomRoomHostKey">
          Zoom Host Key:{" "}
          <input
            type="text"
            name="zoomRoomHostKey"
            value={formData.zoomRoomHostKey}
            onChange={handleChange}
            placeholder="zoom room host key"
          />
        </label>
        <label htmlFor="zoomAccountLogin">
          Zoom Account Login:{" "}
          <input
            type="text"
            name="zoomAccountLogin"
            value={formData.zoomAccountLogin}
            onChange={handleChange}
            placeholder="zoom account login"
          />
        </label>
        <label htmlFor="zoomAccountPassword">
          Zoom Account Password:{" "}
          <input
            type="text"
            name="zoomAccountPassword"
            value={formData.zoomAccountPassword}
            onChange={handleChange}
            placeholder="zoom account pw"
          />
        </label>
        <label htmlFor="ghTeamLink">
          Github Team Link:{" "}
          <input
            type="text"
            name="ghTeamLink"
            value={formData.ghTeamLink}
            onChange={handleChange}
            placeholder="github team link"
          />
        </label>
        <label htmlFor="cohortFolderLink">
          Cohort Folder Link:{" "}
          <input
            type="text"
            name="cohortFolderLink"
            value={formData.cohortFolderLink}
            onChange={handleChange}
            placeholder="cohort folder link"
          />
        </label>
        <label htmlFor="csv">Upload CSV:</label>
        <CSVReader
          onFileLoaded={handleCSVData}
          inputId="csv-input"
          inputStyle={{}}
          parserOptions={papaparseOptions}
        />
        <button>Add Cohort</button>
      </form>
    </div>
  );
}
