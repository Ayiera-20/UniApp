<script>
    export default {
        data() {
            return{
                departments: [
                    {departmentname: 'iLabAfrica',
                    Headofdepartment: 'Joseph Sevilla',
                    DepartmentPhonenumber: 200837438,
                    NoOfLecturers: 20,                   
                    },
                    {departmentname: 'Business School',
                    Headofdepartment: 'George Njenga',
                    DepartmentPhonenumber: 658473878,
                    NoOfLecturers: 37,                   
                    },
                    {departmentname: 'Law School',
                    Headofdepartment: 'John Odhiambo',
                    DepartmentPhonenumber: 2147483647,
                    NoOfLecturers: 30,                    
                    },
                    {departmentname: 'School of computing',
                    Headofdepartment: 'Ciesly Luthando',
                    DepartmentPhonenumber: 874363678,
                    NoOfLecturers: 25,                    
                    },
                    {departmentname: 'School of Hospitality',
                    Headofdepartment: 'Maria Perez',
                    DepartmentPhonenumber: 2147483647,
                    NoOfLecturers: 23,                    
                    },                    
                    ]
                }
                
              },
    }

</script>
<template>
    <div id = 'department'>
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
                                Departments
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Department name</th>
                                        <th class="text-left"> Head of department</th>
                                        <th class="text-left"> Department Phonenumber</th>
                                        <th class="text-left"> No Of Lecturers</th>                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                    v-for="department in departments" :key="department.id"
                                    >
                                        <td>{{ department.departmentname }}</td>
                                        <td>{{ department.Headofdepartment}}</td>
                                        <td>{{ department.DepartmentPhonenumber}}</td>
                                        <td>{{ department.NoOfLecturers }}</td>                                       
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