import React, { useEffect, useState } from "react";
import "./index.css";
import { getCampaign, approveReport, disapproveReport } from "./api";
import { useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import Header from "./components/Header.jsx";
import ReportCard from "./components/ReportCard.jsx";
import InfoCards from "./components/InfoCards.jsx";
import AvatarGrid from "./components/AvatarGrid.jsx";
import ColorSection from "./components/ColorSection.jsx";
import ApprovalSection from "./components/ApprovalSection.jsx";

function App() {
  const [campaign, setCampaign] = useState(null);
  const [campaignId, setCampaignId] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const id = location.pathname.split("/")[2] || "";
    setCampaignId(id);
    if (!id) return;
    setLoading(true);
    getCampaign(id)
      .then((res) => setCampaign(res))
      .finally(() => setLoading(false));
  }, []);

  const campaignData = campaign?.data || {};
  const settings = campaignData?.campaignApprovalSettings || {};
  const avatar = campaignData?.customer_avatar || {};

  const handleApprove = async () => {
    if (!campaignId) return;
    try {
      const res = await approveReport(campaignId);
      if (res?.result === "ok") {
        toast.success("Campaign Approved");
      } else {
        toast.error("Approve failed");
      }
    } catch (e) {
      toast.error("Approve failed");
    }
  };

  const handleDecline = async () => {
    if (!campaignId) return;
    try {
      const res = await disapproveReport(campaignId);
      if (res?.result === "ok") {
        toast.success("Campaign Disapproved");
      } else {
        toast.error("Disapprove failed");
      }
    } catch (e) {
      toast.error("Disapprove failed");
    }
  };
  return (
    <div className="use-ui-sans text-gray-900 min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      {/* Report + Details */}

      {/* Hero */}
      <Header
        companyName={settings?.companyName}
        avatarUrl={avatar?.imageUrl}
      />
      <div className="max-w-6xl mx-auto px-5">
        <div className="bg-white border border-gray-200 shadow-md rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row w-full gap-10 justify-between items-stretch">
            {/* Report */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start">
              <ReportCard
                html={
                  campaignData?.campaignApprovalReport ||
                  `This campaign will position our brand as a thought leader in design efficiency and cost-effectiveness. By utilizing the Quiz Magnet app, we can engage Ali and similar audience members with interactive content that highlights our solutions to their challenges. The Landing Page Builder will provide a platform to showcase our cost-effective design solutions, latest design trends and technologies. The Booking Agent will enable Ali to easily schedule a consultation or a demo, thus driving further engagement.`
                }
              />
            </div>
            <div className="w-full md:w-1/2 max-w-[560px] space-y-3  mx-auto md:mx-0 flex">
              <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm space-y-3 w-full">
                <InfoCards campaign={campaignData} />
                <div className="flex items-start justify-between gap-6">
                  <AvatarGrid avatar={avatar} />
                </div>
                <ColorSection title="Challenges" color="amber">
                  {avatar?.challenges || "Time management, competition"}
                </ColorSection>
                <ColorSection title="Solutions" color="emerald">
                  {avatar?.solutions || "Better planning, automation tools"}
                </ColorSection>
                <ColorSection title="Goals" color="sky">
                  {avatar?.goals || "Expand business, reach new clients"}
                </ColorSection>
                <ColorSection title="Benefits" color="violet">
                  {avatar?.benefits || "Increased revenue, stronger brand"}
                </ColorSection>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Approval Section */}
      <ApprovalSection
        settings={settings}
        onApprove={handleApprove}
        onDecline={handleDecline}
      />
    </div>
  );
}

export default App;
