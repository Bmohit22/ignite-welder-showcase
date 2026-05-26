import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-welding.jpg";
import fabricationImg from "@/assets/fabrication.jpg";
import repairsImg from "@/assets/repairs.jpg";
import lineBoringImg from "@/assets/line-boring.jpg";
import {
  Wrench,
  Cog,
  Flame,
  Hammer,
  Sparkles,
  CircleDot,
  Phone,
  Mail,
  MapPin,
  Inbox,
  ShieldCheck,
  Award,
  Clock,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MAXWELD LTD. — Welding, Fabrication & Equipment Repair in Lumby, BC" },
      {
        name: "description",
        content:
          "Professional welding, custom fabrication, mechanical repairs and portable line boring in Lumby, BC. 15+ years of trusted craftsmanship. Built strong, welded right.",
      },
      { property: "og:title", content: "MAXWELD LTD. — Welding & Fabrication" },
      {
        property: "og:description",
        content:
          "Dependable welding, fabrication, mechanical repairs and portable line boring serving Lumby, BC for over 15 years.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  component: Home,
});

const services = [
  {
    icon: Wrench,
    title: "Equipment Repairs",
    desc: "Reliable equipment repair services to restore machinery performance, reduce downtime, and keep operations running safely and effectively.",
  },
  {
    icon: Cog,
    title: "Mechanical Services",
    desc: "Professional mechanical repair and maintenance solutions tailored to meet your equipment and operational needs.",
  },
  {
    icon: Flame,
    title: "Pressure Welding",
    desc: "Safe, durable, and precision welding completed to high-quality standards with attention to strength and reliability.",
  },
  {
    icon: Hammer,
    title: "Custom Fabrication",
    desc: "Custom metal fabrication designed and built to your exact project specifications, focused on durability and performance.",
  },
  {
    icon: Sparkles,
    title: "Aluminum & Stainless Welding",
    desc: "Specialized aluminum and stainless steel welding with precision craftsmanship and professional finishes.",
  },
  {
    icon: CircleDot,
    title: "Portable Line Boring",
    desc: "On-site portable line boring to restore worn bores and extend the life of heavy equipment, reducing downtime with accurate, dependable repairs.",
  },
];

const reasons = [
  { icon: Award, title: "15+ Years of Experience", desc: "Proudly serving the community with dependable workmanship and trusted service." },
  { icon: ShieldCheck, title: "Quality Workmanship", desc: "Professional results with attention to detail, durability, and precision." },
  { icon: Clock, title: "Reliable Service", desc: "Dependable, timely service that keeps equipment and projects moving." },
  { icon: Users, title: "Custom Solutions", desc: "Every project is different — we tailor solutions to your specific needs." },
  { icon: Heart, title: "Community Focused", desc: "Honest work and long-lasting customer relationships in our local community." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-md bg-gradient-ember flex items-center justify-center shadow-ember">
              <Flame className="w-5 h-5 text-primary-foreground" />
            </span>
            <span className="font-display text-xl tracking-wide">MAXWELD <span className="text-ember">LTD.</span></span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <li><a href="#about" className="hover:text-ember transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-ember transition-colors">Services</a></li>
            <li><a href="#why" className="hover:text-ember transition-colors">Why Us</a></li>
            <li><a href="#contact" className="hover:text-ember transition-colors">Contact</a></li>
          </ul>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-ember text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-ember"
          >
            Request Quote <ArrowRight className="w-4 h-4" />
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img
          src={heroImg}
          alt="Welder at work with sparks flying in an industrial workshop"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ember/40 bg-ember/10 text-ember text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ember animate-pulse" />
              Lumby, BC · Est. 15+ Years
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              MAXWELD <span className="text-ember">LTD.</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-4 text-muted-foreground font-medium tracking-normal">
                Professional Welding, Fabrication & Equipment Repair
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Serving the community for 15+ years with dependable welding, fabrication, mechanical repairs, and portable line boring solutions.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-ember font-semibold">
              Built Strong. Welded Right. Trusted for Over 15 Years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gradient-ember text-primary-foreground font-semibold shadow-ember hover:opacity-90 transition"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border bg-card/60 backdrop-blur font-semibold hover:border-ember hover:text-ember transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <p className="text-ember text-xs font-bold uppercase tracking-[0.3em] mb-4">About Us</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight">
              Built on Experience.<br/>
              <span className="text-ember">Driven by Quality.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Led by President <span className="text-foreground font-semibold">Byron Maxwell</span>, MAXWELD LTD. has proudly served the community for more than 15 years, delivering trusted welding, repair, and fabrication services with professionalism and pride.
            </p>
            <p>
              We specialize in dependable repair solutions, custom fabrication, mechanical services, and precision welding designed to keep equipment running and projects moving forward.
            </p>
            <p>
              At MAXWELD LTD., quality isn't just a promise — it's the standard we work by. We believe in honest service, strong craftsmanship, and doing the job right the first time.
            </p>
            <p>
              Whether it's a small repair, heavy equipment work, custom fabrication project, or on-site line boring service, our team is committed to providing practical, long-lasting solutions tailored to your needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="p-6 rounded-lg bg-card border border-border shadow-card">
                <h3 className="font-display text-lg text-ember mb-2">Our Mission</h3>
                <p className="text-sm">To provide reliable welding, fabrication, and repair solutions through quality workmanship, professionalism, and strong customer relationships.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border shadow-card">
                <h3 className="font-display text-lg text-ember mb-2">Our Vision</h3>
                <p className="text-sm">To continue growing while remaining a trusted name in the community for dependable welding, mechanical repair, and fabrication services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-ember text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Services</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
              Professional Welding & Repair Solutions
            </h2>
            <p className="text-muted-foreground">
              A wide range of professional services designed to support industrial, agricultural, commercial, and custom projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative p-7 rounded-xl bg-card border border-border hover:border-ember transition-all duration-300 shadow-card hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-ember flex items-center justify-center mb-5 shadow-ember group-hover:scale-110 transition">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>

          {/* Image gallery */}
          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            {[
              { src: fabricationImg, alt: "Custom metal fabrication workshop" },
              { src: repairsImg, alt: "Mechanical equipment repair" },
              { src: lineBoringImg, alt: "Portable line boring machine" },
            ].map((img) => (
              <div key={img.alt} className="relative overflow-hidden rounded-lg aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-ember text-xs font-bold uppercase tracking-[0.3em] mb-4">Why Choose Us</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Why Customers Trust <span className="text-ember">MAXWELD LTD.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition shadow-card">
                <r.icon className="w-8 h-8 text-ember mb-4" />
                <h3 className="font-display text-lg mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT */}
      <section className="py-24 lg:py-32 relative overflow-hidden border-y border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-card" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-ember text-xs font-bold uppercase tracking-[0.3em] mb-4">Our Commitment</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Strong Work. Honest Service.<br/>
            <span className="text-ember">Reliable Results.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At MAXWELD LTD., we believe that quality craftsmanship and strong customer relationships go hand in hand. No matter the size of the project, we are committed to delivering dependable service, practical solutions, and workmanship that stands the test of time.
          </p>
          <p className="mt-8 font-display text-2xl text-ember">
            When quality matters, MAXWELD LTD. delivers.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL / TRUST */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-12 h-12 text-ember mx-auto mb-6" />
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
            Proudly Serving the Community for Over 15 Years
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Through hard work, dependable service, and a commitment to quality, MAXWELD LTD. continues to build strong relationships and trusted solutions for customers throughout the community.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Trusted", "Reliable", "Built to Last"].map((tag) => (
              <span key={tag} className="px-5 py-2 rounded-full border border-ember/40 bg-ember/10 text-ember text-sm font-semibold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-ember text-xs font-bold uppercase tracking-[0.3em] mb-4">Get in Touch</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Let's Build Something <span className="text-ember">Strong</span> Together.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Need welding, fabrication, equipment repairs, mechanical services, or portable line boring? We're here to help. Contact us today to discuss your project, request a quote, or learn more about our services.
            </p>
            <div className="space-y-1 text-muted-foreground">
              <p className="font-display text-xl text-foreground">MAXWELD LTD.</p>
              <p className="text-sm">President: <span className="text-foreground">Byron Maxwell</span></p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <ContactCard icon={Phone} label="Phone" value="(250) 308-1040" href="tel:+12503081040" />
            <ContactCard icon={Mail} label="Email" value="maxweld.ltd@gmail.com" href="mailto:maxweld.ltd@gmail.com" />
            <ContactCard icon={MapPin} label="Location" value="Lumby, BC" />
            <ContactCard icon={Inbox} label="PO Box" value="878" />
            <a
              href="mailto:maxweld.ltd@gmail.com"
              className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-md bg-gradient-ember text-primary-foreground font-semibold shadow-ember hover:opacity-90 transition"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-md bg-gradient-ember flex items-center justify-center">
              <Flame className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="font-display tracking-wide">MAXWELD <span className="text-ember">LTD.</span></span>
          </div>
          <p>© {new Date().getFullYear()} MAXWELD LTD. — Built Strong. Welded Right.</p>
        </div>
      </footer>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="p-5 rounded-lg bg-card border border-border hover:border-ember transition shadow-card h-full">
      <Icon className="w-5 h-5 text-ember mb-3" />
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
      <p className="font-semibold text-foreground break-words">{value}</p>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
