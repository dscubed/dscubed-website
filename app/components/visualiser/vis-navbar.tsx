// app/components/visualiser/vis-navbar.tsx
import React from "react";
import * as Icon from "react-bootstrap-icons";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

// Custom styled Tooltip
const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
    color: "white", // White text
    border: "1px solid white", // White border
    fontSize: "0.875rem", // Adjust font size
    fontWeight: "bold", // Optional: Make text bold
  },
  [`& .MuiTooltip-arrow`]: {
    color: "white", // White arrow
  },
}));

export default function VisNavbar({
  onInfoClick,
}: {
  onInfoClick: () => void;
}) {
  const router = useRouter(); // Initialize the router

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
        padding: "2rem",
        borderRadius: "0 8px 8px 0",
      }}
    >
      <div className="flex flex-col items-center gap-20">
        {/* Icon 1 with Tooltip */}
        <CustomTooltip title="Home" placement="right" arrow>
          <Icon.HouseDoorFill
            className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => router.push("/")} // Navigate to the home page
          />
        </CustomTooltip>

        {/* Icon 2 with Tooltip */}
        <CustomTooltip title="Settings" placement="right" arrow>
          <Icon.GearFill className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        </CustomTooltip>

        {/* Icon 3 with Tooltip */}
        <CustomTooltip title="Info" placement="right" arrow>
          <Icon.InfoCircleFill
            className="text-white w-8 h-8 cursor-pointer hover:scale-110 transition-transform"
            onClick={onInfoClick}
          />
        </CustomTooltip>
      </div>
    </div>
  );
}
