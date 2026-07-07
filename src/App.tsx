import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { Intro } from "./components/Intro";
import { Chrome } from "./components/Chrome";
import { Hero } from "./components/Hero";
import { Chapters } from "./components/Chapter";
import { LateNight } from "./components/LateNight";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Become } from "./components/Become";
import { Footer } from "./components/Footer";

export default function App() {
  useSmoothScroll();

  return (
      <main className="grain vignette relative cursor-none-fine bg-cream text-espresso">
      <CustomCursor />
      <Intro />
      <Chrome />

      <Hero />
      <Chapters />
      <LateNight />
      <Menu />
      <Gallery />
      <Become />
      <Footer />
    </main>
  );
}
