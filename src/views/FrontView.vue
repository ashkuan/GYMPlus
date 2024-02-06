<script></script>

<template>
  <header>
    <h1>前台</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/courses">Courses</RouterLink> |
      <RouterLink to="/course/:id">Course</RouterLink> | <RouterLink to="/cart">Cart</RouterLink> |
      <RouterLink to="/checkout">Checkout</RouterLink> |
      <RouterLink to="/order-creation">Order-Creation</RouterLink> |
      <RouterLink to="/favourite">Favourite</RouterLink> |
      <RouterLink to="/articles">Articles</RouterLink> |
      <RouterLink to="/article/:id">Article</RouterLink> |
      <RouterLink to="/coaches">Coaches</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <router-view></router-view>
</template>
