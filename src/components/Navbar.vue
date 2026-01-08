<template>
    <div>
        <v-app-bar color="teal">
          <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
  
          <!-- Desktop Navigation (Hidden on Small Screens) -->
          <div class="d-none d-md-flex navLinks">
            <v-btn to="/" color="white" dark> Home </v-btn>
            <v-btn to="/about" color="white" dark> About </v-btn>
            <v-btn to="/admissions" color="white" dark> Admissions </v-btn>
            <v-btn to="/Faculty" color="white" dark> Faculty </v-btn>
            <v-btn to="/Courses" color="white" dark> Courses </v-btn>
            <v-btn to="/Hostels" color="white" dark> Hostels </v-btn>
            <v-btn to="/Departments" color="white" dark> Departments </v-btn>
            <v-btn to="/Classroom" color="white" dark> Classroom </v-btn>
            <v-btn to="/contact" color="white" dark> Contact </v-btn>
            <v-btn to="/login" color="white" dark> Log In </v-btn>
            <v-btn to="/Register" color="white" dark> Register </v-btn>
          </div>
        </v-app-bar>
  
        <!-- Drawer for Mobile Navigation -->
        <v-navigation-drawer v-model="drawer" temporary>
          <v-list>
            <v-list-item to="/" @click="drawer = false">Home</v-list-item>
            <v-list-item to="/about" @click="drawer = false">About</v-list-item>
            <v-list-item to="/admissions" @click="drawer = false">Admissions</v-list-item>
            <v-list-item to="/Faculty" @click="drawer = false">Faculty</v-list-item>
            <v-list-item to="/Courses" @click="drawer = false">Courses</v-list-item>
            <v-list-item to="/Hostels" @click="drawer = false">Hostels</v-list-item>
            <v-list-item to="/Departments" @click="drawer = false">Departments</v-list-item>
            <v-list-item to="/Classroom" @click="drawer = false">Classroom</v-list-item>
            <v-list-item to="/contact" @click="drawer = false">Contact</v-list-item>
            <v-list-item to="/login" @click="drawer = false">Log In</v-list-item>
            <v-list-item to="/Register" @click="drawer = false">Register</v-list-item>
          </v-list>
        </v-navigation-drawer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false, 
      };
    },
  };
  </script>
  
<style>
.login{
    padding-left: 80px;
}

.navLinks{
  flex: 1 1 auto;
  justify-content: space-evenly;
  align-items: center;
}
</style>