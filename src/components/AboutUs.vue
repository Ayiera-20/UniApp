<template>
  <div class="services-section">
    <div class="bg-image" v-reveal>
    <h1>About Us</h1> 
  </div>
    <v-container class="cards-container" v-reveal>
    <v-row>
        <v-col cols="12" md="4">
          <v-card class="pa-3 card" elevation="10" rounded="lg">
          <v-card-title class="headline">Our Mission</v-card-title>
          <v-card-text>
            <p>
              The University of Africa is a leading institution of higher learning dedicated to academic excellence, innovation, and community impact.
              Established with a commitment to providing quality education, the university offers a diverse range of programs designed to empower students to achieve their academic and professional goals.
            </p>
          </v-card-text>
        </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-3 black-card card" elevation="10" rounded="lg">
          <v-card-title class="headline">Community Impact</v-card-title>
          <v-card-text>
            <p>
              Our commitment to excellence extends beyond the classroom. We actively engage with the community through various outreach programs and initiatives, making a positive impact on society.
              Through research and innovation, we strive to address the challenges facing our world and contribute to its sustainable development.
            </p>
          </v-card-text>
        </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="pa-3 beige-card card" elevation="10" rounded="lg">
          <v-card-title class="headline">Our Goal</v-card-title>
          <v-card-text>
            <p>
              As a university rooted in values of integrity, diversity, and inclusivity, we welcome students from all backgrounds and cultures. Whether you are seeking to further your education or enhance your career prospects, the University of Africa is committed to helping you achieve your dreams and make a difference in the world.
            </p>
          </v-card-text>
        </v-card>
        </v-col>
    </v-row>
  </v-container>

  </div>
  
</template>

<script>
export default {

};
</script>

<style scoped>
.beige-card{
  background-color: rgba(247,237,225,255);
}
.black-card{
  background-color: black;
  color: white;
}

.bg-image{
  background: url('./../assets/Uni-image.webp') no-repeat center center/cover;
  min-height: 10vh; 
  height: 50vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  background-blend-mode: overlay;
  background-color: rgba(0, 0, 0, 0.5);
}

.cards-container {
  position: relative;
  margin-top: -100px; 
  z-index: 2;
  
}

.services-section{
  position: relative;
  padding-bottom: 20px;
}

h1{
  color: white;
}

.card{
  transition: transform 0.3s ease;
  overflow: hidden;

}
.card:hover{
  transform: translateY(-10px);
}
</style>
