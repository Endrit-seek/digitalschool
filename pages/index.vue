<template>
  <v-app class="d-flex justify-center">
    <v-main class="d-flex justify-center align-center">
      <ClientOnly>
        <v-card v-if="firebaseUser">
          <v-text-field>Welcome</v-text-field>
          <v-text-field>Your email is: {{ firebaseUser.email }}</v-text-field>
          <v-btn @click.prevent="signOut"> Sign Out </v-btn>
        </v-card>
        <v-card v-else>
          Not logged in
        </v-card>
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
