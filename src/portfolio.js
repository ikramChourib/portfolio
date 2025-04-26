/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Ikram Chourib",
  title: "Salut à tous, je m'appelle Ikram",
  subTitle: emoji(
    "Un développeur Full Stack SpringBoot/Angular 🚀ayant une expérience dans la création d'applications Web avec Spring Boot/Angular/Postgres/Elasticsearch et d'autres bibliothèques et frameworks"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AhdY2IMOLdkUawxgYwfsl-PmFzwdSK3L/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Fouedbengagi",
  linkedin: "www.linkedin.com/in/fouedbengagi",
  gmail: "fouedbengagi@gmail.com",
  facebook: "https://www.facebook.com/foued.bengagi",
  medium: "https://fouedbengagi.medium.com",
  stackoverflow: "https://stackoverflow.com/users/11872954/bengagi-foued",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR FULL STACK QUI VEUT EXPLORER CHAQUE STACK TECHNIQUE",
  skills: [
    emoji(
      "✅ Le Web est ma passion et je développe des solutions complètes, de l'idée à la production, en cherchant toujours à utiliser la technologie la plus appropriée au projet."
    ),
    emoji(
      "✅ Développer du code hautement performant et propre"
    ),
    emoji(
      "✅ faire face à de nombreux défis techniques tels que la refactorisation du code et les tests de charge."
    ),
    emoji(
      "✅ Je me concentre fortement sur les meilleures pratiques en matière de qualité du code et d'ingénierie telles que TDD, CI/CD et l'automatisation."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université ISAMM",
      logo: require("./assets/images/isamm.png"),
      subHeader: "Diplôme d'ingénieur en informatique",
      duration: "September 2016 - April 2019",
      desc: "génie logiciel"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JAVA", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },{
      Stack: "SPRING BOOT", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "ANGULAR",
      progressPercentage: "80%"
    },
    {
      Stack: "ELASTICSEARCH",
      progressPercentage: "90%"
    },
    {
      Stack: "KUBERNETES",
      progressPercentage: "80%"
    },
    {
      Stack: "DOCKER",
      progressPercentage: "80%"
    }
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Consultant Spring Boot/Angular + SCRUM Mater",
      company: "ENEDIS",
      companylogo: require("./assets/images/enedis.png"),
      date: "Février 2022 – Présent",
      desc:
        ""
        ,
      descBullets: [
        "Langages: Java / Typescript/ shell",
        "Principaux frameworks: Spring Boot,Angular",
        "SGBD: Elasticsearch (java api, es search DSL), Postgresql.",
        "Autres: Webpack, Bootstrap, Maven, Tomcat, Git, jenkins,kubernetes."
      ]
    },
    {
      role: "Consultant Spring Boot/Angular",
      company: "SAGEMCOM",
      companylogo: require("./assets/images/sagem.png"),
      date: "Février 2019 – Janvier 2022",
      desc:
        "prestataire de services au projet sagemcom : comptage intelligent"
        ,
      descBullets: [
        "Langages: Java and JavaScript ES6.",
        "Principaux frameworks: Spring Core, Apache Camel, Apache Karaf,Kibana, Hibernate, Angular",
        "SGBD: Elasticsearch (java api, es search DSL), Postgresql.",
        "Autres: Webpack, Bootstrap, Maven, Tomcat, Git, jenkins."
      ]
    },
    {
      role: "développeur Spring Boot/Angular",
      company: "TALAN",
      companylogo: require("./assets/images/logo-talan.png"),
      date: "Juin 2019 – Janvier 2022",
      desc:
        "développement d'une plateforme de supervision générique pour une infrastructure IoT",
      descBullets: [
        "Langages: Java 8 and JavaScript ES6.",
        "Principaux frameworks: Spring Core, Spring MVC, Spring Data, JPA, Spring Security, Hibernate, Angular",
        "SGBD: Elasticsearch, MySQL.",
        "Autres: Chart.js, Leaflet, Webpack, Bootstrap, Maven, Tomcat, Git."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "MIND ENGINEERING",
      companylogo: require("./assets/images/mind.jpg"),
      date: "juin 2016 – Septembre 2016",
      desc:
        "tests et validation de projets à l'aide de testng et de selinium webdriver.",
        descBullets: [
          "technologies: java, selenium, testng, JUnit"
        ]
    }
  
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets auxquels j'ai participé",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/compteur-linky.png"),
      projectName: "ENEDIS Solution de comptage intelligent",
      projectDesc: "Participer dans les developpement des microservices de départemnt TI-STM qui traitent les données énergétiques, Le département TI-STM est dédié au traitement des données de mesure, au stockage des données collectées",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://www.enedis.fr/le-compteur-linky-vous-facilite-la-vie"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/siconia.png"),
      projectName: "SICONIA Comptage intelligent",
      projectDesc: "Suite logicielle de Sagemcom : Siconia® est une plateforme unifiée Smart Grid conçue pour accompagner les processus métier des Utilities pour le comptage intelligent multi-énergies (électricité, gaz, eau, chaleur) et la supervision des réseaux de distribution.",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://www.sagemcom.com/V02/fr/smart-city/smart-meter/#:~:text=La%20suite%20logicielle%20de%20Sagemcom,supervision%20du%20r%C3%A9seau%20de%20distribution."
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/siconia.png"),
      projectName: "SLA",
      projectDesc: "SLA (services-level contracts) : C'est un composant permettant d'extraire des KPI pour assurer la qualité des services fournis par le Grid.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/cim.png"),
      projectName: "CIM",
      projectDesc: "CIM (Common Information Model) : est un Middleware qui joue le rôle d'intermédiaire entre un système d'information central (CIS) et un équipement de comptage intelligent de la consommation d'énergie.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/1000cv.png"),
      projectName: "1000 CV",
      projectDesc: "1000 CV est un outil utilisé comme moteur de recherche de compétences qui propose de nombreux critères de recherche afin de faciliter la recherche du profil recherché.",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/compta.png"),
      projectName: "comptaNovia",
      projectDesc: "Conception et développement d'une application de gestion des factures, ventes et achats d'entreprises en mode SaaS en architecture",
      footerLink: [
      ]
    },
    {
      image: require("./assets/images/emdr.png"),
      projectName: "EMDR OMES Project",
      projectDesc: "Conception et développement d'une plateforme d'évaluation de l'intérêt de l'EMDR (Eye Movement Desensitization and Reprocessing) pour la santé mentale des personnels soignants dans le contexte de la crise sanitaire covid-19",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et certifications 🏆 "),
  subtitle:
    "RÉALISATIONS, CERTIFICATIONS, LETTRES DE RÉCOMPENSE ET QUELQUES TRUCS SYMPAS QUE J'AI RÉALISÉS !",

  achievementsCards: [
    {
      title: "Scrum Fundamentals Certified (SFC™)",
      subtitle: "",
      image: require("./assets/images/badge-SFC.png"),
      footerLink: []
    },
    {
      title: "Scrum for Operations and DevOps Fundamentals Certified (SODFC™)",
      subtitle: "",
      image: require("./assets/images/badge-SODFC.png"),
      footerLink: []
    },
    {
      title: "MTA98-361 : Software Development Fundamentals",
      subtitle: "",
      image: require("./assets/images/software.png"),
      footerLink: []
    },
    {
      title: "MTA98-388 : Programming Using Java",
      subtitle: "",
      image: require("./assets/images/java.png"),
      footerLink: []
    },

    {
      title: "MTA98-364 : Database Administration Fundamentals",
      image: require("./assets/images/database.png"),
      footerLink: []
    },
    {
      title: "3ème place Hackathon By TAYARA",
      subtitle: "",
      image: require("./assets/images/comp1.jpg"),
      footerLink: [
        {
          name: "Link",
          url:
            "https://www.tunisianmonitoronline.com/index.php/2018/10/21/hackathon-first-edition-of-tech-talks-by-tayara/"
        }
      ]
    },
    {
      title: "2ème place hackathon IWATCH",
      subtitle: "",
      image: require("./assets/images/comp2.jpg"),
      footerLink: []
    },
    {
      title: "gagnant 🏆 of STAR innovation Competetion",
      subtitle: "",
      image: require("./assets/images/comp3.jpg"),
      footerLink: []
    },
    {
      title: "certificat d'excellence académique ⭐",
      subtitle: "",
      image: require("./assets/images/certif.jpg"),
      footerLink: []
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Veuillez consulter mes articles sur medium 📝",
  subtitle:
    "PASSIONNÉ PAR LE DÉVELOPPEMENT DE TRUCS SYMPAS, J'AIME ÉCRIRE OCCASIONNELLEMENT SUR MEDIUM POUR ENSEIGNER AUX AUTRES CE QUE J'AI APPRIS.",
  
  blogs: [
    {
      url:
        "https://fouedbengagi.medium.com/an-elasticsearch-tutorial-getting-started-4cfb0958fc22",
      title: "Elasticsearch for beginners",
      description:
        "Do you want to start using elasticsearch but you hisitate where to start ? use my link to get a first view of elasticsearch"
    },
    {
      url: "https://fouedbengagi.medium.com/elasticsearch-java-high-level-rest-client-6829ae848e43",
      title: "Elasticsearch Java High Level REST Client?",
      description:
        "What is ES java high level rest client ?."
    },
    {
      url: "https://fouedbengagi.medium.com/my-experience-with-apache-camel-2095cfe9fc0c",
      title: "My Experience with Apache Camel 😻",
      description:
        "What i like and doesn't like about apache camel"
    }
    ,
    {
      url: "https://fouedbengagi.medium.com/what-i-learned-through-my-experience-as-a-developer-dealing-with-load-test-teams-74de20417643",
      title: "Load Testing",
      description:
        "What i learned through my experience as a developer dealing with load test teams"
    }  ,
    {
      url: "https://fouedbengagi.medium.com/activemq-vs-kafka-1c77f5c8e5fe",
      title: "ActiveMQ vs Kafka",
      description:
        "What i learned through my experience with ActiveMQ and Kafka"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez moi ☎️ 📧 "),
  subtitle:
    "DISCUTEZ D'UN PROJET OU SOUHAITEZ SIMPLEMENT DIRE BONJOUR ? MA BOÎTE DE RÉCEPTION EST OUVERTE À TOUS.",
  number: "+330765287262",
  email_address: "fouedbengagi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
