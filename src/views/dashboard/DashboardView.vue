<script></script>

<template>
  <header>
    <h1>後台</h1>
    <nav>
      <RouterLink to="/admin">課程列表</RouterLink> |
      <RouterLink to="/admin/orders">訂單列表</RouterLink> |
      <RouterLink to="/admin/coupons">優惠券</RouterLink> |
      <RouterLink to="/admin/articles">文章列表</RouterLink> |
      <RouterLink to="/admin/customer-service">客服專區</RouterLink> |
    </nav>
  </header>
  <router-view></router-view>
</template>
