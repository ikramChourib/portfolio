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
    "Ingénieure de recherche et développement avec 5 ans d’expériences spécialité traitement d’informations. Je possède une expérience significative en apprentissage supervisé et non supervisé en traitement des images et des données massives. Je suis une personne professionnelle, motivée, méthodique et soucieuse du détail."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18uHobUuOqMhvak-DK1juC8I2QfeTxwF0/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  
  linkedin: "https://linkedin.com/in/chourib-ikram/",
  gmail: "chourib.ikram@gmail.com",
  medium: "https://ikramchourib.medium.com",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "en tant qu'Ingénieure R&D",
  skills: [
    emoji(
      "✅ Recherche et veille technologique sur les dernières avancées en IA et traitement d’images"
    ),
    emoji(
      "✅Traitement des images satellites et analyse spatiale"
    ),
    emoji(
      "✅Réalisation des POCs avec nos modèles IA sur des cas concrets"
    ),
    emoji(
      "✅ Entraînement et Optimisation des Modèles IA pour la prédiction des objets aériennes"
    ),
    emoji(
      "✅Encadrement et supervision des projets étudiants en Master"
    ),
    emoji(
      "✅Rédaction de livrables pour des appels d’offres techniques"
    ),
    emoji(
      "✅ Participation à des conférences nationales/internationales pour dissusion des résultats et enrichissement scientifique"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot" // Pas de "fa-IAr", utilisez une icône représentative comme un robot
    },
    {
      skillName: "Scrum",
      fontAwesomeClassname: "fas fa-project-diagram" // Font Awesome ne propose pas "fa-scrum"
    },
    {
      skillName: "SageMaker",
      fontAwesomeClassname: "fas fa-brain" // SageMaker n'a pas d'icône officielle Font Awesome
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud" // Utiliser une icône générique "cloud"
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
      duration: "September 2016 - Septembre 2019",
      desc: "Imagerie numérique et Réalité virtuelle"
    },
    {
      schoolName: "Ecole Nationiale de Sciences Informatique",
      logo: require("./assets/images/ensi1.jpg"),
      subHeader: "Diplôme de doctorat en informatique",
      duration: "octobre 2019 - Décembre 2022",
      desc: "Traitement d’informations, Intelligence artificielle"
    },
    {
      schoolName: "IMT-Atlantique",
      logo: require("./assets/images/IMT_Atlantique_logo.png"),
      subHeader: "Diplôme de doctorat en informatique",
      duration: "octobre 2019 - Décembre 2022",
      desc: "Traitement d’informations, Intelligence artificielle"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    
    {
      Stack: "Approches Statistiques: Machine Learning, Deep Learning, Traitement et analyse des données massives, Raisonnement à base de cas, Clustering, Classification, Théorie des ensembles flou, Théorie des possibilités, Mesure de similarité, Traitement d’images satellitaires et médicales",
      progressPercentage: "80%"
    },
    {
      Stack: "modèle IA: YOLO, Detectron2, SAM, SAM2,MRCNN, FCN, UNET, mask2former, DETR, MRCNN, KNN, KMeans", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },{
      Stack: " Frameworks IA : TensorFlow, PyTorch,numpy, matplotlib, sicketLearn", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Langages & outils : Python, SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud : AWS Sagemaker, Azure, S3",
      progressPercentage: "90%"
    },
    {
      Stack: "SIG : QGIS, GeoPandas, Shapely",
      progressPercentage: "80%"
    },
    {
      Stack: "Méthodologie : SCRUM Agile",
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
      role: "Ingénieure R&D , Birdia, France",
      company: "Birdia",
      companylogo: require("./assets/images/birdia.jpg"),
      date: "Septembre 2023 – Présent",
      desc:
        "Traitement des images satellitaires et ortho pour la détection des objets d'intéréts "
        ,
      descBullets: [
        "Approches Statistiques: Machine Learning, Deep Learning,, Traitement d’images satellitaires",
       "modèle IA: YOLO, Detectron2, SAM, SAM2,MRCNN, FCN, UNET, mask2former, DETR, MRCNN, KNN, KMeans",
        "SIG : QGIS, GeoPandas, Shapely",
        "Cloud : AWS Sagemaker, Azure, S3",
        "langugage de Programmation: Python",
        "Méthodologie : SCRUM Agile",
      ]
    },
    {
      role: "Chercheuse hébergée",
      company: "Laboratoire LATIM: UBO, IMT- atlantique,France",
      companylogo: require("./assets/images/ubo2.png"),
      date: "février 2023 - août 2023",
      desc:
      "Recherche et veille technologique sur les dernières avancées en raisonnement à base de cas pour l’aide au diagnostic médical, Machine Learning"
        ,
      descBullets: [

      ]
    },
    {
      role: "Enseignante ATER-Temps Plein",
      company: "Université de Bretagne Occidentale (UBO), France",
      companylogo: require("./assets/images/ubo2.png"),
      date: "septembre 2022 - août 2023",
      desc:
        "",
      descBullets: [
        "Enseignement et accompagnement d’étudiants sur les matières: Algorithmique et programmation, programmation fonctionnelle, base de données relationnelles, technologie informatique et projet de conception objets",
        "langugage de Programmation & outils: Python, Java, SQL",

      ]
    },
    {
      role: "Doctorante en cotutelle",
      company: "INTRADYS,IMT-atlantique, France - ENSI,Tunisie",
      companylogo: require("./assets/images/intradys.jpg"),
      date: "septembre 2019 - décembre 2022",
      desc:
        "Développement d’un système d’aide au diagnostic médical basé sur le raisonnement à base de cas, répondant à des enjeux critiques dans le domaine de la santé",
        descBullets: [
          "langugage de Programmation & outils: Python",
          "Approches Statistiques: Machine Learning, Deep Learning, Traitement et analyse des données massives, Raisonnement à base de cas, Clustering, Classification, Théorie des ensembles flou, Théorie des possibilités, Mesure de similarité",
          "modèle IA: MRCNN, KNN, KMeans",
        ]
    },
    {
      role: "Enseignante vacataire",
      company: "Ecole Nationale des Ingènieurs de Brest (ENIB) (Temps partiel),France",
      companylogo: require("./assets/images/enib.png"),
      date: "février 2022 - mai 2022",
      desc:
        "",
        descBullets: [
          "Animation de cours en initiant les étudiants à des projets concrets tels que la création de jeux en Python",
          "langugage de Programmation & outils: Python"
        ]
    },
    {
      role: "Enseignante vacataire",
      company: "Institut des Hautes Etudes Tunisie (Temps partiel), Tunisie",
      companylogo: require("./assets/images/ihet.png"),
      date: " septembre 2019 - décembre 2019",
      desc:
       "",
        descBullets: [
           "Animation de cours sur les réseaux informatiques et développement logiciel",
          
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
  title: "Les articles que j'ai rédigé",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/these.png"),
      projectName: "Thèse de doctorat",
      projectDesc: "Raisonnement à base de cas pour l’aide au diagnostic médical: application AVC. 2022. Thèse de doctorat. Ecole nationale supérieure Mines-Télécom Atlantique Bretagne Pays de la Loire.",
      footerLink: [
        {
          name: "Visitez le site web",
          url: " https://www.theses.fr/2022IMTA0326"
        }
        //  you can add extra buttons here.
      ] 
    },
    {
      image: require("./assets/images/jcc.png"),
      projectName: "Journal",
      projectDesc: "Missing Data Handling: A Comprehensive Review, Taxonomy, and Comparative Evaluation. Journal of Computer and Communications",

      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://doi.org/10.4236/jcc.2025.136006"
        }
        //  you can add extra buttons here.
      ] 
    },
    {
      image: require("./assets/images/irbm.jpg"),
      projectName: "Journal",
      projectDesc: "Stroke Treatment Prediction Using Features Selection Methods and Machine Learning Classifiers. Innovation and Research in BioMedical engineering Journal (IRBM). Nominé « Best Research Award” à International Research Awards on Neurology and Neuro Disorders »",
      footerLink: [
        {
          name: "Visitez le site web",
          url: " https://doi.org/10.1016/j.irbm.2022.02.002"
        }
        //  you can add extra buttons here.
      ] 
    },
    {
      image: require("./assets/images/atsip.png"),
      projectName: "Article Conférence",
      projectDesc: "Structured Case Base Knowledge using Unsupervised Learning. 6th International Conference on Advanced Technologies DFM-145 For Signal and Image Processing (ATSIP 2022)",
      footerLink: [
        {
          name: "Visitez le site web",
          url: " https://ieeexplore.ieee.org/document/9805879"
        }
        //  you can add extra buttons here.
      ] 
    },
    {
      image: require("./assets/images/atsip.png"),
      projectName: "Article Conférence",
      projectDesc: "Problems And Importance Of Similarity Measure. 5th International Conference on Advanced Technologies DFM-145 For Signal and Image Processing (ATSIP 2020).",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://ieeexplore.ieee.org/document/9231755"
        }
        //  you can add extra buttons here.
      ] 
    }
    ,
    {
      image: require("./assets/images/med.jpg"),
      projectName: "Article Meduim",
      projectDesc: "make your own visualization",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://ikramchourib.medium.com/make-your-own-visualization-8efeea06b0d3"
        }
        //  you can add extra buttons here.
      ] 
    }
    ,
    {
      image: require("./assets/images/med.jpg"),
      projectName: "Article Meduim",
      projectDesc: "Dirty Data, Biased Data; causes, and solutions!",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://ikramchourib.medium.com/dirty-data-biased-data-causes-and-solutions-3bcb7e086e3d"
        }
        //  you can add extra buttons here.
      ] 
    },
    {
      image: require("./assets/images/med.jpg"),
      projectName: "Article Meduim",
      projectDesc: "Steps of preprocessing data, as a data analyst",
      footerLink: [
        {
          name: "Visitez le site web",
          url: "https://ikramchourib.medium.com/steps-of-preprocessing-data-as-a-data-analyst-91d6be423586"
        }
        //  you can add extra buttons here.
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
      title: "Certification en « éthique de recherche » par l’université de Lyon",
      subtitle: "",
      image: require("./assets/images/lyon.png"),
      footerLink: []
    },
    {
      title: "Certification en « Se former pour enseigner dans le supérieur » par MathSTIC de rennes1",
      subtitle: "",
      image: require("./assets/images/rennes.png"),
      footerLink: []
    },
    {
      title: "MTA98-388 : Certification MTA Introduction to Programming Using Python",
      subtitle: "",
      image: require("./assets/images/java.png"),
      footerLink: []
    },

    {
      title: "Certification en Google Data Analytics by Google, Coursera",
      image: require("./assets/images/coursera.png"),
      footerLink: []
    },
    {
      title: "Certification en Machine Learning with Python by IBM, Coursera",
      subtitle: "",
      image: require("./assets/images/coursera.png"),
      footerLink: []
    },
    {
      title: "Participation au salon des maires",
      subtitle: "",
      image: require("./assets/images/salon-maire.jpg"),
      footerLink: []
    },
    {
      title: "Participation au springer",
      subtitle: "",
      image: require("./assets/images/spring.jpg"),
      footerLink: []
    },
    {
      title: "Participation à FDDAY",
      subtitle: "",
      image: require("./assets/images/fedday.jpg"),
      footerLink: []
    }
    ,
    {
      title: "Participation à VIVATECH",
      subtitle: "",
      image: require("./assets/images/viva2.jpg"),
      footerLink: []
    }
    ,
    {
      title: "Participation à Paris Innovation",
      subtitle: "",
      image: require("./assets/images/paris-innov.jpg"),
      footerLink: []
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Mes Référents",
  subtitle:
    "",
  
  blogs: [
    {
      title: "Basel SOLAIMAN, IMT-Atlantique, France",
      description:
        "basel.solaiman@imt‐atlantique.fr (+33) 02 29 00 13 08"
    },
    {
    
      title: "Gireg DESMUELLES, Ecole Nationale des Ingénieurs de Brest (ENIB), France",
      description:
        "desmeulles@enib.fr   +33(0)2.98.05.89.53"
    },
    {
      title: " Laurence DUVAL, Université de Bretagne Occidentale (UBO), France",
      description:
        "laurence.duval@univ-brest.fr  +33 (0)2 98 01 69 75   +33 (0)6 95 89 66 39"
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
  number: "+33 7 74 13 86 85",
  email_address: "ikram.chourib@gmail.com"
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
