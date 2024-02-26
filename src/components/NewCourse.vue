<!-- <script>
import axios from 'axios'
    export default {
        name:NewCourse,
        data: () {
            name: '',
            amount: ''
            

        }
        // => ({
        //     // first: null,
        //     // last: null,
        //     // email: null,
        //     // password: null,
        //     // phone: null,
        //     // terms: false,
        // }),
    }

</script> -->
<script>
import axios from 'axios';

export default {
  name: 'NewCourse',
  data() {
    return {
      name: 'Fullstack',
      amount: '',
    };
  },
  methods: {
    async createCourse() {
      try {
        await axios.post("http://127.0.0.1:8000/api/create-course", {
          name: this.name,
          amount: this.amount,
        });
        // Handle success or other logic here
      } catch (error) {
        // Handle errors here if needed
        console.error("Error creating course:", error);
      }
    },
  },
};
</script>

<template>
    <div id = 'NewCourse'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                        class="mx-auto"
                        width="500"
                    >
                    <v-toolbar
                            color="teal"
                            theme="dark"
                        >
                            <v-toolbar-title class="text-h6">
                                New Course
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                            <v-text-field
                                v-model="name"
                                color="teal"
                                label="Course name"
                                variant="underlined"
                            ></v-text-field>
                            <v-text-field
                                v-model="amount"
                                color="teal"
                                label="Amount"
                                variant="underlined"
                            ></v-text-field>

                            <v-divider></v-divider>

                            <v-card-actions>

                            <v-spacer>
                                <v-btn color="black" class="mb-2 fs-6 float-end bg-light" style="margin-right: 4px;" type="submit">Submit</v-btn>
                            </v-spacer>
                            <v-spacer>
                                <v-btn type="reset" color="black" class="mb-2 fs-6 float-end bg-light" style="margin-right: 4px;">Cancel</v-btn>
                            </v-spacer>
                        </v-card-actions>
                            </v-container>
                
                    </v-card>
                    </v-layout>
             </v-container>
        </v-container>
        </div>



                
</template>