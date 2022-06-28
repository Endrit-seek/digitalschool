<template>
  <div class="d-flex justify-center">
    <v-app>
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
                  Login Form
                </v-card-title>
                <v-card-text>
                  <v-text-field
                    label="Username"
                    placeholder="Username"
                    variant="outlined"
                    prepend-inner-icon="mdi-account"
                    autocomplete="on"
                  />
                  <v-text-field
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
                  >
                    Register
                  </v-btn>
                  <v-spacer />
                  <v-btn variant="outlined" flat color="info" class="mr-8 mb-3">
                    Login
                  </v-btn>
                </v-card-actions>
              </client-only>
            </v-card>
          </v-form>
        </v-col>
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts" setup></script>
<style>
div[data-app='true'] {
  background: url('/assets/bg1.svg') no-repeat bottom right fixed !important;
}
</style>
