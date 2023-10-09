<script>
    export default {
        data() {
            return{
                lecturers: [
                    {firstname: 'Haile',
                    lastname: 'Selassie',
                    gender: 'Male',
                    email: 'Selassie@gmail.com',
                    phone: '254733894545'
                    },
                    {firstname: 'Nkwame',
                    lastname: 'Nkurumah',
                    gender: 'Male',
                    email: 'Nkurumah@gmail.com',
                    phone: '254722894045'
                    },
                    {firstname: 'Julius',
                    lastname: 'Nyerere',
                    gender: 'Male',
                    email: 'Nyerere@gmail.com',
                    phone: '254700804545'
                    },
                    {firstname: 'Nelson',
                    lastname: 'Mandela',
                    gender: 'Male',
                    email: 'Mandela@gmail.com',
                    phone: '254711800525'
                    },
                    {firstname: 'Tom',
                    lastname: 'Mboya',
                    gender: 'Male',
                    email: 'Mboya@gmail.com',
                    phone: '254711800525'
                    },
                    {firstname: 'Dedan',
                    lastname: 'Kimathi',
                    gender: 'Male',
                    email: 'Kimathi@gmail.com',
                    phone: '254711800525'
                    }
                    ]
                }
                
              },
    }

</script>
<template>
    <div id = 'lecturers'>
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
                                Lecturers
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
                                    v-for="lecturer in lecturers" :key="lecturer.id"
                                    >
                                        <td>{{ lecturer.firstname }}</td>
                                        <td>{{ lecturer.lastname }}</td>
                                        <td>{{ lecturer.gender}}</td>
                                        <td>{{ lecturer.email }}</td>
                                        <td>{{ lecturer.phone }}</td>
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