// Each course also powers a dedicated, crawlable landing page at
// /courses/<slug> (see src/pages/CourseDetail.jsx). The `detail` block holds
// the long-form, per-course content used only on that page. Keep facts here
// grounded — no invented fees or dates; fee ranges live on /admissions.
export const courses = [
  {
    id: 1,
    slug: "ssc-coaching-chembur",
    title: "School Section — SSC Board",
    section: "School",
    classes: "Class VIII – X",
    board: "SSC",
    subjects: ["Mathematics", "Science", "English", "Social Studies", "Hindi/Marathi"],
    batchType: "Regular",
    highlight: "Foundation building for SSC Board exams",
    icon: "school",
    detail: {
      seoTitle: "SSC Coaching Classes in Chembur (Class 8, 9, 10) | Siddhi's Coaching Classes",
      seoDescription:
        "SSC tuition in Chembur for Class 8, 9 and 10. Maharashtra State Board coaching in Maths, Science, English & more — small batches, weekly tests and a free demo lecture. Since 2003.",
      heading: "SSC Coaching Classes in Chembur (Class 8–10)",
      intro: [
        "Siddhi's Coaching Classes has been guiding SSC students across Chembur since 2003. Our School Section covers Class VIII to X of the Maharashtra State Board (SSC), building the strong conceptual foundation students need before they step into Junior College and competitive exams.",
        "Teaching happens in small batches of up to 20 students so every child gets individual attention. Lessons run on interactive digital panels, and regular chapter-wise tests keep parents informed of real progress through the year — not just at exam time.",
      ],
      whatYouLearn: [
        "Complete Maharashtra State Board syllabus for Class 8, 9 and 10",
        "Mathematics (Algebra & Geometry) with step-by-step problem solving",
        "Science — Physics, Chemistry and Biology fundamentals",
        "English, Social Studies and Hindi/Marathi language skills",
        "Board-pattern answer writing, time management and revision technique",
      ],
      whoFor:
        "Students in Class 8, 9 or 10 studying the SSC (Maharashtra State Board) curriculum who want structured coaching close to home in Chembur.",
      outcome:
        "In SSC 2024-25, 13 of our 60 students scored 90% and above — the result of consistent testing, doubt-clearing and a foundation-first approach.",
    },
  },
  {
    id: 2,
    slug: "hsc-science-coaching-chembur",
    title: "Science Section — HSC",
    section: "Science",
    classes: "Class XI – XII",
    board: "HSC",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    batchType: "Regular + Crash",
    highlight: "Covers MH-CET, NEET & JEE preparation",
    icon: "science",
    detail: {
      seoTitle: "HSC Science Coaching in Chembur (11th & 12th) | Siddhi's Coaching Classes",
      seoDescription:
        "HSC Science coaching in Chembur for Class 11 & 12 — Physics, Chemistry, Maths and Biology with integrated MH-CET, NEET and JEE preparation. Small batches, expert faculty, free demo.",
      heading: "HSC Science Coaching in Chembur (Class 11 & 12)",
      intro: [
        "Our Science Section prepares Class XI and XII HSC students in Chembur for both their board exams and the entrance exams that follow. Physics, Chemistry, Mathematics and Biology are taught by dedicated subject experts — including PhD holders and practising MBBS doctors from Sion and KEM hospitals.",
        "Board and entrance preparation run in parallel rather than as an afterthought, so students are ready for MH-CET, NEET and JEE Main without juggling separate classes. Regular and crash batches are available at all three centres timings — morning, afternoon and evening.",
      ],
      whatYouLearn: [
        "Full HSC Science syllabus for Class 11 and 12 (Maharashtra Board)",
        "Physics and Chemistry with concept-first teaching and numerical practice",
        "Mathematics and Biology streams for engineering and medical aspirants",
        "Integrated MH-CET / NEET / JEE Main foundation alongside boards",
        "Regular tests, doubt sessions and previous-year paper practice",
      ],
      whoFor:
        "Class 11 and 12 HSC Science students in Chembur aiming for strong board results plus MH-CET, NEET or JEE Main entrance readiness.",
      outcome:
        "Our science students consistently convert board preparation into entrance success — MHT-CET topper Sumit Chauhan scored a 95.40 percentile.",
    },
  },
  {
    id: 3,
    slug: "neet-jee-cet-coaching-chembur",
    title: "Entrance Exam Coaching",
    section: "Entrance",
    classes: "Class XI – XII",
    board: "Competitive",
    subjects: ["MH-CET", "NEET", "JEE Main"],
    batchType: "Regular + Crash",
    highlight: "Dedicated entrance exam batches with rank-proven results",
    icon: "entrance",
    detail: {
      seoTitle: "NEET, JEE & MHT-CET Coaching in Chembur | Siddhi's Coaching Classes",
      seoDescription:
        "Entrance exam coaching in Chembur for NEET, JEE Main and MHT-CET. Dedicated batches, rank-proven faculty and regular mock tests alongside your HSC Science studies. Book a free demo.",
      heading: "NEET, JEE & MHT-CET Coaching in Chembur",
      intro: [
        "Siddhi's Coaching Classes runs dedicated entrance-exam batches in Chembur for MH-CET, NEET and JEE Main. These batches go beyond the HSC syllabus into the depth, speed and problem-solving that competitive exams demand.",
        "Students learn from faculty with a proven record of ranks, practise with regular mock tests modelled on the actual exam pattern, and get personalised feedback on where to focus. Crash batches are available for students who want intensive revision closer to the exam.",
      ],
      whatYouLearn: [
        "Complete MH-CET, NEET and JEE Main syllabus coverage",
        "Advanced Physics, Chemistry, Biology and Mathematics problem solving",
        "Speed, accuracy and negative-marking strategy for MCQ exams",
        "Full-length mock tests with detailed performance analysis",
        "Previous-year paper drills and last-mile crash revision",
      ],
      whoFor:
        "HSC Science students and repeaters in and around Chembur targeting medical (NEET), engineering (JEE Main) or Maharashtra (MH-CET) entrance exams.",
      outcome:
        "Rank-proven results — our MHT-CET topper Sumit Chauhan scored a 95.40 percentile from these very batches.",
    },
  },
  {
    id: 4,
    slug: "hsc-commerce-coaching-chembur",
    title: "Commerce Section — HSC",
    section: "Commerce",
    classes: "Class XI – XII",
    board: "HSC",
    subjects: ["Accounts", "Economics", "Business Studies", "Mathematics & Statistics", "OCM"],
    batchType: "Regular",
    highlight: "Includes CA Foundation preparation",
    icon: "commerce",
    detail: {
      seoTitle: "HSC Commerce Coaching in Chembur (11th & 12th) | Siddhi's Coaching Classes",
      seoDescription:
        "HSC Commerce classes in Chembur for Class 11 & 12 — Accounts, Economics, OCM, Business Studies and Maths & Statistics, with CA Foundation preparation. Small batches and a free demo lecture.",
      heading: "HSC Commerce Coaching in Chembur (Class 11 & 12)",
      intro: [
        "Our Commerce Section coaches Class XI and XII HSC students in Chembur across every core subject — Accounts, Economics, Organisation of Commerce & Management (OCM), Business Studies, and Mathematics & Statistics.",
        "For students eyeing a Chartered Accountancy career, CA Foundation preparation is built into the programme so the transition after Class 12 is seamless. Career counselling helps students choose the right path early.",
      ],
      whatYouLearn: [
        "Full HSC Commerce syllabus for Class 11 and 12 (Maharashtra Board)",
        "Book-keeping & Accountancy with practical problem solving",
        "Economics, OCM and Business Studies concept clarity",
        "Mathematics & Statistics for commerce students",
        "Optional CA Foundation groundwork and career counselling",
      ],
      whoFor:
        "Class 11 and 12 HSC Commerce students in Chembur, including those planning to pursue CA, CS or a B.Com / management career.",
      outcome:
        "Our commerce topper Shweta Pathak scored 96.20% and secured Rank 1 at Swami Vivekanand.",
    },
  },
  {
    id: 5,
    slug: "ca-foundation-coaching-chembur",
    title: "CA Foundation",
    section: "Commerce",
    classes: "After Class XII / Gap Year",
    board: "ICAI",
    subjects: ["Principles of Accounting", "Business Laws", "Quantitative Aptitude", "Business Economics"],
    batchType: "Regular",
    highlight: "Taught by CA. Yogesh T — Chartered Accountant",
    icon: "ca",
    detail: {
      seoTitle: "CA Foundation Coaching in Chembur | Siddhi's Coaching Classes",
      seoDescription:
        "CA Foundation classes in Chembur taught by a practising Chartered Accountant — Accounting, Business Laws, Quantitative Aptitude and Business Economics for the ICAI Foundation exam. Free demo available.",
      heading: "CA Foundation Coaching in Chembur",
      intro: [
        "Siddhi's Coaching Classes offers CA Foundation coaching in Chembur for students who have completed Class 12 or are in a gap year, preparing for the ICAI Foundation examination — the first step towards becoming a Chartered Accountant.",
        "Classes are taught by CA. Yogesh T, a practising Chartered Accountant, so students learn each paper from someone who has walked the path. Small batches mean concepts are clarified thoroughly before moving on.",
      ],
      whatYouLearn: [
        "Principles and Practice of Accounting",
        "Business Laws and Business Correspondence",
        "Business Mathematics, Logical Reasoning & Statistics (Quantitative Aptitude)",
        "Business Economics",
        "ICAI exam-pattern practice and mock tests",
      ],
      whoFor:
        "Students in Chembur who have passed Class 12 (or are in a gap year) and want to clear the ICAI CA Foundation exam.",
      outcome:
        "Learn directly from a practising Chartered Accountant, with structured coverage of all four ICAI Foundation papers.",
    },
  },
];
