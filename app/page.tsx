import { Posts } from "./HomePage/components/FeaturedPosts";
import { Hero } from "./HomePage/components/HeroSection";
import { LogIn } from "./HomePage/components/LogInSection";
import { News } from "./HomePage/components/NewsSection";
import { Organizations } from "./HomePage/components/OrganizationSection";
import { Rankings } from "./HomePage/components/RankingsSection";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1680px" }}>
        <Hero />
        <Posts />
        <Organizations />
        <News />
        <Rankings />
        <LogIn />
      </div>
    </div>
  );
}
