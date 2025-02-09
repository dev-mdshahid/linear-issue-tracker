import CommandLineSS from "./_components/CommandLineSS/CommandLineSS";
import Companies from "./_components/Companies/Companies";
import Demo from "./_components/Demo/Demo";
import Features from "./_components/Features/Features";
import FeatureSections from "./_components/FeatureSections/FeatureSections";
import Header from "./_components/Header/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Demo screenshot of the issue tracker */}
      <Demo />
      {/* Companies that uses the software */}
      <Companies />
      {/* Features that the tool is providing */}
      <Features />

      {/* Command line section */}
      <CommandLineSS />

      {/* Detailed features sections */}
      <FeatureSections />
    </main>
  );
}
