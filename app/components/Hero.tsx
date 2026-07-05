const Hero = () => {
    return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />
        </div>
  
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center sm:px-8 lg:px-12">
          {/* Small Intro */}
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-blue-400"></p>
  
          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Geethika
            </span>
          </h1>
  
          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m passionate about building scalable web applications,
            AI-powered solutions, and developer tools that combine clean
            engineering with intuitive user experiences. I enjoy transforming
            ideas into reliable, production-ready products.
          </p>
  
          {/* Scroll Indicator */}
          <div className="mt-20 flex flex-col items-center gap-3">
            <div className="h-10 w-6 rounded-full border border-slate-600 p-1">
              <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>
            </div>
  
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
              Scroll
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;