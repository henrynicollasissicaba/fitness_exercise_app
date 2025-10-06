interface NavItem {
  id: number;
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Home", link: "#home" },
  { id: 2, label: "Exercícios", link: "#exercises" },
  { id: 3, label: "Treino personalizado com IA", link: "/workout-with-ai" },
];

const muscles: string[] = [
  "Costas",
  "Peito",
  "Cardio",
  "Antebraços",
  "Cintura",
  "Abdutores",
  "Adutores",
  "Abdominais",
  "Tríceps",
  "Bíceps",
  "Quadríceps",
  "Glúteos",
  "Isquiotibiais",
  "Panturrilhas",
  "Trapézio",
];

export { navItems, muscles };
