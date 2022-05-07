<template>
  <nav class="header">
    <div class="container header__navbar">
      <div class="row py-3">
        <div
          class="d-flex justify-content-md-around justify-content-between align-items-center"
        >
          <div><img src="@/assets/img/navbar-img.png" width="150" /></div>
          <div class="search-bar d-none d-md-block">
            <img
              src="@/assets/img/search-icon.svg"
              width="15"
              class="search-icon"
            />
            <input
              type="search"
              placeholder="Search Here"
              class="form-control"
            />
          </div>
          <div>
            <img src="@/assets/img/log-out.svg" width="30" height="30" />
          </div>
        </div>
        <div class="mt-2 d-flex justify-content-center d-block d-md-none">
          <div class="search-bar">
            <img
              src="@/assets/img/search-icon.svg"
              width="15"
              class="search-icon"
            />
            <input
              type="search"
              placeholder="Search Here"
              class="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.header {
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  .header__navbar {
    .search-bar {
      position: relative;
      .search-icon {
        position: absolute;
        left: 10px;
        top: 8px;
      }
      .form-control {
        border-radius: 20px;
        padding-left: 30px;
        width: 300px;
      }
      .form-control:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
}
</style>
