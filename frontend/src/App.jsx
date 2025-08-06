import React, { useState } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";
import Spinner from "./components/Spinner";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const App = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDrop = (result) => {
    if (!result.destination) return;
    const reordered = [...files];
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setFiles(reordered);
  };

  const handleMerge = async () => {
    const formData = new FormData();
    files.forEach((f) => formData.append("pdfs", f));

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/merge-pdfs",
        formData,
        {
          responseType: "blob",
        }
      );

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.download = "merged.pdf";
      link.click();
    } catch (err) {
      alert("Merging failed.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Smart PDF Merger</h1>
      <FileUpload setFiles={setFiles} files={files} />

      {files.length > 0 && (
        <DragDropContext onDragEnd={handleDrop}>
          <Droppable droppableId="files">
            {(provided) => (
              <ul
                className="space-y-2"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {files.map((file, index) => (
                  <Draggable
                    key={file.name + index}
                    draggableId={file.name + index}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white p-3 shadow rounded flex justify-between items-center"
                      >
                        <span>
                          {file.name} ({(file.size / 1024).toFixed(1)} KB)
                        </span>
                        <button
                          onClick={() =>
                            setFiles(files.filter((_, i) => i !== index))
                          }
                          className="text-red-500 font-bold"
                        >
                          ✕
                        </button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}

      {files.length > 0 && (
        <button
          onClick={handleMerge}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Merge PDFs
        </button>
      )}

      {loading && <Spinner />}
    </div>
  );
};

export default App;
