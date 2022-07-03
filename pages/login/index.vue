<template>
  <v-app id="loginId">
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
                Login Form
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
                  to="/register"
                >
                  Register
                </v-btn>
                <v-spacer />
                <v-btn
                  variant="outlined"
                  flat
                  color="info"
                  class="mr-8 mb-30"
                  @click.prevent="signIn"
                >
                  Login
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
useHead({
  title: 'Login',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [{ name: 'description', content: 'Login with credentials' }],
  bodyAttrs: {
    class: 'test',
  },
})
function signIn() {
  signInUser(user.value.email, user.value.password)
  user.value = { email: '', password: '' }
}
</script>
<style>
div#loginId {
  background: url('/assets/bg1.svg') no-repeat bottom right fixed !important;
}
</style>
