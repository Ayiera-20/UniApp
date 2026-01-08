<template>
  <div class="page">
    <v-container class="py-10">
      <div class="header" v-reveal>
        <h1 class="title">Faculty</h1>
        <p class="subtitle">Search faculty profiles by name or department.</p>
      </div>

      <v-card class="filters" rounded="lg" elevation="4" v-reveal>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="7">
              <v-text-field
                v-model="searchKeyword"
                label="Search"
                placeholder="Keyword in name or title"
                variant="outlined"
                color="teal"
                hide-details
                clearable
              />
            </v-col>
            <v-col cols="12" md="5">
              <v-select
                v-model="selectedDepartment"
                :items="departments"
                label="Department"
                variant="outlined"
                color="teal"
                hide-details
                clearable
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-row class="mt-6" dense v-reveal>
        <v-col v-for="profile in filteredProfiles" :key="profile.name" cols="12" sm="6" md="4">
          <v-card class="profileCard" rounded="lg" elevation="4">
            <img :src="profile.photo" :alt="`${profile.name} profile photo`" class="profilePhoto" loading="lazy" />
            <v-card-text>
              <p class="profileName">{{ profile.name }}</p>
              <p class="profileTitle">{{ profile.title }}</p>
              <router-link to="/Faculty" class="detailsLink">View Details &rarr;</router-link>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="cta" v-reveal>
        <v-btn to="/Faculty" color="teal" class="view-more-btn">
          View More
          <v-icon right>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>


<script>
import prof9 from '@/assets/prof9.jpg';
import prof3 from '@/assets/prof3.jpg';
import prof6 from '@/assets/prof6.jpg';
import prof7 from '@/assets/prof7.jpg';
import prof10 from '@/assets/prof10.jpg';
import prof4 from '@/assets/prof4.jpg';
export default {
  data() {
    return {
      searchKeyword: '',
      selectedDepartment: '',
      departments: [
        'School of Computing',
        'School of Law',
        'School of Business',
        'School of Health & Sciences',
        'School of Engineering',
        'School of Hospitality',
      ],
      profiles: [
      {
          name: "Zuri Dlamini",
          title: "Senior Professor(School of Law)",
          photo: new URL('@/assets/prof9.webp', import.meta.url).href,
        },
        {
          name: "John Doe",
          title: "Assistant Professor(School of Health & Sciences)",
          photo: new URL('@/assets/prof3.webp', import.meta.url).href,
        },

        {
          name: "Maria Perez",
          title: "Senior Professor(School of Business)",
          photo: new URL('@/assets/prof6.webp', import.meta.url).href,
        },
        {
          name: "Isabella Renata",
          title: "Assistant Professor(School of Hospitality)",
          photo: new URL('@/assets/prof7.webp', import.meta.url).href,
        },
        {
          name: "Zendaya Akosua",
          title: "Senior Professor(School of Engineering)",
          photo: new URL('@/assets/prof10.webp', import.meta.url).href,
        },
        {
          name: "Jabari Amadika",
          title: "Assistant Professor(School of Computing)",
          photo: new URL('@/assets/prof4.webp', import.meta.url).href,
        },
      ],

    };
  },
  computed: {
    filteredProfiles() {
      return this.profiles.filter((profile) => {
        const matchesKeyword = profile.name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
                               profile.title.toLowerCase().includes(this.searchKeyword.toLowerCase());
        const matchesDepartment =
          !this.selectedDepartment || profile.title.includes(this.selectedDepartment);

        return matchesKeyword && matchesDepartment;
      });
    },
  },
};
</script>


<style scoped>
.page {
  width: 100%;
}

.header {
  text-align: center;
  max-width: 70ch;
  margin: 0 auto;
}

.title {
  font-size: 40px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-heading);
}

.subtitle {
  margin-top: 10px;
  opacity: 0.9;
}

.filters {
  margin-top: 22px;
}

.profileCard {
  overflow: hidden;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.profileCard:hover {
  transform: translateY(-6px);
}

.profilePhoto {
  width: 100%;
  height: 240px;
  object-fit: contain;
  background: var(--color-background-soft);
  display: block;
}

.profileName {
  font-weight: 700;
  color: var(--color-heading);
}

.profileTitle {
  margin-top: 4px;
  opacity: 0.8;
}

.detailsLink {
  display: inline-block;
  margin-top: 10px;
  color: var(--color-heading);
  font-weight: 600;
}

.cta {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}

@media (prefers-reduced-motion: reduce) {
  .profileCard {
    transition: none;
  }
}
</style>
