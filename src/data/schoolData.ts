export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  grades: string;
  curriculum: string;
  description: string;
  features: string[];
  image: string;
  highlight: string;
  color: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'boarding' | 'sports' | 'academics' | 'arts';
  description: string;
  image: string;
  stats: string;
  highlights: string[];
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  icon: string;
  category: 'morning' | 'academic' | 'sports' | 'evening';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  relation: string;
  quote: string;
  rating: number;
  avatar: string;
  year: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Admissions' | 'Boarding' | 'Academics' | 'Sports & Co-Curricular';
}

export const SCHOOL_INFO = {
  name: "Tula's International School",
  shortName: "TIS Dehradun",
  tagline: "The Modern Gurukul of Dehradun",
  subTagline: "Nurturing Mind, Body & Soul in a 22-Acre Eco-Friendly Sanctuary",
  established: 2012,
  location: "Dehradun, Uttarakhand, India",
  address: "Dhoolkot, Near P.O. Selakui, Chakrata Road, Dehradun - 248011, Uttarakhand",
  phone: "+91 94583 11000",
  altPhone: "+91 98379 83791",
  email: "info@tis.edu.in",
  admissionsEmail: "admissions@tis.edu.in",
  affiliation: "CBSE & Cambridge International (Proposed)",
  gender: "Co-Ed Boarding School (Grades IV to XII)",
  campusArea: "22+ Acres",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'About TIS', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Boarding Life', href: '#boarding' },
  { label: 'Campus & Infra', href: '#facilities' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Admissions', href: '#admissions', badge: '2025 Open' },
  { label: 'FAQs', href: '#faqs' },
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'campus',
    label: 'Lush Green Campus',
    value: 22,
    suffix: '+ Acres',
    description: 'Eco-friendly smart campus nestled in the serene Shivalik foothills of Dehradun',
    iconName: 'Trees',
  },
  {
    id: 'ratio',
    label: 'Student-Teacher Ratio',
    value: 8,
    suffix: ':1',
    description: 'Personalized individual attention ensuring academic and emotional growth',
    iconName: 'Users',
  },
  {
    id: 'sports',
    label: 'Sports Facilities',
    value: 16,
    suffix: '+ Disciplines',
    description: 'Olympic-sized pool, shooting range, horse riding, synthetic turf and more',
    iconName: 'Trophy',
  },
  {
    id: 'cbse',
    label: 'CBSE Pass Rate',
    value: 100,
    suffix: '%',
    description: 'Consistent top academic distinctions with university admissions worldwide',
    iconName: 'GraduationCap',
  },
];

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'junior',
    title: 'Junior Wing (Grades IV - V)',
    grades: 'Grades IV to V',
    curriculum: 'Activity & Inquiry Based CBSE Learning',
    description: 'Building strong foundational literacy, numerical intuition, curiosity, and emotional confidence through hands-on experiential learning in a caring environment.',
    features: [
      'Interactive Smart Classrooms with digital learning aids',
      'Dedicated pastoral house mothers for young boarders',
      'Daily foundational sports & creative arts discovery',
      'Phonics, STEM play & language enrichment modules',
    ],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Foundation of Excellence',
    color: 'from-amber-500/20 to-orange-500/10',
  },
  {
    id: 'middle',
    title: 'Middle School (Grades VI - VIII)',
    grades: 'Grades VI to VIII',
    curriculum: 'CBSE with STEM & Global Perspective Integration',
    description: 'Empowering students to think critically, experiment boldly in modern laboratories, express creatively, and develop leadership qualities through team projects.',
    features: [
      'Robotics, Coding & AI Innovation Labs',
      'Compulsory foreign language choices (French/German/Spanish)',
      'Inter-house competitions & public speaking development',
      'Specialized athletic training in preferred sports discipline',
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Curiosity & Discovery',
    color: 'from-blue-500/20 to-indigo-500/10',
  },
  {
    id: 'senior',
    title: 'Senior Secondary (Grades IX - XII)',
    grades: 'Grades IX to XII',
    curriculum: 'CBSE Streams: Science, Commerce & Humanities',
    description: 'Rigorous academic preparation integrated with competitive exam mentoring (JEE, NEET, CUET, SAT, CLAT) and personalized global university career counseling.',
    features: [
      'In-house expert faculty for JEE / NEET / SAT / CLAT prep',
      'Career discovery psychometric assessment & portfolio building',
      'Model United Nations (MUN) & National Leadership Summits',
      'Ivy League & Top Global University Placement Cell',
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
    highlight: 'Global Career Gateway',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Modern Boarding Residences',
    category: 'boarding',
    description: 'Air-conditioned, ergonomically designed student rooms with personal study stations, 24/7 hot water, high-speed Wi-Fi, and resident house parents.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop',
    stats: 'Separate Boys & Girls Houses',
    highlights: ['24/7 Security & CCTV', 'Laundry & Housekeeping', 'Common Lounges with Indoor Games'],
  },
  {
    id: 'fac-2',
    title: 'Olympic-Standard Sports Complex',
    category: 'sports',
    description: 'State-of-the-art sports facilities including a half-Olympic swimming pool, FIFA-grade football turf, lawn tennis courts, and horse riding arena.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    stats: '16+ Sports Disciplines',
    highlights: ['Professional NIS Certified Coaches', 'Indoor Badminton & Squash Courts', '10m Air Rifle Shooting Range'],
  },
  {
    id: 'fac-3',
    title: 'Advanced Science & STEM Labs',
    category: 'academics',
    description: 'Fully equipped Physics, Chemistry, Biology, Mathematics, Robotics, and 3D printing laboratories for experiential scientific research.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop',
    stats: '6 Ultra-Modern Labs',
    highlights: ['3D Printers & IoT Kits', 'Digital Microscopic Arrays', 'Individual Experiment Stations'],
  },
  {
    id: 'fac-4',
    title: 'Organic Dining Hall',
    category: 'boarding',
    description: 'Spacious dining hall serving wholesome 5 meals a day curated by expert nutritionists using organic vegetables from our on-campus farm.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
    stats: '5 Wholesome Meals Daily',
    highlights: ['Nutritional Balance', 'Hygienic Steam Kitchen', 'Multi-Cuisine Menu (Veg Only)'],
  },
  {
    id: 'fac-5',
    title: 'Performing & Visual Arts Studio',
    category: 'arts',
    description: 'Dedicated sound-proof music studios, Indian & Western dance rooms, pottery studio, and fine arts workshop for artistic expression.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    stats: '500-Seater Amphitheatre',
    highlights: ['Vocal & Instrumental Music', 'Classical & Contemporary Dance', 'Sculpting & Painting Bay'],
  },
  {
    id: 'fac-6',
    title: '24/7 Infirmary & Medical Care',
    category: 'boarding',
    description: 'Round-the-clock medical centre managed by qualified resident nurses and visiting doctors, backed by ambulance service for emergencies.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop',
    stats: '24/7 Resident Doctors',
    highlights: ['Regular Health Checkups', 'Tie-ups with Top Dehradun Hospitals', 'Mental Wellness Counseling'],
  },
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    time: '06:00 AM',
    title: 'Morning Yoga & Physical Fitness',
    description: 'Fresh Himalayan air exercise, jogging, and yoga to activate body and mind.',
    icon: 'Sun',
    category: 'morning',
  },
  {
    time: '07:30 AM',
    title: 'Nutritious Breakfast & Assembly',
    description: 'Wholesome breakfast followed by school assembly, prayer, and current affairs sharing.',
    icon: 'Coffee',
    category: 'morning',
  },
  {
    time: '08:30 AM - 01:30 PM',
    title: 'Interactive Academic Sessions',
    description: 'Engaging classroom lectures, lab experiments, smart board lessons, and group activities.',
    icon: 'BookOpen',
    category: 'academic',
  },
  {
    time: '01:30 PM',
    title: 'Buffet Lunch & Rest Break',
    description: 'Balanced hot lunch prepared in steam kitchens, followed by personal downtime.',
    icon: 'Utensils',
    category: 'academic',
  },
  {
    time: '03:30 PM - 05:30 PM',
    title: 'Sports Coaching & Clubs',
    description: 'Professional training in swimming, horse riding, archery, cricket, dance, and music.',
    icon: 'Award',
    category: 'sports',
  },
  {
    time: '06:30 PM - 08:30 PM',
    title: 'Supervised Evening Prep (Prep Study)',
    description: 'Dedicated quiet study hours under the guidance of resident subject teachers for homework.',
    icon: 'PenTool',
    category: 'evening',
  },
  {
    time: '08:30 PM',
    title: 'Dinner & Pastoral Bonding',
    description: 'Nutritious dinner, house meeting, phone calls home, and relaxation before bedtime.',
    icon: 'Moon',
    category: 'evening',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Rajesh & Sunita Agarwal',
    role: 'Parents of Aarav Agarwal (Class X)',
    relation: 'Parent',
    quote: "Sending Aarav to Tula's International School was the best decision we made. The blend of modern education with traditional Gurukul values transformed his discipline, confidence, and leadership abilities. The staff treats children like family.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    year: 'Batch 2024-25',
  },
  {
    id: 'test-2',
    name: 'Ananya Sharma',
    role: 'Alumna - Currently at DU (SRCC)',
    relation: 'Alumni',
    quote: 'TIS gave me the exposure to excel both academically and co-curricularly. From winning national MUNs to clearing my board exams with 97.4%, the teachers provided constant mentorship and encouragement.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    year: 'Batch 2022',
  },
  {
    id: 'test-3',
    name: 'Dr. Vikramaditya Rawat',
    role: 'Parent of Riya Rawat (Class VIII)',
    relation: 'Parent',
    quote: "The 22-acre eco-friendly campus, zero pollution, top-notch sports facilities, and personal attention with an 8:1 ratio make Tula's stand far above other boarding schools in North India.",
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    year: 'Parent since 2021',
  },
  {
    id: 'test-4',
    name: 'Devanshu Verma',
    role: 'Head Boy (Batch 2023-24)',
    relation: 'Student',
    quote: 'Life at TIS taught me independence, sportsmanship, and critical thinking. Horse riding in the morning and robotics in the afternoon — every single day was packed with real learning and joy.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
    year: 'Class XII Graduate',
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    title: 'Top Co-Ed Boarding School in Uttarakhand',
    organization: 'Education World India School Rankings',
    year: '2023 - 2024',
    description: 'Ranked #1 for Infrastructure, Pastoral Care, and Safety Standards.',
    icon: 'Trophy',
  },
  {
    title: 'Best International Boarding School Award',
    organization: 'Times Education Excellence Awards',
    year: '2023',
    description: 'Recognized for holistic curriculum design and global university outcomes.',
    icon: 'Award',
  },
  {
    title: 'Green School of Excellence Certification',
    organization: 'Indian Green Building Council (IGBC)',
    year: '2022',
    description: 'Awarded for 22-acre eco-conscious solar powered green campus.',
    icon: 'Leaf',
  },
  {
    title: 'Excellence in STEM & Sports Integration',
    organization: 'Digital Learning School Awards',
    year: '2024',
    description: 'For cutting-edge robotics lab and 16+ professional athletic academies.',
    icon: 'Cpu',
  },
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Admissions',
    question: 'What is the admission procedure for Tula’s International School?',
    answer: 'Admissions start with an online inquiry or virtual campus tour booking. Candidates complete a registration form, followed by an interactive assessment / interaction round and document submission. Once selected, admission confirmation is granted upon fee deposit.',
  },
  {
    category: 'Admissions',
    question: 'Which grades are eligible for admission?',
    answer: 'TIS admits students into Grades IV to IX and XI for CBSE stream programs. Seats are strictly limited to maintain our 8:1 student-teacher ratio.',
  },
  {
    category: 'Boarding',
    question: 'How is pastoral care and student safety ensured in the hostels?',
    answer: 'Hostels are supervised round-the-clock by dedicated House Masters/Mistresses and House Parents. The campus features 24/7 security personnel, comprehensive CCTV coverage, biometric access, and an in-house 24/7 infirmary.',
  },
  {
    category: 'Boarding',
    question: 'What dietary options are available for boarding students?',
    answer: 'We provide 5 nutritious, balanced vegetarian meals daily (Breakfast, Mid-morning snack, Lunch, High Tea, Dinner) planned by nutritionists. Special diet consideration is available for students with medical needs.',
  },
  {
    category: 'Academics',
    question: 'Does TIS offer coaching for competitive entrance exams like JEE & NEET?',
    answer: 'Yes! We provide integrated coaching programs within the daily timetable for Senior Secondary students (Grades XI & XII) preparing for JEE, NEET, SAT, CUET, and CLAT with expert visiting faculty.',
  },
  {
    category: 'Sports & Co-Curricular',
    question: 'What sports and extra-curricular activities are available?',
    answer: 'Students can participate in Swimming, Horse Riding, 10m Shooting Range, Lawn Tennis, Football, Basketball, Taekwondo, Archery, Robotics, Dramatics, Music, Fine Arts, and Model UN.',
  },
];
