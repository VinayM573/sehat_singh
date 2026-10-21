import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CirclePlay,
  Globe2,
  Heart,
  Instagram,
  Menu,
  Moon,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/fitness-hero.jpg";
import fitnessMoments from "@/assets/fitness-moments.jpg";

export const MEMBERSHIP_OFFER = {
  durationMonths: 3,
  priceInr: 2999,
};

const navigation = [
  { label: "The experience", href: "#experience" },
  { label: "The method", href: "#method" },
  { label: "Membership", href: "#membership" },
  { label: "FAQs", href: "#faq" },
];

const pillars = [
  {
    name: "Strength",
    icon: Sparkles,
    detail:
      "Build strength for real life, one thoughtful movement at a time. Each day brings a fresh session you can follow from home.",
  },
  {
    name: "Calm",
    icon: Heart,
    detail:
      "Training should support your day, not add to its pressure. Move at your own pace, with room to find your rhythm again.",
  },
  {
    name: "Energy",
    icon: Zap,
    detail:
      "Your energy changes through the week. Flexible daily sessions help you choose a movement that feels right for today.",
  },
  {
    name: "Sleep",
    icon: Moon,
    detail:
      "Gentle movement and regular routines can create more space to unwind and recharge between workouts.",
  },
  {
    name: "Mindset",
    icon: ShieldCheck,
    detail:
      "Progress isn't all-or-nothing. Leave the ego at the door, come back for today's workout, celebrate the small wins, and build consistency at your pace.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose your plan",
    copy: "One simple, upfront decision. Then your next workout is already on its way.",
  },
  {
    number: "02",
    title: "Get your daily workout",
    copy: "A fresh workout link arrives on WhatsApp. No app to install, no complicated setup.",
  },
  {
    number: "03",
    title: "Show up tomorrow",
    copy: "Press play when it suits you and start building a routine that belongs to you.",
  },
];

const storyCards = [
  { name: "Strength, one day at a time", position: "story-frame--one" },
  { name: "A routine that fits real life", position: "story-frame--two" },
  { name: "More room to move", position: "story-frame--three" },
  { name: "Recovery is part of the work", position: "story-frame--four" },
];

const faqs = [
  {
    question: "How do the daily workouts work?",
    answer:
      "A fresh workout link is shared with you on WhatsApp each day. Follow along at home when it suits you.",
  },
  {
    question: "Do I need to be fit before I start?",
    answer:
      "No. Begin where you are and move at a pace that feels manageable for you. If you have health concerns or an injury, check with your healthcare professional before beginning a new routine.",
  },
  {
    question: "Do I need a gym or special equipment?",
    answer:
      "The sessions are designed to follow from home. Any equipment you'll need for a particular workout can be checked in the workout instructions.",
  },
  {
    question: "When can I do the workouts?",
    answer:
      "Daily workouts are shared on WhatsApp, with live sessions at 7:00 AM IST. You can press play when it works for your day.",
  },
  {
    question: "Is this a subscription?",
    answer:
      "The offer shown is a one-time, three-month membership pass priced at ₹2,999. Review the purchase details and cancellation terms before paying.",
  },
  {
    question: "Can everyone take part?",
    answer:
      "This program may not suit every body or health situation. Please read the full participation and health guidance before joining, and talk to your healthcare professional if you're unsure.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sehat Singh | CA & Fitness Coach" },
      {
        name: "description",
        content:
          "Science-backed, satire-packed coaching from Sehat Singh — decode your habits, ego and health with daily workouts you can follow from home.",
      },
      { property: "og:title", content: "Sehat Singh | CA & Fitness Coach" },
      {
        property: "og:description",
        content:
          "Decoding habits, ego and health. 20 years of coaching experience, transforming you one habit at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell" id="top">
      <div className="announcement">
        <div className="announcement__inner">
          <a className="announcement__label" href="#membership">
            <span className="announcement__dot" aria-hidden="true" />
            <span>FOUNDING MEMBER OFFER</span>
            <ArrowRight size={15} aria-hidden="true" />
          </a>
          <span className="announcement__note">Your next chapter starts today</span>
        </div>
      </div>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src={heroImage}
          alt="Sehat Singh, CA and fitness coach, speaking on stage"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="hero__veil" aria-hidden="true" />

        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Sehat Singh, home">
            <span className="wordmark__symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="wordmark__type">
              <span className="wordmark__name">sehat<span>singh</span></span>
              <span className="wordmark__sub">CA &amp; FITNESS COACH</span>
            </span>
          </a>

          <nav className={`nav ${menuOpen ? "nav--open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav__join" href="#membership" onClick={() => setMenuOpen(false)}>
              Join the movement <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </nav>

          <Button
            className="menu-toggle"
            variant="outline"
            size="icon"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </header>

        <div className="hero__content">
          <span className="eyebrow eyebrow--light">
            <span className="eyebrow__rule" />
            Science-backed. Satire-packed.
          </span>
          <h1 id="hero-title">
            Decode habits.
            <br />
            <em>Tame your ego.</em>
            <br />
            Transform health.
          </h1>
          <p className="hero__copy">
            20 years of coaching experience, one habit at a time.
            <br />
            Daily training made for real life, right at home.
          </p>
          <div className="hero__actions">
            <Button className="button-gold button-gold--large" asChild>
              <a href="#membership">
                Find your daily rhythm <ArrowRight size={18} aria-hidden="true" />
              </a>
            </Button>
            <a className="text-link text-link--light" href="#experience">
              <span className="text-link__play"><CirclePlay size={33} aria-hidden="true" /></span>
              Get to know Sehat Singh
            </a>
          </div>
          <a className="hero__scroll" href="#experience" aria-label="Scroll to discover Sehat Singh">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>

        <div className="hero__aside" aria-label="Your movement, your pace">
          <span className="hero__aside-line" />
          <span className="hero__aside-text">ONE HABIT<br />AT A TIME</span>
        </div>
      </section>

      <section className="intro section-wrap" id="experience" aria-labelledby="intro-title">
        <div className="section-heading">
          <span className="eyebrow"><span className="eyebrow__rule" />A COMMUNITY IN MOTION</span>
          <h2 id="intro-title">Look what happens<br /><em>when you show up.</em></h2>
          <p>Real life won't slow down. Your movement practice shouldn't have to get complicated.</p>
        </div>

        <div className="intro__grid">
          <article className="stat-panel">
            <div className="stat-panel__head">
              <span className="eyebrow eyebrow--light">The community so far</span>
              <Globe2 size={20} aria-hidden="true" />
            </div>
            <div className="stat-panel__main">
              <span className="stat-panel__number">209K<span>+</span></span>
              <span className="stat-panel__label">following on Instagram</span>
            </div>
            <div className="stat-panel__foot">
              <div className="stat-mini">
                <span className="stat-mini__number">20</span>
                <span className="stat-mini__label">years of coaching<br />experience</span>
              </div>
              <div className="stat-mini">
                <span className="stat-mini__number">2,409</span>
                <span className="stat-mini__label">posts on habits,<br />ego &amp; health</span>
              </div>
            </div>
            <a className="stat-panel__link" href="#membership">
              There's a place for you here <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>

          <div className="daily-panel">
            <div className="daily-panel__title">
              <span className="eyebrow eyebrow--light">Small steps. No app required.</span>
              <h3>A workout that meets you where you are.</h3>
            </div>
            <ul className="daily-list">
              <li>
                <span className="daily-list__icon"><ArrowRight size={15} aria-hidden="true" /></span>
                <span><strong>Once you join</strong>Your daily workout link arrives on WhatsApp.</span>
              </li>
              <li>
                <span className="daily-list__icon"><CirclePlay size={15} aria-hidden="true" /></span>
                <span><strong>Make it your own</strong>Move along with a fresh session whenever your day allows.</span>
              </li>
              <li>
                <span className="daily-list__icon"><Heart size={15} aria-hidden="true" /></span>
                <span><strong>Keep showing up</strong>Build a daily ritual, without another app or a complicated plan.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits section-wrap" aria-labelledby="benefits-title">
        <div className="benefits__lead">
          <span className="eyebrow"><span className="eyebrow__rule" />YOUR KIND OF PROGRESS</span>
          <h2 id="benefits-title">Movement for<br /><em>all of you.</em></h2>
          <p>Less chasing perfection. More finding strength, room to breathe, and a practice you can actually keep.</p>
          <a className="text-link" href="#method">Explore the Sehat Singh method <ArrowRight size={16} aria-hidden="true" /></a>
        </div>

        <div className="benefit-grid">
          <article className="benefit-card benefit-card--one">
            <span className="benefit-card__index">01 / MOVE</span>
            <div><h3>Find your strength</h3><p>Small, thoughtful steps toward a stronger you.</p></div>
          </article>
          <article className="benefit-card benefit-card--two">
            <span className="benefit-card__index">02 / BUILD</span>
            <div><h3>Move with confidence</h3><p>Build a practice that fits your life, right at home.</p></div>
          </article>
          <article className="benefit-card benefit-card--three">
            <span className="benefit-card__index">03 / RESTORE</span>
            <div><h3>Make room to move</h3><p>Gentle mobility to help you feel good in your body.</p></div>
          </article>
          <article className="benefit-card benefit-card--four">
            <span className="benefit-card__index">04 / REPEAT</span>
            <div><h3>Honor your recovery</h3><p>Rest and recovery are part of progress too.</p></div>
          </article>
        </div>
      </section>

      <section className="coach-band" aria-label="Daily live sessions and coaching">
        <div className="coach-band__inner">
          <div className="coach-band__quote">
            <span className="eyebrow eyebrow--light">YOUR COACH, IN YOUR CORNER</span>
            <p>“Transforming you, one habit at a time.”</p>
            <span className="coach-band__byline">Kulvinder Ruhil <span>·</span> CA &amp; Fitness Coach</span>
          </div>
          <div className="coach-stats">
            <div className="coach-stat"><span className="coach-stat__number">20<span>+</span></span><span>years of experience</span></div>
            <div className="coach-stat"><span className="coach-stat__number">209K<span>+</span></span><span>Instagram followers</span></div>
            <div className="coach-stat"><span className="coach-stat__number">2,409</span><span>posts and counting</span></div>
          </div>
        </div>
      </section>

      <section className="method section-wrap" id="method" aria-labelledby="method-title">
        <div className="method__intro">
          <span className="eyebrow"><span className="eyebrow__rule" />A MORE THOUGHTFUL PRACTICE</span>
          <h2 id="method-title">This isn't one-size-fits-all fitness.<br /><em>This is finding your rhythm.</em></h2>
          <p>Energy changes. Life changes. The way you move can change with it. Find your own transformation in these five simple pillars.</p>
        </div>
        <div className="pillar-list">
          {pillars.map(({ name, icon: Icon, detail }) => (
            <details className="pillar-item" key={name}>
              <summary>
                <span className="pillar-item__icon"><Icon size={19} aria-hidden="true" /></span>
                <span className="pillar-item__name">{name}</span>
                <ChevronDown className="pillar-item__chevron" size={19} aria-hidden="true" />
              </summary>
              <p>{detail}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="join-steps section-wrap" aria-labelledby="steps-title">
        <div className="section-heading section-heading--center">
          <span className="eyebrow"><span className="eyebrow__rule" />MADE EASY TO BEGIN</span>
          <h2 id="steps-title">How to join?<br /><em>Just three steps.</em></h2>
          <p>Make one choice. Then we'll help you keep moving.</p>
        </div>
        <div className="steps-list">
          {steps.map((step, index) => (
            <article className={`step-card step-card--${index + 1}`} key={step.number}>
              <span className="step-card__number">{step.number}</span>
              <div className="step-card__body">
                <span className="eyebrow eyebrow--light">THE SEHAT SINGH WAY</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
              <ArrowUpRight className="step-card__arrow" size={21} aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="stories section-wrap" aria-labelledby="stories-title">
        <div className="stories__heading">
          <div>
            <span className="eyebrow"><span className="eyebrow__rule" />MADE FOR THE DAYS THAT ARE YOURS</span>
            <h2 id="stories-title">Real life.<br /><em>Real movement.</em></h2>
          </div>
          <p>No two days look the same. Your movement doesn't have to either.</p>
        </div>
        <div className="stories__grid">
          {storyCards.map((story, index) => (
            <figure className={`story-frame ${story.position}`} key={story.name}>
              <img
                src={fitnessMoments}
                alt=""
                loading="lazy"
                width={1920}
                height={1408}
              />
              <figcaption><span>0{index + 1}</span>{story.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="membership" id="membership" aria-labelledby="membership-title">
        <div className="membership__inner">
          <div className="membership__intro">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__rule" />AN INVITATION TO BEGIN</span>
            <h2 id="membership-title">A little commitment.<br /><em>A lot more you.</em></h2>
            <p>One three-month membership. Daily workouts sent straight to WhatsApp. A chance to make moving a part of your life.</p>
            <div className="membership__note"><span className="membership__note-dot" /> ONE-TIME PASS <span>·</span> NO APP NEEDED</div>
          </div>

          <div className="offer-card">
            <div className="offer-card__ribbon">THREE-MONTH MEMBERSHIP PASS</div>
            <span className="offer-card__duration">{MEMBERSHIP_OFFER.durationMonths} months to build a rhythm</span>
            <p className="offer-card__price" aria-label={`₹${MEMBERSHIP_OFFER.priceInr.toLocaleString("en-IN")} rupees`}>
              <span>₹</span>{MEMBERSHIP_OFFER.priceInr.toLocaleString("en-IN")}
            </p>
            <span className="offer-card__once">one-time payment</span>
            <Button className="button-gold button-gold--offer" asChild>
              <a href="#faq">Read the membership FAQs <ArrowRight size={17} aria-hidden="true" /></a>
            </Button>
            <ul className="offer-benefits">
              <li><Check size={16} aria-hidden="true" />Daily workout links on WhatsApp</li>
              <li><Check size={16} aria-hidden="true" />Live sessions with Sehat Singh</li>
              <li><Check size={16} aria-hidden="true" />Fresh workouts, every day</li>
              <li><Check size={16} aria-hidden="true" />Made to follow along from home</li>
            </ul>
            <a className="offer-card__details" href="#faq">Review questions and membership details <MoveUpRight size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="membership__footer">
          <span>Move at your pace. Show up as you are.</span>
          <span>Stay curious, <strong>Sehat Singh</strong></span>
        </div>
      </section>

      <section className="faq section-wrap" id="faq" aria-labelledby="faq-title">
        <div className="faq__intro">
          <span className="eyebrow"><span className="eyebrow__rule" />A FEW THINGS TO KNOW</span>
          <h2 id="faq-title">Good questions.<br /><em>Honest answers.</em></h2>
          <p>Everything you need to know before you make a little more room to move.</p>
          <span className="faq__seal"><Heart size={16} aria-hidden="true" /> Start where you are.</span>
        </div>
        <div className="faq__list">
          {faqs.map((item, index) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span className="faq-item__number">0{index + 1}</span>
                <span className="faq-item__question">{item.question}</span>
                <span className="faq-item__toggle" aria-hidden="true"><ChevronDown size={18} /></span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-cta">
          <span className="eyebrow eyebrow--light"><span className="eyebrow__rule" />YOUR FIRST WORKOUT IS WAITING</span>
          <h2>Tomorrow is<br /><em>a beautiful place to start.</em></h2>
          <Button className="button-gold button-gold--large" asChild>
            <a href="#membership">See the membership <ArrowRight size={18} aria-hidden="true" /></a>
          </Button>
          <a
            className="footer-cta__social"
            href="https://www.instagram.com/sehatsingh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} aria-hidden="true" /> Follow @sehatsingh
          </a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark wordmark--footer" href="#top" aria-label="Sehat Singh, back to top">
            <span className="wordmark__symbol" aria-hidden="true"><span /><span /><span /></span>
            <span className="wordmark__type">
              <span className="wordmark__name">sehat<span>singh</span></span>
              <span className="wordmark__sub">CA &amp; FITNESS COACH</span>
            </span>
          </a>
          <span className="footer-bottom__copyright">© {new Date().getFullYear()} SEHAT SINGH</span>
          <a className="footer-bottom__top" href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}