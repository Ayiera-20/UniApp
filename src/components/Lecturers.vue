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
    <div id="lecturers" class="page">
        <v-container class="pageInner">
            <header class="pageHeader" v-reveal>
                <p class="kicker">Academic staff</p>
                <h1 class="title">Lecturers</h1>
                <p class="subtitle">A sample directory of instructors across schools and departments.</p>
            </header>

            <v-card class="contentCard" elevation="6" v-reveal>
                <v-toolbar color="teal" theme="dark">
                    <v-toolbar-title class="text-h6">Directory</v-toolbar-title>
                </v-toolbar>
                <v-container>
                    <v-table>
                        <thead>
                            <tr>
                                <th class="text-left">First name</th>
                                <th class="text-left">Last name</th>
                                <th class="text-left">Gender</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="lecturer in lecturers" :key="lecturer.email">
                                <td>{{ lecturer.firstname }}</td>
                                <td>{{ lecturer.lastname }}</td>
                                <td>{{ lecturer.gender }}</td>
                                <td>{{ lecturer.email }}</td>
                                <td>{{ lecturer.phone }}</td>
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
    padding: 28px 0 48px;
    background: linear-gradient(180deg, rgba(0, 128, 128, 0.06), rgba(0, 0, 0, 0));
}

.pageInner{
    max-width: 1120px;
}

.pageHeader{
    padding: 8px 0 18px;
}

.kicker{
    margin: 0;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.8rem;
    opacity: 0.8;
}

.title{
    margin: 6px 0 8px;
    font-size: clamp(1.8rem, 3.2vw, 2.6rem);
    line-height: 1.1;
}

.subtitle{
    margin: 0;
    max-width: 75ch;
    opacity: 0.85;
}

.contentCard{
    border-radius: 16px;
    overflow: hidden;
}
</style>