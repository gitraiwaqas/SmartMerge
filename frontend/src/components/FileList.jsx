import React from "react";

export function FileList({ files, onRemove }) {
  if (!files.length) return null;

  return (
    <div className="space-y-2">
      {files.map((file, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
        >
          <div className="flex items-center space-x-2">
            <span className="text-blue-600 font-semibold">{file.name}</span>
          </div>
          <button
            onClick={() => onRemove(index)}
            className="text-red-500 font-medium hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
