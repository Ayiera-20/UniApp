<template>
    <div id="classroom" class="page">
        <v-container class="pageInner">
            <header class="pageHeader" v-reveal>
                <p class="kicker">Learning spaces</p>
                <h1 class="title">Classrooms</h1>
                <p class="subtitle">Sample list of lecture halls and buildings used across faculties.</p>
            </header>

            <v-card class="contentCard" elevation="10" v-reveal>
                <v-toolbar color="teal" theme="dark">
                    <v-toolbar-title class="text-h6">Rooms & buildings</v-toolbar-title>
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">Class name</th>
                                <th class="text-left">Building</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="room in classroom" :key="room.classname">
                                <td>{{ room.classname }}</td>
                                <td>{{ room.Building }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-card>
        </v-container>
    </div>
     
</template>

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

<style scoped>
.page{
    background: url('./../assets/class.jpg') no-repeat center center/cover;
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