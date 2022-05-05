<template>
  <div class="side-login">
    <section class="center-section">
      <div class="pb-5 pt-5 text-center">
        <h2 class="header-primary">
          Welcome To
          <p>JuBlog</p>
        </h2>
      </div>
      <div
        class="d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <BaseButton :to="{ name: 'loginpage' }" link>Log In</BaseButton>
        <BaseButton :to="{ name: 'signup' }" link>Sign Up</BaseButton>
      </div>
    </section>
  </div>
</template>
