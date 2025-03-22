import CategorySection from "@/app/components/CategorySection";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import SearchedExercises from "@/app/components/SearchedExercises";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <CategorySection />
      <SearchedExercises />
      <Footer />
    </main>
  );
}
