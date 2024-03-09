import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'courses',
          name: 'courses',
          component: () => import('../views/CoursesView.vue'),
        },
        {
          path: 'course/:id',
          name: 'course',
          component: () => import('../views/CourseView.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/CartView.vue'),
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('../views/CheckoutView.vue'),
        },
        {
          path: 'order-creation/:id',
          name: 'order-creation',
          component: () => import('../views/OrderCreation.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: 'favourite',
          name: 'favourite',
          component: () => import('../views/FavouriteView.vue'),
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/ArticlesView.vue'),
        },
        {
          path: 'article/:id',
          name: 'article',
          component: () => import('../views/ArticleView.vue'),
          props: (route) => ({
            id: route.params.id,
          }),
        },
        {
          path: 'coaches',
          name: 'coaches',
          component: () => import('../views/CoachesView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/admin-login',
      name: 'admin-login',
      component: () => import('../views/AdminLogin.vue'),
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
  ],
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
