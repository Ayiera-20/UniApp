<template>
  <v-footer class="footer" color="teal" theme="dark" elevation="10" rounded="t-xl">
    <div class="topGlow" aria-hidden="true"></div>

    <v-container class="footerTop">
      <v-row>
        <v-col cols="12" md="4">
          <p class="footerTitle">University of Africa</p>
          <p class="footerText">
            A modern learning community focused on excellent teaching, impactful research, and student success.
          </p>
          <p class="footerText footerSmall">Accredited • Research-led • Student-first</p>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <p class="footerTitle">Quick links</p>
          <div class="footerLinks">
            <v-btn to="/" variant="text" color="white" class="footerLink">Home</v-btn>
            <v-btn to="/about" variant="text" color="white" class="footerLink">About</v-btn>
            <v-btn to="/admissions" variant="text" color="white" class="footerLink">Admissions</v-btn>
            <v-btn to="/Departments" variant="text" color="white" class="footerLink">Departments</v-btn>
            <v-btn to="/Courses" variant="text" color="white" class="footerLink">Courses</v-btn>
            <v-btn to="/Faculty" variant="text" color="white" class="footerLink">Faculty</v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <p class="footerTitle">Resources</p>
          <div class="footerLinks">
            <v-btn to="/Login" variant="text" color="white" class="footerLink">Student portal</v-btn>
            <v-btn to="/admissions" variant="text" color="white" class="footerLink">Admissions</v-btn>
            <v-btn to="/Courses" variant="text" color="white" class="footerLink">Tuition & fees</v-btn>
            <v-btn to="/contact" variant="text" color="white" class="footerLink">Contact</v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <p class="footerTitle">Contact</p>
          <p class="footerText">Admissions Office, Main Campus</p>
          <p class="footerText">P.O. Box 00000 • Nairobi, Kenya</p>
          <p class="footerText">Email: admissions@uoa.example</p>
          <p class="footerText">Phone: +254 700 000 000</p>
          <p class="footerText footerSmall">Mon–Fri: 8:00–17:00</p>

          <div class="socialRow" aria-label="Social links">
            <v-btn v-for="icon in icons" :key="icon" :icon="icon" variant="text" size="small" color="white" />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="footerBottom">
      <v-container class="d-flex align-center justify-space-between flex-wrap">
        <p class="footerFine">© {{ new Date().getFullYear() }} University of Africa</p>
        <p class="footerFine">All rights reserved.</p>
      </v-container>
    </div>
  </v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    })
}
</script>

<style scoped>
.footer{
  width: 100%;
  padding: 0;
  position: relative;
}

.topGlow{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.25);
}

.footerTop{
  padding-top: 28px;
  padding-bottom: 28px;
}

.footerBottom{
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(0, 0, 0, 0.12);
  padding: 10px 0;
}

.footerTitle{
  margin: 0 0 10px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.95);
}

.footerText{
  margin: 0 0 8px;
  opacity: 0.92;
}

.footerSmall{
  font-size: 13px;
  opacity: 0.9;
}

.footerLinks{
  display: grid;
  gap: 4px;
  justify-items: start;
}

.footerLink{
  text-transform: none;
  justify-content: flex-start;
  padding-left: 0;
  padding-right: 0;
  min-height: 30px;
}

.socialRow{
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.footerFine{
  margin: 4px 0;
  font-size: 13px;
  opacity: 0.9;
}
</style>
