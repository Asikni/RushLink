import { Posts } from "./HomePage/components/FeaturedPosts";
import { Hero } from "./HomePage/components/HeroSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Posts />
    </div>
  );
}
