import DirectionELayout from "./direction-e/layout";
import DirectionEPage from "./direction-e/page";

export { generateMetadata } from "./direction-e/page";

export default function RootPage() {
  return (
    <DirectionELayout>
      <DirectionEPage />
    </DirectionELayout>
  );
}
