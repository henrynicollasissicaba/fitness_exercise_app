enum Difficulty {
  BEGGINER = "Inicinate",
  INTERMEDIATE = "Intermediário",
  ADVANCED = "Avançado",
}

enum Category {
  STRENGTH = "Força",
  ENDURANCE = "Resistência",
  HYPERTROPHY = "Hipertrofia",
}

export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  secondaryMuscles: string[];
  instructions: string[];
  description: string;
  difficulty: Difficulty;
  category: Category;
}
