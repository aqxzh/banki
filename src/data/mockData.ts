import { Employee, SectorInfo } from '../types/employee';

export const sectors: SectorInfo[] = [
  {
    id: 'all',
    name: 'Все сферы',
    color: '#64748B',
    educationTypes: ['Высшее', 'Среднее специальное'],
    experienceRange: '1-30 лет'
  },
  {
    id: 'finance',
    name: 'Финансы',
    color: '#2563EB',
    educationTypes: ['Экономическое', 'Финансовое'],
    experienceRange: '3-15 лет'
  },
  {
    id: 'education',
    name: 'Образование',
    color: '#10B981',
    educationTypes: ['Педагогическое', 'Филологическое'],
    experienceRange: '5-25 лет'
  },
  {
    id: 'healthcare',
    name: 'Здравоохранение',
    color: '#EF4444',
    educationTypes: ['Медицинское', 'Фармацевтическое'],
    experienceRange: '3-20 лет'
  },
  {
    id: 'transport',
    name: 'Транспорт',
    color: '#F59E0B',
    educationTypes: ['Техническое', 'Транспортное'],
    experienceRange: '2-18 лет'
  }
];

export const employees: Employee[] = [
  {
    id: 'emp001',
    name: 'Иванова Елена Петровна',
    position: 'Главный финансовый аналитик',
    sector: 'finance',
    category: 'C-1',
    department: 'Министерство финансов',
    education: {
      level: 'Экономическое высшее',
      institution: 'МГУ им. Ломоносова, Факультет экономики'
    },
    experience: {
      years: 12,
      description: 'Опыт работы в финансовом анализе, бюджетировании и стратегическом планировании'
    },
    age: 38
  },
  {
    id: 'emp002',
    name: 'Смирнов Алексей Викторович',
    position: 'Старший бухгалтер',
    sector: 'finance',
    category: 'C-2',
    department: 'Министерство финансов',
    education: {
      level: 'Финансовое высшее',
      institution: 'РЭУ им. Плеханова, Бухгалтерский учет'
    },
    experience: {
      years: 8,
      description: 'Опыт ведения бухгалтерского учета, составления отчетности, работы с 1С'
    },
    age: 32
  },
  {
    id: 'emp003',
    name: 'Петрова Мария Сергеевна',
    position: 'Директор школы',
    sector: 'education',
    category: 'C-1',
    department: 'Министерство образования',
    education: {
      level: 'Педагогическое высшее',
      institution: 'МПГУ, Педагогика и методика начального образования'
    },
    experience: {
      years: 22,
      description: 'Опыт преподавания, управления образовательным учреждением, разработки программ'
    },
    age: 48
  },
  {
    id: 'emp004',
    name: 'Козлов Дмитрий Николаевич',
    position: 'Учитель математики',
    sector: 'education',
    category: 'C-2',
    department: 'Министерство образования',
    education: {
      level: 'Педагогическое высшее',
      institution: 'МПГУ, Математика и информатика'
    },
    experience: {
      years: 15,
      description: 'Опыт преподавания математики, подготовки к ЕГЭ, участия в олимпиадах'
    },
    age: 40
  },
  {
    id: 'emp005',
    name: 'Волкова Ольга Андреевна',
    position: 'Заведующая отделением',
    sector: 'healthcare',
    category: 'C-1',
    department: 'Министерство здравоохранения',
    education: {
      level: 'Медицинское высшее',
      institution: 'Первый МГМУ им. Сеченова, Лечебное дело'
    },
    experience: {
      years: 18,
      description: 'Опыт клинической практики, управления отделением, научной работы'
    },
    age: 45
  },
  {
    id: 'emp006',
    name: 'Соколов Игорь Владимирович',
    position: 'Врач-терапевт',
    sector: 'healthcare',
    category: 'C-2',
    department: 'Министерство здравоохранения',
    education: {
      level: 'Медицинское высшее',
      institution: 'РНИМУ им. Пирогова, Лечебное дело'
    },
    experience: {
      years: 10,
      description: 'Опыт приема пациентов, диагностики, назначения лечения'
    },
    age: 35
  },
  {
    id: 'emp007',
    name: 'Морозов Сергей Александрович',
    position: 'Начальник транспортного управления',
    sector: 'transport',
    category: 'C-1',
    department: 'Министерство транспорта',
    education: {
      level: 'Техническое высшее',
      institution: 'МАДИ, Организация и безопасность движения'
    },
    experience: {
      years: 16,
      description: 'Опыт управления транспортными системами, логистики, безопасности дорожного движения'
    },
    age: 43
  },
  {
    id: 'emp008',
    name: 'Новиков Андрей Иванович',
    position: 'Инженер путей сообщения',
    sector: 'transport',
    category: 'C-2',
    department: 'Министерство транспорта',
    education: {
      level: 'Транспортное высшее',
      institution: 'МИИТ, Строительство железных дорог'
    },
    experience: {
      years: 7,
      description: 'Опыт проектирования и эксплуатации транспортной инфраструктуры'
    },
    age: 30
  },
  {
    id: 'emp009',
    name: 'Лебедева Анна Михайловна',
    position: 'Заместитель министра',
    sector: 'finance',
    category: 'C-1',
    department: 'Министерство финансов',
    education: {
      level: 'Экономическое высшее',
      institution: 'НИУ ВШЭ, Экономика и финансы'
    },
    experience: {
      years: 20,
      description: 'Опыт государственного управления, финансового планирования, международного сотрудничества'
    },
    age: 50
  },
  {
    id: 'emp010',
    name: 'Федоров Максим Олегович',
    position: 'Методист',
    sector: 'education',
    category: 'C-3',
    department: 'Министерство образования',
    education: {
      level: 'Педагогическое высшее',
      institution: 'МПГУ, Психология образования'
    },
    experience: {
      years: 5,
      description: 'Опыт разработки учебных программ, проведения тренингов для педагогов'
    },
    age: 28
  },
  {
    id: 'emp011',
    name: 'Павлова Екатерина Дмитриевна',
    position: 'Фармацевт',
    sector: 'healthcare',
    category: 'C-3',
    department: 'Министерство здравоохранения',
    education: {
      level: 'Фармацевтическое высшее',
      institution: 'РУДН, Фармация'
    },
    experience: {
      years: 4,
      description: 'Опыт работы в аптеке, консультирование пациентов, контроль качества'
    },
    age: 26
  },
  {
    id: 'emp012',
    name: 'Григорьев Николай Павлович',
    position: 'Диспетчер',
    sector: 'transport',
    category: 'C-3',
    department: 'Министерство транспорта',
    education: {
      level: 'Среднее специальное',
      institution: 'Транспортный колледж, Организация перевозок'
    },
    experience: {
      years: 6,
      description: 'Опыт координации транспортных потоков, работы с диспетчерскими системами'
    },
    age: 29
  }
];
