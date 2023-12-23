
const questions = [
    {
        question: "¿Cuándo entró en vigor la ley 10 de 1994?",
        options: [
            "26 de abril de 1994",
            "24 de julio de 1994",
            "15 de mayo de 1994",
            "5 de septiembre de 1994"
        ],
        answer: "24 de julio de 1994"
    },
    {
        question: "¿Cuántos miembros componen la Junta de Corredores, Vendedores y Empresas de Bienes Raíces?",
        options: [
            "5; 3 Corredores, 1 Abogado que representa al interés público, 1 persona de cualquier profesión que representa al consumidor",
            "6; 4 Corredores, 1 Abogado que representa a los consumidores e interés público, 1 representante de entidades gubernamentales",
            "4; 2 Corredores, 1 Abogado que representa al interés público, 1 representante de instituciones financieras",
            "7; 5 Corredores, 1 Abogado, 1 representante de la Asociación de Bienes Raíces"
        ],
        answer: "5; 3 Corredores, 1 Abogado que representa al interés público, 1 persona de cualquier profesión que representa al consumidor"
    },
    {
        question: "¿Cuántas veces al año la Junta ofrecerá el examen de Corredor y Vendedor de Bienes Raíces?",
        options: [
            "2 para Corredor y 2 para Vendedor y deben de transcurrir 60 días entre examen",
            "3 para Corredor y 3 para Vendedor y deben de transcurrir 45 días entre examen",
            "4 para Corredor y 2 para Vendedor y deben de transcurrir 30 días entre examen",
            "1 para Corredor y 2 para Vendedor y deben de transcurrir 90 días entre examen"
        ],
        answer: "2 para Corredor y 2 para Vendedor y deben de transcurrir 60 días entre examen"
    },
    {
        question: "El Reglamento que complementa la ley 10 de 1994 es:",
        options: [
            "5567 – Reglamento para implantar la ley 10",
            "Reglamento #5 - Reglamento sobre Competencia Justa para regular en Puerto Rico el Negocio de Bienes Raíces localizadas en Puerto Rico y sus territorios",
            "4321 – Normativas para la Práctica Ética en Bienes Raíces",
            "Reglamento General de la Asociación de Corredores de Bienes Raíces"
        ],
        answer: "5567 – Reglamento para implantar la ley 10"
    },
    {
        question: "Los miembros de la Junta de Bienes Raíces se deben reunir:",
        options: [
            "Una vez por trimestre del año natural",
            "Una vez por trimestre del año fiscal",
            "Dos veces al año",
            "Una vez al mes"
        ],
        answer: "Una vez por trimestre del año natural"
    },
    {
        question: "¿Cada cuánto tiempo se renuevan las licencias de Corredores Vendedores y Empresas de Bienes Raíces?",
        options: [
            "Anualmente",
            "Cada 4 años naturales",
            "Cada 3 años desde la fecha de expedición",
            "Cada 2 años desde la fecha de expedición"
        ],
        answer: "Cada 4 años desde la fecha de expedición"
    },
    {
        question: "Pasados 90 días de estar vencida su licencia, usted tiene que:",
        options: [
            "Tomar nuevamente el curso preparatorio y el examen de reválida",
            "Hacer una declaración jurada haciendo constar que no ha hecho negocios con la licencia vencida",
            "Renovarla con una multa adicional",
            "Someter un informe detallado de las actividades realizadas durante el período vencido"
        ],
        answer: "Hacer una declaración jurada haciendo constar que no ha hecho negocios con la licencia vencida"
    },
    {
        question: "La fianza para el Corredor y Vendedor es de:",
        options: [
            "$20,000 para el Corredor y $10,000 para el Vendedor",
            "$10,000 para el Corredor y $10,000 para el Vendedor",
            "$15,000 para el Corredor y $5,000 para el Vendedor",
            "$25,000 para el Corredor y $15,000 para el Vendedor"
        ],
        answer: "$10,000 para el Corredor y $10,000 para el Vendedor"
    },
    {
        question: "Se debe usar en los anuncios:",
        options: [
            "Número de cuenta plica",
            "Letras grandes",
            "Teléfonos y/o dirección, nombre y número de licencia",
            "Colores llamativos"
        ],
        answer: "Teléfonos y/o dirección, nombre y número de licencia"
    },
   {
        "question": "¿Qué ley creó (a) la Junta de Corredores, Vendedores y Empresas de Bienes Raíces?",
        "options": [
            "Ley 139 del 14 de junio de 1980",
            "Ley 10 del 26 de abril de 1994",
            "Ley 7 del 15 de diciembre de 1980",
            "Ley 72 del 28 de julio de 1965"
        ],
        "answer": "Ley 139 del 14 de junio de 1980"
    },
    {
        "question": "¿Qué regula el Reglamento #4?",
        "options": [
            "La venta de propiedades localizadas en Puerto Rico",
            "La venta de propiedades localizadas fuera de Puerto Rico",
            "El alquiler de propiedades en Puerto Rico",
            "La gestión de propiedades turísticas en Puerto Rico"
        ],
        "answer": "La venta de propiedades localizadas fuera de Puerto Rico"
    },
    {
        "question": "La cuenta de plica se conoce como:",
        "options": [
            "Cuenta de ahorro",
            "Cuenta especial",
            "Fondo fiduciario",
            "Cuenta bancaria segregada"
        ],
        "answer": "Cuenta especial"
    },
    {
        "question": "La Junta de Bienes Raíces canceló la licencia de un Corredor de Bienes Raíces porque este no pagó la pensión alimentaria. La Junta:",
        "options": [
            "Puede hacerlo",
            "No puede hacerlo",
            "Puede hacerlo temporalmente",
            "Puede sancionarlo, pero no cancelar su licencia"
        ],
        "answer": "Puede hacerlo"
    },
    {
        "question": "La ley 10 de 26 de abril de 1994 es:",
        "options": [
            "Ley para Reglamentar el Negocio de Bienes Raíces y la profesión de Corredor, Vendedor y Empresas de Bienes Raíces en Puerto Rico",
            "Ley para Reglamentar la profesión de Corredor, Vendedor y Empresa de Bienes Raíces en Puerto Rico"
        ],
        "answer": "Ley para Reglamentar el Negocio de Bienes Raíces y la profesión de Corredor, Vendedor y Empresas de Bienes Raíces en Puerto Rico"
    },
    {
        "question": "¿Cuánto tienen los Corredores, Vendedores y Empresas de bienes Raíces, una vez que reciben su licencia, para notificar a DACO sobre la cuenta Plica?",
        "options": [
            "30 días",
            "Inmediatamente",
            "15 días",
            "60 días"
        ],
        "answer": "30 días"
    },
    {
        "question": "Según la Ley 10, algunos de los requisitos para que la Junta de Bienes Raíces pueda expedir una licencia de Vendedor de Bienes Raíces son:",
        "options": [
            "Curso de 60 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar.",
            "Curso de 72 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar.",
            "Curso de 50 horas de clases, 21 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar.",
            "Curso de 40 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar."
        ],
        "answer": "Curso de 60 horas de clases, 18 años, Diploma de Escuela Superior y presentar evidencia de la cuenta de plica del Corredor de Bienes Raíces o Empresa con la cual va a trabajar."
    },
    {
        "question": "El Reglamento 5567 que complementa la Ley 10 impone multas de hasta:",
        "options": [
            "$10,000",
            "$5,000",
            "$20,000",
            "$15,000"
        ],
        "answer": "$5,000"
    },
    {
        "question": "¿Quién está a cargo de mantener un registro profesional actualizado de todas las licencias de Bienes Raíces?",
        "options": [
            "La Junta",
            "DACO",
            "Departamento de Justicia",
            "Secretaría de Gobierno"
        ],
        "answer": "La Junta"
    },
    {
        "question": "¿Qué se puede obtener en el registro profesional de Corredores, Vendedores y Empresas de bienes raíces?",
        "options": [
            "Información de la cuenta plica",
            "Vigencia de la licencia",
            "Datos de la fianza",
            "Antecedentes penales"
        ],
        "answer": "Vigencia de la licencia"
    },
    {
        "question": "Reciprocidad significa",
        "options": [
            "La concesión de licencia sin haber tomado el examen",
            "La concesión de licencia sin haber tomado el curso",
            "El intercambio de licencias entre estados",
            "La cancelación de licencias por incumplimiento"
        ],
        "answer": "La concesión de licencia sin haber tomado el examen"
    },
    {
        "question": "¿Qué personas o figuras están exentos de la Ley 10?",
        "options": [
            "Abogados, apoderados, albaceas y designados por tribunales",
            "Abogados, apoderados, albaceas, designados por tribunales y propietarios no habituales",
            "Abogados y apoderados",
            "Propietarios no habituales y albaceas"
        ],
        "answer": "Abogados, apoderados, albaceas, designados por tribunales y propietarios no habituales"
    },
    {
        "question": "¿Cómo debe ser el examen de reválida?",
        "options": [
            "Actualizado conforme a las leyes aplicables",
            "Proporcional a los temas del curso",
            "Reducido a la mitad del examen original",
            "Eliminado si se tiene experiencia laboral verificada"
        ],
        "answer": "Proporcional a los temas del curso"
    },
    {
        "question": "El examen de reválida se ofrece en:",
        "options": [
            "Español",
            "Inglés",
            "Inglés o español, según lo solicite el aspirante",
            "En cualquier idioma que lo solicite el estudiante"
        ],
        "answer": "Inglés o español, según lo solicite el aspirante"
    },
    {
        "question": "La Ley 93 del 26 de mayo de 2006, ley que enmendó el Artículo 31 de la Ley Núm. 10 de 26 de abril de 1994, dispone lo siguiente:",
        "options": [
            "Que hay que notificar y orientar al propietario previo a la firma del contrato de corretaje y al prospecto comprador previo al otorgamiento de un contrato de opción o compraventa, sobre la necesidad y conveniencia de realizar una inspección física de la propiedad por un profesional, debidamente licenciado por el Estado Libre Asociado de Puerto Rico.",
            "Que previo al otorgamiento de un contrato de corretaje o listado neto, hay que orientar adecuadamente al cliente sobre el alcance de la transacción y la conveniencia de utilizar los servicios de un tasador profesional."
        ],
        "answer": "Que hay que notificar y orientar al propietario previo a la firma del contrato de corretaje y al prospecto comprador previo al otorgamiento de un contrato de opción o compraventa, sobre la necesidad y conveniencia de realizar una inspección física de la propiedad por un profesional, debidamente licenciado por el Estado Libre Asociado de Puerto Rico."
    },
    {
        "question": "Toda persona que sin la licencia correspondiente se dedicare al ejercicio de la profesión de corredor o vendedor de bienes raíces en Puerto Rico, o que emplee a otra persona sin licencia para este ejercicio, incurrirá en:",
        "options": [
            "Delito menos grave y convicta que fuere, será castigada con multa de quinientos (500) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal.",
            "Delito grave y convicta que fuere, será castigada con multa de quinientos (500) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal."
        ],
        "answer": "Delito menos grave y convicta que fuere, será castigada con multa de quinientos (500) dólares o cárcel por un período no mayor de seis (6) meses o ambas penas, a discreción del tribunal."
    },
    {
        "question": "Cuando sea final la transacción de compra o arrendamiento de una propiedad, el corredor tendrá un término máximo de horas para excluirla de cualquier listado de propiedades disponibles o para informar que la misma ya ha sido vendida y/o arrendada. El término es de:",
        "options": [
            "24 horas",
            "36 horas",
            "72 horas",
            "48 horas"
        ],
        "answer": "72 horas"
    },
    {
        "question": "El Reglamento Educativo 7962, derogado por el Reglamento 9101, integró cambios significativos relacionados a:",
        "options": [
            "Las Escuelas de Bienes Raíces",
            "Los Instructores Generales y Especializados",
            "Las Empresas de Bienes Raíces",
            "Los programas de formación continua"
        ],
        "answer": "Los Instructores Generales y Especializados"
    },
    {
        "question": "¿Cuál fue el cambio significativo en el Reglamento Educativo 9101 con respecto al requisito de que tanto el Instructor General como el Instructor Especializado fueran Corredores de Bienes Raíces?",
        "options": [
            "Se elimina el requisito de que ambos Instructores tienen que ser Corredores de Bienes Raíces, ahora solo necesitan ser especialistas en su área",
            "Ahora el Instructor General tiene que ser Corredor de Bienes Raíces, pero no así el Instructor Especializado",
            "Se añaden a los Vendedores de Bienes Raíces como Instructores",
            "Ahora ambos instructores pueden ser propietarios sin experiencia previa como corredores"
        ],
        "answer": "Ahora el Instructor General tiene que ser Corredor de Bienes Raíces, pero no así el Instructor Especializado"
    },
    {
        "question": "Luis Corredor le recomienda a Pedro Comprador que financie la propiedad en 'Banco Dorado' y le informa que él tiene intereses en dicho banco. Pedro Comprador accede a procesar el financiamiento con esa institución. ¿Cuál es la situación ética?",
        "options": [
            "No fue ético porque hay un claro conflicto de interés",
            "Es ético por que le informó al comprador que él tenía un interés particular con la institución",
            "Es ético si el banco ofrece las mejores tasas",
            "No hay problema, siempre y cuando el comprador esté de acuerdo con la financiación"
        ],
        "answer": "Es ético por que le informó al comprador que él tenía un interés particular con la institución"
    },
  {
        question: "¿Qué ley creó (a) la Junta Examinadora?",
        options: [
            "Ley 139",
            "Ley 10",
            "Ley 200",
            "Ley 300"
        ],
        answer: "Ley 139"
    }
];
let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultText = document.getElementById('result');
const nextButton = document.getElementById('nextBtn');

function displayQuestion() {
    questionText.innerHTML = `<strong>${questions[currentQuestion].question}</strong>`;

    const options = questions[currentQuestion].options;
    const shuffledOptions = shuffleArray(options); // Reordenar aleatoriamente las respuestas
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerHTML = `<strong>${option}</strong>`; // Texto del botón en negrita
        optionButton.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(optionButton);
    });
}

function shuffleArray(array) {
    // Función para reordenar aleatoriamente un array (algoritmo de Fisher-Yates)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function checkAnswer(e) {
    const selectedOption = e.target.innerText;
    const correctAnswer = questions[currentQuestion].answer;

    if (selectedOption === correctAnswer) {
        e.target.style.backgroundColor = '#4CAF50'; // Respuesta correcta (verde)
        score++;
    } else {
        e.target.style.backgroundColor = '#FF0000'; // Respuesta incorrecta (rojo)
        
        // Mostrar la respuesta correcta en verde
        const options = optionsContainer.children;
        for (let i = 0; i < options.length; i++) {
            if (options[i].innerText === correctAnswer) {
                options[i].style.backgroundColor = '#4CAF50';
            }
        }
    }

    optionsContainer.childNodes.forEach(button => {
        button.removeEventListener('click', checkAnswer);
    });

    displayResult();
}

function displayResult() {
    resultText.innerHTML = `Respuestas correctas: ${score}/${questions.length}`;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
        resultText.innerHTML = '';
        nextButton.style.display = 'none';
    } else {
        optionsContainer.innerHTML = '';
        questionText.innerHTML = '';
        resultText.innerHTML = `Respuestas correctas: ${score}/${questions.length}`;
        nextButton.innerHTML = '<strong>Reiniciar</strong>';
        nextButton.removeEventListener('click', nextQuestion);
        nextButton.addEventListener('click', restartQuiz);
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    resultText.innerHTML = '';
    nextButton.innerHTML = '<strong>Siguiente Pregunta</strong>';
    nextButton.removeEventListener('click', restartQuiz);
    nextButton.addEventListener('click', nextQuestion);
}

nextButton.addEventListener('click', nextQuestion);
displayQuestion();