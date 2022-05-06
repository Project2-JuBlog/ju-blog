<template>
  <BaseAuth>
    <template v-slot:header>
      Sign Up <span class="signup-subtitle">As Doctor’s</span>
    </template>
    <form class="form-auth d-flex flex-column gap-4 pt-5">
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <input class="form-control" type="name" placeholder="First name" />
        </div>
        <div class="col">
          <input class="form-control" type="name" placeholder="Last name" />
        </div>
      </div>
      <input
        class="form-control"
        type="email"
        placeholder="Example@ju.edu.jo"
      />
      <input
        class="form-control"
        type="password"
        placeholder="Enter your password"
      />
      <div class="row row-cols-md-2 row-cols-1 gap-4 gap-md-0">
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option value="">Colleage</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="col">
          <select class="form-select" aria-label="Default select example">
            <option value="">Major</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </form>
    <template v-slot:button> <BaseButton small>Sign Up </BaseButton></template>
  </BaseAuth>
</template>
