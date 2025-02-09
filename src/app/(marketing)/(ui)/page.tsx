import Demo from "./_components/Header/Demo/Demo";
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
