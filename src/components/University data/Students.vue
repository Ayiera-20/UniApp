<script>
    export default {
        data() {
            return{
                students: [
                    {firstname: 'John',
                    lastname: 'Richard',
                    gender: 'Male',
                    email: 'jrichard@gmail.com',
                    phone: '254733894545'
                    },
                    {firstname: 'Mary',
                    lastname: 'Jane',
                    gender: 'Female',
                    email: 'Mjane@gmail.com',
                    phone: '254722894045'
                    },
                    {firstname: 'Will',
                    lastname: 'Smith',
                    gender: 'Male',
                    email: 'Wsmith@gmail.com',
                    phone: '254700804545'
                    },
                    {firstname: 'Angela',
                    lastname: 'Davis',
                    gender: 'Female',
                    email: 'Adavis@gmail.com',
                    phone: '254711800525'
                    }
                    ]
                }
                
              },
    }

</script>
<template>
    <div id = 'students'>
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
                                Students
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Firstname</th>
                                        <th class="text-left"> Lastname</th>
                                        <th class="text-left"> Gender</th>
                                        <th class="text-left"> Email</th>
                                        <th class="text-left"> Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                    v-for="student in students" :key="student.id"
                                    >
                                        <td>{{ student.firstname }}</td>
                                        <td>{{ student.lastname }}</td>
                                        <td>{{ student.gender}}</td>
                                        <td>{{ student.email }}</td>
                                        <td>{{ student.phone }}</td>
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