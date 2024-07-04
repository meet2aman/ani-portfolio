import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="mac-3-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Work",
              link: "#work",
            },
            {
              name: "Skills",
              link: "#skills",
            },
            {
              name: "Contact",
              link: "#contact",
            },
          ]}
          className="rounded-xl py-3 px-10"
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
