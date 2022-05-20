<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As company</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4 pt-5">
      <input class="form-control" type="name" placeholder="Company name" />
      <input class="form-control" type="email" placeholder="Company email" />
      <input
        class="form-control"
        type="password"
        placeholder="Enter your password"
      />
      <div class="col">
        <select class="form-select" aria-label="Default select example">
          <option value="">Colleage</option>
          <option value="1">KASIT</option>
        </select>
      </div>
    </form>
    <template v-slot:button> <BaseButton small>Sign Up </BaseButton></template>
  </BaseAuth>
</template>
