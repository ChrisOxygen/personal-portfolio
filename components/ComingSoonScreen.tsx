import React from "react";
import SiteLogo from "./SiteLogo";

function ComingSoonScreen() {
  return (
    <main className="h-screen grid place-items-center">
      <div className="flex flex-col gap-5">
        <SiteLogo />
        <h1 className="text-4xl font-bold">Coming Soon</h1>
        <p className="text-lg text-gray-500">
          This site is currently under construction. Stay tuned for updates!
        </p>
      </div>
    </main>
  );
}

export default ComingSoonScreen;
