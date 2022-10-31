import FooterComponent from "../component/footer/footer";
import SundaySchoolComponent from "../component/sunday-school/sschoolcomponent";
import Navigate from "../navigation/navigation";
function SundaySchoolPage() {
  return (
    <div>
      <Navigate />
      <SundaySchoolComponent />
      <FooterComponent />
    </div>
  );
}
export default SundaySchoolPage;
