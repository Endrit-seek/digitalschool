<template>
  <v-app class="d-flex justify-center" id="registerId">
    <v-main class="d-flex justify-center align-center">
      <v-col
        cols="10"
        lg="4"
        style="margin-left: 16%; padding-left: 10px"
        class="text-left"
      >
        <v-form>
          <v-card class="text-center" width="550">
            <ClientOnly>
              <v-card-title
                primary-title
                class="justify-center font-weight-bold"
              >
                Register Form
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="user.email"
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  prepend-inner-icon="mdi-email"
                  autocomplete="on"
                />
                <v-text-field
                  v-model="user.password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  variant="outlined"
                  prepend-inner-icon="mdi-key"
                  append-inner-icon="mdi-eye"
                  autocomplete="on"
                />
              </v-card-text>
              <v-card-actions>
                <v-btn
                  variant="outlined"
                  flat
                  color="secondary"
                  class="ml-8 mb-3"
                  to="/login"
                >
                  Back to Login
                </v-btn>
                <v-spacer />
                <v-btn
                  variant="outlined"
                  flat
                  color="info"
                  class="mr-8 mb-3"
                  @click.prevent="register"
                >
                  Sign Up
                </v-btn>
              </v-card-actions>
            </ClientOnly>
          </v-card>
        </v-form>
      </v-col>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
const user = ref({ email: '', password: '' })
async function register() {
  await createUser(user.value.email, user.value.password)
  user.value = { email: '', password: '' }
}
</script>
<style>
div#registerId {
  background: url('/assets/bg2.svg') no-repeat bottom right fixed !important;
}
</style>
