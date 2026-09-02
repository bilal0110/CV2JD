import { useRef, useState } from "react";
import { FiCheckCircle, FiFileText, FiUploadCloud, FiX } from "react-icons/fi";
import { uploadResume } from "../../services/uploadService";

function ResumeUpload({ onResumeUploaded }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const inputRef = useRef(null);

  function handleFileChange(e) {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setProgress(0);
    setStatus(null);
  }

  function handleRemoveFile() {
    setFile(null);
    setProgress(0);
    setStatus(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function handleUpload() {
    if (!file) {
      setStatus({
        type: "error",
        message: "Please select a resume first.",
      });
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const response = await uploadResume(file, setProgress);

      onResumeUploaded(response.session_id);

      setStatus({
        type: "success",
        message: "Resume uploaded successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.detail ||
          "Unable to upload the resume.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
            <FiFileText className="text-xl text-slate-700" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Resume
            </h3>

            <p className="text-sm text-slate-500">
              Upload your latest resume
            </p>
          </div>
        </div>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
          PDF only
        </span>
      </div>

      {/* Upload Area */}
      {!file ? (
        <label
          htmlFor="resume-upload"
          className="mt-6 flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 text-center transition hover:border-slate-400 hover:bg-slate-100"
        >
          <input
            ref={inputRef}
            id="resume-upload"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
            <FiUploadCloud className="text-2xl text-slate-700" />
          </div>

          <p className="mt-4 text-sm font-semibold text-slate-800">
            Drop your resume here
          </p>

          <p className="mt-1 text-sm text-slate-500">
            or{" "}
            <span className="font-semibold text-slate-900 underline underline-offset-2">
              browse files
            </span>
          </p>

          <p className="mt-3 text-xs text-slate-400">
            Upload a PDF file
          </p>
        </label>
      ) : (
        /* Selected File */
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">

          <div className="flex items-center justify-between gap-4">

            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <FiFileText className="text-lg text-slate-700" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {file.name}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            {!loading && (
              <button
                type="button"
                onClick={handleRemoveFile}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white hover:text-slate-700"
                aria-label="Remove resume"
              >
                <FiX />
              </button>
            )}

          </div>

          {/* Progress */}
          {loading && (
            <div className="mt-5">

              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-slate-600">
                  Uploading...
                </span>

                <span className="font-semibold text-slate-800">
                  {progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-slate-900 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

            </div>
          )}

          {/* Uploaded indicator */}
          {!loading && status?.type === "success" && (
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600">
              <FiCheckCircle />
              Resume ready
            </div>
          )}

        </div>
      )}

      {/* Status */}
      {status?.type === "error" && (
        <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {status.message}
        </div>
      )}

      {/* Upload Button */}
      <button
        type="button"
        onClick={handleUpload}
        disabled={loading || !file}
        className="mt-5 w-full rounded-xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {loading ? "Uploading resume..." : "Upload Resume"}
      </button>

    </div>
  );
}

export default ResumeUpload;