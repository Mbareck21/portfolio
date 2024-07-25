import Hero from "@/components/Hero";
import SlidingMessages from "@/components/SlidingMessages";

export default function Home() {
  return (
    <div className="container space-y-10">
      <section className="relative">
        <Hero />
      </section>
      <section className="relative">
        <SlidingMessages />
      </section>
    </div>
  );
}
