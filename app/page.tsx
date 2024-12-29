import Hero from "./components/Hero";
import Links from "./components/Links";
import Navbar from "./components/Navbar";

export default function Home() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
          <Navbar/>
            <Links />
            <Hero />
        </div>
    );
}
