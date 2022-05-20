<template>
  <BaseAuth>
    <template v-slot:header> Sign Up </template>
    <div
      class="d-flex flex-column justify-content-center pt-md-5 align-items-center gap-4"
    >
      <BaseButton :to="{ name: 'signUpStudent' }" link> Students / Alumni`s</BaseButton>
      <BaseButton :to="{ name: 'SignUpDoctor' }" link> Doctor’s</BaseButton>
      <BaseButton :to="{ name: 'SignUpCompany' }" link> Company</BaseButton>
    </div>
  </BaseAuth>
</template>
