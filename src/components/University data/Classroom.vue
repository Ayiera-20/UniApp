<script>
    export default {
        data() {
            return{
                classroom: [
                    {classname: 'Ericsson',
                     Building: 'STC',                
                    },
                    {classname: 'Safari',
                     Building: 'STC',                
                    },
                    {classname: 'Turban',
                     Building: 'Business School',                
                    },
                    {classname: 'Highly',
                     Building: 'School of computing',                
                    },     
                    {classname: 'Lowkey',
                     Building: 'Law School',                
                    },
                    {classname: 'Urban',
                     Building: 'School of Hospitality',                
                    },             
                    
                    ]
                }
                
              },
    }

</script>
<template>
    <div id = 'classroom'>
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
                               Classroom
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Class name</th>
                                        <th class="text-left"> Building</th>                                       
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                    v-for="classroom in classroom" :key="classroom.id"
                                    >
                                        <td>{{ classroom.classname }}</td>
                                        <td>{{ classroom.Building}}</td>                                        
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