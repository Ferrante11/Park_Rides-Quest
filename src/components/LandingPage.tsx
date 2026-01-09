import {
  Star,
  Users,
  Trophy,
  BarChart3,
  Heart,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Apple,
} from "lucide-react";

const APP_STORE_URL = "https://YOUR-APP-STORE-LINK-HERE"; // replace later

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center text-6xl">
            🎢
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Park Rides Quest
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
            Turn your wait time into playtime! Rate rides with friends and family, spark fun debates,
            and discover which character matches your unique style!
          </p>

          {/* App Store button */}
          <div className="flex justify-center mb-8">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all group inline-flex items-center">
                <Apple className="w-6 h-6 mr-3" />
                Download on the App Store
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>

          {/* Big QR placeholder */}
          <div className="max-w-sm mx-auto mb-10">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-5 shadow-xl">
              <div className="text-sm font-semibold text-slate-700 mb-3">
                Scan to download
              </div>

              <div className="aspect-square rounded-2xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center text-slate-500 font-semibold text-lg">
                QR IMAGE HERE
              </div>

              <div className="text-xs text-slate-500 mt-3">
                Replace this box with your App Store QR code image.
              </div>
            </div>
          </div>

          {/* Fun bullets */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="px-4 py-2 rounded-full bg-white/70 shadow text-slate-700 font-semibold">
              Scan
            </span>
            <span className="px-4 py-2 rounded-full bg-white/70 shadow text-slate-700 font-semibold">
              Download
            </span>
            <span className="px-4 py-2 rounded-full bg-white/70 shadow text-slate-700 font-semibold">
              Play in line
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">200+</div>
              <div className="text-sm text-slate-600">Rides to Rate</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-sm text-slate-600">Characters</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-pink-600">∞</div>
              <div className="text-sm text-slate-600">Fun Moments</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection("features")}
          className="absolute bottom-8 animate-bounce cursor-pointer hover:text-purple-600 transition-colors"
          aria-label="Scroll"
        >
          <ChevronDown className="w-12 h-12 text-slate-400" />
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">Why You'll Love It</h2>
            <p className="text-xl text-slate-600">Turn your theme park visits into an epic adventure</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-purple-600" />,
                ring: "hover:border-purple-200",
                title: "Rate Every Ride",
                text: "Score attractions on aesthetics, thrills, duration, and line entertainment.",
                bubble: "from-purple-100 to-purple-200",
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-600" />,
                ring: "hover:border-blue-200",
                title: "Find Your Match",
                text: "Discover which character you match with based on your ride style.",
                bubble: "from-blue-100 to-blue-200",
              },
              {
                icon: <Users className="w-8 h-8 text-pink-600" />,
                ring: "hover:border-pink-200",
                title: "Play With Friends",
                text: "Create groups, invite up to 8 friends, and compare results.",
                bubble: "from-pink-100 to-pink-200",
              },
              {
                icon: <Trophy className="w-8 h-8 text-amber-600" />,
                ring: "hover:border-amber-200",
                title: "Compare Results",
                text: "See who rated what and uncover surprising group matches.",
                bubble: "from-amber-100 to-amber-200",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-green-600" />,
                ring: "hover:border-green-200",
                title: "Track Insights",
                text: "Get fun stats on your preferences and favorite ride vibes.",
                bubble: "from-green-100 to-green-200",
              },
              {
                icon: <Heart className="w-8 h-8 text-red-600" />,
                ring: "hover:border-red-200",
                title: "Share Moments",
                text: "Share your character match with friends and social.",
                bubble: "from-red-100 to-red-200",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent ${f.ring} rounded-2xl`}
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${f.bubble} rounded-full flex items-center justify-center`}
                  >
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{f.title}</h3>
                  <p className="text-slate-600">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <ChevronDown className="w-12 h-12 text-purple-600 animate-bounce mx-auto" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Get started in just a few simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { n: 1, title: "Create a Group", text: "Start a new group and invite your friends to join the fun.", grad: "from-purple-600 to-blue-600" },
              { n: 2, title: "Rate the Rides", text: "Score each attraction on four different metrics that matter to you.", grad: "from-blue-600 to-pink-600" },
              { n: 3, title: "Discover Results", text: "Find your character match and compare with your group!", grad: "from-pink-600 to-purple-600" },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${s.grad} text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4`}>
                    {s.n}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{s.title}</h3>
                  <p className="text-slate-600">{s.text}</p>
                </div>
                {i < 2 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-purple-600 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <ChevronDown className="w-12 h-12 text-purple-600 animate-bounce mx-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Discover Your Park Personality?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-purple-100">
            Download now and scan the QR so your whole group joins before the line moves.
          </p>

          <div className="flex justify-center">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-7 text-xl rounded-xl shadow-2xl transition-all group inline-flex items-center">
                <Apple className="w-7 h-7 mr-3" />
                Download Now
                <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-4xl mb-4">🎢</div>
          <h3 className="text-2xl font-bold mb-2">Park Rides Quest</h3>
          <p className="text-slate-400 mb-6">The ultimate theme park rating experience</p>
          <div className="mt-6 text-sm text-slate-500">© 2026 Park Rides Quest.</div>
        </div>
      </footer>
    </div>
  );
}
