import { featureSectionsData } from "@/app/(marketing)/(lib)/data/featureSectionsData";
import SingleFeatureSection from "./SingleFeatureSection/SingleFeatureSection";

export default function FeatureSections() {
  return (
    <>
      {featureSectionsData.map(
        ({ id, img, sectionFeatures, sectionTitle, imgPosition, bg }) => (
          <SingleFeatureSection
            key={id}
            img={img}
            sectionFeatures={sectionFeatures}
            sectionTitle={sectionTitle}
            imgPosition={imgPosition}
            bg={bg}
          />
        ),
      )}
    </>
  );
}
