import React from "react";

function Field({ label, value }) {
  return (
    <div className="rounded-md border border-gray-200 bg-white p-3">
      <p className="text-[11px] uppercase tracking-wide text-gray-500">
        {label}
      </p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function AvatarGrid({ avatar }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm w-full">
      <Field
        label="Name"
        value={`${avatar?.firstName || "John"} ${avatar?.lastName || "Doe"}`}
      />
      <Field label="Age" value={avatar?.age || "30"} />
      <Field label="Gender" value={avatar?.gender || "Male"} />
      <Field label="Occupation" value={avatar?.occupation || "Designer"} />
      <Field label="Income" value={avatar?.income || "$50k"} />
      <Field label="Location" value={avatar?.location || "New York"} />
    </div>
  );
}

export default AvatarGrid;
