<template>
  <v-app>
    <v-main class="d-flex justify-center align-center">
      <ClientOnly>
        <v-row align="center" justify="center">
          <v-col
            cols="12"
            lg="6"
            md="6"
            class="grey lighten-2 fill-height d-flex flex-column justify-center align-center"
          >
            <v-card class="text-center" v-if="firebaseUser">
              <v-card-title class="justify-center">Welcome</v-card-title>
              <v-card-text>Your email is: {{ firebaseUser.email }}</v-card-text>
              <v-card-actions>
                <v-btn @click.prevent="signOut"> Sign Out </v-btn>
              </v-card-actions>
            </v-card>
            <v-card class="text-center" v-else> Not logged in </v-card>
          </v-col>
        </v-row>
      </ClientOnly>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
const firebaseUser = useFirebaseUser()

async function signOut() {
  await signOutUser()
}
</script>
<style></style>
