import React from "react";

const FileUpload = ({ setFiles, files }) => {
  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    const valid = selected.filter((f) => f.type === "application/pdf");
    setFiles([...files, ...valid]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files);
    const pdfs = dropped.filter((f) => f.type === "application/pdf");
    setFiles([...files, ...pdfs]);
  };

  return (
    <div
      className="border-2 border-dashed p-6 text-center mb-6 bg-white rounded cursor-pointer"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={handleFiles}
        className="hidden"
        id="upload"
      />
      <label htmlFor="upload" className="block text-gray-600">
        Drag & drop PDFs here or{" "}
        <span className="text-blue-600 underline">browse</span>
      </label>
    </div>
  );
};

export default FileUpload;
