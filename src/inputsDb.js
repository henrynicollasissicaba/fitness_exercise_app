export const translateInput = (input) => {
    const normalizedInput = removeAccent(input)
    let output

    switch (normalizedInput){
        case "costas":
            output = "back"
            break
        case "peito":
            output = "chest"
            break
        case "cardio":
            output = "cardio"
            break
        case "bracos superiores":
            output = "upper arms"
            break
        case "antebraco":
            output = "lower arms"
            break
        case "ombros":
            output = "shoulders"
            break
        case "panturrilha":
            output = "lower legs"
            break
        case "coxas":
            output = "upper legs"
            break
        case "cintura":
            output = "waist"
            break
        case "abdutores":
            output = "abductors"
            break
        case "adutores":
            output = "adductors"
            break
        case "abdominais":
            output = "abs"
            break
        case "gluteos":
            output = "glutes"
            break
        case "biceps":
            output = "biceps"
            break
        case "sistema cardiovascular":
            output = "cardiovascular system"
            break
        case "deltoides":
            output = "delts"
            break
        case "isquiotibiais":
            output = "hamstrings"
            break
        case "dorsais":
            output = "lats"
            break
        case "peitoral":
            output = "pectorals"
            break
        case "quadriceps":
            output = "quads"
            break
        case "musculo serratil anterior":
            output = "serratus anterior"
            break
        case "trapezios":
            output = "traps"
            break
        case "triceps":
            output = "triceps"
            break
        case "superior das costas":
            output = "upper back"
            break
        case "barra":
            output = "barbell"
            break
        case "peso do corpo":
            output = "body weight"
            break
        case "bola bosu":
            output = "bosu ball"
            break
        case "cabo":
            output = "cable"
            break
        case "halter":
            output = "dumbbell"
            break
        case "maquina eliptica":
            output = "elliptical machine"
            break
        case "barra ez":
            output = "ez barbell"
            break
        case "kettlebell":
            output = "kettlebell"
            break
        case "bola medicinal":
            output = "medicine ball"
            break
        case "barra olimpica":
            output = "olympic barbell"
            break
        case "corda":
            output = "rope"
            break
        case "smith":
            output = "smith machine"
            break
        case "bola de estabilidade":
            output = "stability ball"
            break
        case "bicicleta ergometrica":
            output = "stationary bike"
            break
        case "barra de armadilha":
            output = "trap bar"
            break
        case "rolo abdominal":
            output = "wheel roller"
            break
        default:
            output = "NOT FOUND"
    }

    return output
}

export const exercisesDb = [
    'costas', 'peito', 'cardio', 'braços superiores', 'antebraço',
    'ombros', 'panturrilha', 'coxas', 'cintura',
    'abdutores', 'adutores', 'abdominais', 'tríceps', 'bíceps',
    'deltoides', 'quadríceps', 'glúteos', 'isquiotibiais', 'peitoral',
    'dorsais', 'superior das costas', 'trapézios', 'músculo serrátil anterior', 'sistema cardiovascular',
    'barra', 'peso do corpo', 'bola bosu', 'cabo', 'halter',
    'máquina elíptica', 'barra ez', 'kettlebell', 'bola medicinal', 'barra olímpica',
    'corda', 'smith', 'bola de estabilidade', 'bicicleta ergométrica', 'barra de armadilha',
    'rolo abdominal'
]

const removeAccent = (input) => {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c")
}