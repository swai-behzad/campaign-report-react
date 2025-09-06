import React from "react";

function ColorSection({ title, color = "amber", children }) {
  const map = {
    amber: {
      border: "border-amber-200",
      bg: "bg-amber-50/60",
      title: "text-amber-800",
      icon: "text-amber-600",
    },
    emerald: {
      border: "border-emerald-200",
      bg: "bg-emerald-50/60",
      title: "text-emerald-800",
      icon: "text-emerald-600",
    },
    sky: {
      border: "border-sky-200",
      bg: "bg-sky-50/60",
      title: "text-sky-800",
      icon: "text-sky-600",
    },
    violet: {
      border: "border-violet-200",
      bg: "bg-violet-50/60",
      title: "text-violet-800",
      icon: "text-violet-600",
    },
  };
  const c = map[color] || map.amber;
  return (
    <div className={`mt-4 rounded-lg border ${c.border} ${c.bg} p-4`}>
      <div className="flex items-center gap-2 mb-1">
        <h3
          className={`${c.title} text-sm font-semibold tracking-wide uppercase`}
        >
          {title}
        </h3>
      </div>
      <div className={`${c.title.replace("800", "900/80")} leading-7`}>
        {children}
      </div>
    </div>
  );
}

export default ColorSection;
