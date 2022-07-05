<template>
  <v-app id="loginId">
    <v-main class="d-flex justify-center align-center">
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="6"
          xl="6"
          style="margin-left: 16%; padding-left: 10px"
          class="text-left"
        >
          <v-card class="text-center" width="550">
            <v-form v-model="isValid">
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
                    required
                    placeholder="Email"
                    variant="outlined"
                    :rules="emailRules"
                    prepend-inner-icon="mdi-email"
                    autocomplete="on"
                  />
                  <v-text-field
                    v-model="user.password"
                    :type="value ? 'password' : 'v-card-text'"
                    label="Password"
                    placeholder="Password"
                    required
                    variant="outlined"
                    :rules="passwordRules"
                    prepend-inner-icon="mdi-key"
                    :append-inner-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                    autocomplete="on"
                    @click:append-inner="value = !value"
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
                    :disabled="!isValid"
                    :color="isValid ? 'info' : ''"
                    class="mr-8 mb-30"
                    @click.prevent="signIn"
                  >
                    Login
                  </v-btn>
                </v-card-actions>
              </ClientOnly>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
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

const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) =>
    /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      v
    ) || 'E-mail must be valid (example@gmail.com)',
]

const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) =>
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(v) ||
    'Password must contain at least lowercase letter, one number, a special character and one uppercase letter',
]

const isValid = ref<boolean>(true)
const value = ref<boolean>(true)
</script>
<style>
div#loginId {
  background: url('/assets/bg1.svg') no-repeat bottom right fixed !important;
}
</style>
