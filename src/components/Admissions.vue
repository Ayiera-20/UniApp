<template>
  <div class="page">
    <v-container class="pageInner py-10">
      <header class="pageHeader" v-reveal>
        <p class="kicker">Join University of Africa</p>
        <h1 class="title">Admissions</h1>
        <p class="subtitle">
          Clear steps, realistic timelines, and the support you need to submit a strong application.
        </p>
      </header>

      <v-row class="mt-4" dense>
        <v-col cols="12" md="7">
          <v-card class="card" rounded="lg" elevation="8" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">How to apply</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-timeline density="compact" align="start">
                <v-timeline-item dot-color="teal" size="small">
                  <strong>Create your account</strong>
                  <div class="muted">Register and verify your email address.</div>
                </v-timeline-item>
                <v-timeline-item dot-color="teal" size="small">
                  <strong>Choose a program</strong>
                  <div class="muted">Pick a department and confirm entry requirements.</div>
                </v-timeline-item>
                <v-timeline-item dot-color="teal" size="small">
                  <strong>Upload documents</strong>
                  <div class="muted">Transcripts, identification, and supporting materials.</div>
                </v-timeline-item>
                <v-timeline-item dot-color="teal" size="small">
                  <strong>Pay application fee</strong>
                  <div class="muted">Secure payment with a receipt for your records.</div>
                </v-timeline-item>
                <v-timeline-item dot-color="teal" size="small">
                  <strong>Review & submit</strong>
                  <div class="muted">Double-check details, then submit before the deadline.</div>
                </v-timeline-item>
              </v-timeline>

              <div class="ctaRow">
                <v-btn to="/Register" color="teal">Start application</v-btn>
                <v-btn to="/Departments" variant="outlined" color="teal">Explore departments</v-btn>
              </div>
            </v-card-text>
          </v-card>

          <v-card class="card mt-4" rounded="lg" elevation="6" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">Required documents</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row dense>
                <v-col cols="12" sm="6">
                  <v-list density="compact">
                    <v-list-item title="Academic transcripts" subtitle="Certified copies or official results" />
                    <v-list-item title="National ID / Passport" subtitle="Valid identification document" />
                    <v-list-item title="Passport photo" subtitle="Recent headshot (clear background)" />
                  </v-list>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-list density="compact">
                    <v-list-item title="Recommendation letter" subtitle="For graduate programs (where applicable)" />
                    <v-list-item title="Personal statement" subtitle="Motivation, goals, and program fit" />
                    <v-list-item title="CV / Resume" subtitle="For postgraduate applicants" />
                  </v-list>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <v-card class="card" rounded="lg" elevation="8" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">Intake dates</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-alert type="info" variant="tonal" color="teal" class="mb-4">
                Dates below are sample timelines for this demo project.
              </v-alert>

              <v-table density="comfortable">
                <thead>
                  <tr>
                    <th class="text-left">Intake</th>
                    <th class="text-left">Application window</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>January</td>
                    <td>Oct 1 – Dec 10</td>
                  </tr>
                  <tr>
                    <td>May</td>
                    <td>Feb 1 – Apr 5</td>
                  </tr>
                  <tr>
                    <td>September</td>
                    <td>Jun 1 – Aug 10</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </v-card>

          <v-card class="card mt-4" rounded="lg" elevation="8" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">Tuition & scholarships</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <p class="muted">
                Fees depend on program and level. Scholarships are merit- and need-based.
              </p>
              <v-list density="compact">
                <v-list-item title="Merit scholarship" subtitle="Top-performing applicants across faculties" />
                <v-list-item title="STEM scholarship" subtitle="Support for computing and engineering tracks" />
                <v-list-item title="Community impact" subtitle="For applicants with leadership and service" />
              </v-list>
              <v-btn to="/contact" class="mt-2" color="teal" variant="outlined">Ask about funding</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-card class="card mt-6" rounded="lg" elevation="6" v-reveal>
        <v-toolbar color="teal" theme="dark">
          <v-toolbar-title class="text-h6">FAQs</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-expansion-panels variant="accordion">
            <v-expansion-panel title="Do you offer online programs?">
              <v-expansion-panel-text>
                Yes — selected programs offer flexible learning options. Check the program page for delivery mode.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel title="Can I apply to more than one program?">
              <v-expansion-panel-text>
                You can select one primary program and one alternative option during application.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel title="How long does review take?">
              <v-expansion-panel-text>
                Typical review time is 7–14 business days after all documents are received.
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.page{
  padding: 16px 0 48px;
  background: linear-gradient(180deg, rgba(0, 128, 128, 0.06), rgba(0, 0, 0, 0));
}

.pageInner{
  max-width: 1120px;
}

.pageHeader{
  text-align: center;
  max-width: 75ch;
  margin: 0 auto;
}

.kicker{
  margin: 0;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  opacity: 0.8;
}

.title{
  margin: 6px 0 8px;
  font-size: clamp(1.9rem, 3.3vw, 2.8rem);
  line-height: 1.1;
}

.subtitle{
  margin: 0;
  opacity: 0.85;
}

.card{
  border-radius: 16px;
  overflow: hidden;
}

.muted{
  opacity: 0.85;
}

.ctaRow{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}
</style>
