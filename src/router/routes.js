import TaskPage from "@/pages/TaskPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import LoginPage from "@/pages/LoginPage.vue";

const routes = [
    {
        path: "/tasks",
        component: TaskPage,
        name: 'tasks'
    },
    {
        path: "/login",
        component: LoginPage,
        name: 'login'
    },
    {
        path: "/register",
        component: RegisterPage,
        name: 'register'
    },
]

export default routes