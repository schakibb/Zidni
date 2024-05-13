import VisualisationComponent from "../components/global/Visualisation/index";
import * as treeAnimation from "./visualisation/sfsd/tree_sfsd.json";
import * as storageUnits from "./visualisation/sfsd/storageUnits.json";

export const courses = [
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
          "Le chapitre 1 de offre une introduction complète aux concepts fondamentaux des fichiers et de leur manipulation en mémoire. Il commence par présenter les différents types de mémoires présents dans un système informatique, allant des registres du processeur à la mémoire centrale (MC) et aux mémoires secondaires (MS) telles que les disques magnétiques (HDD) et les dispositifs à mémoire flash (SSD). L'explication des différents types de mémoires met en lumière leurs caractéristiques en termes de vitesse d'accès, de taille, de nature d'accès, de coût et de volatilité.Ensuite, le chapitre se concentre sur les notions de fichiers, en décrivant la mémoire secondaire comme une zone de stockage composée de blocs physiques de taille fixe. Il explique comment un fichier est constitué d'un ensemble de ces blocs physiques, contenant des octets non interprétés, et comment les données sont organisées à l'intérieur de ces blocs. Les fichiers peuvent être de types binaires ou textes, avec des différences significatives dans leur représentation et leur portabilité entre les systèmes.Le chapitre poursuit en détaillant la machine abstraite pour les structures de fichiers, qui définit les opérations de base telles que l'ouverture, la fermeture, la lecture et l'écriture de fichiers. Une attention particulière est portée à l'utilisation des fichiers en langage C, notamment avec les fonctions fopen(), fclose(), fgetc(), fputc(), fgets(), fputs(), fscanf(), et fprintf() pour la manipulation de fichiers texte et binaires.Enfin, le chapitre aborde les techniques de lecture et d'écriture de données dans les fichiers, tant en mode texte qu'en mode binaire, avec des fonctions telles que fread(), fwrite(), et fseek(). Des exemples pratiques illustrent l'utilisation de ces fonctions pour une manipulation efficace des fichiers en langage C.Dans l'ensemble, ce chapitre fournit une base solide pour comprendre les principes fondamentaux des fichiers et de leur manipulation en mémoire, préparant ainsi le terrain pour des discussions plus avancées sur les structures de fichiers et les structures de données dans les chapitres suivants.",

        subChapter: [
          {
            id: 111,
            title: "1) Les différents types de mémoires",
            subChapterContent: `TODO:MOULOUDJ MOHAMMED
            `,
            subChapterVisualisation: (
              <VisualisationComponent
                animationData={storageUnits}
                title={"Storage Units"}
                description={
                  "Il existe plusieurs types de mémoires dans un ordinateur."
                }
              />
            ),
          },
          {
            id: 122,
            title: "1) Les différents types de mémoires",
            subChapterContent: `TODO:MOULOUDJ MOHAMMED
            `,
            subChapterVisualisation: (
              <VisualisationComponent
                animationData={treeAnimation}
                title={"Tree"}
                description={
                  "Il existe plusieurs types de mémoires dans un ordinateur."
                }
              />
            ),
          },
        ],
      },
    ],

    path: "/courses/sfsd/learn",
    quiz: "/courses/sfsd/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
    next: "completed_path",
  },
];
