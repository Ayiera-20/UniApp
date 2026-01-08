<template>
    <div id='department' class="page">
        <v-container class="py-10 pageInner">
            <div class="header" v-reveal>
                <h1 class="title">Departments</h1>
                <p class="subtitle">Explore schools and contact information across the university.</p>
            </div>

            <v-layout column>
                <v-card class="mx-auto tableCard" rounded="lg" elevation="4" v-reveal>
                    <v-toolbar color="teal" theme="dark">
                        <v-toolbar-title class="text-h6">Departments</v-toolbar-title>
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
    </div>
</template>

<script>
    export default {
        data() {
            return{
                departments: [
                    {departmentname: 'School of Computing',
                    Headofdepartment: 'Joseph Sevilla',
                    DepartmentPhonenumber: 200837438,
                    NoOfLecturers: 20,                   
                    },
                    {departmentname: 'School of Law',
                    Headofdepartment: 'Lulu Adimu',
                    DepartmentPhonenumber: 788473878,
                    NoOfLecturers: 37,                   
                    },
                    {departmentname: 'School of Business',
                    Headofdepartment: 'Zoleka Amahle',
                    DepartmentPhonenumber: 658473878,
                    NoOfLecturers: 37,                   
                    },
                    {departmentname: 'School of Engineering',
                    Headofdepartment: 'John Odhiambo',
                    DepartmentPhonenumber: 2147483647,
                    NoOfLecturers: 30,                    
                    },
                    {departmentname: 'School of Health and Sciences',
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

<style scoped>
#department {
    width: 100%;
    min-height: 100vh;
    background: url('./../assets/hostel.webp') no-repeat center center/cover;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.72);
    padding: 28px 0 48px;
}

.pageInner{
    max-width: 1120px;
}

.header {
    text-align: center;
    max-width: 70ch;
    margin: 0 auto 18px;
    color: rgba(255, 255, 255, 0.92);
}

.title {
    font-size: 40px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: rgba(255, 255, 255, 0.96);
}

.subtitle {
    margin-top: 10px;
    opacity: 0.88;
}

.tableCard {
    width: 100%;
    max-width: 1100px;
    border-radius: 16px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.96);
}
</style>