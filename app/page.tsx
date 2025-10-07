import CategorySection from "./components/sections/CategorySection";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import SearchedExercises from "./components/sections/SearchedExercises";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <CategorySection />
        <SearchedExercises />
        <Footer />
      </main>
    </>
  );
}
