import React from "react";
import Navigate from "../navigation/navigation";
import WeBelieveIn from "../component/believein/believeIn";
import FooterComponent from "../component/footer/footer";
function WeBelieveInPage() {
  return (
    <div>
      <Navigate />
      <WeBelieveIn />
      <FooterComponent />
    </div>
  );
}
export default WeBelieveInPage;
