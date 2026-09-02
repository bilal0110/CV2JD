import { useState } from "react";

import {
  FiArrowRight,
  FiCpu,
  FiLoader,
} from "react-icons/fi";

import { analyzeResume } from "../../services/analysisService";

function AnalyzeButton({
  sessionId,
  setResults,
  setAnalyzing,
}) {
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!sessionId) {
      alert("Please upload your resume first.");
      return;
    }

    try {
      setLoading(true);
      setAnalyzing(true);

      const data = await analyzeResume(sessionId);

      // Store analysis results
      setResults(data);
    } catch (error) {
      // Clear results if analysis fails
      setResults(null);

      alert(
        error.response?.data?.detail ||
          "Analysis failed. Please try again."
      );
    } finally {
      // Always stop loading state
      setLoading(false);
      setAnalyzing(false);
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <FiLoader className="animate-spin text-lg" />
            AI is analyzing your documents...
          </>
        ) : (
          <>
            <FiCpu className="text-lg" />
            Analyze Resume
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </div>
  );
}

export default AnalyzeButton;