<template>
    <div class="faculty">
        <h1>Faculty Profile</h1>
        <p>Explore opportunities to engage with people, ideas, art, and education across campus.</p>
        <form class="form-container" @submit.prevent>
            <input type="text" placeholder="Keyword in name, title etc" v-model="searchKeyword"/>
            <select v-model="selectedDepartment">
                <option value="" disabled selected>Select department</option>
                <option value="all">Select all</option>
                <option value="School of Computing">School of Computing</option>
                <option value="School of Law">School of Law</option>
                <option value="School of Buisnesss">School of Buisnesss</option>
                <option value="School of Health & Sciences">School of Health & Sciences</option>
                <option value="School of Engineering">School of Engineering</option>
                <option value="School of Hospitality">Hospitality</option>
            </select>
        </form>

        <div class="profiles">
          <div v-for="profile in filteredProfiles" :key="profile.name">
            <img :src="profile.photo" alt="faculty profile photo" class="photo" />
            <p class="p-text1">{{ profile.name }}</p>
            <p class="p-text">{{ profile.title }}</p>
            <router-link to="/Faculty">View Details &rarr;</router-link>
          </div>
        </div>

        <v-btn to="/Faculty"
            color="black" 
            class="view-more-btn">
                View More
                <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>

       
        
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
          this.selectedDepartment === 'all' ||
          !this.selectedDepartment ||
          profile.title.includes(this.selectedDepartment);

        return matchesKeyword && matchesDepartment;
      });
    },
  },
};
</script>


<style>
.faculty{
  justify-content: center;
  display: grid;
}
.faculty h1{
  padding-top: 60px;

}
.faculty p, h1{
  text-align: center;
}
.faculty p{
  padding: 6px;
}

.form-container{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
}
.form-container input,
.form-container select,
.form-container button{
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 12px;
}

.form-container button {
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
    }
    .form-container button:hover {
      background-color: darkred;
    }

.photo{
  max-width: 200px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.profiles{
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 20px;
    margin-top: 50px;
    padding-bottom: 40px;
}

.profiles div {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: left; 
}

.profiles a{
  color: teal;
  padding-bottom: 25px;
}

.p-text{
  color: gray;
  padding-left: 10%;
}

.p-text1{
  font-weight: bold;
  text-align: left;
  padding-top: 20px;

}

.view-more-btn{
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 100px;

}

@media (max-width: 900px){
  .profiles{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  }

  @media (max-width: 768px) {
    .faculty p{
      text-align: center;
      max-width: 600px;
      justify-content: center;
      margin: 0 auto; 

    }
  }

}

</style>
