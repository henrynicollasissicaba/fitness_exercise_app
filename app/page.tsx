import CategorySection from "./components/CategorySection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchedExercises from "./components/SearchedExercises";

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
