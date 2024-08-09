import {createRouter, createWebHistory} from 'vue-router';
import HomeBoard from "@/components/HomeBoard.vue";
import CategoryList from "@/components/CategoryList.vue";
import TutorialList from "@/components/TutorialList.vue";
import AddCategory from "@/components/AddCategory.vue";
import AddTutorial from "@/components/AddTutorial.vue";
import CategoryDetails from "@/components/CategoryDetails.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeBoard
    },
    {
        path: '/categories',
        name: 'categories',
        component: CategoryList
    },
    {
        path: '/tutorials',
        name: 'tutorials',
        component: TutorialList
    },
    {
        path: '/categories/add',
        name: 'categories-add',
        component: AddCategory
    },
    {
        path: '/tutorials/add',
        name: 'tutorials-add',
        component: AddTutorial
    },
    {
        path: '/tutorials/details/:id',
        name: 'category-details',
        component: CategoryDetails,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
