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
            <a href="#">View Details</a>
          </div>
        </div>

        <v-btn 
            color="black" 
            href="#"
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
.faculty p, h1{
  text-align: center;
}
.form-container{
    display: flex;
    gap: 10px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
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
}

.profiles div {
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    text-align: left; 
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
  width: 20%;
  display: flex;
  margin-left: 40%;
  margin-top: 80px;
  margin-bottom: 80px;

}

</style>
