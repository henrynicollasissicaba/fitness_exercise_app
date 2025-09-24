interface NavItem {
  id: number;
  label: string;
  link: string;
}

const navItems: NavItem[] = [
  { id: 1, label: "Home", link: "#home" },
  { id: 2, label: "Exercícios", link: "#exercises" },
];

const muscles: string[] = [
  "Costas",
  "Peito",
  "Cardio",
  "Antebraço",
  "Cintura",
  "Abdutores",
  "Adutores",
  "Abdominais",
  "Tríceps",
  "Bíceps",
  "Deltóides",
  "Quadríceps",
  "Glúteos",
  "Isquiotibiais",
  "Panturrilha",
  "Superior das Costas",
  "Músculo Serrátil Anterior",
  "Trapézios",
];

const equipments: string[] = [
  "Barra",
  "Peso do Corpo",
  "Bola Bosu",
  "Cabo",
  "Halter",
  "Máquina Elíptica",
  "Barra Ez",
  "Kettlebell",
  "Bola Medicinal",
  "Barra Olímpica",
  "Corda",
  "Smith",
  "Bola de Estabilidade",
  "Bicicleta Ergométrica",
  "Barra de Armadilha",
  "Rolo Abdominal",
];

const items = [
  { id: 1, title: "Grupos Musculares", data: muscles },
  { id: 2, title: "Equipamentos", data: equipments },
];

export { navItems, items };
