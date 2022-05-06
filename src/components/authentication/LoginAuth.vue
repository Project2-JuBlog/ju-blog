<template>
  <BaseAuth>
    <template v-slot:header> Log In </template>
    <form class="form-auth d-flex flex-column gap-5 pt-5">
      <input class="form-control" type="email" placeholder="Email" />
      <input
        class="form-control"
        type="password"
        placeholder="Enter your password"
      />
    </form>
    <template v-slot:button> <BaseButton small>Log In </BaseButton></template>
  </BaseAuth>
</template>
