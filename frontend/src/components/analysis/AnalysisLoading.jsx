import { useEffect, useState } from "react";
import {
  FiCheck,
  FiCpu,
  FiFileText,
  FiSearch,
  FiZap,
} from "react-icons/fi";

function AnalysisLoading() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      icon: FiFileText,
      title: "Reading documents",
      description: "Extracting information from your resume and job description.",
    },
    {
      icon: FiSearch,
      title: "Comparing skills",
      description: "Identifying matching and missing skills.",
    },
    {
      icon: FiCpu,
      title: "Running AI analysis",
      description: "Evaluating your experience against the job requirements.",
    },
    {
      icon: FiZap,
      title: "Generating insights",
      description: "Preparing your personalized recommendations.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((current) => {
        if (current < steps.length - 1) {
          return current + 1;
        }

        return current;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-slate-100 px-6 py-8 text-center sm:px-10">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 shadow-lg">
          <FiCpu className="text-2xl text-white" />
        </div>

        <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Analyzing your resume
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
          Our AI is comparing your resume with the job description.
          This usually takes a few moments.
        </p>

      </div>

      {/* Progress */}
      <div className="px-6 py-8 sm:px-10">

        <div className="mx-auto max-w-2xl">

          <div className="mb-3 flex items-center justify-between text-xs font-medium">

            <span className="text-slate-500">
              Analysis progress
            </span>

            <span className="text-slate-900">
              {Math.round(((step + 1) / steps.length) * 100)}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className="h-full rounded-full bg-slate-900 transition-all duration-700 ease-out"
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />

          </div>

        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 max-w-2xl space-y-3">

          {steps.map((item, index) => {
            const Icon = item.icon;

            const completed = index < step;
            const active = index === step;
            const pending = index > step;

            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-500 ${
                  active
                    ? "border-slate-300 bg-slate-50"
                    : completed
                    ? "border-slate-100 bg-white"
                    : "border-transparent bg-white"
                }`}
              >

                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all ${
                    completed
                      ? "bg-emerald-100 text-emerald-600"
                      : active
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >

                  {completed ? (
                    <FiCheck className="text-lg" />
                  ) : (
                    <Icon
                      className={`text-lg ${
                        active ? "animate-pulse" : ""
                      }`}
                    />
                  )}

                </div>

                {/* Text */}
                <div className="min-w-0 flex-1">

                  <h3
                    className={`text-sm font-semibold ${
                      pending
                        ? "text-slate-400"
                        : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1 text-xs leading-5 ${
                      pending
                        ? "text-slate-300"
                        : "text-slate-500"
                    }`}
                  >
                    {item.description}
                  </p>

                </div>

                {/* Status */}
                <div className="shrink-0">

                  {completed && (
                    <span className="text-xs font-medium text-emerald-600">
                      Done
                    </span>
                  )}

                  {active && (
                    <span className="text-xs font-medium text-slate-600">
                      Working...
                    </span>
                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom message */}
        <div className="mx-auto mt-8 max-w-2xl rounded-xl bg-slate-50 px-4 py-3 text-center">

          <p className="text-xs text-slate-500">
            Please keep this page open while the analysis is running.
          </p>

        </div>

      </div>

    </section>
  );
}

export default AnalysisLoading;