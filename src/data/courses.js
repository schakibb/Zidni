export const courses = [
  // {
  //   id: 42,
  //   title: "Analyse",
  //   description: "Introduction to calculus and mathematical analysis.",
  //   content:
  //     "Analyse course covers topics such as limits, derivatives, integrals, and their applications in various fields including physics, engineering, and economics. Emphasis is placed on understanding fundamental concepts and problem-solving techniques.",
  //   path: "/courses/analyse",
  //   next: "/courses/Sfsd",
  // },
  {
    id: 23,
    title: "Structure de fichiers et structure de données",
    description:
      "Le module Structures de Fichiers et Structures de Données étudie l'accès aux fichiers, les structures de données, et les algorithmes associés pour manipuler efficacement des données massives, en optimisant les transferts entre mémoire centrale et externe.",
    chapters: [
      {
        chapterId: 1,
        title: "Généralités sur les fichiers",
        chapterDescription:
          "Le chapitre 1 de  offre une introduction complète aux concepts fondamentaux des fichiers et de leur manipulation en mémoire. Il commence par présenter les différents types de mémoires présents dans un système informatique, allant des registres du processeur à la mémoire centrale (MC) et aux mémoires secondaires (MS) telles que les disques magnétiques (HDD) et les dispositifs à mémoire flash (SSD). L'explication des différents types de mémoires met en lumière leurs caractéristiques en termes de vitesse d'accès, de taille, de nature d'accès, de coût et de volatilité.Ensuite, le chapitre se concentre sur les notions de fichiers, en décrivant la mémoire secondaire comme une zone de stockage composée de blocs physiques de taille fixe. Il explique comment un fichier est constitué d'un ensemble de ces blocs physiques, contenant des octets non interprétés, et comment les données sont organisées à l'intérieur de ces blocs. Les fichiers peuvent être de types binaires ou textes, avec des différences significatives dans leur représentation et leur portabilité entre les systèmes.Le chapitre poursuit en détaillant la machine abstraite pour les structures de fichiers, qui définit les opérations de base telles que l'ouverture, la fermeture, la lecture et l'écriture de fichiers. Une attention particulière est portée à l'utilisation des fichiers en langage C, notamment avec les fonctions fopen(), fclose(), fgetc(), fputc(), fgets(), fputs(), fscanf(), et fprintf() pour la manipulation de fichiers texte et binaires.Enfin, le chapitre aborde les techniques de lecture et d'écriture de données dans les fichiers, tant en mode texte qu'en mode binaire, avec des fonctions telles que fread(), fwrite(), et fseek(). Des exemples pratiques illustrent l'utilisation de ces fonctions pour une manipulation efficace des fichiers en langage C.Dans l'ensemble, ce chapitre fournit une base solide pour comprendre les principes fondamentaux des fichiers et de leur manipulation en mémoire, préparant ainsi le terrain pour des discussions plus avancées sur les structures de fichiers et les structures de données dans les chapitres suivants.",
      },
      {
        chapterId: 2,
        title: "Les structures séquentielles",
        chapterDescription:
          "Le chapitre 2 traite de l'organisation et de la gestion des structures de fichiers, en mettant en avant deux aspects principaux : l'organisation globale des blocs et l'organisation interne des blocs En ce qui concerne l'organisation globale des blocs, deux approches sont explorées : celle où le fichier est vu comme un tableau, avec des blocs contigus, et celle où le fichier est vu comme une liste, avec des blocs chaînés entre eux. Dans le premier cas, des informations telles que le chapterIdéro du premier bloc et éventuellement le dernier bloc sont importantes, tandis que dans le second cas, seul le chapterIdéro du premier bloc est nécessaire.En ce qui concerne l'organisation interne des blocs, deux types d'enregistrements sont abordés : ceux de longueur fixe et ceux de longueur variable. Pour les enregistrements de longueur fixe, chaque bloc peut contenir un tableau d'enregistrements du même type. En revanche, pour les enregistrements de longueur variable, chaque enregistrement est considéré comme une chaîne de caractères, avec des techniques telles que l'utilisation de caractères spéciaux pour séparer les champs ou l'utilisation de préfixes pour indiquer la taille des champs.De plus, le chapitre présente une taxonomie des structures simples de fichiers, en combinant l'organisation globale des fichiers (tableau ou liste) avec l'organisation interne des blocs (format fixe ou variable des enregistrements), ainsi que la possibilité de garder le fichier ordonné ou non selon les valeurs d'un champ clé.Enfin, l'exemple complet d'un fichier de type TOF (fichier vu comme tableau, ordonné avec enregistrements à taille fixe) est détaillé, y compris les opérations de recherche, d'insertion, de suppression, de chargement initial et de réorganisation périodique.En résumé, le chapitre 2 offre une vue d'ensemble complète sur la manière d'organiser et de gérer efficacement les fichiers, en mettant en lumière différentes méthodes et techniques pour optimiser leur utilisation.",
      },
      {
        chapterId: 3,
        title: "Les méthodes d'index",
        chapterDescription:
          "Le chapitre 3 aborde les structures d'index, essentielles pour accélérer la recherche d'enregistrements dans une base de données. Il commence par définir les concepts généraux, notamment la clé de recherche, utilisée pour retrouver des enregistrements spécifiques. L'index, présenté comme une structure de données en mémoire centrale (MC) ou en mémoire secondaire (MS), offre des méthodes d'accès mono-clé et multi-clés.Dans le contexte des accès mono-clé, différents types d'index sont explorés, tels que les index en MC, les index en MS et les index multi-niveaux. L'utilisation des index en MC pour la recherche, l'insertion et la suppression d'enregistrements est détaillée. De plus, le processus de création, de sauvegarde et de chargement d'index est discuté.Le chapitre couvre également les aspects des accès multi-clés, où plusieurs attributs sont utilisés pour les recherches. Il présente des techniques telles que les index indépendants, les index inversés et les index bitmap pour gérer efficacement ces requêtes. L'utilisation des index en MC sous forme d'arbres de recherche binaire et l'exploration des index de grande taille sont également abordées.Enfin, le chapitre explore les étapes d'une requête multi-clés, notamment l'utilisation d'index secondaires et primaires pour filtrer et retrouver les enregistrements pertinents. Il discute également des procédures d'insertion et de suppression d'enregistrements, en mettant l'accent sur la mise à jour des index associés. En résumé, ce chapitre fournit une compréhension approfondie des structures d'index et de leur utilisation efficace dans la gestion de bases de données.",
      },
      {
        chapterId: 4,
        title: "Arbres de recherche",
        chapterDescription:
          "Le chapitre 4 (Les méthodes arbres de recherche) explore en profondeur les méthodes basées sur les arbres de recherche, soulignant leur importance dans le domaine du stockage et de la recherche de données. Il commence par une introduction aux concepts fondamentaux des arbres de recherche, mettant en avant leur utilisation efficace pour l'organisation et la manipulation de données. En particulier, les arbres binaires de recherche sont examinés en détail, avec une discussion sur leur construction, leurs propriétés et leurs opérations clés telles que l'insertion, la suppression et la recherche. De plus, le chapitre aborde également les défis liés aux arbres de recherche non équilibrés et explore des méthodes d'équilibrage telles que les arbres AVL et les arbres rouges-noirs. Enfin, il présente des extensions importantes comme les arbres de recherche multi-aires et les B-arbres, offrant ainsi aux lecteurs une vue d'ensemble complète des différentes approches utilisées pour gérer efficacement les données dans un contexte d'arbre de recherche.",
      },
      {
        chapterId: 5,
        title: "Les méthodes de hachage",
        chapterDescription:
          "Le chapitre 5 explore l'utilisation des méthodes de hachage pour accéder aux fichiers de manière efficace. Imaginez que vous ayez un grand dossier contenant de nombreuses informations. Le hachage agit un peu comme des étiquettes uniques pour chaque document, permettant ainsi de les ranger dans des sections spécifiques en fonction de ces étiquettes. Tout d'abord, le chapitre explique le concept de hachage statique, où chaque élément est placé dans une position déterminée par une fonction spéciale. Cependant, des collisions peuvent survenir lorsque deux éléments se retrouvent à la même position, ce qui est résolu en utilisant des méthodes telles que le chaînage ou le double hachage. Ensuite, il aborde diverses applications pratiques, comme l'utilisation d'une table de hachage comme index pour accélérer l'accès aux données ou la gestion de fichiers en utilisant des méthodes de hachage. Enfin, il introduit le concept de hachage dynamique, où la fonction de hachage s'ajuste dynamiquement à la taille du fichier pour maintenir des performances optimales même avec un nombre croissant d'insertions ou de suppressions. En somme, ce chapitre offre un aperçu approfondi de l'utilisation ingénieuse des méthodes de hachage pour organiser et accéder efficacement aux données stockées dans des fichiers.",
      },
    ],

    path: "/courses/Sfsd",
    quiz: "/courses/Sfsd/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
    next: "/courses/completed_path",
  },
];
