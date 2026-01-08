<template>
  <div class="landing">
    <header class="hero">
      <div class="hero__content" v-reveal>
        <p class="hero__kicker parallax" v-parallax="{ speed: 0.22, max: 22 }">University of Africa</p>
        <h1 class="hero__title parallax" v-parallax="{ speed: 0.16, max: 26 }">Where knowledge meets innovation.</h1>
        <p class="hero__lead">
          A modern university experience built on excellent teaching, impactful research, and a vibrant campus community.
        </p>

        <div class="floatWords parallax" v-parallax="{ speed: 0.12, max: 18 }" aria-hidden="true">
          <span class="floatWords__pill">Innovation</span>
          <span class="floatWords__pill">Research</span>
          <span class="floatWords__pill">Community</span>
          <span class="floatWords__pill">Leadership</span>
        </div>

        <div class="hero__actions">
          <v-btn to="/Register" color="teal" class="more-btn">
            Apply Now
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn to="/Departments" variant="outlined" color="white" class="more-btn more-btn--secondary">
            Explore Programs
          </v-btn>
        </div>

        <div class="hero__stats parallax" v-parallax="{ speed: 0.1, max: 16 }" aria-label="Key university stats">
          <div class="stat">
            <p class="stat__value">200+</p>
            <p class="stat__label">Programs</p>
          </div>
          <div class="stat">
            <p class="stat__value">15+</p>
            <p class="stat__label">Case studies</p>
          </div>
          <div class="stat">
            <p class="stat__value">13+</p>
            <p class="stat__label">Publications</p>
          </div>
        </div>
      </div>
    </header>

    <section class="section section--lined">
      <div class="container" v-reveal>
        <h2 class="section__title">A purposeful university</h2>
        <p class="section__lead">
          Our mission is to provide a transformative educational experience that empowers individuals to achieve their full
          potential, foster innovation, and contribute to the advancement of society through excellence in teaching, research,
          and community engagement.
        </p>
        <v-btn to="/about" color="teal" class="more-btn">
          More About University of Africa
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </section>

    <section class="section section--alt section--lined">
      <div class="container" v-reveal>
        <h2 class="section__title">Academics</h2>
        <p class="section__lead">
          We offer broad and balanced academic programs that are mutually reinforcing and emphasize high-quality, creative
          instruction at the undergraduate and graduate levels.
        </p>

        <h3 class="section__subtitle">Programs</h3>
        <div class="cardGrid" aria-label="Program types">
          <div class="card">
            <img src="./../assets/young-student-learning-library.webp" alt="Student studying in the library" loading="lazy" />
            <div class="card__body">
              <p class="card__title">Graduate</p>
              <p class="card__meta">Advance your expertise with research-led learning.</p>
            </div>
          </div>
          <div class="card">
            <img
              src="./../assets/portrait-woman-with-laptop-working.webp"
              alt="Learner working on a laptop"
              loading="lazy"
            />
            <div class="card__body">
              <p class="card__title">Lifelong learning</p>
              <p class="card__meta">Flexible pathways for working professionals.</p>
            </div>
          </div>
          <div class="card">
            <img src="./../assets/beautiful-day-campus.webp" alt="Students on campus" loading="lazy" />
            <div class="card__body">
              <p class="card__title">Undergraduate</p>
              <p class="card__meta">Build strong foundations and real-world skills.</p>
            </div>
          </div>
        </div>

        <h3 class="section__subtitle">Departments</h3>
        <div class="departments">
          <div class="department-card">
            <img src="./../assets/friends-people-group-teamwork-diversity.webp" alt="Students collaborating" loading="lazy" />
            <h4 class="department-title">Department of Engineering</h4>
            <p>BSc in Electrical &amp; Electronic Engineering — 140</p>
            <p>BSc in Civil Engineering — 140</p>
            <p>BSc in Electronics &amp; Telecommunication Engineering — 140</p>
            <router-link to="/Departments" class="learn-more">Learn more &rarr;</router-link>
          </div>

          <div class="department-card">
            <img src="./../assets/career-day.webp" alt="Students at a career event" loading="lazy" />
            <h4 class="department-title">Department of Law</h4>
            <p>Bachelor of Law — 146 Credit Hours</p>
            <router-link to="/Departments" class="learn-more">Learn more &rarr;</router-link>
          </div>

          <div class="department-card">
            <img src="./../assets/young-student-learning-library.webp" alt="Business students studying" loading="lazy" />
            <h4 class="department-title">Department of Business</h4>
            <p>BBA — 123 Credits</p>
            <p>MBA (Regular) — 60 Credits</p>
            <p>EMBA (Executive) — 45 Credits</p>
            <router-link to="/Departments" class="learn-more">Learn more &rarr;</router-link>
          </div>

          <div class="department-card">
            <img src="./../assets/techathon.webp" alt="Students presenting a technology project" loading="lazy" />
            <h4 class="department-title">Department of Computing</h4>
            <p>BA in Computer Science — 120 Credits</p>
            <p>MA in Machine Learning — 36 Credits</p>
            <router-link to="/Departments" class="learn-more">Learn more &rarr;</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--lined">
      <div class="container" v-reveal>
        <h2 class="section__title">Campus life</h2>
        <p class="section__lead">
          Build a vibrant community of creative and accomplished people from around the world.
        </p>

        <div class="mediaGrid" aria-label="Campus life gallery">
          <img src="./../assets/full-shot-young-people-hostel.webp" alt="Students in a hostel" loading="lazy" />
          <img
            src="./../assets/side-view-female-friends-playing-basketball.webp"
            alt="Students playing basketball"
            loading="lazy"
          />
          <img src="./../assets/friends-people-group-teamwork-diversity.webp" alt="Students studying together" loading="lazy" />
          <img
            src="./../assets/students-paying-attention-class.webp"
            alt="Students paying attention in class"
            loading="lazy"
          />
          <img
            src="./../assets/multi-ethnic-group-graduates-smiling-with-success-generated-by-ai.webp"
            alt="Graduating students"
            loading="lazy"
          />
          <video
            class="mediaGrid__video"
            controls
            muted
            playsinline
            preload="metadata"
            aria-label="University library video"
          >
            <source src="./../assets/university-lib.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>

    <section class="section section--alt section--lined">
      <div class="container" v-reveal>
        <h2 class="section__title">Research</h2>
        <p class="section__lead">
          University of Africa is a vibrant research community with initiatives across diverse disciplines. We aim to make a
          significant impact locally and globally through research, innovation, and action.
        </p>

        <div class="research-data" aria-label="Research highlights">
          <div class="stat stat--large">
            <p class="stat__value">15+</p>
            <p class="stat__label">Case studies</p>
          </div>
          <div class="stat stat--large">
            <p class="stat__value">13+</p>
            <p class="stat__label">Publications</p>
          </div>
        </div>

        <v-btn to="/about" color="teal" class="more-btn">
          More About Research
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </section>

    <section class="section section--lined">
      <div class="container" v-reveal>
        <h2 class="section__title">Upcoming events</h2>
        <p class="section__lead">Explore opportunities to engage with people, ideas, art, and education across campus.</p>

        <div class="events" aria-label="Events">
          <div class="event-card">
            <img src="./../assets/career-day.webp" alt="Career advisors" loading="lazy" />
            <p class="event-card__title">Career day</p>
          </div>
          <div class="event-card">
            <img src="./../assets/culture-week.webp" alt="Students dressed in cultural attire" loading="lazy" />
            <p class="event-card__title">Cultural week</p>
          </div>
          <div class="event-card">
            <img src="./../assets/tech.webp" alt="Computer technology" loading="lazy" />
            <p class="event-card__title">Techathon</p>
          </div>
        </div>

        <v-btn color="teal" :to="{ path: '/about' }" class="more-btn">
          View More
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </section>

    <section class="section section--alt section--lined">
      <div class="container apply" v-reveal>
        <div class="apply__copy">
          <h2 class="section__title">Choose your right department</h2>
          <p class="section__lead">Offer extraordinary freedom to explore, collaborate, and challenge yourself.</p>
          <v-btn to="/Register" color="teal" class="more-btn">
            Apply Now
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <div class="apply__media">
          <img
            class="parallax"
            v-parallax="{ speed: 0.1, max: 18 }"
            src="./../assets/portrait-young-woman-with-laptop-hands-outside-school.webp"
            alt="A student with a laptop"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.landing {
  width: 100%;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 72px 0;
}

.section--lined {
  position: relative;
}

.section--lined::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: var(--color-border);
}

.section--alt {
  background: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.section__title {
  font-size: 36px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  color: var(--color-heading);
  position: relative;
  padding-left: 14px;
}

.section__title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.25em;
  bottom: 0.25em;
  width: 3px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--color-heading) 35%, transparent);
}

.section__subtitle {
  margin-top: 36px;
  font-size: 22px;
  color: var(--color-heading);
}

.section__lead {
  margin-top: 12px;
  max-width: 75ch;
  color: var(--color-text);
  opacity: 0.9;
}

.hero {
  min-height: 620px;
  width: 100%;
  color: white;
  background:
    linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.2)),
    url('./../assets/Uni-image.webp') no-repeat center/cover;
  display: flex;
  align-items: center;
}

.hero__content {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero__kicker {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 12px;
  opacity: 0.9;
}

.hero__title {
  margin-top: 14px;
  font-size: 56px;
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.hero__lead {
  margin-top: 16px;
  max-width: 70ch;
  font-size: 18px;
  opacity: 0.92;
}

.floatWords {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.floatWords__pill {
  display: inline-flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 13px;
  letter-spacing: 0.01em;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(6px);
  color: rgba(255, 255, 255, 0.92);
}

.hero__actions {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.more-btn--secondary {
  border-color: rgba(255, 255, 255, 0.75) !important;
  color: #ffffff !important;
}

.more-btn--secondary:hover {
  background: rgba(255, 255, 255, 0.14) !important;
}

.more-btn {
  margin-top: 20px;
}

.hero__stats {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  max-width: 720px;
}

.stat {
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(6px);
}

.stat__value {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.1;
}

.stat__label {
  margin-top: 4px;
  font-size: 13px;
  opacity: 0.9;
}

.stat--large {
  background: var(--color-background);
  border: 1px solid var(--color-border);
}

.stat--large .stat__value {
  color: var(--color-heading);
}

.cardGrid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.card {
  border-radius: 14px;
  overflow: hidden;
  background: var(--color-background);
  border: 1px solid var(--color-border);
}

.card img {
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;
}

.card__body {
  padding: 14px 14px 16px;
}

.card__title {
  font-weight: 700;
  color: var(--color-heading);
}

.card__meta {
  margin-top: 6px;
  font-size: 14px;
  opacity: 0.85;
}

.departments {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.department-card {
  background-color: var(--color-background);
  border-radius: 14px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.department-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

@media (prefers-reduced-motion: reduce) {
  .department-card,
  .event-card {
    transition: none;
  }
}

.department-card img {
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: var(--color-background-soft);
  display: block;
}

.department-title {
  font-size: 18px;
  margin: 14px 14px 6px;
  font-weight: 700;
  color: var(--color-heading);
}

.department-card p {
  margin: 6px 14px;
  font-size: 14px;
  opacity: 0.85;
}

.learn-more {
  display: inline-block;
  margin: 12px 14px 16px;
  font-size: 14px;
  color: var(--color-heading);
  text-decoration: none;
  font-weight: bold;
}

.learn-more:hover {
  text-decoration: underline;
}

.research-data {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.mediaGrid {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}

.mediaGrid img,
.mediaGrid video {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  display: block;
}

.events {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.event-card {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-background);
}

.event-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.event-card__title {
  padding: 12px 14px 14px;
  font-weight: 700;
  color: var(--color-heading);
}

.apply {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 24px;
}

.apply__media img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid var(--color-border);
  display: block;
}

@media (max-width: 768px) {
  .section {
    padding: 56px 0;
  }

  .hero {
    min-height: 520px;
  }

  .hero__title {
    font-size: 38px;
  }

  .hero__lead {
    font-size: 15px;
  }

  .hero__stats {
    grid-template-columns: 1fr;
    max-width: 420px;
  }

  .cardGrid {
    grid-template-columns: 1fr;
  }

  .departments {
    grid-template-columns: 1fr;
  }

  .mediaGrid {
    grid-template-columns: 1fr;
  }

  .mediaGrid img,
  .mediaGrid video {
    height: 240px;
  }

  .events {
    grid-template-columns: 1fr;
  }

  .apply {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>

