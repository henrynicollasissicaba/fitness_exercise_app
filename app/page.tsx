import CategorySection from "./components/CategorySection";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchedExercises from "./components/SearchedExercises";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <CategorySection />
      <SearchedExercises />
    </main>
  );
}
