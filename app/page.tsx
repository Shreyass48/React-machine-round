import AutoComplete from "@/app/components/AutoComplete";
import Accordian from "@/app/components/Accordian";
import { accordianData } from "@/app/utils/accordian-data";

export default function Home() {
  return (
    <div>
      <AutoComplete />
      <Accordian data={accordianData} />
    </div>
  );
}
