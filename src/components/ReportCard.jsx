import React from "react";

function ReportCard({ html }) {
  return (
    <div className="w-full mt-0 rounded-lg border border-rose-200 bg-rose-50/60 p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-rose-800 text-sm font-semibold tracking-wide uppercase">
          Report
        </h3>
      </div>
      <div
        className="text-rose-900/80 mt-4 leading-7 tracking-normal text-justify first-letter:text-4xl first-letter:font-bold first-letter:text-rose-900 first-letter:mr-2 first-letter:float-left"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default ReportCard;
