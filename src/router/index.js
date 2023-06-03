import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'Auth',
      redirect: '/login',
      meta: { isGuest: true },
      component: () => import('@/components/layouts/AuthLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/auth/LoginView.vue')
        },
        {
          path: '/register',
          name: 'Register',
          component: () => import('@/views/auth/RegisterView.vue')
        },    
      ]
    },
  
    // Client Route
    {
      path:'/client/dashboard',
      name: 'Client-dashboard',
      redirect: '/tickets-create',
      meta: {
        auth: true,
        isClient: true,
      },
      component: () => import('@/views/client/ClientDashboard.vue'),
      children: [
        {
          path: '/tickets',
          name: 'Client-tickets',
          component: () => import('@/views/client/TicketsView.vue')
        },
        {
          path:'/tickets-create',
          name: 'Tickets-create',
          component: () => import('@/views/client/TicketCreateView.vue')
        },
        {
          path:'/tickets/:id',
          name:'Ticket-view',
          component: () => import('@/components/forms/ViewDetails.vue')
        },
        {
          path: '/profile',
          name: 'Client-profile',
          component: () => import('@/views/others/ProfileView.vue')
        },
        {
          path: '/notification',
          name:'Client-notification',
          component: () => import('@/views/others/NotificationView.vue')
        },
      ]
    },
  
    // Agent Panel
    {
      path:'/agent/dashboard',
      name: 'Agent-dashboard',
      redirect: '/new-tickets',
      meta: {
        auth: true,
        isAgent: true,
      },
      component: () => import('@/views/agent/AgentDashboard.vue'),
      children: [
        {
          path: '/new-tickets',
          name: 'Agent-newTickets',
          component: () => import('@/views/agent/AgentNewtickets.vue'),
        },
        {
          path: '/unresolved-tickets',
          name: 'Agent-unresolvedTickets',
          component: () => import('@/views/agent/AgentUnresolvedtickets.vue')
        },
        {
          path: '/resolved-tickets',
          name: 'Agent-resolvedTickets',
          component: () => import('@/views/agent/AgentResolvedtickets.vue')
        },
        {
          path: '/closed-tickets',
          name: 'Agent-closedTickets',
          component: () => import('@/views/agent/AgentClosedtickets.vue')
        },
        {
          path: '/tickets',
          name: 'Agent-tickets',
          component: () => import('@/views/agent/AgentTicketsindex.vue'),
        },
        {
          path: '/profile',
          name: 'Agent-profile',
          component: () => import('@/views/others/ProfileView.vue')
        },
        {
          path: '/notification',
          name: 'Agent-notification',
          component: () => import('@/views/others/NotificationView.vue')
        },
        {
          path:'/tickets/:id',
          name:'Agent-Ticket-view',
          component: () => import('@/components/forms/ViewDetails.vue')
        },
      ]
    },

    // Admin Routes
    {
      path: '/admin/dashboard',
      name: 'Admin-dashboard',
      redirect: '/admin/tickets',
      meta: {
        auth: true,
        isAdmin: true,
      },
      component: () => import('@/views/admin/AdminDashboard.vue'),
      children: [
        {
          path: '/admin/new-tickets',
          name: 'Admin-newtickets',
          component: () => import('@/views/admin/TicketsNew.vue'),
        },
        {
          path: '/admin/unresolved-tickets',
          name: 'Unresolved-tickets',
          component: () => import('@/views//admin/TicketsUnresolved.vue'),
        },
        {
          path: '/admin/resolved-tickets',
          name: 'Resolved-tickets',
          component: () => import('@/views/admin/TicketsResolved.vue'),
        },
        {
          path: '/admin/closed-tickets',
          name: 'Closed-tickets',
          component: () => import('@/views/admin/TicketsClosed.vue'),
        },
        {
          path: '/admin/tickets',
          name: 'Admin-tickets',
          component: () => import('@/views/admin/TicketsIndex.vue'),        
        },
        {
          path: '/admin/ticket-types',
          name: 'Admin-ticket_types',
          component: () => import('@/views/admin/Ticket_typesIndex.vue'),        
        },
        {
          path: '/admin/users',
          name: 'Admin-users',
          component: () => import('@/views/admin/UsersIndex.vue'),
        },
        {
          path: '/admin/departments',
          name: 'Admin-departments',
          component: () => import('@/views/admin/DepartmentsIndex.vue')
        },
        {
          path:'/tickets/:id',
          name:'Admin-Ticket-view',
          component: () => import('@/components/forms/ViewDetails.vue')
        },
        {
          path: 'admin/profile',
          name: 'Admin-profile',
          component: () => import('@/views/others/ProfileView.vue')
        },
        {
          path: 'admin/notification',
          name:'Admin-notification',
          component: () => import('@/views/others/NotificationView.vue')
        },
      ]
    },
    // Other Routes
    {
      path: '/unauthorized',
      name: 'UnAuthorized',
      meta: {
        auth: true
      },
      component: () =>import('@/views/others/UnAuthorizedView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name:'NotFound',
      component: () =>import('@/views/others/NotFoundView.vue')
    }
  ]
});

router.beforeEach(async(to, from, next) => {
  const store = await useAuthStore();
  if (to.meta.auth && !store.token) {
    next({name: 'Login'});
  } else if (store.token && to.meta.isGuest) {
    next({name:'Home'});
  } else if (store.token) {
     if (store.role != 'Admin' && to.meta.isAdmin) {
      next({name: 'UnAuthorized'});
    } else if (store.role != 'Agent' && to.meta.isAgent) {
      next({name: 'UnAuthorized'});
    } else if (store.role != 'Client' && to.meta.isClient) {
      next({name: 'UnAuthorized'});
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router
 