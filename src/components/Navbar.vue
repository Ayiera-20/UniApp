<template>
    <div>
        <v-app-bar color="teal" >
            <v-app-bar-title>University of Africa</v-app-bar-title>


            <div>
                <v-btn to ="/" color="white" dark> Home </v-btn>
            </div>
            <div>
                <v-btn to="/about" color="white" dark>About </v-btn>
            </div>   
            <div>
                <v-btn to="/Faculty" color="white" dark> Faculty</v-btn>
            </div>
             <div>
                <v-btn to="/Courses" color="white" dark> Courses </v-btn>
            </div>
             <div>
                <v-btn to="/Hostels" color="white" dark> Hostels </v-btn>
            </div>
            <div>
                <v-btn to="/Departments" color="white" dark> Departments </v-btn>
            </div>
             <div>
                <v-btn to="/Classroom" color="white" dark> Classroom </v-btn>
            </div>
            <div class="login">
                <v-btn to="/login" color="white" dark> Log In </v-btn>
            </div>
            <div>
                <v-btn to="/Register" color="white" dark> Register </v-btn>
            </div>         
            
            
        </v-app-bar>
    </div>
</template>

<script></script>
<style>
.login{
    padding-left: 80px;
}
</style>