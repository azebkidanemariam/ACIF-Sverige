import React from "react";
import FooterComponent from "../component/footer/footer";

import HomeComponent from "../component/home/homeComponent";
import Navigate from "../navigation/navigation";

function HomePage() {
  return (
    <div>
      <Navigate />
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}
export default HomePage;
