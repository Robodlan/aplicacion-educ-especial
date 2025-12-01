//  // Datos para los ejercicios - CORREGIDOS
        const dyslexiaData = {
            'letter-recognition': {
                title: 'Reconocimiento de Letras',
                items: [
                    { target: 'A', options: ['B', 'V', 'A', 'F', 'X','aceite'] },
                    { target: 'B', options: ['H', 'D', 'P', 'B', 'C',6] },
                    { target: 'C', options: ['C', 'O', 'G', 'Q', 'H',8] },
                    { target: 'D', options: ['D', 'B', 'P', 'Q', 'I','R'] },
                    { target: 'E', options: ['E', 'F', 'B', 'L', 'D','Z'] },
                    { target: 'F', options: ['X', 'F', 'E', 'R', 'J','A'] }
                ]
            },
            'syllable-formation': {
                title: 'Formación de Sílabas',
                items: [
                    { target: 'MA', options: ['MA', 'AM', 'ME', 'MO','MU', ''] },
                    { target: 'PA', options: ['PA', 'AP', 'PE', 'PO','PI'] },
                    { target: 'LA', options: ['LA', 'AL', 'LE', 'LO','LU'] },
                    { target: 'SA', options: ['SA', 'AS', 'SE', 'SO','ES'] },
                    { target: 'TA', options: ['TA', 'AT', 'TE', 'TO','OT'] }
                ]
            },
            'word-building': {
                title: 'Construcción de Palabras',
                items: [
                    { target: 'CASA', options: ['CASA', 'COSA', 'SACA', 'CASe'] },
                    { target: 'MESA', options: ['MESA', 'SEMA', 'MASE', 'MASO'] },
                    { target: 'GATO', options: ['GATO', 'TOGA', 'GOTA', 'GATO'] },
                    { target: 'LUNA', options: ['LUNA', 'NULA', 'ULNA', 'LUNA'] },
                    { target: 'SILLA', options: ['SILLA', 'SILLA', 'LISAS', 'SILLA'] }
                ]
            }
        };

        const dysgraphiaData = {
            'letter-tracing': {
                title: 'Trazo de Letras',
                prompts: [
                    { prompt: 'Escribe la letra "A" mayúscula', answer: 'A' },
                    { prompt: 'Escribe la letra "m" minúscula', answer: 'm' },
                    { prompt: 'Escribe la letra "R" mayúscula', answer: 'R' },
                    { prompt: 'Escribe la letra "p" minúscula', answer: 'p' },
                    { prompt: 'Escribe la letra "T" mayúscula', answer: 'T' }
                ]
            },
            'word-formation': {
                title: 'Formación de Palabras',
                prompts: [
                    { prompt: 'Escribe la palabra: MESA', answer: 'MESA' },
                    { prompt: 'Escribe la palabra: CASA', answer: 'CASA' },
                    { prompt: 'Escribe la palabra: GATO', answer: 'GATO' },
                    { prompt: 'Escribe la palabra: LUNA', answer: 'LUNA' },
                    { prompt: 'Escribe la palabra: SILLA', answer: 'SILLA' }
                ]
            },
            'visual-spelling': {
                title: 'Ortografía Visual',
                prompts: [
                    { prompt: 'Escribe la palabra que representa esta imagen: 🏠', answer: 'CASA' },
                    { prompt: 'Escribe la palabra que representa esta imagen: 🐱', answer: 'GATO' },
                    { prompt: 'Escribe la palabra que representa esta imagen: 🌙', answer: 'LUNA' },
                    { prompt: 'Escribe la palabra que representa esta imagen: 🪑', answer: 'SILLA' },
                    { prompt: 'Escribe la palabra que representa esta imagen: 🍎', answer: 'MANZANA' }
                ]
            }
        };

        const dyscalculiaData = {
            'number-recognition': {
                title: 'Reconocimiento de Números',
                problems: [
                    { problem: '¿Qué número es este?', display: '5', value: 5, options: [3, 5, 7, 9] },
                    { problem: '¿Qué número es este?', display: '8', value: 8, options: [6, 8, 10, 12] },
                    { problem: '¿Qué número es este?', display: '12', value: 12, options: [10, 12, 14, 16] },
                    { problem: '¿Qué número es este?', display: '15', value: 15, options: [13, 15, 17, 19] },
                    { problem: '¿Qué número es este?', display: '20', value: 20, options: [18, 20, 22, 24] }
                ]
            },
            'basic-operations': {
                title: 'Operaciones Básicas',
                problems: [
                    { problem: '3 + 2 = ?', answer: 5 },
                    { problem: '7 - 4 = ?', answer: 3 },
                    { problem: '5 + 6 = ?', answer: 11 },
                    { problem: '9 - 3 = ?', answer: 6 },
                    { problem: '4 + 7 = ?', answer: 11 }
                ]
            },
            'visual-problems': {
                title: 'Problemas Visuales',
                problems: [
                    { problem: '🍎🍎🍎 + 🍎🍎 = ?', answer: 5 },
                    { problem: '🔴🔴🔴🔴🔴 - 🔴🔴 = ?', answer: 3 },
                    { problem: '⚫⚫⚫ + ⚫⚫⚫⚫ = ?', answer: 7 },
                    { problem: '🟢🟢🟢🟢🟢🟢 - 🟢🟢🟢 = ?', answer: 3 },
                    { problem: '🔵🔵🔵🔵 + 🔵🔵🔵 = ?', answer: 7 }
                ]
            }
        };

        // Variables globales
        let currentActivity = null;
        let currentExerciseIndex = 0;
        let correctAnswers = 0;
        let totalExercises = 0;
        let currentMathAnswer = '';

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            // Navegación por pestañas
            const tabButtons = document.querySelectorAll('.tab-button');
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tabId = this.getAttribute('data-tab');
                    
                    // Actualizar botones activos
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Mostrar contenido activo
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    document.getElementById(tabId).classList.add('active');
                    
                    // Ocultar áreas de ejercicio al cambiar de pestaña
                    document.querySelectorAll('.exercise-area').forEach(area => {
                        area.style.display = 'none';
                    });
                });
            });
            
            // Botones de inicio de actividad
            document.querySelectorAll('.start-activity').forEach(button => {
                button.addEventListener('click', function() {
                    const activityType = this.getAttribute('data-activity');
                    startActivity(activityType);
                });
            });
            
            // Botón siguiente para ejercicios de dislexia
            document.getElementById('next-btn').addEventListener('click', nextDyslexiaExercise);
            
            // Botón de verificación para ejercicios de disgrafía
            document.getElementById('check-writing').addEventListener('click', checkWriting);
            
            // Botón siguiente para ejercicios de disgrafía
            document.getElementById('next-writing').addEventListener('click', nextDysgraphiaExercise);
            
            // Botón siguiente para ejercicios de discalculia
            document.getElementById('next-math').addEventListener('click', nextDyscalculiaExercise);
            
            // Aplicar configuración
            document.getElementById('apply-settings').addEventListener('click', applySettings);
            
            // Inicializar teclado numérico para discalculia
            initNumberPad();
        });

        // Iniciar actividad
        function startActivity(activityType) {
            // Determinar el tipo de dificultad
            let difficulty, exerciseArea, data;
            
            if (activityType in dyslexiaData) {
                difficulty = 'dyslexia';
                exerciseArea = document.getElementById('dyslexia-exercise');
                data = dyslexiaData[activityType];
            } else if (activityType in dysgraphiaData) {
                difficulty = 'dysgraphia';
                exerciseArea = document.getElementById('dysgraphia-exercise');
                data = dysgraphiaData[activityType];
            } else if (activityType in dyscalculiaData) {
                difficulty = 'dyscalculia';
                exerciseArea = document.getElementById('dyscalculia-exercise');
                data = dyscalculiaData[activityType];
            } else {
                console.error('Tipo de actividad no reconocido:', activityType);
                return;
            }
            
            // Configurar la actividad
            currentActivity = activityType;
            currentExerciseIndex = 0;
            correctAnswers = 0;
            totalExercises = data.items ? data.items.length : data.prompts ? data.prompts.length : data.problems.length;
            
            // Mostrar el área de ejercicio
            exerciseArea.style.display = 'block';
            
            // Iniciar el primer ejercicio
            if (difficulty === 'dyslexia') {
                startDyslexiaExercise();
            } else if (difficulty === 'dysgraphia') {
                startDysgraphiaExercise();
            } else if (difficulty === 'dyscalculia') {
                startDyscalculiaExercise();
            }
        }

        // Ejercicios para dislexia
        function startDyslexiaExercise() {
            const data = dyslexiaData[currentActivity];
            const exercise = data.items[currentExerciseIndex];
            
            document.getElementById('exercise-title').textContent = data.title;
            document.getElementById('target-word').textContent = exercise.target;
            
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';
            
            // Mezclar opciones
            const shuffledOptions = [...exercise.options].sort(() => Math.random() - 0.5);
            
            shuffledOptions.forEach(option => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option';
                optionElement.textContent = option;
                optionElement.addEventListener('click', function() {
                    checkDyslexiaAnswer(option, exercise.target);
                });
                optionsContainer.appendChild(optionElement);
            });
            
            // Reiniciar elementos de UI
            document.getElementById('feedback').style.display = 'none';
            document.getElementById('next-btn').style.display = 'none';
            updateProgress();
        }

        function checkDyslexiaAnswer(selected, correct) {
            const options = document.querySelectorAll('.option');
            const feedback = document.getElementById('feedback');
            
            options.forEach(option => {
                option.style.pointerEvents = 'none'; // Deshabilitar más clics
                
                if (option.textContent === correct) {
                    option.classList.add('correct');
                } else if (option.textContent === selected && selected !== correct) {
                    option.classList.add('incorrect');
                }
            });
            
            if (selected === correct) {
                feedback.textContent = '¡Correcto!';
                feedback.className = 'feedback success';
                correctAnswers++;
            } else {
                feedback.textContent = `Incorrecto. La respuesta correcta es: ${correct}`;
                feedback.className = 'feedback error';
            }
            
            feedback.style.display = 'block';
            document.getElementById('next-btn').style.display = 'block';
            updateProgress();
        }

        function nextDyslexiaExercise() {
            currentExerciseIndex++;
            
            if (currentExerciseIndex < totalExercises) {
                startDyslexiaExercise();
            } else {
                finishActivity();
            }
        }

        // Ejercicios para disgrafía - CORREGIDOS
        function startDysgraphiaExercise() {
            const data = dysgraphiaData[currentActivity];
            const promptData = data.prompts[currentExerciseIndex];
            
            document.getElementById('dysgraphia-exercise-title').textContent = data.title;
            document.getElementById('writing-prompt').textContent = promptData.prompt;
            
            // Reiniciar elementos de UI
            document.getElementById('writing-input').value = '';
            document.getElementById('writing-feedback').style.display = 'none';
            document.getElementById('next-writing').style.display = 'none';
            updateProgress();
        }

        function checkWriting() {
            const input = document.getElementById('writing-input').value.trim();
            const promptData = dysgraphiaData[currentActivity].prompts[currentExerciseIndex];
            const feedback = document.getElementById('writing-feedback');
            
            if (input.toUpperCase() === promptData.answer.toUpperCase()) {
                feedback.textContent = '¡Excelente! Escritura correcta.';
                feedback.className = 'feedback success';
                correctAnswers++;
            } else {
                feedback.textContent = `Intenta de nuevo. La forma correcta es: ${promptData.answer}`;
                feedback.className = 'feedback error';
            }
            
            feedback.style.display = 'block';
            document.getElementById('next-writing').style.display = 'block';
            updateProgress();
        }

        function nextDysgraphiaExercise() {
            currentExerciseIndex++;
            
            if (currentExerciseIndex < totalExercises) {
                startDysgraphiaExercise();
            } else {
                finishActivity();
            }
        }

        // Ejercicios para discalculia - CORREGIDOS
        function startDyscalculiaExercise() {
            const data = dyscalculiaData[currentActivity];
            const problem = data.problems[currentExerciseIndex];
            
            document.getElementById('dyscalculia-exercise-title').textContent = data.title;
            document.getElementById('math-problem').textContent = problem.problem;
            
            // Mostrar el número para reconocimiento numérico
            const numberDisplay = document.getElementById('number-display');
            if (currentActivity === 'number-recognition' && problem.display) {
                numberDisplay.textContent = problem.display;
                numberDisplay.style.display = 'block';
                document.getElementById('math-problem').textContent = problem.problem;
            } else {
                numberDisplay.style.display = 'none';
            }
            
            // Configurar según el tipo de ejercicio
            if (currentActivity === 'number-recognition') {
                setupNumberRecognition(problem);
            } else {
                // Para operaciones básicas y problemas visuales
                document.getElementById('number-pad').style.display = 'grid';
                currentMathAnswer = '';
                initNumberPad();
            }
            
            // Reiniciar elementos de UI
            document.getElementById('math-feedback').style.display = 'none';
            document.getElementById('next-math').style.display = 'none';
            updateProgress();
        }

        function setupNumberRecognition(problem) {
            const numberPad = document.getElementById('number-pad');
            numberPad.innerHTML = '';
            numberPad.style.display = 'grid';
            
            // Crear botones para las opciones
            problem.options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'number-btn';
                btn.textContent = option;
                btn.addEventListener('click', function() {
                    checkMathAnswer(option, problem.value);
                });
                numberPad.appendChild(btn);
            });
        }

        function initNumberPad() {
            const numberPad = document.getElementById('number-pad');
            
            // Solo inicializar si está vacío o para operaciones básicas/visuales
            if (numberPad.children.length === 0 || currentActivity !== 'number-recognition') {
                numberPad.innerHTML = '';
                numberPad.style.display = 'grid';
                
                // Crear teclado numérico del 1 al 9
                for (let i = 1; i <= 9; i++) {
                    const btn = document.createElement('button');
                    btn.className = 'number-btn';
                    btn.textContent = i;
                    btn.addEventListener('click', function() {
                        handleNumberInput(i);
                    });
                    numberPad.appendChild(btn);
                }
                
                // Botón para 0
                const zeroBtn = document.createElement('button');
                zeroBtn.className = 'number-btn';
                zeroBtn.textContent = '0';
                zeroBtn.addEventListener('click', function() {
                    handleNumberInput(0);
                });
                numberPad.appendChild(zeroBtn);
                
                // Botón para enviar respuesta
                const submitBtn = document.createElement('button');
                submitBtn.className = 'number-btn';
                submitBtn.textContent = '✓';
                submitBtn.style.backgroundColor = 'var(--success)';
                submitBtn.style.color = 'white';
                submitBtn.addEventListener('click', function() {
                    const currentProblem = dyscalculiaData[currentActivity].problems[currentExerciseIndex];
                    checkMathAnswer(parseInt(currentMathAnswer) || 0, currentProblem.answer);
                });
                numberPad.appendChild(submitBtn);
            }
        }

        function handleNumberInput(number) {
            currentMathAnswer += number.toString();
            document.getElementById('math-problem').textContent = 
                dyscalculiaData[currentActivity].problems[currentExerciseIndex].problem + ' ' + currentMathAnswer;
        }

        function checkMathAnswer(selected, correct) {
            const feedback = document.getElementById('math-feedback');
            
            // Para number-recognition, selected ya es el número
            // Para otras actividades, necesitamos usar currentMathAnswer
            let answerToCheck = selected;
            if (currentActivity !== 'number-recognition') {
                answerToCheck = parseInt(currentMathAnswer) || 0;
            }
            
            if (answerToCheck === correct) {
                feedback.textContent = '¡Correcto!';
                feedback.className = 'feedback success';
                correctAnswers++;
            } else {
                feedback.textContent = `Incorrecto. La respuesta es: ${correct}`;
                feedback.className = 'feedback error';
            }
            
            feedback.style.display = 'block';
            document.getElementById('next-math').style.display = 'block';
            updateProgress();
        }

        function nextDyscalculiaExercise() {
            currentExerciseIndex++;
            currentMathAnswer = '';
            
            if (currentExerciseIndex < totalExercises) {
                startDyscalculiaExercise();
            } else {
                finishActivity();
            }
        }

        // Finalizar actividad
        function finishActivity() {
            const score = Math.round((correctAnswers / totalExercises) * 100);
            alert(`¡Actividad completada!\nPuntuación: ${score}% (${correctAnswers}/${totalExercises} correctas)`);
            
            // Ocultar área de ejercicio
            document.querySelectorAll('.exercise-area').forEach(area => {
                area.style.display = 'none';
            });
        }

        // Actualizar barra de progreso
        function updateProgress() {
            const progress = document.getElementById('progress');
            const percentage = ((currentExerciseIndex + 1) / totalExercises) * 100;
            progress.style.width = `${percentage}%`;
        }

        // Aplicar configuración de accesibilidad
        function applySettings() {
            const dyslexicFont = document.getElementById('dyslexic-font').checked;
            const audioFeedback = document.getElementById('audio-feedback');
            const visualAids = document.getElementById('visual-aids');
            const fontSize = document.getElementById('font-size').value;
            const contrast = document.getElementById('contrast').value;
            
            // Aplicar fuente para dislexia
            if (dyslexicFont) {
                document.body.classList.add('dyslexic-font');
            } else {
                document.body.classList.remove('dyslexic-font');
            }
            
            // Aplicar tamaño de fuente
            if (fontSize === 'large') {
                document.body.style.fontSize = '1.2rem';
            } else if (fontSize === 'x-large') {
                document.body.style.fontSize = '1.4rem';
            } else {
                document.body.style.fontSize = '1rem';
            }
            
            // Aplicar contraste
            if (contrast === 'high') {
                document.body.style.backgroundColor = '#000';
                document.body.style.color = '#fff';
                document.querySelectorAll('.tab-content, .activity-card').forEach(el => {
                    el.style.backgroundColor = '#333';
                    el.style.color = '#fff';
                });
            } else if (contrast === 'dark') {
                document.body.style.backgroundColor = '#1a1a1a';
                document.body.style.color = '#e0e0e0';
                document.querySelectorAll('.tab-content, .activity-card').forEach(el => {
                    el.style.backgroundColor = '#2d2d2d';
                    el.style.color = '#e0e0e0';
                });
            } else {
                document.body.style.backgroundColor = '';
                document.body.style.color = '';
                document.querySelectorAll('.tab-content, .activity-card').forEach(el => {
                    el.style.backgroundColor = '';
                    el.style.color = '';
                });
            }
            
            alert('Configuración aplicada correctamente');
        }