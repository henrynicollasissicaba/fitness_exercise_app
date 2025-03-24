import { Home, Search, UserRoundPlus, CirclePlus, Check, Cable, Users } from "lucide-react"

interface NavItem {
    id: number
    label: string
    link: string
}

const navItems: NavItem[] = [
    { id: 1, label: "Home", link: "#home" },
    { id: 2, label: "Exercícios", link: "#exercises" },
    { id: 3, label: "Entrar", link: "/login" }
]

const muscles: string[] = [
    "Abdutores", "Adutores", "Abdominais", "Tríceps", "Bíceps", "Deltóides", "Antebraço",
    "Quadríceps", "Glúteos", "Isquiotibiais", "Panturrilha", "Peitoral", "Dorsais", 
    "Superior das Costas", "Músculo Serrátil Anterior", "Trapézios", "Sistema Cardiovascular"
]

const equipments: string[] = [
    "Barra", "Peso do Corpo", "Bola Bosu", "Cabo", "Halter", "Máquina Elíptica", "Barra Ez",
    "Kettlebell", "Bola Medicinal", "Barra Olímpica", "Corda", "Smith",
    "Bola de Estabilidade", "Bicicleta Ergométrica", "Barra de Armadilha", "Rolo Abdominal"
]

const bodyParts: string[] = [
    "Costas", "Peito", "Cardio", "Braços Superiores", "Antebraço", "Ombros", 
    "Cintura", "Panturrilha", "Coxas"
]

interface SidebarMenuItem {
    title: string
    url: string
    icon: React.ComponentType
}

const adminItems: SidebarMenuItem[] = [
    {
        title: "Painel do Administrador",
        url: "/admin",
        icon: Home,
    },
    {
        title: "Cadastrar professor",
        url: "/admin/create-teacher",
        icon: UserRoundPlus,
    },
    {
        title: "Cadastrar aluno",
        url: "/admin/create-pupil",
        icon: UserRoundPlus,
    },
    {
        title: "Ir para a página principal",
        url: "/",
        icon: Search,
    }
]

const teacherItems: SidebarMenuItem[] = [
    {
        title: "Painel do professor",
        url: "/teacher",
        icon: Home
    },
    {
        title: "Cadastrar aluno",
        url: "/teacher/create-pupil",
        icon: UserRoundPlus
    },
    {
        title: "Criar treino",
        url: "/teacher/create-workout",
        icon: CirclePlus
    },
    {
        title: "Alunos cadastrados",
        url: "/teacher/all-pupils",
        icon: Users
    },
    {
        title: "Treinos criados",
        url: "/teacher/created-workouts",
        icon: Check
    },
    {
        title: "Associar Treino-Aluno",
        url: "/teacher/associate-workout-user",
        icon: Cable
    },
    {
        title: "Ir para a página principal",
        url: "/",
        icon: Search
    },
]

const pupilItems: SidebarMenuItem[] = [
    {
        title: "Meu treino",
        url: "/pupil",
        icon: Home
    },
    {
        title: "Ir para a página principal",
        url: "/",
        icon: Search
    },
]

export { navItems, bodyParts, equipments, muscles, adminItems, teacherItems, pupilItems }

