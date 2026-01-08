<template>
  <div class="page">
    <v-container class="pageInner py-10">
      <header class="pageHeader" v-reveal>
        <p class="kicker">We’re here to help</p>
        <h1 class="title">Contact</h1>
        <p class="subtitle">Questions about programs, admissions, or campus life? Send a message and we’ll respond.</p>
      </header>

      <v-row class="mt-6" dense>
        <v-col cols="12" md="5">
          <v-card class="card" rounded="lg" elevation="8" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">Contact details</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-list density="comfortable">
                <v-list-item title="Admissions Office">
                  <template #prepend><v-icon color="teal">mdi-school</v-icon></template>
                  <template #subtitle>Main Campus, Administration Block</template>
                </v-list-item>
                <v-list-item title="Email">
                  <template #prepend><v-icon color="teal">mdi-email</v-icon></template>
                  <template #subtitle>admissions@uoa.example</template>
                </v-list-item>
                <v-list-item title="Phone">
                  <template #prepend><v-icon color="teal">mdi-phone</v-icon></template>
                  <template #subtitle>+254 700 000 000</template>
                </v-list-item>
                <v-list-item title="Office hours">
                  <template #prepend><v-icon color="teal">mdi-clock</v-icon></template>
                  <template #subtitle>Mon–Fri, 8:00–17:00</template>
                </v-list-item>
              </v-list>

              <v-alert type="info" variant="tonal" color="teal" class="mt-3">
                This form is a demo (no backend connected). It’s here to show UI/UX and component skills.
              </v-alert>
            </v-card-text>
          </v-card>

          <v-card class="card mt-4" rounded="lg" elevation="6" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">FAQs</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-expansion-panels variant="accordion">
                <v-expansion-panel title="How soon will I get a response?">
                  <v-expansion-panel-text>Typically within 1–2 business days.</v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel title="Can I schedule a campus tour?">
                  <v-expansion-panel-text>Yes. Send a message with preferred dates and we’ll confirm availability.</v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="7">
          <v-card class="card" rounded="lg" elevation="8" v-reveal>
            <v-toolbar color="teal" theme="dark">
              <v-toolbar-title class="text-h6">Send a message</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit.prevent="submit">
                <v-row dense>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="form.name" label="Full name" variant="outlined" color="teal" required />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="form.email" label="Email" type="email" variant="outlined" color="teal" required />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="form.phone" label="Phone (optional)" variant="outlined" color="teal" />
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="form.topic"
                      :items="topics"
                      label="Topic"
                      variant="outlined"
                      color="teal"
                      required
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="form.message"
                      label="Message"
                      variant="outlined"
                      color="teal"
                      rows="6"
                      auto-grow
                      required
                    />
                  </v-col>
                </v-row>

                <div class="actions">
                  <v-btn color="teal" type="submit">Send</v-btn>
                  <v-btn variant="outlined" color="teal" @click="reset">Reset</v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-snackbar v-model="snackbar" color="teal" timeout="2600">
        Message sent (demo). We’ll get back to you soon.
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: ['Admissions', 'Programs', 'Fees & Scholarships', 'Campus life', 'Other'],
      snackbar: false,
      form: {
        name: '',
        email: '',
        phone: '',
        topic: 'Admissions',
        message: '',
      },
    }
  },
  methods: {
    submit() {
      this.snackbar = true
      this.reset()
    },
    reset() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        topic: 'Admissions',
        message: '',
      }
    },
  },
}
</script>

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

.actions{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
</style>
