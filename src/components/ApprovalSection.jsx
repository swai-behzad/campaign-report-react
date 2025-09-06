import React from "react";

function ApprovalSection({ settings, onApprove, onDecline }) {
  return (
    <section className="max-w-6xl mx-auto px-5 mt-10">
      <div
        className="text-center rounded-2xl shadow-md p-8 text-white"
        style={{ backgroundColor: settings?.themeColor || "#4f46e5" }}
      >
        <p className="text-xs md:text-sm uppercase tracking-wide font-semibold mb-2 text-white/80">
          Approval
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Do you approve this proposal?
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={onDecline}
            className="px-5 bg-white py-2.5 text-base rounded-full border border-white/40 text-gray-800 hover:bg-white/90 transition-colors duration-200 cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={onApprove}
            className="px-5 py-2.5 text-base rounded-full text-white hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            style={{ backgroundColor: settings?.buttonColor || "#06b6d4" }}
          >
            Approve
          </button>
        </div>
        <div className="text-lg text-white/90 border-t border-white/30 pt-5 space-y-1 max-w-2xl mx-auto">
          <p className="font-semibold text-2xl md:text-3xl">
            {settings?.companyName || "My Company"}
          </p>
          <p className="font-medium">
            📞 {settings?.phoneNumber || "123-456-7890"} | ✉️{" "}
            {settings?.email || "info@company.com"}
          </p>
          <p className="font-medium text-lg">
            {settings?.compliance || "Compliant with industry standards"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default ApprovalSection;
