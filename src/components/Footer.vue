<template>
    <v-footer class="d-flex flex-column footer" >

    <div class="bg-teal d-flex w-100 align center justify-space-between px-4">
    <strong>Get connected with us on social networks!</strong>

    <v-spacer></v-spacer>

    <div class="social-icons d-flex">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 icon-button"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>
    </div>
    

    <div class="px-4 py-2 bg-black text-center w-100">
    {{ new Date ().getFullYear() }} - <strong>University of Africa</strong>
    </div>
    </v-footer>
</template>
<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    })
}
</script>

<style>
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
}

.social-icons .icon-button {
  color: white; /* Ensure consistency with the theme */
  margin: 0 8px; /* Adjust spacing between icons */
}

.bg-teal {
  display: flex;
  align-items: center;
  padding: 5px;
}


.icon-button {
  transition: transform 0.2s ease; 
}

.icon-button:hover {
  transform: scale(1.2); 
}


</style>
