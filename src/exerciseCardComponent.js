export const createExerciseCard = (exercises) => {
    const exercisesCards = document.querySelector('.exercise-cards.swiper-wrapper')
    exercisesCards.innerHTML = ''

    const sliderWrapper = document.querySelector('.slider-wrapper-exercises')

    exercises.forEach((exercise) => {
        const card = exerciseCard(exercise)
        exercisesCards.append(card)
    })

    sliderWrapper.append(exercisesCards)
}

export const createViewExerciseCard = (exercise) => {
    const popupBox = document.querySelector('.popup-box')
    const closePopupBtn = document.querySelector('#close-popup')
    const gif = document.querySelector('.popup-card img')
    const bodyPartHeading = document.querySelector('#body-part')
    const equipmentHeading = document.querySelector('#equipment')
    const targetHeading = document.querySelector('#target')
    const exerciseNameHeading = document.querySelector('#exercise-name')
    
    popupBox.classList.add('show')
    closePopupBtn.addEventListener('click', () => {
        popupBox.classList.remove('show')
    })

    gif.src = `${exercise.gifUrl}`
    bodyPartHeading.textContent = `Parte do corpo: ${exercise.bodyPart}`
    equipmentHeading.textContent = `Equipamento: ${exercise.equipment}`
    targetHeading.textContent = `Músculo: ${exercise.target}`
    exerciseNameHeading.textContent = `${exercise.name}`

    const muscleParagraph = document.createElement('p')
    muscleParagraph.className = 'muscle'
    const instructionParagraph = document.createElement('p')
    instructionParagraph.className = 'instruction'
}

export const showMoreExerciseInfo = (exercise) => {
    const secondaryMuscles = document.querySelector('.muscles')
    const exerciseInstructions = document.querySelector('.instructions')

    secondaryMuscles.innerHTML = ''
    exerciseInstructions.innerHTML = ''

    exercise.secondaryMuscles.forEach((muscle) => {
        const muscleElement = document.createElement('p')
        muscleElement.textContent = `- ${muscle}`
        muscleElement.classList.add('muscle')
        secondaryMuscles.append(muscleElement)
    })

    exercise.instructions.forEach((instruction, id) => {
        const instructionElement = document.createElement('p')
        instructionElement.textContent = `${id + 1}: ${instruction}`
        instructionElement.classList.add('instruction')
        exerciseInstructions.append(instructionElement)
    })
}

const exerciseCard = (exercise) => {
    const exerciseCardDiv = document.createElement('div')
    exerciseCardDiv.className = 'exercise-card swiper-slide'
    exerciseCardDiv.setAttribute('aria-label', 'card de execução de exercício')

    const gif = document.createElement('img')
    gif.src = `${exercise.gifUrl}`
    gif.alt = 'gif de execução de exercício'

    const targetsDiv = document.createElement('div')
    targetsDiv.className = 'targets'

    const bodyPartTag = document.createElement('span')
    bodyPartTag.className = 'body-part-tag'
    bodyPartTag.textContent = `${exercise.bodyPart}`

    const targetTag = document.createElement('span')
    targetTag.className = 'target-tag'
    targetTag.textContent = `${exercise.target}`

    targetsDiv.append(bodyPartTag, targetTag)

    const exerciseName = document.createElement('h3')
    exerciseName.textContent = `${exercise.name}`

    exerciseCardDiv.append(gif, targetsDiv, exerciseName)
    
    return exerciseCardDiv
}

// cards de exercicios em html
/* <div class="exercise-card swiper-slide" aria-label="card de execução de exercício">
        <img src="https://v2.exercisedb.io/image/Qe-XTfUCToYgy1" alt="gif execução de exercício">
        <div class="targets">
            <span class="body-part-tag"></span>
            <span class="target-tag"></span>
        </div>
        <h3></h3>
    </div> */