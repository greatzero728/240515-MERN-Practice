import MainPage from "../components/Landing/MainPage";
import IntroductionPage from "../components/Landing/IntroductionPage";
import DetailPage from "../components/Landing/DetailPage";
import AnalyticsPage from "../components/Landing/AnalyticsPage";

export default function Landing() {
  return (
    <div>
      <MainPage />
      <IntroductionPage />
      <DetailPage />
      <AnalyticsPage />
    </div>
  );
}
