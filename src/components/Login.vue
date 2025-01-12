<script>

</script>

<template>
  <div id="Login">
    <v-container>
      <v-layout column>
        <v-card class="mx-auto" width="500">
          <v-toolbar color="teal" dark>
            <v-toolbar-title class="text-h6">
              User Login
            </v-toolbar-title>
          </v-toolbar>
          <v-container>
            <v-text-field
              v-model="email"
              color="teal"
              label="Email"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              color="teal"
              label="Password"
              variant="underlined"
              type="password"
            ></v-text-field>
          </v-container>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success">
              Login
              <v-icon right>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
  }),
};
</script>

<style>
#Login{
  padding: 80px 0 160px 0;
}
</style>
