<script>
    export default {
        data() {
            return{
                Courses: [
                    {Coursename: 'Fullstack',
                    Department: 'ilabAfrica',                    
                    },
                    {Coursename: 'Security',
                    Department: 'ilabAfrica', 
                    },
                    {Coursename: 'ACCA',
                    Department: 'Business School',                    
                    },
                    {Coursename: 'law',
                    Department: 'Law School',                  
                    },
                    {Coursename: 'Machine Learning',
                    Department: 'ilabAfrica'
                    },
                    {Coursename: 'Computer Science',
                    Department: 'School of computing',  
                    },
                    {Coursename: 'Hospitality',
                    Department: 'School of hospitality',
                    }  
                    ]
                }
                
              },
    }

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
                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Coursename</th>
                                        <th class="text-left"> Department</th>                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                    v-for="course in Courses" :key="course.id"
                                    >
                                        <td>{{ course.Coursename}}</td>
                                        <td>{{ course.Department }}</td>                                       
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