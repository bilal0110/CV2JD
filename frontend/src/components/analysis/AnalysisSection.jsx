import AnalysisLoading from "./AnalysisLoading";
import ResultsDashboard from "./ResultsDashboard";

function AnalysisSection({ results, analyzing }) {
  if (analyzing) {
    return <AnalysisLoading />;
  }

  if (results) {
    return <ResultsDashboard results={results} />;
  }

  return (
    <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">

      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
        <span className="text-xl">✦</span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-800">
        Your analysis will appear here
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        Upload your resume and job description, then start the AI
        analysis to see your match score and personalized insights.
      </p>

    </div>
  );
}

export default AnalysisSection;