import {
  FiCheck,
  FiFileText,
  FiBriefcase,
  FiCpu,
} from "react-icons/fi";

function ProgressTracker({
  resumeUploaded = false,
  jdUploaded = false,
  analyzing = false,
  analysisComplete = false,
}) {
  function Step({ icon, title, subtitle, completed, active }) {
    return (
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
            completed
              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
              : active
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-400"
          }`}
        >
          {completed ? <FiCheck /> : icon}
        </div>

        <div>
          <p
            className={`text-sm font-semibold ${
              active || completed
                ? "text-slate-900"
                : "text-slate-400"
            }`}
          >
            {title}
          </p>

          <p
            className={`text-xs ${
              completed
                ? "text-emerald-600"
                : active
                ? "text-slate-500"
                : "text-slate-400"
            }`}
          >
            {subtitle}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center">

        <Step
          icon={<FiFileText />}
          title="Resume"
          subtitle={
            resumeUploaded ? "Uploaded" : "Waiting for upload"
          }
          completed={resumeUploaded}
          active={!resumeUploaded}
        />

        <div className="hidden h-px flex-1 bg-slate-200 md:block" />

        <Step
          icon={<FiBriefcase />}
          title="Job Description"
          subtitle={
            jdUploaded ? "Uploaded" : "Waiting for upload"
          }
          completed={jdUploaded}
          active={resumeUploaded && !jdUploaded}
        />

        <div className="hidden h-px flex-1 bg-slate-200 md:block" />

        <Step
          icon={
            analyzing ? (
              <FiCpu className="animate-spin" />
            ) : (
              <FiCpu />
            )
          }
          title="AI Analysis"
          subtitle={
            analysisComplete
              ? "Complete"
              : analyzing
              ? "Analyzing..."
              : "Ready when documents are uploaded"
          }
          completed={analysisComplete}
          active={jdUploaded && !analysisComplete}
        />

      </div>
    </div>
  );
}

export default ProgressTracker;