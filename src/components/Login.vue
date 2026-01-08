<script>

</script>

<template>
  <div id="Login">
    <v-container>
      <v-layout column>
        <v-card class="mx-auto authCard" rounded="lg" elevation="8" v-reveal>
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
  padding: 96px 0 140px;
}

.authCard{
  width: 100%;
  max-width: 520px;
}
</style>
