
# 📄 PDF Merge App

A modern and elegant full-stack web application that allows users to **upload, reorder, and merge multiple PDF files** directly in the browser — then download the final merged PDF.

---

## 🌟 Features

- ✅ Drag & Drop PDF file upload
- ✅ Reorder PDF files before merging (via drag-and-drop)
- ✅ Display file names, sizes, and delete option
- ✅ Merge PDFs and download the result
- ✅ Clean, responsive, modern UI
- ✅ Backend file handling with cleanup
- ✅ Built entirely with open-source tools — no third-party cloud

---

## 🖼️ Demo UI Preview

> Upload multiple PDFs → Drag to reorder → Merge → Download  
> *(Modern and resume-worthy design using Tailwind CSS and React.js)*

---

## 🏗️ Tech Stack

### 🔹 Frontend
- React.js
- Tailwind CSS
- Axios
- react-beautiful-dnd

### 🔸 Backend
- Node.js
- Express.js
- Multer (for file uploads)
- pdf-merger-js (for merging PDFs)
- fs-extra (for cleanup)

---

## 📁 Folder Structure

```
pdf-merge-app/
│
├── backend/              # Express.js backend
│   ├── uploads/          # Temporary uploaded files
│   ├── merged/           # Merged PDF output
│   ├── server.js         # Entry point
│   └── package.json
│
└── frontend/             # React.js frontend
    ├── public/
    ├── src/
    │   ├── components/   # All reusable UI components
    │   │   ├── PDFUploader.jsx
    │   │   ├── FileList.jsx
    │   │   └── Spinner.jsx
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## 🚀 How to Run the Project

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/pdf-merge-app.git
cd pdf-merge-app
```

---

### 2. Install Backend

```bash
cd backend
npm install
```

> 📌 Make sure `pdf-merger-js`, `express`, `multer`, and `cors` are in dependencies.

---

### 3. Run Backend

```bash
npm start
```

> 📌 Runs on `http://localhost:5000`

---

### 4. Install Frontend

```bash
cd ../frontend
npm install
```

---

### 5. Run Frontend

```bash
npm run dev
```

> 📌 Runs on `http://localhost:5173`

---

## 🧪 Development Tips

- React 19.x is used, so ensure dependencies are compatible.
- If you get peer dependency issues, use:

```bash
npm install --legacy-peer-deps
```

---

## ⚠️ Troubleshooting

- ❌ `"Cannot find module ...PDFUploader.jsx"`  
  → Check that all `components/` files exist and imports are correct.

- ❌ `multer@^1.4.5 not found`  
  → Run: `npm install multer@1.4.4`

- ❌ `react-beautiful-dnd` version conflict  
  → Compatible with React 18 or lower. Use `--legacy-peer-deps` or replace with `@hello-pangea/dnd` for React 19+.

---

## ✍️ Author

Built with ❤️ by [Waqas Rai] – Full Stack Developer  
[LinkedIn](https://www.linkedin.com/in/waqas-rai/) | [GitHub](https://github.com/yourusername)

---

## 📄 License

This project is open-source and available under the MIT License.
