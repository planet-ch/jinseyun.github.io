export default [
    {
        path: '/videoDemo',
        name: 'videoDemo',
        component: () => import(/* webpackChunkName: "demo" */ '../views/demo/video.vue')
    }
]
