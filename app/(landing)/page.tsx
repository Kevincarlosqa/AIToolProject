import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";
const LandingPage = () => {
  return (
    <div className="absolute top-0 flex flex-col mx-auto right-0 left-0">
      <LandingNavbar />
      <LandingHero />
      {/* <Lottie animationData={world} /> */}
      {/* <LandingContent /> */}
    </div>
  );
};

export default LandingPage;
