[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Commercial Plumbing & Mechanical Bid Estimating Excel Template & Project Tracking Toolkit
<img width="1218" height="790" alt="image" src="https://github.com/user-attachments/assets/d958ab70-96c7-4ee4-acf8-d2ec0878f984" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-informational.svg)](#)
[![Tool Type: Estimating + Tracking](https://img.shields.io/badge/Tool%20Type-Estimating%20%2B%20Tracking-success.svg)](#)

**Un tableur d'estimation en plomberie commerciale gratuit et sans installation, ainsi qu'un modèle de gestion d'offres pour entrepreneurs en mécanique. Transformez les données brutes de métré MEP (Mechanical, Electrical, Plumbing) en une base d'offre transparente, une structure de coûts directs et un tableau de bord de pipeline de projet de construction — sans frais d'abonnement logiciel récurrents.**

<p><strong>Aucune inscription. Aucune installation. Gratuit dans votre navigateur.</strong></p>

Essayez gratuitement la version navigateur. Si vous avez besoin de la version Excel entièrement débloquée pour une imputation des coûts par projet permanente, vous pouvez l'acheter avec une garantie satisfait ou remboursé de 30 jours, sans question.

> 🌐 **[Testez gratuitement l'estimateur d'offres en plomberie HTML dans le navigateur](https://hyvoid.github.io/commercial-hvac-plumbing-bid-estimator/)** — Version d'évaluation navigateur / HTML
> 
> 📥 **[Téléchargez le classeur Excel d'estimation MEP réutilisable](https://www.theseusworkshop.com/l/sbazzz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=commercial-hvac-plumbing-estimating)** — Modèle complet d'estimation de projet hors ligne

---

## Comment cet outil d'estimation de construction résout les points douloureux des offres

Au lieu de disperser les formules sur plusieurs onglets, cette boîte à outils cartographie les échecs d'estimation courants vers des solutions automatisées :

| Point douloureux | Solution | Description |
|---|---|---|
| Totaux d'offre à l'aveugle | Structure de coûts d'offre au niveau projet | Les coûts directs de matériaux, de main-d'œuvre directe, d'équipement/sous-traitance, les frais généraux, l'aléa, la marge commerciale et la valeur finale de l'offre sont immédiatement traçables dans une seule chaîne de calcul ininterrompue. |
| Métrés déconnectés | Exposition des quantités techniques | L'identifiant de projet, la division/corps de métier, la description d'article MEP, l'unité, la quantité, le taux matériaux, les heures de main-d'œuvre par unité et les taux d'équipement restent durablement liés au tableur de métré sous-jacent. |
| Coûts de main-d'œuvre obsolètes | Hypothèses de coûts de main-d'œuvre centralisées | Les taux de main-d'œuvre standard des corps de métier CVC et plomberie sont conservés dans un tableau maître et appliqués automatiquement aux divisions de métré concernées. |
| Formules de tarification cassées | Contrôle de la structure de tarification commerciale | Les frais généraux, l'aléa et la marge cible sont contrôlés depuis une seule couche d'hypothèses, empêchant les écrasements accidentels de formules. |
| Historique d'offres perdu | Visibilité sur le pipeline d'offres | Suivez le statut des projets, les offres soumises, les valeurs de marché attribuées, les opportunités perdues et les analyses de taux de réussite sur l'ensemble de votre portefeuille de construction. |
| Aucune vue d'ensemble pour la direction | Tableaux de bord de visibilité des coûts pour la direction | Les résumés de projets sélectionnés exposent la santé financière exacte du pipeline et l'intégrité structurelle de chaque offre commerciale. |

---

## Qui a besoin de ce modèle d'estimation et d'offres MEP ? (Rôles et scénarios)

Cette boîte à outils est explicitement structurée pour les professionnels de la construction qui ont besoin d'une analyse de coûts fiable et capable de fonctionner hors ligne :

- **Estimateurs en mécanique ayant besoin d'un tableur d'offres CVC :** Vous devez chiffrer les gaines, les unités de toiture et la tuyauterie sans lutter contre des logiciels trop complexes et gonflés. Ce modèle sépare vos quantités de métré de vos taux de marge commerciale.
- **Entrepreneurs en plomberie commerciale recherchant un modèle de métré en plomberie :** Vous devez appliquer instantanément les taux de main-d'œuvre standard du corps de métier à des milliers de pieds linéaires de tube cuivre ou PVC. Saisissez le métré une fois, et laissez le moteur d'hypothèses centralisé calculer les coûts directs.
- **Chefs de projet de construction recherchant un logiciel de suivi d'offres :** Vous gérez plusieurs appels d'offres et avez besoin d'une vue au niveau portefeuille. Utilisez le tableau de bord pour suivre quelles offres sont en brouillon, en attente, gagnées ou perdues, en calculant automatiquement votre taux de réussite global.
- **Directeurs de préconstruction ayant besoin d'une base de données de coûts MEP :** Vous avez besoin d'un flux d'estimation reproductible où les faits matériels et les hypothèses commerciales (comme les frais généraux et l'aléa) ne sont pas dangereusement mélangés dans la même cellule.

---

## Flux de travail de démarrage rapide : comment estimer et suivre les offres en mécanique

Suivez ces étapes pour générer une base d'offre transparente.

### Étape 1 : Définir les hypothèses commerciales (définissez vos marges)
**Action :** Ouvrez l'onglet `02_Assumptions` pour verrouiller vos paramètres commerciaux globaux.
Conservez les paramètres qui contrôlent le modèle d'estimation de manière centralisée. Les contrôles typiques incluent le symbole monétaire, le taux de frais généraux, la marge cible, le taux d'aléa, les taux de main-d'œuvre standard par corps de métier et les taux d'équipement standard. *Ne les saisissez jamais de façon répétée dans des formules de calcul individuelles.*

### Étape 2 : Créer la fiche projet (consigner les détails de l'offre)
**Action :** Ouvrez `03_Project_Setup` pour générer l'identifiant de projet principal.
Saisissez l'identifiant de projet, le nom du projet, le nom du client, la date de l'offre, l'estimateur principal et le statut de l'offre. Cet **identifiant de projet** agit comme la clé de base de données reliant vos données commerciales directement à votre métré.

### Étape 3 : Saisir le métré (saisie des quantités de tuyauterie et de gaines)
**Action :** Ouvrez `04_Quantity_Takeoff` et saisissez vos faits techniques.
Consignez l'identifiant de projet, la division / corps de métier, la description d'article, la quantité, le taux matériaux unitaire, les heures de main-d'œuvre par unité et le taux d'équipement unitaire. *Le taux de main-d'œuvre appliqué est automatiquement alimenté depuis vos hypothèses de taux par corps de métier de l'étape 1.*

### Étape 4 : Analyser le pipeline et télécharger le modèle Excel réutilisable
**Action :** Laissez `05_Estimate_Engine` exécuter automatiquement la chaîne de coûts, puis exportez vos données.
Examinez `06_Bid_Summary` pour la tarification projet, `07_Bid_Tracker` pour le suivi du pipeline d'appels d'offres et `08_Dashboard` pour les KPI de direction. 

**Prêt à déployer pour votre prochain appel d'offres ?**  
📥 **[Téléchargez ici le classeur Excel d'estimation MEP entièrement fonctionnel](https://www.theseusworkshop.com/l/sbazzz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=commercial-hvac-plumbing-estimating)** et réutilisez-le sur tous vos projets futurs.

---

## Pourquoi j'ai conçu cette alternative aux logiciels d'offres de construction

L'estimation commerciale échoue rarement parce qu'un estimateur ne sait pas multiplier une quantité par un taux. Elle devient peu fiable lorsque **les faits techniques, les hypothèses commerciales et les décisions de tarification finales se mélangent**.

Une quantité peut provenir d'un logiciel de métré. Un taux matériaux peut provenir d'un devis fournisseur. Un taux de main-d'œuvre peut provenir d'une hypothèse standard de corps de métier. Les frais généraux peuvent être intégrés dans une formule. L'aléa peut être ajouté manuellement. La marge commerciale peut ensuite être modifiée juste avant la soumission.

Le chiffre final peut toujours sembler raisonnable, mais le raisonnement derrière ce chiffre devient impossible à auditer. J'ai conçu cette boîte à outils autour d'une règle de séparation simple :

> **Les faits techniques doivent être saisis une seule fois. Les hypothèses commerciales doivent être contrôlées de manière centralisée. Le calcul de construction doit rester reproductible.**

Par exemple, une ligne telle que `4" Copper Pipe Type L` porte son identifiant de projet, son corps de métier, son unité, sa quantité, son taux matériaux, ses heures de main-d'œuvre par unité et son taux d'équipement/sous-traitance comme faits techniques indéniables. Le moteur les traite ensuite en coûts matériaux directs, coûts de main-d'œuvre directs et coûts d'équipement directs avant d'appliquer prudemment les frais généraux, l'aléa et la marge commerciale.

```text
MEP Quantity Takeoff
      ↓
Base Material / Labor / Equipment Cost
      ↓
Direct Construction Cost
      ↓
Operational Overhead
      ↓
Risk Contingency
      ↓
Commercial Markup
      ↓
Final Bid Submission
```

## Détails techniques — Suite

<details>
<summary>Pour les réviseurs techniques, les praticiens Excel et les collaborateurs</summary>

### Trois pièges qui surprennent même les estimateurs expérimentés

#### Piège 1 — Traiter l'offre finale comme un chiffre unique

**1. Une décision a été prise.**
Une offre est soumise après n'avoir examiné que le prix de vente final et une marge globale attendue.

**2. La décision s'appuyait sur une faiblesse de modèle passée inaperçue.**
L'estimation ne séparait pas clairement le coût de production direct des frais généraux, de l'aléa et de la marge commerciale.

**3. Le défaut change la recommandation.**
Une offre peut paraître compétitive parce que le chiffre de coût direct visible semble acceptable, tandis que les ajustements commerciaux nécessaires pour couvrir les frais généraux d'exploitation et l'incertitude du projet sont absents, sous-évalués ou appliqués de manière incohérente.

**4. Pourquoi le raisonnement est incorrect.**
Le prix de vente est le résultat de plusieurs couches économiques différentes. Traiter ces couches comme un seul chiffre rend difficile la détermination de savoir si un changement de prix répond au coût des matériaux, à l'exposition main-d'œuvre, à l'exposition équipement/sous-traitance, à la récupération des frais généraux, à l'aléa de risque ou au retour commercial cible.

**5. Approche corrigée.**
Séparez le calcul en :

```text
Material Cost
+
Labor Cost
+
Equipment / Subcontract Cost
=
Direct Cost

Direct Cost
+
Overhead
+
Contingency
+
Markup
=
Final Bid
```

**6. Résultat décisionnel corrigé.**
L'estimateur peut réviser une hypothèse commerciale sans reconstruire l'estimation. Un réviseur peut également remonter l'offre finale jusqu'aux composantes de coût sous-jacentes.

**7. Formule**

<details>
<summary>Calcul des coûts directs et de l'offre finale</summary>

```excel
Direct Material Cost
= Quantity × Material Unit Rate

Direct Labor Cost
= Quantity × Labor Hours / Unit × Applied Labor Rate

Direct Equipment Cost
= Quantity × Equipment Unit Rate

Direct Cost Subtotal
= Direct Material Cost
+ Direct Labor Cost
+ Direct Equipment Cost
```

La conception source définit le sous-total des coûts directs comme la base de calcul pour la répartition ultérieure des frais généraux, de l'aléa et de la marge commerciale. 

```excel
Overhead Allocation
= Direct Cost Subtotal
  × '02_Assumptions'!$B$5

Contingency Amount
= (Direct Cost Subtotal + Overhead Allocation)
  × '02_Assumptions'!$B$7

Markup Amount
= (Direct Cost Subtotal
  + Overhead Allocation
  + Contingency Amount)
  × '02_Assumptions'!$B$6

Line Item Final Bid
= Direct Cost Subtotal
+ Overhead Allocation
+ Contingency Amount
+ Markup Amount
```

</details>

---

#### Piège 2 — Utiliser un taux de main-d'œuvre sans contrôler la relation de corps de métier

**1. Une décision a été prise.**
Une estimation est considérée comme compétitive parce que la composante main-d'œuvre semble suffisamment faible pour soutenir le prix de vente cible.

**2. La décision s'appuyait sur une entrée défectueuse passée inaperçue.**
Le taux de main-d'œuvre appliqué à une ligne de métré ne correspond pas de manière cohérente à la division ou au corps de métier représenté par cette ligne.

**3. Le défaut change la recommandation.**
Un projet contenant de la tuyauterie de plomberie, des gaines CVC ou d'autres travaux spécialisés peut être chiffré avec une hypothèse de main-d'œuvre générique ou obsolète. Les coûts de main-d'œuvre directs résultants sont sous-évalués même lorsque les hypothèses de quantité et d'heures de main-d'œuvre par unité sont correctes.

**4. Pourquoi le raisonnement est incorrect.**
La quantité de main-d'œuvre et le prix de la main-d'œuvre sont des dimensions différentes.

Une estimation correcte des heures de main-d'œuvre multipliée par un taux horaire incorrect produit toujours un coût de main-d'œuvre incorrect.

**5. Approche corrigée.**
Conservez la relation corps de métier/taux dans la zone d'hypothèses centralisée et déduisez le taux de main-d'œuvre appliqué de la division/du corps de métier sélectionné.

**6. Résultat décisionnel corrigé.**
L'estimation devient cohérente entre les projets utilisant la même politique d'estimation. Si un taux de main-d'œuvre standard change, l'hypothèse peut être mise à jour de manière centralisée au lieu de fouiller les estimations individuelles.

**7. Formule**

<details>
<summary>Appariement du taux de main-d'œuvre par corps de métier</summary>

```excel
=MAP(
    B2:B1000,
    LAMBDA(
        trade,
        IF(
            trade="",
            "",
            XLOOKUP(
                trade,
                '02_Assumptions'!$B$11:$B$20,
                '02_Assumptions'!$C$11:$C$20,
                '02_Assumptions'!$C$11
            )
        )
    )
)
```

**Cellule de départ :** `H2`

**Plage de travail :** `H2:H1000`

La source spécifie `Applied Labor Rate` comme champ généré par formule et utilise `MAP`, `LAMBDA` et `XLOOKUP` pour apparier la division/le corps de métier du métré au tableau des taux de main-d'œuvre standard. 

</details>

---

#### Piège 3 — Gérer les offres comme des estimations isolées au lieu d'un pipeline

**1. Une décision a été prise.**
La direction examine les estimations individuelles lorsqu'elle a besoin de savoir combien de travaux sont actuellement poursuivis.

**2. La décision s'appuyait sur un échec de processus passé inaperçu.**
Le classeur d'estimation contient le montant de l'offre, mais le statut post-estimation n'est pas consolidé de manière cohérente.

**3. Le défaut change la recommandation.**
La direction peut savoir que plusieurs offres ont été préparées sans savoir quelle valeur est encore en attente, quelles opportunités ont été gagnées ou perdues, ou à quoi ressemble le pipeline d'offres global.

**4. Pourquoi le raisonnement est incorrect.**
Une estimation répond à une question de tarification au niveau projet.

Un suivi d'offres répond à une question commerciale au niveau portefeuille.

Ce sont des décisions différentes qui nécessitent des vues différentes des mêmes données maîtresses de projet.

**5. Approche corrigée.**
Conservez le maître projet avec un champ de statut d'offre contrôlé :

```text
Draft
Submitted
Won
Lost
Pending
```

Utilisez ensuite les sorties d'estimation au niveau projet et le statut du projet comme base de la vue de suivi des offres.

**6. Résultat décisionnel corrigé.**
La direction peut passer de :

```text
"What is this project's estimate?"
```

à :

```text
"What does the current estimating pipeline represent?"
```

L'architecture source définit explicitement `07_Bid_Tracker` comme la vue de pipeline d'offres pour les montants d'offres de projet, le statut d'attribution et les informations de taux de réussite. 

**7. Formule**

<details>
<summary>Logique d'agrégation du pipeline</summary>

La spécification d'implémentation établit le suiveur comme une couche de sortie consommant les couches projet et estimation. L'implémentation exacte des formules de classeur pour chaque KPI du suiveur n'est pas entièrement spécifiée dans le matériel source disponible, donc ce qui suit doit être traité comme la logique de calcul envisagée plutôt que comme une formule source affirmée :

```excel
Active / Open Bids
= COUNTIFS(Bid_Status_Range, "Submitted")
+ COUNTIFS(Bid_Status_Range, "Pending")
+ COUNTIFS(Bid_Status_Range, "Draft")
```

```excel
Won Value
= SUMIFS(
    Final_Bid_Range,
    Bid_Status_Range,
    "Won"
)
```

```excel
Win Rate
= IFERROR(
    Won_Count /
    (Won_Count + Lost_Count),
    0
)
```

La source confirme la finalité commerciale du suiveur mais ne fournit pas de dictionnaire de formules cellule par cellule complet pour ces KPI de sortie. 

</details>

---

### Scénario d'exemple

Considérons un projet de mécanique commerciale avec un périmètre mixte de tuyauterie et d'équipement.

Le métré contient :

| Entrée               |                   Valeur |
| ------------------- | ----------------------: |
| Project ID          |          `PRJ-2026-014` |
| Division / Trade    |       `Plumbing-Piping` |
| Item                | `4" Copper Pipe Type L` |
| Quantity            |              `1,200 LF` |
| Material Unit Rate  |           `$18.50 / LF` |
| Labor Hours / Unit  |          `0.12 hr / LF` |
| Applied Labor Rate  |           `$48.00 / hr` |
| Equipment Unit Rate |            `$1.50 / LF` |

La composante matériaux est :

```text
1,200 × $18.50
= $22,200
```

La composante main-d'œuvre est :

```text
1,200 × 0.12 × $48.00
= $6,912
```

La composante équipement est :

```text
1,200 × $1.50
= $1,800
```

Le coût direct devient donc :

```text
$22,200
+ $6,912
+ $1,800
= $30,912
```

Supposons que les hypothèses commerciales sont :

| Paramètre     | Taux |
| ------------- | ---: |
| Overhead      |  10% |
| Contingency   |   5% |
| Target Markup |  15% |

Frais généraux :

```text
$30,912 × 10%
= $3,091.20
```

Aléa :

```text
($30,912 + $3,091.20) × 5%
= $1,700.16
```

Marge commerciale :

```text
($30,912 + $3,091.20 + $1,700.16) × 15%
= $5,355.50
```

Offre finale :

```text
$30,912.00
+ $3,091.20
+ $1,700.16
+ $5,355.50
= $41,058.86
```

Le résultat utile n'est pas simplement le chiffre final `$41,058.86`.

L'estimation fournit désormais une structure de coûts traçable :

| Couche de coût       |         Montant | Part de l'offre finale |
| ---------------- | -------------: | -----------------: |
| Direct Material  |     $22,200.00 |             54.09% |
| Direct Labor     |      $6,912.00 |             16.84% |
| Direct Equipment |      $1,800.00 |              4.38% |
| Overhead         |      $3,091.20 |              7.53% |
| Contingency      |      $1,700.16 |              4.14% |
| Markup           |      $5,355.50 |             13.05% |
| **Final Bid**    | **$41,058.86** |        **100.00%** |

Cela change la conversation de revue.

Au lieu de se demander si `$41,058.86` « semble compétitif », l'estimateur peut identifier les véritables facteurs de coût.

Le projet a une composante matériaux particulièrement importante. La main-d'œuvre est le deuxième coût direct le plus élevé. L'exposition équipement est relativement plus faible. Les ajustements commerciaux sont visiblement séparés.

Si le devis matériaux change, l'entrée matériaux peut être mise à jour.

Si le taux de main-d'œuvre standard change, le taux de main-d'œuvre appliqué peut être mis à jour depuis le tableau d'hypothèses.

Si la politique commerciale change, les frais généraux, l'aléa ou la marge commerciale peuvent être modifiés de manière centralisée.

La chaîne de calcul reste alors :

```text
Project
   ↓
Quantity Takeoff
   ↓
Base Rates
   ↓
Direct Cost
   ↓
Commercial Adjustments
   ↓
Final Bid
   ↓
Bid Status
   ↓
Pipeline / Management View
```

Telle est la frontière d'aide à la décision envisagée du classeur : **rendre le chiffre plus facile à construire, à inspecter, à réviser et à reporter dans la décision commerciale suivante.**

### Référence des formules

Les groupes de formules suivants documentent la logique de calcul spécifiée par l'implémentation source. Les formules sont délibérément conservées proches de leur structure de classeur afin qu'un autre praticien Excel puisse reproduire la chaîne de calcul.

<details>
<summary>02_Assumptions — Paramètres commerciaux globaux</summary>

| Cellule / Plage | Paramètre           | Finalité                               |
| ------------ | ------------------- | ------------------------------------- |
| `B4`         | Currency Symbol     | Contrôle la présentation globale des devises |
| `B5`         | Overhead Rate       | Contrôle la répartition des frais généraux          |
| `B6`         | Target Markup       | Contrôle la marge commerciale            |
| `B7`         | Contingency Rate    | Contrôle l'aléa de risque               |
| `B11:B20`    | Trade Name          | Clés de recherche standard des corps de métier            |
| `C11:C20`    | Labor Rate / Hr     | Taux de coût de main-d'œuvre standard             |
| `E11:E20`    | Equipment Type      | Catégories d'équipement standard         |
| `F11:F20`    | Equipment Rate / Hr | Taux d'équipement standard              |

La source identifie cette feuille comme la couche de paramètres centralisée et définit spécifiquement les frais généraux, la marge cible, l'aléa, les taux de main-d'œuvre et les taux d'équipement comme des entrées contrôlées. 

**Règle non évidente :** les formules de calcul en aval devraient référencer ces cellules plutôt qu'intégrer directement les hypothèses commerciales.

</details>

<details>
<summary>04_Quantity_Takeoff — Recherche du taux de main-d'œuvre</summary>

**Finalité :** Déterminer automatiquement le taux de main-d'œuvre appliqué à partir de la division/du corps de métier sélectionné.

```excel
=MAP(
    B2:B1000,
    LAMBDA(
        trade,
        IF(
            trade="",
            "",
            XLOOKUP(
                trade,
                '02_Assumptions'!$B$11:$B$20,
                '02_Assumptions'!$C$11:$C$20,
                '02_Assumptions'!$C$11
            )
        )
    )
)
```

**Entrée :** `Division / Trade`

**Sortie :** `Applied Labor Rate`

**Cellule de départ :** `H2`

**Conception :** une formule configurée se propage sur la plage de travail.

La source identifie explicitement `H` comme généré par formule et le lie aux hypothèses centralisées de taux par corps de métier. 

</details>

<details>
<summary>05_Estimate_Engine — Héritage des données source</summary>

**Finalité :** Maintenir la couche de calcul synchronisée avec la couche de métré.

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!A2:C1000
)
```

Ceci hérite :

```text
Project ID
Division
Item Description
```

de `04_Quantity_Takeoff`.

La source définit `05_Estimate_Engine` comme une couche de calcul pure et interdit la saisie manuelle dans la zone de calcul. 

</details>

<details>
<summary>05_Estimate_Engine — Coût matériaux direct</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!F2:F1000
)
```

**Finalité :**

```text
Quantity × Material Unit Rate
```

**Sortie :** `Direct Material Cost`

La source spécifie `D2:D1000` comme plage de propagation pour ce calcul. 

</details>

<details>
<summary>05_Estimate_Engine — Coût de main-d'œuvre direct</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!G2:G1000
    * '04_Quantity_Takeoff'!H2:H1000
)
```

**Finalité :**

```text
Quantity
× Labor Hours / Unit
× Applied Labor Rate
```

**Sortie :** `Direct Labor Cost`

La source spécifie ceci comme le calcul du coût de main-d'œuvre et identifie la main-d'œuvre comme une composante de coût de projet direct. 

</details>

<details>
<summary>05_Estimate_Engine — Coût d'équipement direct</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!I2:I1000
)
```

**Finalité :**

```text
Quantity × Equipment Unit Rate
```

**Sortie :** `Direct Equipment Cost`

La source traite cette composante comme la couche de coût d'équipement / sous-traitance direct. 

</details>

<details>
<summary>05_Estimate_Engine — Sous-total des coûts directs</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    D2:D1000
    + E2:E1000
    + F2:F1000
)
```

**Finalité :**

```text
Direct Material Cost
+ Direct Labor Cost
+ Direct Equipment Cost
```

**Sortie :** `Direct Cost Subtotal`

Ce sous-total devient la base des étapes d'ajustement commercial. 

</details>

<details>
<summary>05_Estimate_Engine — Répartition des frais généraux</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    G2:G1000
    * '02_Assumptions'!$B$5
)
```

**Finalité :**

```text
Direct Cost Subtotal × Overhead Rate
```

**Paramètre :** `02_Assumptions!B5`

La source définit explicitement `B5` comme le paramètre global de taux de frais généraux. 

</details>

<details>
<summary>05_Estimate_Engine — Montant de l'aléa</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    (G2:G1000 + H2:H1000)
    * '02_Assumptions'!$B$7
)
```

**Finalité :**

```text
(Direct Cost + Overhead) × Contingency Rate
```

**Paramètre :** `02_Assumptions!B7`

La source définit l'aléa comme une provision pour risque appliquée après les coûts directs et les frais généraux. 

</details>

<details>
<summary>05_Estimate_Engine — Montant de la marge commerciale</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    (G2:G1000
    + H2:H1000
    + I2:I1000)
    * '02_Assumptions'!$B$6
)
```

**Finalité :**

```text
(Direct Cost + Overhead + Contingency)
× Target Markup
```

**Paramètre :** `02_Assumptions!B6`

La source définit `B6` comme le paramètre de marge cible utilisé pour déterminer le relèvement commercial final. 

</details>

<details>
<summary>05_Estimate_Engine — Offre finale</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    G2:G1000
    + H2:H1000
    + I2:I1000
    + J2:J1000
)
```

**Finalité :**

```text
Direct Cost
+ Overhead
+ Contingency
+ Markup
```

**Sortie :** `Line Item Final Bid`

La source identifie `K` comme la sortie d'offre finale par ligne et la définit comme la somme des couches de coût directes et commerciales. 

</details>

<details>
<summary>06_Bid_Summary — Agrégation au niveau projet</summary>

`06_Bid_Summary` est conçu pour résumer l'estimation pour un `Project ID` sélectionné.

La source établit la finalité commerciale comme :

* sélectionner un projet ;
* agréger automatiquement la structure de coûts ;
* exposer les indicateurs commerciaux ;
* présenter l'estimation au niveau projet plutôt qu'exiger une revue ligne par ligne.

Les formules cellule par cellule exactes pour la feuille de résumé ne sont pas entièrement spécifiées dans le matériel source disponible. Par conséquent, ce qui suit représente le modèle d'agrégation reproductible plutôt qu'une formule source affirmée :

```excel
=SUMIFS(
    '05_Estimate_Engine'!$G:$G,
    '05_Estimate_Engine'!$A:$A,
    Selected_Project_ID
)
```

Le même modèle `SUMIFS` peut être appliqué à :

```text
Direct Material Cost
Direct Labor Cost
Direct Equipment Cost
Direct Cost Subtotal
Overhead Allocation
Contingency Amount
Markup Amount
Line Item Final Bid
```

L'architecture source confirme que `06_Bid_Summary` est en aval des couches projet et estimation et est destiné à résumer les coûts par identifiant de projet sélectionné. 

</details>

<details>
<summary>07_Bid_Tracker — Logique d'offres au niveau portefeuille</summary>

`07_Bid_Tracker` fait passer le modèle de l'estimation au niveau projet au suivi de pipeline.

Les valeurs de statut de projet sous-jacentes spécifiées par la source sont :

```text
Draft
Submitted
Won
Lost
Pending
```

Le suiveur peut donc organiser le portefeuille d'estimation autour de :

* projet ;
* client ;
* date de l'offre ;
* montant de l'offre ;
* statut actuel ;
* valeur attribuée ;
* opportunités perdues ;
* analyse du taux de réussite.

La source définit le suiveur comme la vue automatisée des montants d'offres de projet, du statut d'attribution et du taux de réussite. 

Lorsqu'une implémentation concrète est requise, le modèle d'agrégation Excel standard est :

```excel
Won Value
=SUMIFS(
    Final_Bid_Range,
    Bid_Status_Range,
    "Won"
)
```

```excel
Won Count
=COUNTIFS(
    Bid_Status_Range,
    "Won"
)
```

```excel
Lost Count
=COUNTIFS(
    Bid_Status_Range,
    "Lost"
)
```

```excel
Win Rate
=IFERROR(
    Won Count / (Won Count + Lost Count),
    0
)
```

Ces formules documentent le calcul commercial envisagé. Elles ne sont pas présentées comme des formules de cellule extraites de la source là où la source ne spécifie pas de cellules exactes.

</details>

<details>
<summary>08_Dashboard — Vue de direction</summary>

`08_Dashboard` est la couche de présentation finale.

La source décrit cette feuille comme le poste de pilotage de direction pour visualiser :

* les offres actives ;
* le pipeline ;
* la composition des coûts ;
* les informations de direction liées aux offres.

Le sens de dépendance est :

```text
03_Project_Setup
        +
05_Estimate_Engine
        ↓
08_Dashboard
```

Le tableau de bord devrait donc consommer les sorties projet et estimation existantes plutôt que de recréer indépendamment les calculs de coûts.

Cela préserve une source de calcul unique et empêche la couche de direction de devenir un deuxième modèle d'estimation déconnecté. 

</details>

### Règles de validation

| Champ                     | Règle                                                                              | Comportement en cas d'erreur                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Project ID`              | Doit identifier la fiche maîtresse du projet dans `03_Project_Setup`.                    | Des identifiants de projet non appariés créent des relations projet-métré cassées et des résumés de projet peu fiables. |
| `Project Name`            | Saisi comme données maîtresses du projet.                                                   | Un nom manquant affaiblit les rapports et l'identification au niveau projet.                                       |
| `Client Name`             | Saisi comme données maîtresses du projet.                                                   | Des informations client manquantes limitent la revue au niveau client.                                 |
| `Bid Date`                | Utilisez une date valide au format `YYYY-MM-DD`.                                          | Des dates invalides compromettent la planification des offres et l'analyse par période.                                           |
| `Estimator`               | Champ texte identifiant l'estimateur responsable.                                 | Une responsabilité manquante affaiblit la traçabilité de la revue.                               |
| `Bid Status`              | Utilisez des valeurs contrôlées : `Draft`, `Submitted`, `Won`, `Lost`, `Pending`.            | Des valeurs non standard brisent le regroupement cohérent du pipeline.                                                |
| `Division / Trade`        | Devrait correspondre à la liste standard des corps de métier lorsqu'une recherche de taux de main-d'œuvre est requise. | Des valeurs non appariées peuvent déclencher le comportement de repli de la recherche.                                    |
| `Item Description`        | Texte de métré descriptif requis.                                                | Des descriptions manquantes réduisent la traçabilité des estimations au niveau ligne.                                      |
| `Unit`                    | Unité d'estimation valide telle que `LF`, `EA` ou `SQFT`.                              | Des unités incorrectes peuvent invalider la relation quantité/taux.                                |
| `Quantity`                | Quantité de métré mesurée numérique.                                                | Des quantités vides ou invalides empêchent un calcul de coût direct significatif.                                |
| `Material Unit Rate`      | Base de coût matériaux numérique.                                                      | Des taux manquants ou incorrects faussent les coûts matériaux directs.                                               |
| `Labor Hours / Unit`      | Hypothèse d'effort de main-d'œuvre numérique.                                                      | Des heures manquantes ou incorrectes faussent les coûts de main-d'œuvre directs.                                                |
| `Applied Labor Rate`      | Généré par formule à partir du tableau centralisé des taux de main-d'œuvre.                          | Un taux inattendu devrait déclencher une revue de l'appariement division/corps de métier et du tableau d'hypothèses.             |
| `Equipment Unit Rate`     | Base de coût d'équipement ou de sous-traitance numérique.                                             | Des valeurs manquantes produisent une exposition équipement/sous-traitance incomplète. |
| `Overhead Rate`           | Pourcentage conservé dans `02_Assumptions!B5`.                                     | Une valeur incorrecte affecte toutes les estimations utilisant le paramètre.                                             |
| `Target Markup`           | Pourcentage conservé dans `02_Assumptions!B6`.                                     | Une valeur incorrecte change la couche de prix de vente commercial.                                            |
| `Contingency Rate`        | Pourcentage conservé dans `02_Assumptions!B7`.                                     | Une valeur incorrecte change la provision pour risque.                                                            |
| `Calculation Layer`       | `05_Estimate_Engine` ne devrait contenir aucune saisie manuelle.                             | Les surcharges manuelles compromettent la reproductibilité envisagée de l'estimation.                              |
| `Currency Symbol`         | Conservé de manière centralisée dans `02_Assumptions!B4`.                                      | Une configuration incorrecte affecte la présentation plutôt que le calcul numérique sous-jacent.           |
| `Formula Spill Area`      | Les cellules de destination doivent rester libres de valeurs manuelles.                             | Une propagation de tableau dynamique bloquée produit le comportement Excel `#SPILL!`.                                         |
| `Assumption Cells`        | Les paramètres commerciaux doivent être des pourcentages numériques ou des valeurs configurées valides.     | Des hypothèses invalides propagent des résultats de calcul incorrects ou inutilisables.                               |
| `Project-to-Takeoff Link` | Chaque ligne de métré devrait contenir un identifiant de projet valide.                              | Les lignes de quantité orphelines ne peuvent pas être incluses de manière fiable dans les rapports au niveau projet.                              |
| `Project Status`          | Le statut devrait rester dans la liste contrôlée.                                  | Des valeurs de statut invalides créent des analyses de pipeline et de taux de réussite incohérentes.                              |

La conception source distingue explicitement **les zones de saisie manuelle, les zones générées par formule et les zones de contrôle des paramètres**, y compris la convention selon laquelle les cellules bleues représentent la saisie manuelle, les cellules grises les formules et les cellules jaunes les contrôles de paramètres. 

### Notes d'implémentation

#### Compatibilité des tableaux dynamiques

Le classeur s'appuie sur des fonctions Excel modernes, notamment :

```text
MAP
LAMBDA
XLOOKUP
IF
SUMIFS
```

L'architecture de calcul est conçue autour de la saisie d'une formule une seule fois dans la première ligne de calcul et de sa propagation sur la plage de travail.

C'est une alternative délibérée à la copie manuelle des formules sur chaque ligne d'estimation.

#### Discipline de la couche de calcul

`05_Estimate_Engine` devrait rester purement calculatoire.

La frontière envisagée est :

```text
Manual Fact
    ↓
Input Sheet
    ↓
Formula
    ↓
Calculation Output
    ↓
Summary
    ↓
Management View
```

Un utilisateur ne devrait pas modifier manuellement les coûts directs calculés, la répartition des frais généraux, l'aléa, la marge commerciale ou les valeurs d'offre finales.

#### Discipline des hypothèses commerciales

Le modèle suivant est délibérément évité :

```excel
=G2*10%
```

lorsque `10%` représente la politique de frais généraux configurable de l'organisation.

Le modèle préféré est :

```excel
=G2*'02_Assumptions'!$B$5
```

La même règle s'applique à la marge cible et à l'aléa.

Cela maintient la politique commerciale séparée de la mécanique de calcul.

#### Discipline de la clé de projet

`Project ID` fonctionne comme la clé primaire.

La relation est :

```text
03_Project_Setup
        │
        │ Project ID
        ▼
04_Quantity_Takeoff
        │
        │ Project ID
        ▼
05_Estimate_Engine
        │
        ├────────► 06_Bid_Summary
        ├────────► 07_Bid_Tracker
        └────────► 08_Dashboard
```

C'est la structure référentielle centrale du classeur.

#### Séparation des faits et des hypothèses

Le modèle distingue entre :

**Les faits projet / techniques**

```text
Project ID
Division / Trade
Item Description
Unit
Quantity
Material Unit Rate
Labor Hours / Unit
Equipment Unit Rate
```

et :

**Les hypothèses commerciales**

```text
Currency Symbol
Overhead Rate
Target Markup
Contingency Rate
Standard Labor Rates
Equipment Rates
```

Cette distinction est centrale pour la reproductibilité.

Un changement de périmètre projet devrait changer les données projet.

Un changement de politique commerciale devrait changer les hypothèses.

Ces deux événements ne devraient pas exiger la même action de maintenance.

### Liste de contrôle de reproductibilité

Avant d'utiliser le classeur pour une offre réelle, vérifiez :

```text
[ ] Project ID exists in 03_Project_Setup
[ ] Project master fields are complete
[ ] Bid Status uses a controlled value
[ ] Division / Trade matches the standard trade list where applicable
[ ] Quantity values are numeric
[ ] Material rates are current
[ ] Labor-hours-per-unit assumptions are reviewed
[ ] Applied Labor Rate is being generated correctly
[ ] Equipment / subcontract rates are current
[ ] Overhead Rate is confirmed
[ ] Contingency Rate is confirmed
[ ] Target Markup is confirmed
[ ] No calculation cells have been manually overwritten
[ ] Dynamic-array spill areas are clear
[ ] 06_Bid_Summary reflects the intended Project ID
[ ] 07_Bid_Tracker reflects the current bid status
[ ] 08_Dashboard reflects the latest calculation state
```

Le but de cette liste de contrôle n'est pas de remplacer le jugement d'estimation.

C'est d'empêcher le classeur lui-même de devenir la source d'incohérences d'estimation évitables.

</details>

## Autres outils de cette série

* **Construction Management** — contrôle de projet pour les budgets, les contrats, l'avancement, les paiements, les retenues et les avenants.
* **Construction Assembly-Based Tender Estimating** — estimation d'offres réutilisable basée sur des assemblages et tarification d'appels d'offres.
* **Pricing & Break-even Decision Calculator** — aide à la décision sur la tarification, la marge contributive et le seuil de rentabilité.
* **Marketing Budget Allocation Simulator** — allocation budgétaire structurée sous contraintes de retour et opérationnelles.

## Licence

Ce projet est publié sous la **Apache License 2.0**.

L'utilisation, la modification, la distribution et les œuvres dérivées sont autorisées sous réserve des termes et conditions de la Apache License 2.0.

Voir le fichier `LICENSE` pour le texte complet de la licence.
