[ 🌐 عربي ](README.ar.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Excel-sjabloon voor calculatie van commerciële loodgieters- en mechanical-inschrijvingen & projecttracking-toolkit

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-informational.svg)](#)
[![Tool Type: Estimating + Tracking](https://img.shields.io/badge/Tool%20Type-Estimating%20%2B%20Tracking-success.svg)](#)

**Een gratis, installatievrije spreadsheet voor commerciële loodgieterscalculatie en een sjabloon voor inschrijvingsbeheer voor mechanical-aannemers. Zet ruwe MEP-hoeveelheden (Mechanical, Electrical, Plumbing) om in een transparante inschrijvingsbasis, een opbouw van directe kosten en een dashboard voor de bouwprojectpijplijn — zonder terugkerende softwareabonnementskosten.**

<p><strong>Geen aanmelding. Geen installatie. Gratis in uw browser.</strong></p>

Probeer de browserversie gratis. Als u de volledig ontgrendelde Excel-versie nodig hebt voor permanente jobkostenberekening, kunt u deze kopen met 30 dagen niet-goed-geld-terug-garantie.

> 🌐 **[Test the Free HTML Plumbing Bid Estimator in Browser](https://hyvoid.github.io/commercial-hvac-plumbing-bid-estimator/)** — Browser / HTML evaluation version
> 
> 📥 **[Download the Reusable MEP Estimating Excel Workbook](https://www.theseusworkshop.com/l/sbazzz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=commercial-hvac-plumbing-estimating)** — Full offline project estimating template

## Want to try it?

Dit project maakt deel uit van de Construction Toolkit.

Probeer deze en andere lichtgewicht bouwtools 30 dagen gratis — inclusief tools voor calculeren, inschrijven, jobkostenberekening en dagelijkse operaties.

→ [Try the Construction Toolkit](https://theseusworkshop.com/l/fqtoi/BIDSEASON?utm_source=github&utm_medium=GitHub%20portfolio)

> 

---

## How This Construction Estimating Tool Solves Bidding Pain Points

In plaats van formules over meerdere tabbladen te verspreiden, koppelt deze toolkit veelvoorkomende calculatiefouten aan geautomatiseerde oplossingen:

| Pain Point | Solution | Description |
|---|---|---|
| Blind Bid Totals | Project-level bid cost build-up | Traceer directe materiaal-, directe arbeids-, materieel-/onderaannemingskosten, algemene kosten, onvoorzien, opslag en de definitieve inschrijvingswaarde direct in één ononderbroken berekeningsketen. |
| Disconnected Takeoffs | Engineering quantity exposure | Project-ID, divisie/vak, MEP-postomschrijving, eenheid, hoeveelheid, materiaaltarief, arbeidsuren per eenheid en materieeltarieven blijven permanent gekoppeld aan de onderliggende hoeveelhedenstaat. |
| Outdated Labor Costs | Centralized labor cost assumptions | Standaard arbeidstarieven voor HVAC- en loodgietersvakken worden in een mastertabel bijgehouden en automatisch toegepast op de betreffende takeoff-divisies. |
| Broken Pricing Formulas | Commercial pricing structure control | Algemene kosten, onvoorzien en doelopslag worden beheerd vanuit één aannamelaaag, wat onbedoeld overschrijven van formules voorkomt. |
| Lost Bid History | Bid pipeline visibility software | Volg projectstatus, ingediende inschrijvingen, gegunde aanbestedingswaarde, verloren kansen en analyses van het totale winpercentage over uw volledige bouwportfolio. |
| No Executive Overview | Management cost visibility dashboards | Samenvattingen van geselecteerde projecten tonen de exacte financiële gezondheid van de pijplijn en de structurele integriteit van elke commerciële inschrijving. |

---

## Who Needs This MEP Estimating & Bidding Template? (Roles & Scenarios)

Deze toolkit is expliciet gestructureerd voor bouwprofessionals die betrouwbare, offline bruikbare kostenanalyses nodig hebben:

- **Mechanical Estimators needing an HVAC Bidding Spreadsheet:** U moet kanalen, RTU's en leidingen prijzen zonder te worstelen met overdreven complexe, opgeblazen software. Dit sjabloon scheidt uw takeoff-hoeveelheden van uw commerciële opslagtarieven.
- **Commercial Plumbing Contractors searching for a Plumbing Takeoff Template:** U moet standaard arbeidstarieven per vak direct toepassen op duizenden strekkende voet koperen of PVC-buis. Voer de takeoff één keer in en laat de gecentraliseerde aanname-engine de directe kosten berekenen.
- **Construction Project Managers looking for Bid Tracker Software:** U beheert meerdere aanbestedingen en hebt een portfoliobrede weergave nodig. Gebruik het dashboard om te volgen welke inschrijvingen in concept, in behandeling, gewonnen of verloren zijn, en bereken automatisch uw totale winpercentage.
- **Preconstruction Managers requiring an MEP Cost Database:** U hebt een reproduceerbare calculatiewerkstroom nodig waarin materiaalgegevens en commerciële aannames (zoals algemene kosten en onvoorzien) niet gevaarlijk in dezelfde cel worden vermengd.

---

## Quick Start Workflow: How to Estimate and Track Mechanical Bids

Volg deze stappen om een transparante inschrijvingsbasis te genereren.

### Step 1: Set the Commercial Assumptions (Define Your Margins)
**Action:** Open het tabblad `02_Assumptions` om uw globale commerciële parameters vast te leggen.
Beheer de parameters die het calculatiemodel sturen centraal. Typische instellingen zijn valutasymbool, percentage algemene kosten, doelopslag, percentage onvoorzien, standaard arbeidstarieven per vak en standaard materieeltarieven. *Typ deze nooit herhaaldelijk in individuele berekeningsformules.*

### Step 2: Create the Project Record (Log Construction Bid Details)
**Action:** Open `03_Project_Setup` om de primaire projectidentificatie te genereren.
Voer de Project-ID, projectnaam, klantnaam, inschrijvingsdatum, hoofddcalculator en inschrijvingsstatus in. Deze **Project-ID** fungeert als de databasesleutel die uw commerciële data rechtstreeks koppelt aan uw hoeveelhedenstaat.

### Step 3: Enter the Quantity Takeoff (Input Piping & Ductwork Quantities)
**Action:** Open `04_Quantity_Takeoff` en voer uw technische gegevens in.
Registreer de Project-ID, divisie/vak, postomschrijving, hoeveelheid, materiaaltarief per eenheid, arbeidsuren per eenheid en materieeltarief per eenheid. *Het toegepaste arbeidstarief wordt automatisch ingevuld op basis van uw vak-tarieven uit stap 1.*

### Step 4: Analyze the Pipeline & Download the Reusable Excel Template
**Action:** Laat `05_Estimate_Engine` de kostenketen automatisch doorlopen en exporteer vervolgens uw data.
Bekijk `06_Bid_Summary` voor de projectprijsstelling, `07_Bid_Tracker` voor het volgen van de aanbestedingspijplijn en `08_Dashboard` voor management-KPI's.

**Ready to deploy for your next tender?**  
📥 **[Download the fully functional Excel MEP Estimating Workbook here](https://www.theseusworkshop.com/l/sbazzz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=commercial-hvac-plumbing-estimating)** en hergebruik het voor al uw toekomstige projecten.

---

## Why I Built This Alternative to Construction Bidding Software

Commerciële calculatie mislukt zelden omdat een calculator hoeveelheid niet met tarief kan vermenigvuldigen. Het wordt onbetrouwbaar wanneer **technische feiten, commerciële aannames en definitieve prijsbeslissingen door elkaar raken**.

Een hoeveelheid kan uit takeoff-software komen. Een materiaaltarief kan uit een leveranciersofferte komen. Een arbeidstarief kan uit een standaardaanname per vak komen. Algemene kosten kunnen in een formule zijn ingebouwd. Onvoorzien kan handmatig worden toegevoegd. De opslag kan vlak voor indiening nog worden gewijzigd.

Het definitieve getal kan er nog steeds redelijk uitzien, maar de redenatie achter het getal wordt onmogelijk te controleren. Ik bouwde deze toolkit rond één eenvoudige scheidingsregel:

> **Technische feiten moeten één keer worden ingevoerd. Commerciële aannames moeten centraal worden beheerd. De bouwberekening moet reproduceerbaar blijven.**

Een regel zoals `4" Copper Pipe Type L` draagt bijvoorbeeld zijn project-ID, vak, eenheid, hoeveelheid, materiaaltarief, arbeidsuren per eenheid en materieel-/onderaannemingstarief als onweerlegbare technische feiten. De engine verwerkt dit vervolgens tot directe materiaalkosten, directe arbeidskosten en directe materieelkosten voordat algemene kosten, onvoorzien en opslag veilig worden toegepast.

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

## Technical Details — Continued

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Three Traps That Catch Even Experienced Estimators

#### Trap 1 — Treating the final bid as a single number

**1. A decision was made.**
Er wordt een inschrijving ingediend na alleen de definitieve verkoopprijs en een globale verwachte marge te hebben bekeken.

**2. The decision relied on an unnoticed model weakness.**
De raming scheidde de directe productiekosten niet duidelijk van algemene kosten, onvoorzien en opslag.

**3. The flaw changes the recommendation.**
Een inschrijving kan concurrerend lijken omdat het zichtbare cijfer voor directe kosten acceptabel lijkt, terwijl de commerciële aanpassingen die nodig zijn om operationele overhead en projectonzekerheid te dekken ontbreken, te laag zijn of inconsistent worden toegepast.

**4. Why the reasoning is incorrect.**
De verkoopprijs is het resultaat van verschillende economische lagen. Die lagen als één getal behandelen maakt het moeilijk om te bepalen of een prijswijziging reageert op materiaalkosten, arbeidsblootstelling, materieel-/onderaannemingsblootstelling, dekking van algemene kosten, risicotoeslag of het beoogde commerciële rendement.

**5. Corrected approach.**
Splits de berekening in:

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

**6. Corrected decision outcome.**
De calculator kan één commerciële aanname herzien zonder de raming opnieuw op te bouwen. Een reviewer kan de definitieve inschrijving ook terugvoeren naar de onderliggende kostencomponenten.

**7. Formula**

<details>
<summary>Direct cost and final bid calculation</summary>

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

Het bronontwerp definieert de subtotaal van directe kosten als de berekeningsbasis voor de daaropvolgende toewijzing van algemene kosten, onvoorzien en opslag.

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

#### Trap 2 — Using a labor rate without controlling the trade relationship

**1. A decision was made.**
Een raming wordt als concurrerend beschouwd omdat de arbeidscomponent laag genoeg lijkt om de doelverkoopprijs te ondersteunen.

**2. The decision relied on an unnoticed faulty input.**
Het arbeidstarief dat op een takeoff-regel wordt toegepast, komt niet consistent overeen met de divisie of het vak dat die regel vertegenwoordigt.

**3. The flaw changes the recommendation.**
Een project met loodgietersleidingen, HVAC-kanalen of ander gespecialiseerd werk kan worden geprijsd met een generieke of verouderde arbeidsaanname. De resulterende directe arbeidskosten zijn te laag, zelfs wanneer de aannames voor hoeveelheid en arbeidsuren per eenheid correct zijn.

**4. Why the reasoning is incorrect.**
Arbeidshoeveelheid en arbeidsprijs zijn verschillende dimensies.

Een correcte schatting van arbeidsuren vermenigvuldigd met een onjuist uurtarief levert nog steeds onjuiste arbeidskosten op.

**5. Corrected approach.**
Houd de relatie tussen vak en tarief in het gecentraliseerde aannamegebied en leid het toegepaste arbeidstarief af uit de geselecteerde divisie/het geselecteerde vak.

**6. Corrected decision outcome.**
De raming wordt consistent over projecten die hetzelfde calculatiebeleid gebruiken. Als een standaard arbeidstarief verandert, kan de aanname centraal worden bijgewerkt in plaats van afzonderlijke ramingen te doorzoeken.

**7. Formula**

<details>
<summary>Trade-based labor-rate matching</summary>

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

**Starting cell:** `H2`

**Working range:** `H2:H1000`

De bron specificeert `Applied Labor Rate` als een formulegegenereerd veld en gebruikt `MAP`, `LAMBDA` en `XLOOKUP` om de takeoff-divisie/het takeoff-vak te koppelen aan de standaard arbeidstarieventabel.

</details>

---

#### Trap 3 — Managing bids as isolated estimates instead of a pipeline

**1. A decision was made.**
Het management bekijkt individuele ramingen wanneer het wil weten hoeveel werk momenteel wordt nagestreefd.

**2. The decision relied on an unnoticed process failure.**
De calculatiewerkmap bevat het inschrijvingsbedrag, maar de status na de raming wordt niet consistent geconsolideerd.

**3. The flaw changes the recommendation.**
Het management weet mogelijk dat er meerdere inschrijvingen zijn voorbereid, zonder te weten hoeveel waarde nog openstaat, welke kansen zijn gewonnen of verloren, of hoe de totale inschrijvingspijplijn eruitziet.

**4. Why the reasoning is incorrect.**
Een raming beantwoordt een prijsvraag op projectniveau.

Een inschrijvingstracker beantwoordt een commerciële vraag op portfolioniveau.

Dat zijn verschillende beslissingen die verschillende weergaven van dezelfde projectmasterdata vereisen.

**5. Corrected approach.**
Onderhoud de projectmaster met een beheerst veld voor inschrijvingsstatus:

```text
Draft
Submitted
Won
Lost
Pending
```

Gebruik vervolgens de ramingsresultaten en projectstatus op projectniveau als basis voor de inschrijvingstrackingweergave.

**6. Corrected decision outcome.**
Het management kan de stap maken van:

```text
"What is this project's estimate?"
```

naar:

```text
"What does the current estimating pipeline represent?"
```

De bronarchitectuur definieert `07_Bid_Tracker` expliciet als de weergave van de inschrijvingspijplijn voor inschrijvingsbedragen, gunningsstatus en informatie over het winpercentage.

**7. Formula**

<details>
<summary>Pipeline aggregation logic</summary>

De implementatiespecificatie legt de tracker vast als een uitvoerlaag die de project- en ramingslagen verbruikt. De exacte werkmapformule voor elke tracker-KPI is niet volledig gespecificeerd in het beschikbare bronmateriaal, dus het volgende moet worden behandeld als de beoogde berekeningslogica en niet als een beweerde bronformule:

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

De bron bevestigt het zakelijke doel van de tracker, maar biedt geen volledig cel-voor-cel formulewoordenboek voor deze uitvoer-KPI's.

</details>

---

### Example Scenario

Beschouw een commercieel mechanical-project met een gemengde scope van leidingen en apparatuur.

De hoeveelhedenstaat bevat:

| Input               |                   Value |
| ------------------- | ----------------------: |
| Project ID          |          `PRJ-2026-014` |
| Division / Trade    |       `Plumbing-Piping` |
| Item                | `4" Copper Pipe Type L` |
| Quantity            |              `1,200 LF` |
| Material Unit Rate  |           `$18.50 / LF` |
| Labor Hours / Unit  |          `0.12 hr / LF` |
| Applied Labor Rate  |           `$48.00 / hr` |
| Equipment Unit Rate |            `$1.50 / LF` |

De materiaalcomponent is:

```text
1,200 × $18.50
= $22,200
```

De arbeidscomponent is:

```text
1,200 × 0.12 × $48.00
= $6,912
```

De materieelcomponent is:

```text
1,200 × $1.50
= $1,800
```

De directe kosten worden daarom:

```text
$22,200
+ $6,912
+ $1,800
= $30,912
```

Stel dat de commerciële aannames zijn:

| Parameter     | Rate |
| ------------- | ---: |
| Overhead      |  10% |
| Contingency   |   5% |
| Target Markup |  15% |

Algemene kosten:

```text
$30,912 × 10%
= $3,091.20
```

Onvoorzien:

```text
($30,912 + $3,091.20) × 5%
= $1,700.16
```

Opslag:

```text
($30,912 + $3,091.20 + $1,700.16) × 15%
= $5,355.50
```

Definitieve inschrijving:

```text
$30,912.00
+ $3,091.20
+ $1,700.16
+ $5,355.50
= $41,058.86
```

Het nuttige resultaat is niet slechts de definitieve `$41,058.86`.

De raming biedt nu een traceerbare kostenstructuur:

| Cost Layer       |         Amount | Share of Final Bid |
| ---------------- | -------------: | -----------------: |
| Direct Material  |     $22,200.00 |             54.09% |
| Direct Labor     |      $6,912.00 |             16.84% |
| Direct Equipment |      $1,800.00 |              4.38% |
| Overhead         |      $3,091.20 |              7.53% |
| Contingency      |      $1,700.16 |              4.14% |
| Markup           |      $5,355.50 |             13.05% |
| **Final Bid**    | **$41,058.86** |        **100.00%** |

Dit verandert het gesprek tijdens de review.

In plaats van te vragen of `$41,058.86` "concurrerend voelt", kan de calculator de werkelijke kostenposten identificeren.

Het project heeft een bijzonder grote materiaalcomponent. Arbeid is de op één na grootste directe kostenpost. De materieelblootstelling is relatief kleiner. De commerciële aanpassingen zijn afzonderlijk zichtbaar.

Als de materiaalofferte verandert, kan de materiaalinvoer worden bijgewerkt.

Als het standaard arbeidstarief verandert, kan het toegepaste arbeidstarief worden bijgewerkt vanuit de aannametabel.

Als het commerciële beleid verandert, kunnen algemene kosten, onvoorzien of opslag centraal worden gewijzigd.

De berekeningsketen blijft dan:

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

Dat is de beoogde grens van de beslissingsondersteuning van de werkmap: **maak het getal makkelijker op te bouwen, te controleren, te herzien en mee te nemen naar de volgende commerciële beslissing.**

### Formula Reference

De volgende formulegroepen documenteren de berekeningslogica die door de bronimplementatie is gespecificeerd. De formules blijven bewust dicht bij hun werkmapstructuur, zodat een andere Excel-praktijkbeoefenaar de berekeningsketen kan reproduceren.

<details>
<summary>02_Assumptions — Global Commercial Parameters</summary>

| Cell / Range | Parameter           | Purpose                               |
| ------------ | ------------------- | ------------------------------------- |
| `B4`         | Currency Symbol     | Controls global currency presentation |
| `B5`         | Overhead Rate       | Controls overhead allocation          |
| `B6`         | Target Markup       | Controls commercial markup            |
| `B7`         | Contingency Rate    | Controls risk allowance               |
| `B11:B20`    | Trade Name          | Standard trade lookup keys            |
| `C11:C20`    | Labor Rate / Hr     | Standard labor cost rates             |
| `E11:E20`    | Equipment Type      | Standard equipment categories         |
| `F11:F20`    | Equipment Rate / Hr | Standard equipment rates              |

De bron identificeert dit blad als de gecentraliseerde parameterlaag en definieert specifiek algemene kosten, doelopslag, onvoorzien, arbeidstarieven en materieeltarieven als beheerste invoer.

**Non-obvious rule:** formules in verdere berekeningen moeten naar deze cellen verwijzen in plaats van commerciële aannames direct in te bouwen.

</details>

<details>
<summary>04_Quantity_Takeoff — Labor Rate Lookup</summary>

**Purpose:** Bepaal automatisch het toegepaste arbeidstarief op basis van de geselecteerde divisie/het geselecteerde vak.

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

**Input:** `Division / Trade`

**Output:** `Applied Labor Rate`

**Starting cell:** `H2`

**Design:** één geconfigureerde formule spreidt zich uit over het werkbereik.

De bron identificeert `H` expliciet als formulegegenereerd en koppelt het aan de gecentraliseerde aannames voor vak-tarieven.

</details>

<details>
<summary>05_Estimate_Engine — Source Data Inheritance</summary>

**Purpose:** Houd de berekeningslaag gesynchroniseerd met de takeoff-laag.

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!A2:C1000
)
```

Dit neemt het volgende over:

```text
Project ID
Division
Item Description
```

uit `04_Quantity_Takeoff`.

De bron definieert `05_Estimate_Engine` als een zuivere berekeningslaag en verbiedt handmatige invoer in het berekeningsgebied.

</details>

<details>
<summary>05_Estimate_Engine — Direct Material Cost</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!F2:F1000
)
```

**Purpose:**

```text
Quantity × Material Unit Rate
```

**Output:** `Direct Material Cost`

De bron specificeert `D2:D1000` als het spill-bereik voor deze berekening.

</details>

<details>
<summary>05_Estimate_Engine — Direct Labor Cost</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!G2:G1000
    * '04_Quantity_Takeoff'!H2:H1000
)
```

**Purpose:**

```text
Quantity
× Labor Hours / Unit
× Applied Labor Rate
```

**Output:** `Direct Labor Cost`

De bron specificeert dit als de berekening van arbeidskosten en identificeert arbeid als een directe kostencomponent van het project.

</details>

<details>
<summary>05_Estimate_Engine — Direct Equipment Cost</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!I2:I1000
)
```

**Purpose:**

```text
Quantity × Equipment Unit Rate
```

**Output:** `Direct Equipment Cost`

De bron behandelt deze component als de directe laag van materieel-/onderaannemingskosten.

</details>

<details>
<summary>05_Estimate_Engine — Direct Cost Subtotal</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    D2:D1000
    + E2:E1000
    + F2:F1000
)
```

**Purpose:**

```text
Direct Material Cost
+ Direct Labor Cost
+ Direct Equipment Cost
```

**Output:** `Direct Cost Subtotal`

Dit subtotaal wordt de basis voor de fasen van commerciële aanpassing.

</details>

<details>
<summary>05_Estimate_Engine — Overhead Allocation</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    G2:G1000
    * '02_Assumptions'!$B$5
)
```

**Purpose:**

```text
Direct Cost Subtotal × Overhead Rate
```

**Parameter:** `02_Assumptions!B5`

De bron definieert `B5` expliciet als de globale parameter voor het percentage algemene kosten.

</details>

<details>
<summary>05_Estimate_Engine — Contingency Amount</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    (G2:G1000 + H2:H1000)
    * '02_Assumptions'!$B$7
)
```

**Purpose:**

```text
(Direct Cost + Overhead) × Contingency Rate
```

**Parameter:** `02_Assumptions!B7`

De bron definieert onvoorzien als een risicotoeslag die na de directe kosten en algemene kosten wordt toegepast.

</details>

<details>
<summary>05_Estimate_Engine — Markup Amount</summary>

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

**Purpose:**

```text
(Direct Cost + Overhead + Contingency)
× Target Markup
```

**Parameter:** `02_Assumptions!B6`

De bron definieert `B6` als de parameter voor de doelopslag die wordt gebruikt om de definitieve commerciële verhoging te bepalen.

</details>

<details>
<summary>05_Estimate_Engine — Final Bid</summary>

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

**Purpose:**

```text
Direct Cost
+ Overhead
+ Contingency
+ Markup
```

**Output:** `Line Item Final Bid`

De bron identificeert `K` als de definitieve inschrijvingsuitvoer per regel en definieert deze als de som van de directe en commerciële kostenlagen.

</details>

<details>
<summary>06_Bid_Summary — Project-Level Aggregation</summary>

`06_Bid_Summary` is ontworpen om de raming voor een geselecteerde `Project ID` samen te vatten.

De bron stelt het zakelijke doel vast als:

* een project selecteren;
* de kostenstructuur automatisch aggregeren;
* commerciële metrieken zichtbaar maken;
* de raming op projectniveau presenteren in plaats van regel-voor-regel review te vereisen.

De exacte cel-voor-cel formules voor het samenvattingsblad zijn niet volledig gespecificeerd in het beschikbare bronmateriaal. Daarom vertegenwoordigt het volgende het reproduceerbare aggregatiepatroon en niet een beweerde bronformule:

```excel
=SUMIFS(
    '05_Estimate_Engine'!$G:$G,
    '05_Estimate_Engine'!$A:$A,
    Selected_Project_ID
)
```

Hetzelfde `SUMIFS`-patroon kan worden toegepast op:

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

De bronarchitectuur bevestigt dat `06_Bid_Summary` stroomafwaarts ligt van de project- en ramingslagen en bedoeld is om kosten samen te vatten op basis van een geselecteerde Project-ID.

</details>

<details>
<summary>07_Bid_Tracker — Portfolio-Level Bid Logic</summary>

`07_Bid_Tracker` verplaatst het model van calculatie op projectniveau naar pijplijntracking.

De onderliggende projectstatuswaarden die door de bron zijn gespecificeerd, zijn:

```text
Draft
Submitted
Won
Lost
Pending
```

De tracker kan de calculatieportfolio daarom organiseren rond:

* project;
* klant;
* inschrijvingsdatum;
* inschrijvingsbedrag;
* huidige status;
* gegunde waarde;
* verloren kansen;
* analyse van het winpercentage.

De bron definieert de tracker als de geautomatiseerde weergave van inschrijvingsbedragen, gunningsstatus en winpercentage.

Waar een concrete implementatie vereist is, is het standaard Excel-aggregatiepatroon:

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

Deze formules documenteren de beoogde zakelijke berekening. Ze worden niet gepresenteerd als uit de bron geëxtraheerde celformules waar de bron geen exacte cellen specificeert.

</details>

<details>
<summary>08_Dashboard — Management View</summary>

`08_Dashboard` is de definitieve presentatielaag.

De bron beschrijft dit blad als de managementcockpit voor het visualiseren van:

* actieve inschrijvingen;
* pijplijn;
* kostenopbouw;
* managementinformatie over inschrijvingen.

De afhankelijkheidsrichting is:

```text
03_Project_Setup
        +
05_Estimate_Engine
        ↓
08_Dashboard
```

Het dashboard moet daarom bestaande project- en ramingsresultaten verbruiken in plaats van kostenberekeningen zelfstandig opnieuw op te bouwen.

Dit behoudt één berekeningsbron en voorkomt dat de managementlaag een tweede, losgekoppeld calculatiemodel wordt.

</details>

### Validation Rules

| Field                     | Rule                                                                              | Error Behavior                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Project ID`              | Must identify the project master record in `03_Project_Setup`.                    | Unmatched project IDs create broken project-to-takeoff relationships and unreliable project summaries. |
| `Project Name`            | Entered as project master data.                                                   | Missing name weakens project-level reporting and identification.                                       |
| `Client Name`             | Entered as project master data.                                                   | Missing client information limits client-level review.                                                 |
| `Bid Date`                | Use a valid date in `YYYY-MM-DD` format.                                          | Invalid dates compromise bid scheduling and period analysis.                                           |
| `Estimator`               | Text field identifying the responsible estimator.                                 | Missing ownership weakens review accountability.                                                       |
| `Bid Status`              | Use controlled values: `Draft`, `Submitted`, `Won`, `Lost`, `Pending`.            | Non-standard values break consistent pipeline grouping.                                                |
| `Division / Trade`        | Should correspond to the standard trade list where labor-rate lookup is required. | Unmatched values can cause the lookup fallback behavior to be used.                                    |
| `Item Description`        | Required descriptive takeoff text.                                                | Missing descriptions reduce auditability of line-level estimates.                                      |
| `Unit`                    | Valid estimating unit such as `LF`, `EA`, or `SQFT`.                              | Incorrect units can invalidate the quantity/rate relationship.                                         |
| `Quantity`                | Numeric measured takeoff quantity.                                                | Blank or invalid quantities prevent meaningful direct-cost calculation.                                |
| `Material Unit Rate`      | Numeric material cost basis.                                                      | Missing or incorrect rates distort direct material cost.                                               |
| `Labor Hours / Unit`      | Numeric labor-effort assumption.                                                  | Missing or incorrect hours distort direct labor cost.                                                  |
| `Applied Labor Rate`      | Formula-generated from the centralized labor-rate table.                          | Unexpected rate should trigger review of the division/trade mapping and assumptions table.             |
| `Equipment Unit Rate`     | Numeric equipment or subcontract cost basis.                                      | Missing values produce incomplete equipment/subcontract exposure.                                      |
| `Overhead Rate`           | Percentage maintained in `02_Assumptions!B5`.                                     | Incorrect value affects all estimates using the parameter.                                             |
| `Target Markup`           | Percentage maintained in `02_Assumptions!B6`.                                     | Incorrect value changes the commercial selling-price layer.                                            |
| `Contingency Rate`        | Percentage maintained in `02_Assumptions!B7`.                                     | Incorrect value changes the risk allowance.                                                            |
| `Calculation Layer`       | `05_Estimate_Engine` should not contain manual input.                             | Manual overrides compromise the intended reproducibility of the estimate.                              |
| `Currency Symbol`         | Maintained centrally in `02_Assumptions!B4`.                                      | Incorrect configuration affects presentation rather than the underlying numeric calculation.           |
| `Formula Spill Area`      | Destination cells must remain clear of manual values.                             | Blocked dynamic-array spill produces Excel `#SPILL!` behavior.                                         |
| `Assumption Cells`        | Commercial parameters must be numeric percentages or valid configured values.     | Invalid assumptions propagate incorrect or unusable calculation results.                               |
| `Project-to-Takeoff Link` | Every takeoff row should contain a valid Project ID.                              | Orphaned quantity lines cannot be reliably included in project-level reporting.                        |
| `Project Status`          | Status should remain within the controlled list.                                  | Invalid status values create inconsistent pipeline and win-rate analysis.                              |

Het bronontwerp onderscheidt expliciet **handmatige invoergebieden, formulegegenereerde gebieden en parameterbeheersgebieden**, inclusief de conventie dat blauwe cellen handmatige invoer vertegenwoordigen, grijze cellen formules en gele cellen parameterinstellingen.

### Implementation Notes

#### Dynamic-array compatibility

De werkmap is afhankelijk van moderne Excel-functies, waaronder:

```text
MAP
LAMBDA
XLOOKUP
IF
SUMIFS
```

De berekeningsarchitectuur is opgezet rond het één keer invoeren van een formule in de eerste berekeningsrij en het laten uitbreiden daarvan over het werkbereik.

Dit is een bewust alternatief voor het handmatig kopiëren van formules door elke ramingsregel.

#### Calculation-layer discipline

`05_Estimate_Engine` moet uitsluitend berekeningen bevatten.

De beoogde grens is:

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

Een gebruiker mag de berekende directe kosten, toewijzing van algemene kosten, onvoorzien, opslag of definitieve inschrijvingswaarden niet handmatig aanpassen.

#### Commercial assumption discipline

Het volgende patroon wordt bewust vermeden:

```excel
=G2*10%
```

wanneer `10%` het configureerbare beleid voor algemene kosten van de organisatie vertegenwoordigt.

Het geprefereerde patroon is:

```excel
=G2*'02_Assumptions'!$B$5
```

Dezelfde regel geldt voor doelopslag en onvoorzien.

Dit houdt commercieel beleid gescheiden van berekeningsmechanica.

#### Project-key discipline

`Project ID` functioneert als de primaire sleutel.

De relatie is:

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

Dit is de kern van de referentiële structuur van de werkmap.

#### Separation of facts and assumptions

Het model maakt onderscheid tussen:

**Project / engineering facts**

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

en:

**Commercial assumptions**

```text
Currency Symbol
Overhead Rate
Target Markup
Contingency Rate
Standard Labor Rates
Equipment Rates
```

Dit onderscheid is essentieel voor reproduceerbaarheid.

Een wijziging in projectscope moet de projectdata wijzigen.

Een wijziging in commercieel beleid moet de aannames wijzigen.

Die twee gebeurtenissen mogen niet dezelfde onderhoudsactie vereisen.

### Reproducibility Checklist

Controleer het volgende voordat u de werkmap voor een echte inschrijving gebruikt:

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

Het doel van deze checklist is niet om het calculatieoordeel te vervangen.

Het is om te voorkomen dat de werkmap zelf de bron wordt van vermijdbare inconsistentie in de calculatie.

</details>

## Other Tools in This Series

* **Construction Management** — projectbeheersing voor budgetten, contracten, voortgang, betalingen, inhoudingen en meerwerkopdrachten.
* **Construction Assembly-Based Tender Estimating** — herbruikbare op assemblages gebaseerde calculatie en aanbestedingsprijsstelling.
* **Pricing & Break-even Decision Calculator** — beslissingsondersteuning voor prijsstelling, contributie en break-even.
* **Marketing Budget Allocation Simulator** — gestructureerde budgettoewijzing onder rendements- en operationele beperkingen.

## License

Dit project is vrijgegeven onder de **Apache License 2.0**.

Gebruik, wijziging, distributie en afgeleide werken zijn toegestaan onder de voorwaarden van de Apache License 2.0.

Zie het bestand `LICENSE` voor de volledige licentietekst.
