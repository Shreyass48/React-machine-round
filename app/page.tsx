import AutoComplete from "@/app/components/AutoComplete";
import Accordian from "@/app/components/Accordian";
import ProgressBar from "@/app/components/ProgressBar";
import { accordianData } from "@/app/utils/accordian-data";

export default function Home() {
  return (
    <div>
      <AutoComplete />
      <Accordian data={accordianData} />
      <ProgressBar progress={20} />
      <ProgressBar progress={50} />
      <ProgressBar progress={80} />
    </div>
  );
}
