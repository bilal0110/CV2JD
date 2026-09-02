import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import UploadSection from "../components/upload/UploadSection";
import Footer from "../components/layout/Footer";

function Home() {
  const [sessionId, setSessionId] = useState(null);
  const [results, setResults] = useState(null);

  function handleReset() {
    setSessionId(null);
    setResults(null);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <Navbar />

      <main>

        {/* Hero Section */}
        <section className="relative overflow-hidden">

          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-6 pb-12 pt-20 text-center lg:px-8 lg:pt-28">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              AI-powered resume analysis
            </div>

            <h2 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Know how well your
              <span className="block text-slate-500">
                resume matches the job.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Upload your resume and job description to get an
              AI-powered compatibility analysis, skill comparison,
              and actionable recommendations.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                ✓ ATS Compatibility
              </div>

              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                ✓ Skill Matching
              </div>

              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
                ✓ AI Recommendations
              </div>

            </div>

          </div>
        </section>

        {/* Analysis Section */}
        <section
          id="analyze"
          className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"
        >

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Analysis workspace
            </p>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Upload your documents
            </h3>

            <p className="mt-2 text-slate-500">
              Start with your resume, then add the job description.
            </p>
          </div>

          <UploadSection />

        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                How it works
              </p>

              <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                From documents to insights in three steps.
              </h3>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-bold text-slate-400">
                  01
                </span>

                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  Upload your resume
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Upload your resume as a PDF and let the system
                  extract your professional information.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-bold text-slate-400">
                  02
                </span>

                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  Add the job description
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Provide the job description you want to compare
                  your resume against.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <span className="text-sm font-bold text-slate-400">
                  03
                </span>

                <h4 className="mt-5 text-lg font-bold text-slate-900">
                  Get your analysis
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Receive your match score, skills analysis,
                  strengths, weaknesses, and recommendations.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;