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
    <div id="hostels" class="page">
        <v-container class="pageInner">
            <header class="pageHeader" v-reveal>
                <p class="kicker">Campus living</p>
                <h1 class="title">Hostels</h1>
                <p class="subtitle">Safe, convenient accommodation options near academic buildings and student services.</p>
            </header>

            <v-card class="contentCard" elevation="10" v-reveal>
                <v-toolbar color="teal" theme="dark">
                    <v-toolbar-title class="text-h6">Available hostels</v-toolbar-title>
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">Hostel name</th>
                                <th class="text-left">Building</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="hostel in hostels" :key="hostel.hostelname">
                                <td>{{ hostel.hostelname }}</td>
                                <td>{{ hostel.building }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>

<style scoped>
.page{
    background: url('./../assets/hostel.webp') no-repeat center center/cover;
    min-height: 100vh;
    background-blend-mode: overlay;
    background-color: rgba(0, 0, 0, 0.72);
    padding: 28px 0 48px;
}

.pageInner{
    max-width: 1120px;
}

.pageHeader{
    color: rgba(255, 255, 255, 0.92);
    padding: 12px 0 18px;
}

.kicker{
    margin: 0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    opacity: 0.9;
}

.title{
    margin: 6px 0 8px;
    font-size: clamp(1.8rem, 3.2vw, 2.6rem);
    line-height: 1.1;
}

.subtitle{
    margin: 0;
    max-width: 70ch;
    opacity: 0.88;
}

.contentCard{
    border-radius: 16px;
    overflow: hidden;
    backdrop-filter: blur(8px);
    background: rgba(255, 255, 255, 0.96);
}
</style>