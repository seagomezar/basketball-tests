import spanishMessages from '@blackbox-vision/ra-language-spanish';

export const es = {
  ...spanishMessages,
  "Missing Refresh Token (audience: '', scope: 'openid profile email offline_access')":
    'Por favor inicie sesion para ingresar!',
  myroot: {
    password: 'Contraseña',
    addressAndPhone: 'Dirección & Teléfono',
    identity: 'Identidad',
    male: 'Masculino',
    female: 'Femenino',
    mediciones: 'Mediciones',
    AddressPhone: 'direccion y telefono',
    pliegues: 'Pliegues (m.m)',
    perímetros: 'Perímetros (cm)',
    diametro: 'Diametro (cm)',
    somatotipo: 'Somatotipo de Referencia',
    empty: 'No hay elementos creados',
    grams: 'Gramos',
    total_calories: 'Calorías Totales',
    simulate_results: 'Simular Resultados',
    welcomelogin: 'Bienvenido al portal del Pruebas',
    login: 'Autenticarse',
    bodyComposition: 'composicion corporal',
    fatPercentageIndices: 'indices de porcentaje de grasa',
    welcomeScheduler: 'Citas para evaluaciones esta semana',
    ExpectedValues: 'Valores Esperados',
    "somatotipo de referencia": "Somatotipo de Referencia",
    "somatotipo actual": "Somatotipo Actual",
    endomorph: "Sebas"
  },
  resources: {
    user: {
      name: 'Usuario |||| Usuarios',
      fields: {
        firstname: 'Nombre',
        lastname: 'Apellido',
        email: 'Correo Eletronico',
        phone: 'Teléfono',
        address: 'Dirección',
        birthday: 'Fecha De Nacimiento',
        gender: 'Genero',
        created_at: 'Creado',
        updated_at: 'Actualizado',
        password: 'Contraseña',
        confirm_password: 'Confirmar Contraseña',
        plans: 'Planes de Alimentación',
        measurements: 'Mediciones',
        nutritionist: 'Nutricionista',
      },
    },
    measurement: {
      name: 'Medición |||| Mediciones',
      fields: {
        nutritionist_id: 'Nutricionista',
        evaluation_date: 'Fecha de Evaluación',
        dm_elbow: 'Diámetro Codo (cms)',
        dm_knee: 'Diámetro rodilla (cms)',
        dm_wrist: 'Diámetro muñeca (cms)',
        plg_triceps: 'Pliege triceps(mm)',
        plg_bicep: 'Pliege bicep (mm)',
        plg_subscapular: 'Pliege subscapular (mm) ',
        plg_suprailiac: 'Pliege suprailiaco (mm)',
        plg_supraspinal: 'Plige supraspinal (mm)',
        plg_abdominal: 'Pliege abdominal (mm)',
        plg_thigh: 'Pliege muslo (mm)',
        plg_calf: 'Pliege pierna (mm)',
        plg_armpit: 'Pliege Axila (mm)',
        plg_chest: 'Pliege pecho (mm)',
        prm_arm: 'Perímetro brazo (cms)',
        prm_arm_contracted: 'Perímetro brazo contraido (cms)',
        prm_wrist: 'Perimetro muñeca (cms)',
        prm_waist: 'Perímetro cintura (cms)',
        prm_hip: 'Perímetro cadera (cms)',
        prm_calf: 'Perímetro pierna (cms)',
        prm_chest: 'Perímetro pecho (cms)',
        prm_thigh: 'Perímetro muslo (cms)',
        x: 'x',
        y: 'y',
        fitness_level: 'Nivel de entrenamiento',
        height: 'Altura (Cms)',
        weight: 'Peso (Kg)',
        creatinine: 'Creatinine',
        t3_t4: 't3_t4',
        triglycerides: 'Triglicérios',
        uric_acid: 'Ácido úrico',
        user_id: 'Usuario',
        referenced_somatotype_id: 'Deporte',
        control: 'Control',
        notes: 'notas',
        resultX: 'Resultado X',
        resultY: 'Resultado Y',
        endomorph: 'Endomorfo',
        mesomorph: 'Mesomorfo',
        ectomorph: 'Ectomorfo',
        imc: 'IMC',
        iaks: 'IAKS',
        conicIndex: 'Índice Cónico',
        sumOfPlgs: 'Suma de Pliegues',
        fatWeight: 'Peso de Grasa',
        freeFatWeight: 'Peso Libre de Grasa',
        desiredIMC: 'IMC Deseado',
        complexion: 'Compleción',
        desiredWeight: 'Peso Deseado',
        yhaszFatPercentage: 'Porcentaje de Grasa Yhasz',
        sumaPlieguesEndo: 'Suma de Pliegues Endo',
        desiredFat2MethodPercentage:'Porcentaje Deseado del Método 2 de Grasa',
        yhaszFatPercentageSumaPliegues:'Porcentaje de Grasa Yhasz Suma de Pliegues',
        fatPercentageForPerformance:'Porcentaje graso para rendimiento',
        trainingPeriod: 'Periodo de entrenamiento',
        modality: 'Modalidad',
        birthdayDate: 'Fecha de nacimiento',
        gender: 'Genero',
        age: 'Edad',
        parizcovaFatPercentage: 'Porcentaje de Grasa Parizcova',
        faulknerFatPercentage: 'Porcentaje de Grasa Faulkner',
        training_period:'periodo de entrenamiento',
      },
    },
    food_category: {
      name: 'Categoria |||| Categorias',
      fields: {
        name: 'Nombre',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    goal: {
      name: 'Objetivo |||| Objetivos',
      fields: {
        name: 'Nombre',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    plan: {
      name: 'Plan |||| Planes',
      summary: 'Resumen del Plan',
      add_to_plan: 'Añadir alimento',
      fields: {
        comments: 'Comentario',
        goal_id: 'Meta',
        user_id: 'Usuario',
        created_at: 'Creado',
        updated_at: 'Actualizado',
        prescribed_food: 'Alimentos en Plan',
      },
    },
    food_has_eating_moment: {
      name: 'Alimento X Momento',
      fields: {
        eating_moment_id: 'Momento',
        food_id: 'Alimento',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    food: {
      name: 'Alimento |||| Alimentos',
      fields: {
        calories: 'Calorías',
        chos: 'Carbohidratos',
        description: 'Descripción',
        fat: 'Grasa',
        measure_unit: 'Unidad de medida',
        protein: 'Proteína',
        quantity: 'Cantidad',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    food_has_food_category: {
      name: 'Categoria de alimento |||| Categoria de alimentos',
      fields: {
        food_id: 'Alimento',
        food_category_id: 'Categoria',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    eating_moment: {
      name: 'Momento |||| Momentos',
      fields: {
        name: 'Nombre',
        time: 'Hora',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    nutritionist: {
      name: 'Nutricionista |||| Nutricionistas',
      fields: {
        address: 'Dirección',
        email: 'Correo Electronico',
        firstname: 'Nombre',
        phone: 'Teléfono',
        lastname: 'Apellido',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    prescribed_food: {
      name: 'Alimentos en plan |||| Alimentos en planes',
      fields: {
        eating_moment_name: 'Momento',
        eating_moment_time: 'Hora',
        food_id: 'Alimento',
        plan_id: 'Plan',
        prescribed_quantity: 'Cantidad Prescrita',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    referenced_somatotype: {
      name: 'Somatotipo de referencia |||| Somatotipos de referencias',
      fields: {
        sport: 'Deporte',
        gender: 'Genero',
        endomorph: 'Endomorfo',
        mesomorph: 'Mesomorfo',
        ectomortph: 'Ectomorfo',
        x: 'x',
        y: 'y',
        created_at: 'Creado',
        updated_at: 'Actualizado',
      },
    },
    result: {
      name: 'Resultado |||| Resultados',
      body_type: 'Tipo de cuerpo',
      tabbed_data: 'Datos Tabulados',
      fat_percentages: 'Porcentajes de Grasa',
      imc_analysis: 'Análisis de IMC',
      x_y_compairson: 'Comparacion X / Y',
      x_y_actual: 'Resulado Actual',
      x_y_referenced: 'Referencia',
      historic: 'Histórico de Resultados',
      fields: {
        endomorph: 'Endomorfo',
        mesomorph: 'Mesomorfo',
        ectomorph: 'Ectomorfo',
        resultX: 'Resultado X',
        resultY: 'Resultado Y',
        imc: 'IMC',
        iaks: 'IAKS',
        complexion: 'Compleción',
        raizPT: 'Raíz PT',
        conicIndex: 'Índice Cónico',
        sumOfPlgs: 'Suma de Pliegues',
        sumaPlieguesEndo: 'Suma de Pliegues Endo',
        endoFactor: 'Factor Endo',
        yhaszFatPercentage: 'Porcentaje de Grasa Yhasz',
        ponderalIndex: 'Índice Ponderal',
        faulknerFatPercentage: 'Porcentaje de Grasa Faulkner',
        parizcovaFatPercentage: 'Porcentaje de Grasa Parizcova',
        fatWeight: 'Peso de Grasa',
        freeFatWeight: 'Peso Libre de Grasa',
        activeMass: 'Masa Activa',
        residualWeight: 'Peso Residual',
        desiredWeight: 'Peso Deseado',
        desiredIMC: 'IMC Deseado',
        desiredFat2MethodPercentage:
          'Porcentaje Deseado del Método 2 de Grasa',
      },
    },
    athlete:{
      name: 'Atleta |||| Atletas',
      fields: {
        name: 'Nombre',
        document: 'Documento',
        birth_date: 'Fecha Nacimiento',
        email: 'Correo Electronico',
        phone: 'Celular',
        club: 'Club',
        position: 'posición',
      },
    },
    skill_test:{
      name: 'Prueba de habilidad |||| Pruebas de habilidad',
      fields: {
        cod_sin: 'Test Defensa',
        cod_con_el: 'Test Dribling illinois',
        diff_percentage: 'T Derecha',
        d_der: 'Test Tiro 1min',
        d_izq: 'D Izq',
        tl: 'TL',
        athlete: 'Deportista',
        position: 'T izquierda',
      },
    },
    physical_test:{
      name: 'Prueba Física |||| Puebas Físicas',
      fields:{
        position: 'Posición',
        weight: 'Peso',
        height: 'Altura',
        wingspan: 'Envergadura',
        five_mt: '5 Mt',
        ten_mt: '10 Mt',
        t_test_left: 'T Izquierda',
        t_test_right: 'T Derecha',
        cmj: 'Prueba Salto (Cmj)',
        legger: 'Legger',
        athlete: 'Deportista',
      },
    },
  },
};
