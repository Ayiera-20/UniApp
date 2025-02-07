<script>
    export default {
        data() {
            return{
                hostels: [
                    {hostelname: 'Tausi',
                    building: 'River towers',                    
                    },
                    {hostelname: 'Nyuki',
                    building: 'Twin towers',                    
                    },
                    {hostelname: 'Serene',
                    building: 'Swam towers',                    
                    },
                    {hostelname: 'Stone',
                    building: 'Rock towers',                    
                    }                                        
                    ]
                }
                
              },
    }

</script>
<template>
    <div id = 'hostels'>
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
                                Hostels
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                             <v-table>
                                    <thead>
                                    <tr>
                                        <th class="text-left">Hostelname</th>
                                        <th class="text-left"> Building</th>                                        
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr
                                    v-for="hostel in hostels" :key="hostel.id"
                                    >
                                        <td>{{ hostel.hostelname }}</td>
                                        <td>{{ hostel.building }}</td>                                        
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

<style>
#hostels{
    background: url('./../assets/hostel.webp') no-repeat center center/cover;
    min-height: 100vh; 
    height: 100vh; 
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.7);
}
</style>