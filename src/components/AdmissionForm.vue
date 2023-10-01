<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="student.name" label="Full Name" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field v-model="student.age" label="Age" required></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field v-model="student.gender" label="Gender" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="student.email" label="Email" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-select
            v-model="student.course"
            :items="courseOptions"
            label="Select Course"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn type="submit" color="primary">Submit</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: '',
        age: '',
        gender: '',
        email: '',
        course: '',
      },
      courseOptions: ['Computer Science', 'Physics', 'Mathematics', 'Biology'],
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form Submitted', this.student);
    },
  },
};
</script>
<style scoped>
/* Your component styles go here */
</style>
