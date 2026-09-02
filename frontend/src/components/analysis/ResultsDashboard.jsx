import {
  FiCheckCircle,
  FiXCircle,
  FiTrendingUp,
  FiTarget,
  FiCpu,
  FiAward,
} from "react-icons/fi";

function ResultsDashboard({ results }) {
  if (!results) {
    return (
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
          <FiCpu className="text-3xl text-slate-600" />
        </div>

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          Ready for AI Analysis
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Upload both documents and click **Analyze Resume** to receive
          your ATS score, skill comparison, strengths, weaknesses and
          AI-powered recommendations.
        </p>
      </div>
    );
  }

  const overall = Math.round(results.overall_score);

  const scoreColor =
    overall >= 80
      ? "text-emerald-600"
      : overall >= 60
      ? "text-amber-500"
      : "text-red-500";

  const scoreBg =
    overall >= 80
      ? "bg-emerald-50 border-emerald-200"
      : overall >= 60
      ? "bg-amber-50 border-amber-200"
      : "bg-red-50 border-red-200";

  return (
    <div className="mt-12 space-y-8">

      {/* Hero Score */}
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-8 py-6">
          <div className="flex items-center gap-3">
            <FiAward className="text-xl text-slate-700" />
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Resume Analysis
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                AI Compatibility Report
              </h2>
            </div>
          </div>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-[320px_1fr]">

          {/* Score Circle */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8">

            <div
              className={`flex h-48 w-48 items-center justify-center rounded-full border-[12px] ${scoreBg}`}
            >
              <span className={`text-5xl font-bold ${scoreColor}`}>
                {overall}%
              </span>
            </div>

            <h3 className="mt-6 text-xl font-bold text-slate-900">
              ATS Match Score
            </h3>

            <p className="mt-2 text-center text-sm text-slate-500">
              {overall >= 80
                ? "Excellent alignment with the job."
                : overall >= 60
                ? "Good match with room for improvement."
                : "Several important gaps were identified."}
            </p>

          </div>

          {/* Breakdown */}
          <div>

            <h3 className="text-lg font-bold text-slate-900">
              Performance Breakdown
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Your resume was evaluated across multiple AI scoring metrics.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <MetricCard
                title="Overall"
                value={`${Math.round(results.overall_score)}%`}
                icon={<FiTarget />}
              />

              <MetricCard
                title="Technical"
                value={`${Math.round(results.technical_score)}%`}
                icon={<FiTrendingUp />}
              />

              <MetricCard
                title="Semantic"
                value={`${Math.round(results.semantic_similarity)}%`}
                icon={<FiCpu />}
              />

            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold text-slate-900">
                AI Summary
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                {results.summary}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-6 lg:grid-cols-2">

        <SkillCard
          title="Matched Skills"
          skills={results.matched_skills}
          type="success"
        />

        <SkillCard
          title="Missing Skills"
          skills={results.missing_skills}
          type="danger"
        />

      </section>

      {/* AI Insights */}
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-8 flex items-center gap-3">
          <FiCpu className="text-xl text-slate-700" />

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              AI Insights
            </h2>

            <p className="text-sm text-slate-500">
              Personalized feedback generated from your resume.
            </p>
          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <InsightCard
            title="Strengths"
            items={results.strengths}
            color="green"
          />

          <InsightCard
            title="Weaknesses"
            items={results.weaknesses}
            color="red"
          />

          <InsightCard
            title="Recommendations"
            items={results.suggestions}
            color="blue"
          />

        </div>

      </section>

    </div>
  );
}

function MetricCard({ title, value, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">
        <div className="text-slate-500">{icon}</div>

        <span className="text-xs uppercase tracking-wide text-slate-400">
          {title}
        </span>
      </div>

      <p className="mt-4 text-3xl font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}

function SkillCard({ title, skills = [], type }) {
  const success = type === "success";

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
            success
              ? "bg-emerald-100 text-emerald-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {success ? <FiCheckCircle /> : <FiXCircle />}
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            {title}
          </h3>

          <p className="text-sm text-slate-500">
            {skills.length} skills identified
          </p>
        </div>

      </div>

      <div className="flex flex-wrap gap-3">
        {skills.length ? (
          skills.map((skill, index) => (
            <span
              key={index}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                success
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-sm text-slate-400">
            No items available.
          </p>
        )}
      </div>

    </div>
  );
}

function InsightCard({ title, items = [], color }) {
  const styles = {
    green: "bg-emerald-50 text-emerald-700",
    red: "bg-red-50 text-red-600",
    blue: "bg-blue-50 text-blue-700",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

      <h3 className="mb-5 text-lg font-bold text-slate-900">
        {title}
      </h3>

      <div className="space-y-3">
        {items.length ? (
          items.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl px-4 py-3 text-sm ${styles[color]}`}
            >
              {item}
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">
            No information available.
          </p>
        )}
      </div>

    </div>
  );
}

export default ResultsDashboard;