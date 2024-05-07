import { Posts } from "./HomePage/components/FeaturedPosts";
import { Hero } from "./HomePage/components/HeroSection";
import { News } from "./HomePage/components/NewsSection";
import { Organizations } from "./HomePage/components/OrganizationSection";
import { Rankings } from "./HomePage/components/RankingsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Posts />
      <Organizations />
      <News/>
      <Rankings />
    </div>
  );
}
