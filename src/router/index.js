import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/frontend/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/frontend/HomeView.vue'),
        },
        {
          path: 'courses',
          name: 'courses',
          component: () => import('../views/frontend/CoursesView.vue'),
        },
        {
          path: 'course/:id',
          name: 'course',
          component: () => import('../views/frontend/CourseView.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/frontend/CartView.vue'),
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('../views/frontend/CheckoutView.vue'),
        },
        {
          path: 'order-creation/:id',
          name: 'order-creation',
          component: () => import('../views/frontend/OrderCreation.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: 'favourite',
          name: 'favourite',
          component: () => import('../views/frontend/FavouriteView.vue'),
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/frontend/ArticlesView.vue'),
        },
        {
          path: 'article/:id',
          name: 'article',
          component: () => import('../views/frontend/ArticleView.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: 'coaches',
          name: 'coaches',
          component: () => import('../views/frontend/CoachesView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/frontend/AboutView.vue'),
        },
      ],
    },
    {
      path: '/admin-login',
      name: 'admin-login',
      component: () => import('../views/frontend/AdminLogin.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/dashboard/DashboardView.vue'),
      children: [
        {
          path: '',
          name: 'admin-courses',
          component: () => import('../views/dashboard/AdminCourses.vue'),
        },
        {
          path: 'orders',
          name: 'admin-orders',
          component: () => import('../views/dashboard/AdminOrders.vue'),
        },
        {
          path: 'coupons',
          name: 'admin-coupons',
          component: () => import('../views/dashboard/AdminCoupons.vue'),
        },
        {
          path: 'articles',
          name: 'admin-articles',
          component: () => import('../views/dashboard/AdminArticles.vue'),
        },
        {
          path: 'customer-service',
          name: 'customer-service',
          component: () => import('../views/dashboard/AdminCustomerService.vue'),
        },
      ],
    },
    // 當進入未設定路徑時，將重新導向 (v4.x)
    {
      path: '/:catchAll(.*)',
      redirect: '/',
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
