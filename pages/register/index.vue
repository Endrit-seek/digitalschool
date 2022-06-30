<template>
  <div class="d-flex justify-center">
    <v-app id="registerId">
      <v-main class="d-flex justify-center align-center">
        <v-col
          cols="10"
          lg="4"
          style="margin-left: 16%; padding-left: 10px"
          class="text-left"
        >
          <v-form>
            <v-card class="text-center" width="550">
              <client-only>
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
              </client-only>
              <div>
                {{ registerMessage }}
              </div>
            </v-card>
          </v-form>
        </v-col>
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts" setup>
const user = ref({ email: '', password: '' })
const registerMessage = ref()
async function register() {
  console.log(user.value)
  const credentials = await createUser(user.value.email, user.value.password)
  user.value = { email: '', password: '' }
  if (credentials) {
    registerMessage.value = `Successfully registered: ${credentials.user.email}`
    setTimeout(() => {
      registerMessage.value = ''
    }, 3000)
  }
}
</script>
<style>
div#registerId {
  background: url('/assets/bg2.svg') no-repeat bottom right fixed !important;
}
</style>
