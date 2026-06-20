// @ts-nocheck
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Moon, Sun, ArrowRight, ArrowLeft } from 'lucide-react';

// ==========================================
// 1. PORTFOLIO DATA
// ==========================================
const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'Shában Ghanem',
    role: 'Premium Brand & Visual Designer',
    tagline:
      'Crafting luxurious digital experiences and timeless brand identities.',
    bio: "Specializing in high end visual design, I blend minimalist aesthetics with functional strategy. With a deep understanding of modern design trends and user psychology, I build experiences that don't just look premium they feel it. Every pixel is placed with purpose.",
    email: 'shaabanghanems@gmail.com',
    phone: '+20 1080405797',
    location: 'Cairo, Egypt',
    profileImage: 'https://i.postimg.cc/q7r5mdwC/SHGH.png',
    aboutImage: 'https://i.postimg.cc/HWKH6VyV/sbsl.png',
  },
  skills: [
    'Brand Strategy',
    'Social Media Design',
    'Company Profiles',
    'Figma',
    'Adobe Creative Suite',
    'Presentations',
    'Typography',
    '3D Concepts',
  ],
  software: [
    { id: 1, name: 'Photoshop', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { id: 2, name: 'Illustrator', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg' },
    { id: 3, name: 'After Effects', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
    { id: 4, name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { id: 5, name: 'Premiere', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
    { id: 6, name: 'Microsoft apps', logo: 'https://i.postimg.cc/RFbMDm0t/New-Icons-Microsoft-365.png' },
  ],
  clients: [
    { id: 1, name: 'MBC MASR', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/MBC_Masr_Logo.svg' },
    { id: 2, name: 'WARNERBROS', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Warner_Bros._logo_2023.svg' },
    { id: 3, name: 'Al-Saudia TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Al-Saudia_TV_Logo_2018.png' },
    { id: 4, name: 'ejs', logo: 'https://i.postimg.cc/cCfjkt0q/Egyptian-Japanese-Schools-fnl.png' },
    { id: 5, name: 'moe', logo: 'https://upload.wikimedia.org/wikipedia/ar/8/81/Ministry_of_Education_%28Egypt%29_logo_%28wikiar%29.png' },
    { id: 6, name: 'stc', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/STC-01.svg' },
    { id: 7, name: 'cps', logo: 'https://coproductionsalon.com/storage/images/CoSalon_logo.svg' },
    { id: 8, name: 'ag', logo: 'https://i.postimg.cc/9Q8tGXZq/Asset-3.png' },
    { id: 9, name: 'baha', logo: 'https://i.postimg.cc/rm64JDmd/Asset-2.png' },
    { id: 10, name: 'ncn', logo: 'https://i.postimg.cc/ZRVTqQ1Y/image.png' },
    { id: 11, name: 'tala', logo: 'https://i.postimg.cc/5tmJPG9f/Asset-4.png' },
    { id: 12, name: 'np', logo: 'https://i.postimg.cc/HLtmSKWd/Asset-5.png' },
    { id: 13, name: 'qeesh', logo: 'https://images.squarespace-cdn.com/content/v1/608bec48ef687015f7fb658e/93f1f341-aeeb-43de-8926-c3a600dad7f3/Qeesh-logo_0003_white.png?format=1500w' },
    { id: 14, name: 'dau', logo: 'https://i.postimg.cc/YCHqbQNx/DAU-idsjo-Jbde-J-0.png' },
    { id: 15, name: 'eventy', logo: 'https://i.postimg.cc/9FSyMghQ/Asset-8.png' },
    { id: 16, name: 'awad', logo: 'https://i.postimg.cc/hvmQ7cg8/LW.png' },
    { id: 17, name: 'emc', logo: 'https://i.postimg.cc/JhjFKBqN/Asset-1.png' },
    { id: 18, name: 'roose', logo: 'https://i.postimg.cc/g2gjjnR7/Asset-2.png' },
    { id: 19, name: 'my', logo: 'https://i.postimg.cc/4dqBgfBR/Asset-1.png' },
    { id: 20, name: 'manus', logo: 'https://i.postimg.cc/NF2m7R8m/white.png' },
    { id: 21, name: 'har', logo: 'https://i.postimg.cc/RVRK1CKN/Untitled-1.png' },
    { id: 22, name: 'gs', logo: 'https://i.postimg.cc/WtLR5hSQ/gs.png' },
    { id: 23, name: 'aldirah', logo: 'https://i.postimg.cc/5ydZbS2s/Asset-18.png' },
    { id: 24, name: 'af', logo: 'https://i.postimg.cc/76gKM8qs/Asset-2.png' },
    { id: 25, name: 'sol', logo: 'https://i.postimg.cc/G3KQcjt9/Asset-8.png' },
    { id: 26, name: 'uaesg', logo: 'https://i.postimg.cc/gk53JtWc/Asset-7.png' },
    { id: 27, name: 'metro', logo: 'https://metro-website-images.s3.eu-west-1.amazonaws.com/plugins/user/images/Logo.svg' },
    { id: 28, name: 'slighty', logo: 'https://i.postimg.cc/W47V9Kp2/Asset-7.png' },
    { id: 29, name: 'moaaser', logo: 'https://i.postimg.cc/j5DYcjDJ/image.png' },
    { id: 30, name: 'al emthaan', logo: 'https://i.postimg.cc/rpgPv2Bp/image.png' },
    { id: 31, name: 'tayseer', logo: 'https://i.postimg.cc/SK9B5PyG/arabic.png' },
    { id: 32, name: 'eage', logo: 'https://i.postimg.cc/2S9jmgRF/logo.png' },
    { id: 33, name: 'tahyamasr', logo: 'https://i.postimg.cc/VvZZ59f0/LOGO-TAHYA-MASR-white.png' },
    { id: 34, name: 'minimetro', logo: 'https://i.postimg.cc/B6qmg7tS/UFd-CCTb-VQ1UW5h-HCEd6B87SM.jpg' },
    { id: 35, name: 'melon', logo: 'https://i.postimg.cc/C5J581XY/MELON-LOGO.png' },
    { id: 36, name: 'fl90', logo: 'https://i.postimg.cc/bwpL8FHB/fel90-1.png' },
    { id: 37, name: 'kings cup', logo: 'https://www.saff.com.sa/uploadcenter/saffchamplarge1716749366.png' },
    { id: 38, name: 'seh', logo: 'https://i.postimg.cc/bNTk0YkS/u.png' },
    { id: 39, name: 'Sobek', logo: 'https://i.postimg.cc/DZkSkRLj/Asset-1.png' },
    { id: 40, name: 'Smartd', logo: 'https://i.postimg.cc/TP8dpg1k/image.jpg' },
  ],
  projects: [
    { id: 1, title: 'Aura FinTech Identity', category: 'Logos', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Lumina Cosmetics Campaign', category: 'Social Media', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Nexus Smart Home Profile', category: 'Company Profiles', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Onyx Architecture Exhibition', category: 'Posters', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop' },
    { id: 5, title: 'Global News Rebrand', category: 'TV Channels', image: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop' },
    { id: 6, title: 'Tech Summit 2026 Keynote', category: 'Presentations', image: 'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1600&auto=format&fit=crop' },
  ],
};

// ==========================================
// 2. 3D BACKGROUND COMPONENT
// ==========================================
const Floating3DShapes = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden perspective-1000">
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .shape-material {
          background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          box-shadow: inset 5px 5px 15px rgba(255,255,255,0.3), inset -5px -5px 15px rgba(0,0,0,0.1), 0 15px 35px rgba(0,0,0,0.2);
        }
        .dark .shape-material {
          background: linear-gradient(135deg, rgba(0, 255, 135, 0.15) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(0, 255, 135, 0.2);
          box-shadow: inset 5px 5px 15px rgba(255,255,255,0.1), inset -5px -5px 15px rgba(0,0,0,0.5), 0 15px 35px rgba(0,0,0,0.5);
        }
        @keyframes float3D-1 {
          0% { transform: translate3d(10vw, 80vh, -200px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.8); filter: blur(4px); }
          50% { transform: translate3d(20vw, 40vh, 100px) rotateX(180deg) rotateY(90deg) rotateZ(45deg) scale(1.2); filter: blur(0px); }
          100% { transform: translate3d(5vw, 10vh, -100px) rotateX(360deg) rotateY(180deg) rotateZ(90deg) scale(0.9); filter: blur(3px); }
        }
        @keyframes float3D-2 {
          0% { transform: translate3d(80vw, 10vh, 0px) rotateX(0deg) rotateY(0deg) scale(1.5); filter: blur(1px); }
          50% { transform: translate3d(70vw, 60vh, -300px) rotateX(-180deg) rotateY(-90deg) scale(0.5); filter: blur(8px); }
          100% { transform: translate3d(85vw, 80vh, 50px) rotateX(-360deg) rotateY(-180deg) scale(1.2); filter: blur(2px); }
        }
        @keyframes float3D-3 {
          0% { transform: translate3d(50vw, 50vh, -400px) rotateX(45deg) rotateY(45deg) scale(0.5); filter: blur(10px); }
          50% { transform: translate3d(40vw, 20vh, 200px) rotateX(220deg) rotateY(180deg) scale(1.8); filter: blur(0px); }
          100% { transform: translate3d(60vw, 70vh, -200px) rotateX(400deg) rotateY(360deg) scale(0.7); filter: blur(6px); }
        }
        .anim-3d-1 { animation: float3D-1 25s infinite alternate ease-in-out; }
        .anim-3d-2 { animation: float3D-2 30s infinite alternate ease-in-out; }
        .anim-3d-3 { animation: float3D-3 20s infinite alternate ease-in-out; }
      `}</style>
      <div className="absolute w-48 h-48 rounded-full shape-material anim-3d-1"></div>
      <div className="absolute w-40 h-40 rounded-3xl shape-material anim-3d-2"></div>
      <div className="absolute w-56 h-56 rounded-full border-[30px] border-white/10 dark:border-[#00ff87]/20 shape-material anim-3d-3" style={{ background: 'transparent' }}></div>
    </div>
  );
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0, top: 0, height: 0 });
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  const navContainerRef = useRef(null);
  const galleryRef = useRef(null);
  const lastScrollY = useRef(0);
  const sections = ['home', 'clients', 'work', 'tools', 'about', 'contact'];
  const vibrantEmerald = '#00FF87';

  const categories = ['All', ...new Set(PORTFOLIO_DATA.projects.map((p) => p.category))];
  const filteredProjects = activeFilter === 'All' ? PORTFOLIO_DATA.projects : PORTFOLIO_DATA.projects.filter((p) => p.category === activeFilter);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 800 : 350;
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollVelocity(currentScrollY - lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };
    let scrollTimeout;
    const scrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setScrollVelocity(0), 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', scrollEnd);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', scrollEnd);
    };
  }, []);

  useLayoutEffect(() => {
    const updateBubblePosition = () => {
      if (navContainerRef.current) {
        const activeEl = navContainerRef.current.querySelector(`[data-section="${activeSection}"]`);
        if (activeEl) {
          setBubbleStyle({
            left: activeEl.offsetLeft,
            top: activeEl.offsetTop,
            width: activeEl.offsetWidth,
            height: activeEl.offsetHeight,
          });
        }
      }
    };
    updateBubblePosition();
    window.addEventListener('resize', updateBubblePosition);
    setTimeout(updateBubblePosition, 100);
    return () => window.removeEventListener('resize', updateBubblePosition);
  }, [activeSection, isDark]);

  const stretchFactor = Math.min(Math.max(1 + Math.abs(scrollVelocity) * 0.0015, 1), 1.15);
  
  const glassCard = 'bg-white/40 dark:bg-[#0a0a0c]/60 backdrop-blur-2xl border border-white/50 dark:border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-3xl';

  return (
    <div className={`min-h-screen transition-colors duration-700 ease-in-out ${isDark ? 'bg-[#050505] text-gray-200' : 'bg-[#f0f0f5] text-gray-800'} font-sans overflow-x-hidden relative`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap');
        * { font-family: 'Inter', sans-serif; }
        html { scroll-behavior: smooth; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: ${vibrantEmerald}; border-radius: 10px; }
      `}</style>

      {/* 3D Background */}
      <Floating3DShapes />
      <div className={`fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${isDark ? 'from-[#00ff87]/5 via-[#050505] to-[#050505]' : 'from-[#00ff87]/20 via-[#f0f0f5] to-[#f0f0f5]'}`}></div>

      {/* Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-fit flex justify-center">
        <div className="relative flex items-center p-1.5 md:p-2 rounded-full bg-white/50 dark:bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-xl overflow-hidden">
          <div ref={navContainerRef} className="relative flex items-center overflow-x-auto hide-scrollbar px-1">
            <div
              className="absolute rounded-full pointer-events-none z-0"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: isDark ? '0 4px 15px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                left: `${bubbleStyle.left}px`,
                top: `${bubbleStyle.top}px`,
                width: `${bubbleStyle.width}px`,
                height: `${bubbleStyle.height}px`,
                transform: `scaleX(${stretchFactor})`,
                transformOrigin: 'center center',
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                data-section={section}
                className={`relative z-10 px-3 md:px-5 py-2 mx-0.5 md:mx-1 text-xs md:text-sm font-bold capitalize rounded-full transition-colors duration-300 whitespace-nowrap cursor-pointer select-none ${
                  activeSection === section ? (isDark ? 'text-white' : 'text-black') : (isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-800')
                }`}
              >
                {section}
              </a>
            ))}
          </div>
          <div className="pl-2 pr-1 md:pl-3 md:pr-2 border-l border-gray-400/30 dark:border-gray-600/50 ml-1 relative z-10 shrink-0">
            <button onClick={() => setIsDark(!isDark)} className="p-1.5 md:p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
              {isDark ? <Sun size={16} className="text-gray-300 hover:text-white" /> : <Moon size={16} className="text-gray-700 hover:text-black" />}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[85vh] md:min-h-screen flex items-center justify-center px-6 pt-36 pb-12 md:pb-20">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-6 group">
              <div className="absolute inset-0 rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"></div>
              <div className="absolute -inset-1 rounded-full border-2 border-t-[#00ff87] border-r-transparent border-b-transparent border-l-transparent animate-[spin_4s_linear_infinite] opacity-50"></div>
              <img src={PORTFOLIO_DATA.personalInfo.profileImage} alt={PORTFOLIO_DATA.personalInfo.name} className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full z-10 transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            <h2 className={`text-2xl md:text-4xl font-bold mb-4 tracking-wide ${isDark ? 'text-white' : 'text-black'}`}>
              Hi, I'm {PORTFOLIO_DATA.personalInfo.name}
            </h2>
            
            <div className={`inline-block mb-6 md:mb-8 px-4 md:px-6 py-1.5 md:py-2 rounded-full ${isDark ? 'bg-[#00ff87]/10 border-[#00ff87]/20 text-[#00ff87]' : 'bg-[#00ff87]/20 border-[#00ff87]/40 text-emerald-800'} text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-[0_0_20px_rgba(0,255,135,0.2)]`}>
              {PORTFOLIO_DATA.personalInfo.role}
            </div>

            <h1 className={`text-5xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Design that <span className="italic font-light">speaks</span> <br />
              <span style={{ color: vibrantEmerald, textShadow: isDark ? '0 0 40px rgba(0,255,135,0.4)' : 'none' }}>Volume.</span>
            </h1>

            <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              {PORTFOLIO_DATA.personalInfo.tagline}
            </p>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section id="clients" className="py-16 md:py-32 overflow-hidden border-y border-white/5 dark:border-white/5 bg-white/10 dark:bg-[#050505]/40 backdrop-blur-md">
          <div className="container mx-auto px-4 md:px-6 mb-10 md:mb-16 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              Trusted by the <span style={{ color: vibrantEmerald }}>Best.</span>
            </h2>
            <p className="text-xs md:text-base font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
              Partners & Clients globally
            </p>
          </div>

          <div className="container mx-auto px-4">
            <div className={`${glassCard} max-w-5xl mx-auto p-8 md:p-12 flex flex-wrap justify-center items-center gap-8 md:gap-14`}>
              {PORTFOLIO_DATA.clients.map((client) => (
                <div key={client.id} className="flex justify-center items-center hover:scale-110 transition-transform duration-300">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-8 sm:h-10 md:h-14 lg:h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="py-16 md:py-32 overflow-hidden">
          <div className="container mx-auto px-6 max-w-[90rem]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-6">
              <h2 className={`text-4xl md:text-7xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                Selected <br />
                <span style={{ color: vibrantEmerald }}>Works.</span>
              </h2>

              <div className="flex flex-wrap gap-2 max-w-2xl justify-start md:justify-end">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveFilter(category);
                      if (galleryRef.current) galleryRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }}
                    className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 border ${
                      activeFilter === category
                        ? `text-black border-transparent shadow-[0_0_15px_rgba(0,255,135,0.4)]`
                        : `bg-white/5 dark:bg-black/20 border-white/20 dark:border-white/10 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`
                    }`}
                    style={activeFilter === category ? { backgroundColor: vibrantEmerald } : {}}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group w-full max-w-[100vw]">
            <button onClick={() => scrollGallery('left')} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-black hover:scale-110 border border-white/10">
              <ArrowLeft size={20} />
            </button>
            <button onClick={() => scrollGallery('right')} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:block hover:bg-black hover:scale-110 border border-white/10">
              <ArrowRight size={20} />
            </button>

            <div ref={galleryRef} className="flex overflow-x-auto gap-4 md:gap-10 px-6 md:px-12 pb-8 pt-4 snap-x snap-mandatory hide-scrollbar w-full">
              {filteredProjects.map((project) => (
                <div key={project.id} className="flex-none w-[85vw] md:w-[75vw] lg:w-[900px] snap-center">
                  <div className={`relative w-full h-[40vh] md:h-[70vh] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border ${isDark ? 'border-white/10' : 'border-black/5'} group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500`}>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex flex-col justify-end pointer-events-none">
                      <span className="font-bold uppercase tracking-widest text-xs md:text-sm mb-2 md:mb-3 drop-shadow-md" style={{ color: vibrantEmerald }}>
                        {project.category}
                      </span>
                      <h3 className="text-white text-2xl md:text-5xl lg:text-6xl font-black tracking-tight drop-shadow-lg leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section id="tools" className="py-16 md:py-32 px-6 border-t border-white/5 dark:border-white/5 relative">
          <div className="container mx-auto max-w-5xl">
            <h2 className={`text-4xl md:text-7xl font-black mb-12 md:mb-20 tracking-tighter text-center ${isDark ? 'text-white' : 'text-black'}`}>
              My <span style={{ color: vibrantEmerald }}>Toolkit.</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
              {PORTFOLIO_DATA.software.map((item) => (
                <div key={item.id} className={`relative w-24 h-24 md:w-36 md:h-36 rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center group transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 cursor-default overflow-hidden ${isDark ? 'bg-white/5 border border-white/10 shadow-[inset_2px_2px_15px_rgba(255,255,255,0.05),_inset_-2px_-2px_15px_rgba(0,0,0,0.2),_0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(0,255,135,0.2)] hover:border-[#00ff87]/40' : 'bg-white/40 border border-white/50 shadow-[inset_2px_2px_15px_rgba(255,255,255,0.5),_0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,255,135,0.2)] hover:border-[#00ff87]/50'} backdrop-blur-xl`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
                  <img src={item.logo} alt={item.name} className="w-8 h-8 md:w-14 md:h-14 mb-2 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500" />
                  <span className={`font-semibold text-[10px] md:text-sm tracking-wide text-center px-1 transition-colors duration-300 ${isDark ? 'text-gray-300 group-hover:text-[#00ff87]' : 'text-gray-600 group-hover:text-emerald-600'}`}>
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 md:py-32 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h2 className={`text-4xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
                  Beyond <br />
                  <span style={{ color: vibrantEmerald }}>Aesthetics.</span>
                </h2>
                <div className={`${glassCard} p-6 md:p-10 relative overflow-hidden group`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff87]/10 rounded-full blur-3xl group-hover:bg-[#00ff87]/20 transition-colors duration-500"></div>
                  <p className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed font-light relative z-10 text-gray-700 dark:text-gray-300">
                    {PORTFOLIO_DATA.personalInfo.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 relative z-10">
                    {PORTFOLIO_DATA.skills.map((skill, i) => (
                      <span key={i} className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium border ${isDark ? 'border-white/10 bg-white/5 text-gray-300' : 'border-black/10 bg-black/5 text-gray-700'} hover:border-[#00ff87] transition-colors cursor-default`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl md:rounded-[2.5rem] overflow-hidden group shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-tr ${isDark ? 'from-[#00ff87]/40 to-transparent' : 'from-[#00ff87]/30 to-transparent'} z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700`}></div>
                <img src={PORTFOLIO_DATA.personalInfo.aboutImage} alt="Workspace or Portrait" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-16 md:py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className={`text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>
              Let's build <br /> something <span style={{ color: vibrantEmerald, textShadow: isDark ? '0 0 30px rgba(0,255,135,0.3)' : 'none' }}>Iconic.</span>
            </h2>
            <div className={`${glassCard} p-8 md:p-20 mt-10 md:mt-16 max-w-3xl mx-auto flex flex-col items-center gap-6 md:gap-8 border-t-4`} style={{ borderTopColor: vibrantEmerald }}>
              <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className={`text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight transition-all hover:scale-105 inline-block break-all ${isDark ? 'text-white' : 'text-black'}`} style={{ textShadow: isDark ? '0 4px 20px rgba(0,0,0,0.5)' : 'none' }} onMouseOver={(e) => (e.target.style.color = vibrantEmerald)} onMouseOut={(e) => (e.target.style.color = '')}>
                {PORTFOLIO_DATA.personalInfo.email}
              </a>
              <a href={`tel:${PORTFOLIO_DATA.personalInfo.phone.replace(/\s/g, '')}`} className={`text-lg sm:text-2xl md:text-4xl font-medium tracking-wide transition-all hover:scale-105 inline-block ${isDark ? 'text-gray-400' : 'text-gray-600'}`} onMouseOver={(e) => (e.target.style.color = vibrantEmerald)} onMouseOut={(e) => (e.target.style.color = '')}>
                {PORTFOLIO_DATA.personalInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 md:py-10 text-center border-t border-gray-500/10 text-xs md:text-sm font-medium tracking-wide relative z-10 text-gray-500 dark:text-gray-500 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
        <p>
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personalInfo.name}. Designed with precision.
        </p>
      </footer>
    </div>
  );
}