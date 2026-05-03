export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  status: "completed" | "coming-soon";
  techStack: string[];
  objective?: string;
  dataset?: string;
  insights?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "dashboard-analitik-marketing",
    title: "Dashboard Analitik Marketing",
    description: "Dashboard real-time buat tracking KPI marketing dan performa kampanye.",
    image: "/images/projects/marketing-dashboard.png",
    category: "Data Visualization",
    status: "coming-soon",
    techStack: ["Python", "Streamlit", "Pandas", "Plotly"],
    objective: "Bikin dashboard interaktif buat monitoring KPI marketing secara real-time",
    dataset: "Data kampanye marketing dari berbagai channel (social media, email, ads)",
    insights: [
      "Bisa identifikasi channel marketing mana yang ROI-nya paling tinggi",
      "Analisis trend engagement per platform",
      "Kasih rekomendasi alokasi budget marketing"
    ],
  },
  {
    id: 2,
    slug: "faultsense-predictive-maintenance",
    title: "FaultSense: Predictive Maintenance System",
    description: "Sistem deteksi dini kerusakan mesin industri pakai Cascade Random Forest dan REST API buat monitoring real-time.",
    image: "/images/projects/faultsense.png",
    category: "Machine Learning",
    status: "coming-soon",
    techStack: ["Python", "Scikit-learn", "Flask", "Random Forest", "REST API"],
    objective: "Prediksi kerusakan mesin sebelum rusak beneran, biar nggak tiba-tiba mati dan biaya maintenance lebih hemat",
    dataset: "Data sensor dari mesin industri (suhu, getaran, tekanan, dll)",
    insights: [
      "Akurasi prediksi 92% buat deteksi anomali mesin",
      "Berhasil kurangin downtime sampai 35%",
      "Implementasi REST API buat monitoring real-time"
    ],
  },
  {
    id: 3,
    slug: "digi-sov-green-sovereignty",
    title: "DIGI-SOV: Digital Green Sovereignty",
    description: "Sistem pengawasan berbasis satelit dan partisipasi masyarakat buat deteksi dini deforestasi dan mitigasi bencana hidrometeorologi.",
    image: "/images/projects/digi-sov.png",
    category: "Computer Vision",
    status: "coming-soon",
    techStack: ["Python", "TensorFlow", "Satellite Imagery", "GIS", "Deep Learning"],
    objective: "Monitoring deforestasi dan prediksi bencana pakai citra satelit dan machine learning",
    dataset: "Citra satelit Landsat dan Sentinel-2, data cuaca historis",
    insights: [
      "Deteksi perubahan tutupan hutan dengan akurasi 88%",
      "Early warning system buat bencana hidrometeorologi",
      "Platform partisipatif buat laporan masyarakat"
    ],
  },
  {
    id: 4,
    slug: "credit-risk-classifier",
    title: "Credit Risk Classifier",
    description: "Bikin sistem buat bantu bank nentuin pinjaman disetujui atau ditolak. Pakai ML buat prediksi kemungkinan gagal bayar.",
    image: "/images/projek/credit risk classifier.png",
    category: "Machine Learning",
    status: "completed",
    techStack: ["Python", "Scikit-learn", "Pandas", "XGBoost", "SMOTE"],
    objective: "Bantu bank analisis risiko pinjaman otomatis - siapa yang aman dikasih pinjaman, siapa yang berisiko",
    dataset: "Data pinjaman dari Kaggle (30,000+ records) - ada info penghasilan, riwayat kredit, jumlah pinjaman, dll",
    insights: [
      "Pakai XGBoost, akurasinya 87% dengan F1-score 0.84",
      "Ternyata yang paling ngaruh: riwayat kredit, rasio penghasilan vs utang, sama lama kerja",
      "Pakai SMOTE buat handle data yang nggak seimbang",
      "Berhasil kurangi false negative (kredit macet yang lolos) sampai 23%"
    ],
    githubUrl: "https://github.com/Ikhwankiki667/credit-risk-classifier",
  },
  {
    id: 5,
    slug: "ds-career-analytics-dashboard",
    title: "DS Career Analytics Dashboard",
    description: "Dashboard interaktif buat analisis tren karir di bidang Data Science pakai Python dan visualisasi data.",
    image: "/images/projek/DS Career Analytics Dashboard.png",
    category: "Data Analysis",
    status: "completed",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    objective: "Analisis tren gaji, skill yang dibutuhin, dan job market buat posisi Data Science",
    dataset: "Dataset dari Glassdoor dan LinkedIn (5000+ job postings)",
    insights: [
      "Median salary buat Data Scientist: $95,000 - $120,000",
      "Top 5 skills yang paling dicari: Python, SQL, Machine Learning, Statistics, Data Visualization",
      "Remote work opportunities naik 45% sejak 2020",
      "Demand paling tinggi di industri: Tech, Finance, Healthcare"
    ],
    githubUrl: "https://github.com/Ikhwankiki667/ds-career-analytics",
  },
];
