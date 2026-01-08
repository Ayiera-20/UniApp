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
    <div id="students" class="page">
        <v-container class="pageInner">
            <header class="pageHeader" v-reveal>
                <p class="kicker">Student records</p>
                <h1 class="title">Students</h1>
                <p class="subtitle">A quick directory view for demo purposes (names, contacts, and basic demographics).</p>
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
                            <tr v-for="student in students" :key="student.email">
                                <td>{{ student.firstname }}</td>
                                <td>{{ student.lastname }}</td>
                                <td>{{ student.gender }}</td>
                                <td>{{ student.email }}</td>
                                <td>{{ student.phone }}</td>
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