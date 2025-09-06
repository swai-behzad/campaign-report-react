import React from "react";

function MiniCard({ title, value, color = "indigo" }) {
  const map = {
    indigo: {
      border: "border-indigo-200",
      bg: "bg-indigo-50/60",
      title: "text-indigo-600",
    },
    fuchsia: {
      border: "border-fuchsia-200",
      bg: "bg-fuchsia-50/60",
      title: "text-fuchsia-600",
    },
    cyan: {
      border: "border-cyan-200",
      bg: "bg-cyan-50/60",
      title: "text-cyan-600",
    },
  };
  const c = map[color] || map.indigo;
  return (
    <div className={`rounded-lg border ${c.border} ${c.bg} p-4`}>
      <p
        className={`text-xs uppercase tracking-wide font-semibold mb-1 ${c.title}`}
      >
        {title}
      </p>
      <p className="text-base font-medium text-gray-900">{value}</p>
    </div>
  );
}

function InfoCards({ campaign }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-3 w-full">
      <MiniCard
        title="Campaign Goal"
        value={campaign?.campaign_goal || "Increase Sales"}
        color="indigo"
      />
      <MiniCard
        title="Target Audience"
        value={campaign?.target_audience || "Young Adults"}
        color="fuchsia"
      />
      <MiniCard
        title="Outcome"
        value={campaign?.outcome || "Brand Awareness"}
        color="cyan"
      />
    </div>
  );
}

export default InfoCards;
