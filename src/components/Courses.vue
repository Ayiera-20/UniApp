<!-- <script>
import { computed } from '@vue/reactivity'; 
import axios from 'axios';
import NewCourse from './NewCourse.vue';
import router from '../routes';
    export default {
        name: 'CoursesPage',
        data() {
            return{
                Courses: [
                    // {id: 1,
                    // Coursename: 'Fullstack',
                    // Department: 'ilabAfrica',  
                    // Amount: 50000, 
                    // Actions: '',                  
                    // },
                    // {id: 2,
                    // Coursename: 'Security',
                    // Department: 'ilabAfrica', 
                    // Amount: 50000, 
                    // Actions: '', 
                    // },
                    // {id: 3,
                    // Coursename: 'ACCA',
                    // Department: 'Business School',    
                    // Amount: 50000,   
                    // Actions: '',               
                    // },
                    // {id: 4,
                    // Coursename: 'law',
                    // Department: 'Law School',      
                    // Amount: 50000,    
                    // Actions: '',          
                    // },
                    // {id: 5,
                    // Coursename: 'Machine Learning',
                    // Department: 'ilabAfrica',
                    // Amount: 50000, 
                    // Actions: '', 
                    // },
                    // {id: 6,
                    // Coursename: 'Computer Science',
                    // Department: 'School of computing',  
                    // Amount: 50000, 
                    // Actions: '', 
                    // },
                    // {id: 7,
                    // Coursename: 'Hospitality',
                    // Department: 'School of hospitality',
                    // Amount: 50000, 
                    // Actions: '', 
                    // }  
                    ]
                }
               
                
              },
        
    },
</script> -->


<script>
import { computed } from '@vue/reactivity'; 
import axios from 'axios';
import NewCourse from './NewCourse.vue';
import router from '../routes';

export default {
  name: 'CoursesPage',
  data() {
    return {
      Courses: []
    };
  },
  methods: {
    async getCourses() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/get-courses");
        this.Courses = response.data;
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    },
    NewCourse() {
      router.push('NewCourse');
    },
    async updateCourse(id) {
        router.push('/updateCourse', ('id:id)'))
    },
    async deleteCourse($id) {
      try {
        // Add logic to delete course with the given ID
        await axios.delete(`http://127.0.0.1:8000/api/delete-course/${$id}`);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    },
    async updateCourse($id) {
      try {
        // Add logic to update course with the given ID
        await axios.put(`http://127.0.0.1:8000/api/update-course/${$id}`, updatedData);
      } catch (error) {
        console.error("Error updating course:", error);
      }
    },
  },
  mounted() {
    this.getCourses();
  },
};
</script>

<template>
    <div id = 'courses'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                        class="mx-auto"
                    >
                    <v-toolbar
                            color="teal"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                Courses
                            </v-toolbar-title>

                            <v-divider class="mx-4" insert vertical></v-divider>
                            <v-spacer>
                                <v-btn color="black" class="mb-2 fs-6 float-end bg-light" style="margin-right: 4px;" @click="NewCourse()">New Course</v-btn>
                            </v-spacer>

                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left"> id</th>  
                                        <th class="text-left">Coursename</th>
                                        <!-- <th class="text-left"> Department</th>      -->
                                        <th class="text-left"> Amount</th>   
                                        <th class="text-center"> Actions</th>                                    
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                    v-for="course in Courses" :key="course.id"
                                    >
                                        <td>{{ course.id}}</td>
                                        <td>{{ course.name}}</td>
                                        <!-- <td>{{ course.Department }}</td>   -->
                                        <td>{{ course.amount}}</td>      
                                        <td> 
                                        
                                        <button class="btn btn-warning" @click="updateCourse (course.id)">Update</button> 
                                        &nbsp
                                        <button class="btn btn-danger" @click="deleteCourse(course.id)">Delete</button>
                                    </td>
                                    </tr>
                                    </tbody>
                                </v-table>
                            
                            </v-container>
                
                        <v-divider></v-divider>
                    </v-card>
                    </v-layout>
             </v-container>
        </v-container>
        </div>



                
</template>