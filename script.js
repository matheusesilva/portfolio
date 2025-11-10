// Dicionários de idiomas
const translations = {
  "pt-BR": {
    greeting: 'Olá, eu sou <span class="highlight">Matheus Silva</span>',
    tagline:
      "Desenvolvedor Back-end | Python, Javascript, Docker e AWS | Inglês Fluente | JLPT N3",
    aboutTitle: "Resumo",
    aboutText:
      "Sou um profissional em transição de carreira para Desenvolvimento Back-end. Minha experiência anterior em consultoria me proporcionou uma visão analítica, estratégica e de alta responsabilidade, complementada por uma disciplina de aprendizado contínuo e disposição para dominar novas tecnologias. No momento estou aprendendo mais sobre APIs em Java usando o framework Spring Boot, enquanto finalizo o MBA em Engenharia de Software.",
    skillsTitle: "Habilidades",
    projectsTitle: "Projetos",
    project1Title: "Agregador de Vagas de Emprego Inteligente",
    project1Desc:
      "Sistema de agregação e classificação automatizada de vagas de emprego publicadas no LinkedIn, utilizando Inteligência Artificial. Back end em <strong>Python</strong> com <strong>API Flask</strong>, utilizando <strong>Playwright</strong> para coleta de dados e tratamento das informações com sistema de mensageria <strong>RabbitMQ</strong> e <strong>API Groq</strong>. Front end desenvolvido em vanilla <strong>JavaScript</strong> e <strong>Tailwind CSS</strong>.",
    project1Link: "Ver projeto →",
    project2Title: "Editor de Listas M3U",
    project2Desc:
      "Desenvolvimento de uma aplicação web para gerenciamento e edição de listas M3U. API desenvolvida utilizando <strong>Java</strong> com <strong>Spring Boot</strong> e interface web usando <strong>React</strong> e <strong>Bootstrap</strong>. O deploy foi realizado utilizando <strong>Docker</strong> e a aplicação está diponível na plataforma Render.",
    project2Link: "Ver projeto →",
    project3Title: "Plataforma de Crowdfunding Descentralizada",
    project3Desc:
      "Projeto de um contrato inteligente desenvolvido em <strong>Solidity</strong> para uma plataforma de crowdfunding totalmente descentralizada, combinando doações com a emissão de NFTs intransferíveis.",
    project3Link: "Ver projeto →",
    galleryTitle: "Galeria",
    galleryDesc:
      "Já morei na Austrália e no Japão. Meus princiapis hobbies são viajar e andar de bicicleta. No Instagram eu posto todas as minhas aventuras e momentos especiais!",
    experienceTitle: "Experiência Profissional",
    exp1Date: "GreenYellow",
    exp1Title: "Consultor de Eficiência Energética",
    exp1Period: "Out 20 - Jul 22",
    exp1Desc:
      "Gestão direta de +100 contratos de performance energética, totalizando mais de 30 GWh de economia anual. Análise de desvios e anomalias na curva de consumo de clientes.",
    exp2Date: "Microblau",
    exp2Title: "Assistente Técnico em Eficiência Energética",
    exp2Period: "Dez 19 - Out 20",
    exp2Desc:
      "Desenvolvimento de estudos técnicos e diagnósticos energéticos dos sistemas de ar condicionado industrial com foco na redução do consumo energético e na eficiência operacional.",
    exp3Date: "Exército Brasileiro",
    exp3Title: "Projetista Elétrico",
    exp3Period: "Mar 12 - Fev 18",
    exp3Desc:
      "Elaboração de projetos de instalações elétricas em baixa e média tensão, diagramas unifilares, multifilares, quadros de cargas e demanda utilizando AltoQi Lumine e AutoCAD.",
    educationTitle: "Formação Acadêmica",
    edu1Date: "2024 - 2025",
    edu1Title: "MBA em Engenharia de Software",
    edu2Date: "2019 - 2020",
    edu2Title: "MBA em Gestão de Projetos",
    edu3Date: "2019 - 2020",
    edu3Title: "Pós-graduação em Gerência de Energia e Eficiência Energética",
    edu4Date: "2012 - 2017",
    edu4Title: "Bacharelado em Engenharia Elétrica e Eletrônica",
    coursesTitle: "Cursos e Certificações",
    course1Name: "Full Stack Javascript",
    course1Institution: "The Odin Project",
    course2Name: "AWS Academy Cloud Foundations",
    course2Institution: "Amazon Web Services",
    course3Name: "Continuous Delivery & DevOps",
    course3Institution: "Universidade da Virgínia",
    course4Name: "Gestão Ágil de Projetos com Scrum e Kanban",
    course4Institution: "Senac",
    course5Name: "IELTS - Overall Band 7",
    course5Institution: "British Council",
    course6Name: "Japanese Language Proficiency Test - JLPT N3",
    course6Institution: "Japan Educational Exchanges and Services",
    footerText: "&copy; 2023 Matheus Silva. Todos os direitos reservados.",
  },
  en: {
    greeting: 'Hello, I\'m <span class="highlight">Matheus Silva</span>',
    tagline:
      "Back-end Developer | Python, Javascript, Docker and AWS | Fluent English | JLPT N3",
    aboutTitle: "Summary",
    aboutText:
      "I am a professional transitioning to Back-end Development. My previous experience in consulting provided me with an analytical, strategic, and high-responsibility perspective, complemented by a discipline of continuous learning and willingness to master new technologies. Currently, I'm learning more about Java APIs using the Spring Boot framework while finishing my MBA in Software Engineering.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    project1Title: "Intelligent Job Vacancy Aggregator",
    project1Desc:
      "System for automated aggregation and classification of job vacancies published on LinkedIn, using Artificial Intelligence. Back end in <strong>Python</strong> with <strong>Flask API</strong>, using <strong>Playwright</strong> for data collection and information processing with <strong>RabbitMQ</strong> messaging system and <strong>Groq API</strong>. Front end developed in vanilla <strong>JavaScript</strong> and <strong>Tailwind CSS</strong>.",
    project1Link: "View project →",
    project2Title: "M3U List Editor",
    project2Desc:
      "Development of a web application for managing and editing M3U lists. API developed using <strong>Java</strong> with <strong>Spring Boot</strong> and web interface using <strong>React</strong> and <strong>Bootstrap</strong>. Deployment was done using <strong>Docker</strong> and the application is available on the Render platform.",
    project2Link: "View project →",
    project3Title: "Decentralized Crowdfunding Platform",
    project3Desc:
      "Project of a smart contract developed in <strong>Solidity</strong> for a fully decentralized crowdfunding platform, combining donations with the issuance of non-transferable NFTs.",
    project3Link: "View project →",
    galleryTitle: "Gallery",
    galleryDesc:
      "I've lived in Australia and Japan. My main hobbies are traveling and cycling. On Instagram I post all my adventures and special moments!",
    experienceTitle: "Professional Experience",
    exp1Date: "GreenYellow",
    exp1Title: "Energy Efficiency Consultant",
    exp1Period: "Oct 20 - Jul 22",
    exp1Desc:
      "Direct management of +100 energy performance contracts, totaling more than 30 GWh of annual savings. Analysis of deviations and anomalies in customer consumption curves.",
    exp2Date: "Microblau",
    exp2Title: "Technical Assistant in Energy Efficiency",
    exp2Period: "Dec 19 - Oct 20",
    exp2Desc:
      "Development of technical studies and energy diagnostics of industrial air conditioning systems focusing on reducing energy consumption and operational efficiency.",
    exp3Date: "Brazilian Army",
    exp3Title: "Electrical Designer",
    exp3Period: "Mar 12 - Feb 18",
    exp3Desc:
      "Preparation of electrical installation projects in low and medium voltage, single-line diagrams, multi-line diagrams, load and demand boards using AltoQi Lumine and AutoCAD.",
    educationTitle: "Education",
    edu1Date: "2024 - 2025",
    edu1Title: "MBA in Software Engineering",
    edu2Date: "2019 - 2020",
    edu2Title: "MBA in Project Management",
    edu3Date: "2019 - 2020",
    edu3Title: "Postgraduate in Energy Management and Energy Efficiency",
    edu4Date: "2012 - 2017",
    edu4Title: "Bachelor's Degree in Electrical and Electronic Engineering",
    coursesTitle: "Courses and Certifications",
    course1Name: "Full Stack Javascript",
    course1Institution: "The Odin Project",
    course2Name: "AWS Academy Cloud Foundations",
    course2Institution: "Amazon Web Services",
    course3Name: "Continuous Delivery & DevOps",
    course3Institution: "University of Virginia",
    course4Name: "Agile Project Management with Scrum and Kanban",
    course4Institution: "Senac",
    course5Name: "IELTS - Overall Band 7",
    course5Institution: "British Council",
    course6Name: "Japanese Language Proficiency Test - JLPT N3",
    course6Institution: "Japan Educational Exchanges and Services",
    footerText: "&copy; 2023 Matheus Silva. All rights reserved.",
  },
  jp: {
    greeting:
      'こんにちは、私は<span class="highlight">マテウス・シルバ</span>です',
    tagline:
      "バックエンド開発者 | Python、Javascript、Docker、AWS | 流暢な英語 | JLPT N3",
    aboutTitle: "概要",
    aboutText:
      "私はバックエンド開発に移行している専門家です。コンサルティングでの以前の経験は、分析的、戦略的、そして高い責任感のある視点を私に提供し、継続的な学習と新しい技術を習得する意欲によって補完されています。現在、Spring Bootフレームワークを使用したJava APIについてさらに学びながら、ソフトウェアエンジニアリングのMBAを修了しています。",
    skillsTitle: "スキル",
    projectsTitle: "プロジェクト",
    project1Title: "インテリジェント求人情報アグリゲーター",
    project1Desc:
      "LinkedInに掲載された求人情報の自動収集と分類のシステムで、人工知能を利用しています。バックエンドは<strong>Python</strong>と<strong>Flask API</strong>で、データ収集には<strong>Playwright</strong>、情報処理には<strong>RabbitMQ</strong>メッセージングシステムと<strong>Groq API</strong>を使用しています。フロントエンドはバニラ<strong>JavaScript</strong>と<strong>Tailwind CSS</strong>で開発されました。",
    project1Link: "プロジェクトを見る →",
    project2Title: "M3Uリストエディター",
    project2Desc:
      "M3Uリストの管理と編集のためのウェブアプリケーションの開発。APIは<strong>Java</strong>と<strong>Spring Boot</strong>を使用して開発され、ウェブインターフェースは<strong>React</strong>と<strong>Bootstrap</strong>を使用しています。デプロイは<strong>Docker</strong>を使用して行われ、アプリケーションはRenderプラットフォームで利用可能です。",
    project2Link: "プロジェクトを見る →",
    project3Title: "分散型クラウドファンディングプラットフォーム",
    project3Desc:
      "完全に分散されたクラウドファンディングプラットフォーム向けに<strong>Solidity</strong>で開発されたスマートコントラクトのプロジェクトで、寄付と非移転性NFTの発行を組み合わせています。",
    project3Link: "プロジェクトを見る →",
    galleryTitle: "ギャラリー",
    galleryDesc:
      "私はオーストラリアと日本に住んだことがあります。主な趣味は旅行とサイクリングです。Instagramではすべての冒険と特別な瞬間を投稿しています！",
    experienceTitle: "職務経験",
    exp1Date: "GreenYellow",
    exp1Title: "エネルギー効率コンサルタント",
    exp1Period: "2020年10月 - 2022年7月",
    exp1Desc:
      "100件以上のエネルギー性能契約の直接管理により、年間30 GWh以上の節約を実現。顧客の消費曲線の偏差と異常の分析。",
    exp2Date: "Microblau",
    exp2Title: "エネルギー効率技術アシスタント",
    exp2Period: "2019年12月 - 2020年10月",
    exp2Desc:
      "エネルギー消費の削減と運用効率に焦点を当てた産業用空調システムの技術的調査とエネルギー診断の開発。",
    exp3Date: "ブラジル軍",
    exp3Title: "電気設計者",
    exp3Period: "2012年3月 - 2018年2月",
    exp3Desc:
      "AltoQi LumineとAutoCADを使用した低圧および中圧の電気設備プロジェクト、単線図、多線図、負荷および需要盤の作成。",
    educationTitle: "学歴",
    edu1Date: "2024 - 2025",
    edu1Title: "ソフトウェアエンジニアリングのMBA",
    edu2Date: "2019 - 2020",
    edu2Title: "プロジェクトマネジメントのMBA",
    edu3Date: "2019 - 2020",
    edu3Title: "エネルギー管理とエネルギー効率の大学院課程",
    edu4Date: "2012 - 2017",
    edu4Title: "電気電子工学の学士号",
    coursesTitle: "コースと認定",
    course1Name: "フルスタックJavascript",
    course1Institution: "The Odin Project",
    course2Name: "AWS Academy Cloud Foundations",
    course2Institution: "Amazon Web Services",
    course3Name: "継続的デリバリーとDevOps",
    course3Institution: "バージニア大学",
    course4Name: "スクラムとカンバンによるアジャイルプロジェクト管理",
    course4Institution: "Senac",
    course5Name: "IELTS - オーバーオールバンド7",
    course5Institution: "ブリティッシュ・カウンシル",
    course6Name: "日本語能力試験 - JLPT N3",
    course6Institution: "日本国際教育支援協会",
    footerText: "&copy; 2023 マテウス・シルバ。全著作権所有。",
  },
};

// Elementos da página
const elements = {
  greeting: document.getElementById("greeting"),
  tagline: document.getElementById("tagline"),
  aboutTitle: document.getElementById("about-title"),
  aboutText: document.getElementById("about-text"),
  skillsTitle: document.getElementById("skills-title"),
  projectsTitle: document.getElementById("projects-title"),
  project1Title: document.getElementById("project1-title"),
  project1Desc: document.getElementById("project1-desc"),
  project1Link: document.getElementById("project1-link"),
  project2Title: document.getElementById("project2-title"),
  project2Desc: document.getElementById("project2-desc"),
  project2Link: document.getElementById("project2-link"),
  project3Title: document.getElementById("project3-title"),
  project3Desc: document.getElementById("project3-desc"),
  project3Link: document.getElementById("project3-link"),
  galleryTitle: document.getElementById("gallery-title"),
  galleryDesc: document.getElementById("gallery-desc"),
  experienceTitle: document.getElementById("experience-title"),
  exp1Date: document.getElementById("exp1-date"),
  exp1Title: document.getElementById("exp1-title"),
  exp1Period: document.getElementById("exp1-period"),
  exp1Desc: document.getElementById("exp1-desc"),
  exp2Date: document.getElementById("exp2-date"),
  exp2Title: document.getElementById("exp2-title"),
  exp2Period: document.getElementById("exp2-period"),
  exp2Desc: document.getElementById("exp2-desc"),
  exp3Date: document.getElementById("exp3-date"),
  exp3Title: document.getElementById("exp3-title"),
  exp3Period: document.getElementById("exp3-period"),
  exp3Desc: document.getElementById("exp3-desc"),
  educationTitle: document.getElementById("education-title"),
  edu1Date: document.getElementById("edu1-date"),
  edu1Title: document.getElementById("edu1-title"),
  edu2Date: document.getElementById("edu2-date"),
  edu2Title: document.getElementById("edu2-title"),
  edu3Date: document.getElementById("edu3-date"),
  edu3Title: document.getElementById("edu3-title"),
  edu4Date: document.getElementById("edu4-date"),
  edu4Title: document.getElementById("edu4-title"),
  coursesTitle: document.getElementById("courses-title"),
  course1Name: document.getElementById("course1-name"),
  course1Institution: document.getElementById("course1-institution"),
  course2Name: document.getElementById("course2-name"),
  course2Institution: document.getElementById("course2-institution"),
  course3Name: document.getElementById("course3-name"),
  course3Institution: document.getElementById("course3-institution"),
  course4Name: document.getElementById("course4-name"),
  course4Institution: document.getElementById("course4-institution"),
  course5Name: document.getElementById("course5-name"),
  course5Institution: document.getElementById("course5-institution"),
  course6Name: document.getElementById("course6-name"),
  course6Institution: document.getElementById("course6-institution"),
  footerText: document.getElementById("footer-text"),
};

// Botões de idioma
const ptBrBtn = document.getElementById("pt-br");
const enBtn = document.getElementById("en");
const jpBtn = document.getElementById("jp");

// Toggle de tema
const themeToggle = document.getElementById("theme-toggle");

// Função para mudar o idioma
function changeLanguage(lang) {
  // Atualiza o conteúdo com base no idioma selecionado
  elements.greeting.innerHTML = translations[lang].greeting;
  elements.tagline.textContent = translations[lang].tagline;
  elements.aboutTitle.textContent = translations[lang].aboutTitle;
  elements.aboutText.textContent = translations[lang].aboutText;
  elements.skillsTitle.textContent = translations[lang].skillsTitle;
  elements.projectsTitle.textContent = translations[lang].projectsTitle;
  elements.project1Title.textContent = translations[lang].project1Title;
  elements.project1Desc.innerHTML = translations[lang].project1Desc;
  elements.project1Link.textContent = translations[lang].project1Link;
  elements.project2Title.textContent = translations[lang].project2Title;
  elements.project2Desc.innerHTML = translations[lang].project2Desc;
  elements.project2Link.textContent = translations[lang].project2Link;
  elements.project3Title.textContent = translations[lang].project3Title;
  elements.project3Desc.innerHTML = translations[lang].project3Desc;
  elements.project3Link.textContent = translations[lang].project3Link;
  elements.galleryTitle.textContent = translations[lang].galleryTitle;
  elements.galleryDesc.textContent = translations[lang].galleryDesc;
  elements.experienceTitle.textContent = translations[lang].experienceTitle;
  elements.exp1Date.textContent = translations[lang].exp1Date;
  elements.exp1Title.textContent = translations[lang].exp1Title;
  elements.exp1Period.textContent = translations[lang].exp1Period;
  elements.exp1Desc.textContent = translations[lang].exp1Desc;
  elements.exp2Date.textContent = translations[lang].exp2Date;
  elements.exp2Title.textContent = translations[lang].exp2Title;
  elements.exp2Period.textContent = translations[lang].exp2Period;
  elements.exp2Desc.textContent = translations[lang].exp2Desc;
  elements.exp3Date.textContent = translations[lang].exp3Date;
  elements.exp3Title.textContent = translations[lang].exp3Title;
  elements.exp3Period.textContent = translations[lang].exp3Period;
  elements.exp3Desc.textContent = translations[lang].exp3Desc;
  elements.educationTitle.textContent = translations[lang].educationTitle;
  elements.edu1Date.textContent = translations[lang].edu1Date;
  elements.edu1Title.textContent = translations[lang].edu1Title;
  elements.edu2Date.textContent = translations[lang].edu2Date;
  elements.edu2Title.textContent = translations[lang].edu2Title;
  elements.edu3Date.textContent = translations[lang].edu3Date;
  elements.edu3Title.textContent = translations[lang].edu3Title;
  elements.edu4Date.textContent = translations[lang].edu4Date;
  elements.edu4Title.textContent = translations[lang].edu4Title;
  elements.coursesTitle.textContent = translations[lang].coursesTitle;
  elements.course1Name.textContent = translations[lang].course1Name;
  elements.course1Institution.textContent =
    translations[lang].course1Institution;
  elements.course2Name.textContent = translations[lang].course2Name;
  elements.course2Institution.textContent =
    translations[lang].course2Institution;
  elements.course3Name.textContent = translations[lang].course3Name;
  elements.course3Institution.textContent =
    translations[lang].course3Institution;
  elements.course4Name.textContent = translations[lang].course4Name;
  elements.course4Institution.textContent =
    translations[lang].course4Institution;
  elements.course5Name.textContent = translations[lang].course5Name;
  elements.course5Institution.textContent =
    translations[lang].course5Institution;
  elements.course6Name.textContent = translations[lang].course6Name;
  elements.course6Institution.textContent =
    translations[lang].course6Institution;
  elements.footerText.innerHTML = translations[lang].footerText;

  // Atualiza os botões ativos
  ptBrBtn.classList.remove("active");
  enBtn.classList.remove("active");
  jpBtn.classList.remove("active");

  if (lang === "pt-BR") ptBrBtn.classList.add("active");
  if (lang === "en") enBtn.classList.add("active");
  if (lang === "jp") jpBtn.classList.add("active");
}

// Função para mudar o tema
function changeTheme(isLight) {
  if (isLight) {
    document.body.classList.add("light-theme");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("light-theme");
    themeToggle.checked = false;
  }
}

// Event listeners para os botões de idioma
ptBrBtn.addEventListener("click", () => changeLanguage("pt-BR"));
enBtn.addEventListener("click", () => changeLanguage("en"));
jpBtn.addEventListener("click", () => changeLanguage("jp"));

// Event listener para o toggle de tema
themeToggle.addEventListener("change", (e) => {
  changeTheme(e.target.checked);
});

// Inicializa com o idioma e tema padrão
changeLanguage("pt-BR");
changeTheme(false);
