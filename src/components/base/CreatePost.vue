<template>
  <BaseCard2>
    <div class="row mb-3">
      <div class="col-1">
        <img src="@/assets/img/rawanimage.png" width="55" height="55" />
      </div>
      <div class="py-1 col-11">
        <form>
          <textarea
            class="form-control write-comment p-2"
            placeholder="Add a Comment ..."
            rows="3"
          ></textarea>
        </form>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="d-flex gap-5">
        <div>
          <img
            src="@/assets/img/uploadeimg.svg"
            width="30"
            height="30"
            class="mx-2"
          />Photo
        </div>
        <div>
          <img
            src="@/assets/img/uploadeFile.svg"
            width="30"
            height="30"
            class="mx-2"
          />Attachment
        </div>
      </div>
      <div>
        <button class="btns-save rounded-pill">Post</button>
      </div>
    </div>
  </BaseCard2>
</template>

<style lang="scss">
@import "@/assets/sass/main";
.btns-save {
  background-color: $color-button;
  color: $color-white;
  width: 100px;
  height: 30px;
  border: 0px;
}
</style>
