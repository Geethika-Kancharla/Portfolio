import Hero from "./components/Hero";
import Links from "./components/Links";

export default function Home() {
    return (
        <div className="bg-slate-950 min-h-screen flex flex-col">
            <Links />
            <Hero />
        </div>
    );
}
