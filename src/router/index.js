import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index.js'
/* eslint-disable */
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home.vue'),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import("../views/Store.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Roulette',
    name: 'roulette',
    component: () => import("../views/Roulette.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: true
    }
  },
  {
    path: '/Contacts',
    name: 'contacts',
    component: () => import("../views/Contacts.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Privacy',
    name: 'privacy',
    component: () => import("../views/Privacy.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Terms',
    name: 'terms',
    component: () => import("../views/Terms.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false
    }
  },
  {
    path: '/Profile',
    name: 'profile',
    component: () => import("../views/Profile.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: true,
    }
  },
  {
    path: '/Fulfilment',
    name: 'fulfilment',
    component: () => import("../views/Fulfilment.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false,
    }
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: () => import("../views/Leaderboard.vue"),
    meta: {
      title: "Panacea",
      requiresLogin: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const requiresLogin = to.matched.some((record) => record.meta.requiresLogin);
  if (requiresLogin) {
    // Используем информацию об авторизации из состояния хранилища
    const isAuthenticated = store.state.user.auth;

    if (!isAuthenticated) {
      // Перенаправляем на страницу авторизации, если пользователь не авторизован
      next({ path: '/' });
    } else {
      // Продолжаем нормальный поток выполнения, если пользователь авторизован
      next();
    }
  } else {
    // Если маршрут не требует авторизации, просто продолжаем
    next();
  }
  setTimeout(() => {
    const audio = new Audio(); // Найдите аудио элемент
    if (audio) {
      audio.pause(); // Остановите аудио, если оно существует
    }
  }, 100); // Установите таймаут, чтобы дать аудио завершить текущую операцию
});
export default router
const DEFAULT_TITLE = 'Panacea Dayz';
router.beforeEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});