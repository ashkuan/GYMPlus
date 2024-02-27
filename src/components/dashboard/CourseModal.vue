<template>
  <div>
    <h1>產品 modal</h1>
    <div
    ref="productModal"
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <Loading :active="isLoading" :is-full-page="false"></Loading>
      <div class="modal-content vl-parent">
        <div class="modal-header py-2 bg-info bg-opacity-50">
          <h5 class="modal-title fw-bold">{{ singleProduct.title }}</h5>
        </div>
        <div class="modal-body vl-hide">
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <img
                  :src="singleProduct.imageUrl"
                  :alt="singleProduct.title"
                  class="img-fluid w-100"
                  style="height: 240px"
                />
              </div>
              <div class="col d-flex flex-column py-2">
                <span class="badge rounded-pill bg-primary align-self-start">{{
                  singleProduct.category
                }}</span>
                <p class="mt-3">{{ singleProduct.description }}</p>
                <p>{{ singleProduct.content }}</p>
                <div class="text-end mt-auto">
                  <p
                    class="mb-1"
                    :class="{
                      'text-secondary': isOnSale,
                      'text-decoration-line-through': isOnSale,
                      small: isOnSale,
                    }"
                  >
                    定價 {{ singleProduct.origin_price }} 元
                  </p>
                  <p class="mb-0" v-if="isOnSale">
                    現在只要 <span class="text-danger fw-bold"> {{ singleProduct.price }} </span> 元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            關閉
          </button>
          <div class="input-group" style="width: 40%">
            <input type="number" min="1" value="1" class="form-control" ref="productModalinput" />
            <button
              @click="addToCart(singleProduct.id, modalPorductNum, modal)"
              class="btn btn-primary"
              type="button"
            >
              加入購物車
              <span
                v-if="isAddingToCart"
                class="spinner-border spinner-border-sm"
                role="status"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script></script>
