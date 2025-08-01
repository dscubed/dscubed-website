"use client";
import FancyText from "@carefully-coded/react-text-gradient";

interface FrontPageLayoutProps {
  handleButtonClick: () => void;
  redirecting: boolean;
}

export function WelcomeText() {
  return (
    <>
      <div className="mb-5 mx-5 flex flex-col sm:items-center">
        <h1 className="text-5xl font-medium text-left sm:text-center">
          The Leading<br/> Data Science Club at The University of Melbourne.
        </h1>
      </div>

      <p className="text-left mb-5 mx-5 sm:text-center">
        We are committed in our mission to connect and empower data enthusiasts,
        providing a platform for students who are passionate about Data Science
      </p>
    </>
  );
}

export default function FrontPageLayout({
  handleButtonClick,
  redirecting,
}: FrontPageLayoutProps) {
  return (
    <div className="absolute left-0 w-1/3 h-screen flex flex-col items-center z-10 lg:w-1/2">
      <div className="flex-1 flex flex-col justify-center mx-8">
        {/* Welcome Text */}
        <WelcomeText />
        <div className="flex flex-row md:flex-col gap-4 mx-5">
          <button
            // Link to UMSU
            className="w-1/2 bg-white text-black px-4 py-2 rounded-md text-xs font-medium transition-transform transform hover:scale-105 hover:bg-gray-200 hover:shadow-lg lg:w-full sm:w-full"
          >
            Become a DSCubed Member
          </button>
          <button
            onClick={handleButtonClick}
            className={`${
              redirecting == true
                ? "bg-gray-600"
                : "bg-blue-900 hover:scale-105 hover:bg-blue-800 hover:shadow-lg"
            } w-1/2 text-white px-4 py-2 rounded-lg text-xs font-medium transition-transform transform lg:w-full sm:w-full`}
          >
            {redirecting == true
              ? "Redirecting to Visualiser...."
              : " Explore our Embeddings Visualiser"}
          </button>
        </div>
      </div>
    </div>
  );
}
