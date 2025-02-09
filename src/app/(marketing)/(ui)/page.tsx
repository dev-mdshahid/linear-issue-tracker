import Demo from "./_components/Demo/Demo";
import Header from "./_components/Header/Header";

export default function HomePage() {
  return (
    <main>
      <Header />
      {/* Demo screenshot of the issue tracker */}
      <Demo />
    </main>
  );
}
