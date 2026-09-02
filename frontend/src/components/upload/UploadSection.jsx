import { useState } from "react";

import ProgressTracker from "./ProgressTracker";
import ResumeUpload from "./ResumeUpload";
import JDUpload from "./JDUpload";

import AnalyzeButton from "../analysis/AnalyzeButton";
import AnalysisSection from "../analysis/AnalysisSection";

function UploadSection() {
  const [sessionId, setSessionId] = useState("");
  const [results, setResults] = useState(null);

  const [jdUploaded, setJdUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  function handleReset() {
    setSessionId("");
    setResults(null);
    setJdUploaded(false);
    setAnalyzing(false);

    window.location.reload();
  }

  return (
    <>
      {/* Progress Tracker */}
      <ProgressTracker
        resumeUploaded={Boolean(sessionId)}
        jdUploaded={jdUploaded}
        analyzing={analyzing}
        analysisComplete={Boolean(results)}
      />

      {/* Upload Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        <ResumeUpload
          onResumeUploaded={(id) => {
            setSessionId(id);
            setResults(null);
          }}
        />

        <JDUpload
          sessionId={sessionId}
          onJDUploaded={() => setJdUploaded(true)}
        />
      </div>

      {/* Analysis Action */}
      <div className="mt-8">
        <AnalyzeButton
          sessionId={sessionId}
          setResults={setResults}
          setAnalyzing={setAnalyzing}
        />

        {/* Reset */}
        <button
          onClick={handleReset}
          disabled={analyzing}
          className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset documents
        </button>
      </div>

      {/* Analysis / Results */}
      <AnalysisSection
        results={results}
        analyzing={analyzing}
      />
    </>
  );
}

export default UploadSection;