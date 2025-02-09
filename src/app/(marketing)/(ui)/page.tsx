import Companies from "./_components/Companies/Companies";
import Demo from "./_components/Demo/Demo";
import Header from "./_components/Header/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Demo screenshot of the issue tracker */}
      <Demo />
      {/* Companies that uses the software */}
      <Companies />
    </main>
  );
}
