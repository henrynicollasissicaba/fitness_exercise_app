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
  "Abdutores",
  "Adutores",
  "Abdominais",
  "Tríceps",
  "Bíceps",
  "Deltóides",
  "Antebraço",
  "Quadríceps",
  "Glúteos",
  "Isquiotibiais",
  "Panturrilha",
  "Peitoral",
  "Dorsais",
  "Superior das Costas",
  "Músculo Serrátil Anterior",
  "Trapézios",
  "Sistema Cardiovascular",
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

const bodyParts: string[] = [
  "Costas",
  "Peito",
  "Cardio",
  "Braços Superiores",
  "Antebraço",
  "Ombros",
  "Cintura",
  "Panturrilha",
  "Coxas",
];

export { navItems, bodyParts, equipments, muscles };
