const API_BASE = "https://api.swai.ai";

export async function getCampaign(campaignUniqueId) {
  const response = await fetch(
    `${API_BASE}/campaign-report/${campaignUniqueId}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) throw new Error("Failed to fetch campaign");
  const json = await response.json();
  const data = json?.data || {};
  try {
    if (typeof data.customer_avatar === "string") {
      data.customer_avatar = JSON.parse(data.customer_avatar);
    }
  } catch {}
  try {
    if (typeof data.campaignApprovalSettings === "string") {
      data.campaignApprovalSettings = JSON.parse(data.campaignApprovalSettings);
    }
  } catch {}
  return { ...json, data };
}

export async function approveReport(campaignUniqueId) {
  const response = await fetch(
    `${API_BASE}/campaign-report/${campaignUniqueId}/approveReport`,
    {
      method: "POST",
    }
  );
  if (!response.ok) throw new Error("Approve failed");
  return response.json();
}

export async function disapproveReport(campaignUniqueId) {
  const response = await fetch(
    `${API_BASE}/campaign-report/${campaignUniqueId}/disapproveReport`,
    {
      method: "POST",
    }
  );
  if (!response.ok) throw new Error("Disapprove failed");
  return response.json();
}
