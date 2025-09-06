import React from "react";

function Header({ companyName, avatarUrl }) {
  return (
    <header className="max-w-6xl mx-auto px-5 pt-2 pb-3">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Campaign Approval
          </h1>
          {/* Company name intentionally omitted per latest design */}
        </div>
        <div className="hidden md:flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-white shadow-md bg-gray-200">
            <img
              src={avatarUrl || ""}
              alt="Customer avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
