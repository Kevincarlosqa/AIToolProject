import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-[100vh] bg-[#111827] overflow-auto">
      <video
        className="object-cover h-[100%] w-[100%] bg-transparent"
        muted
        autoPlay
        loop
      >
        <source src="/video5.mp4" type="video/mp4" />
      </video>
      {/* <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
       */}
      {children}
    </main>
  );
};

export default LandingLayout;
