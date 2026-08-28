# Commercial Plumbing & Mechanical Bid Estimating Excel Template & Project Tracking Toolkit

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-informational.svg)](#)
[![Tool Type: Estimating + Tracking](https://img.shields.io/badge/Tool%20Type-Estimating%20%2B%20Tracking-success.svg)](#)

**A free, no-installation commercial plumbing estimating spreadsheet and mechanical contractor bid management template. Turn raw MEP (Mechanical, Electrical, Plumbing) quantity takeoff data into a transparent bid baseline, direct cost build-up, and construction project pipeline dashboard—without recurring software subscription fees.**

<p><strong>No signup. No installation. Free in your browser.</strong></p>

Try the browser version for free. If you need the fully unlocked Excel version for permanent job costing, you can buy it with a 7-day money-back guarantee.

> 🌐 **[Test the Free HTML Plumbing Bid Estimator in Browser](https://hyvoid.github.io/commercial-hvac-plumbing-bid-estimator/)** — Browser / HTML evaluation version
> 
> 📥 **[Download the Reusable MEP Estimating Excel Workbook](https://alexhasgreatestuff.gumroad.com/l/owwsv?wanted=true)** — Full offline project estimating template
> 

---

## How This Construction Estimating Tool Solves Bidding Pain Points

Instead of scattering formulas across multiple tabs, this toolkit maps common estimating failures to automated solutions:

| Pain Point | Solution | Description |
|---|---|---|
| Blind Bid Totals | Project-level bid cost build-up | Instantly trace direct material, direct labor, equipment/subcontract cost, overhead, contingency, markup, and the final bid value in one unbroken calculation chain. |
| Disconnected Takeoffs | Engineering quantity exposure | Project ID, division/trade, MEP item description, unit, quantity, material rate, labor-hours-per-unit, and equipment rates remain permanently tied to the underlying takeoff spreadsheet. |
| Outdated Labor Costs | Centralized labor cost assumptions | Standard HVAC and plumbing trade labor rates are maintained in a master table and automatically applied to the relevant takeoff divisions. |
| Broken Pricing Formulas | Commercial pricing structure control | Overhead, contingency, and target markup are controlled from a single assumptions layer, preventing accidental formula overwrites. |
| Lost Bid History | Bid pipeline visibility software | Track project status, submitted bids, awarded tender value, lost opportunities, and overall win-rate analytics across your entire construction portfolio. |
| No Executive Overview | Management cost visibility dashboards | Selected-project summaries expose the exact financial health of the pipeline and the structural integrity of each commercial bid. |

---

## Who Needs This MEP Estimating & Bidding Template? (Roles & Scenarios)

This toolkit is explicitly structured for construction professionals who need reliable, offline-capable cost analysis:

- **Mechanical Estimators needing an HVAC Bidding Spreadsheet:** You need to price ductwork, RTUs, and piping without battling overly complex, bloated software. This template separates your takeoff quantities from your commercial markup rates.
- **Commercial Plumbing Contractors searching for a Plumbing Takeoff Template:** You need to instantly apply standard trade labor rates to thousands of linear feet of copper or PVC pipe. Enter the takeoff once, and let the centralized assumption engine calculate the direct costs.
- **Construction Project Managers looking for Bid Tracker Software:** You are managing multiple tenders and need a portfolio-level view. Use the dashboard to track which bids are in draft, pending, won, or lost, calculating your aggregate win rate automatically.
- **Preconstruction Managers requiring an MEP Cost Database:** You need a reproducible estimating workflow where material facts and commercial assumptions (like overhead and contingency) are not dangerously mixed in the same cell.

---

## Quick Start Workflow: How to Estimate and Track Mechanical Bids

Follow these steps to generate a transparent bid baseline.

### Step 1: Set the Commercial Assumptions (Define Your Margins)
**Action:** Open the `02_Assumptions` tab to lock in your global commercial parameters.
Maintain the parameters that control the estimating model centrally. Typical controls include Currency Symbol, Overhead Rate, Target Markup, Contingency Rate, Standard Trade Labor Rates, and Standard Equipment Rates. *Never type these repeatedly into individual calculation formulas.*

### Step 2: Create the Project Record (Log Construction Bid Details)
**Action:** Open `03_Project_Setup` to generate the primary project identifier.
Enter the Project ID, Project Name, Client Name, Bid Date, Lead Estimator, and Bid Status. This **Project ID** acts as the database key linking your commercial data directly to your quantity takeoff.

### Step 3: Enter the Quantity Takeoff (Input Piping & Ductwork Quantities)
**Action:** Open `04_Quantity_Takeoff` and input your engineering facts.
Log the Project ID, Division / Trade, Item Description, Quantity, Material Unit Rate, Labor Hours / Unit, and Equipment Unit Rate. *The applied labor rate automatically populates from your Step 1 trade-rate assumptions.*

### Step 4: Analyze the Pipeline & Download the Reusable Excel Template
**Action:** Let `05_Estimate_Engine` run the cost chain automatically, then export your data.
Review `06_Bid_Summary` for project pricing, `07_Bid_Tracker` for tender pipeline tracking, and `08_Dashboard` for management KPIs. 

**Ready to deploy for your next tender?**  
📥 **[Download the fully functional Excel MEP Estimating Workbook here](https://alexhasgreatestuff.gumroad.com/l/owwsv?wanted=true)** and reuse it across all future projects.

---

## Why I Built This Alternative to Construction Bidding Software

Commercial estimating rarely fails because an estimator cannot multiply quantity by rate. It becomes unreliable when **engineering facts, commercial assumptions, and final pricing decisions become mixed together**.

A quantity may come from a takeoff software. A material rate may come from a supplier quote. A labor rate may come from a standard trade assumption. Overhead may be embedded in a formula. Contingency may be added manually. Markup may then be changed immediately before submission.

The final number can still look reasonable, but the reasoning behind the number becomes impossible to audit. I built this toolkit around a simple separation rule:

> **Engineering facts should be entered once. Commercial assumptions should be controlled centrally. The construction calculation must remain reproducible.**

For example, a line such as `4" Copper Pipe Type L` carries its project ID, trade, unit, quantity, material rate, labor-hours-per-unit, and equipment/subcontract rate as undeniable engineering facts. The engine then processes this into direct material cost, direct labor cost, and direct equipment cost before safely applying overhead, contingency, and markup.

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
A bid is submitted after reviewing only the final selling price and an overall expected margin.

**2. The decision relied on an unnoticed model weakness.**
The estimate did not clearly separate direct production cost from overhead, contingency, and markup.

**3. The flaw changes the recommendation.**
A bid can appear competitive because the visible direct-cost figure looks acceptable, while the commercial adjustments needed to cover operating overhead and project uncertainty are missing, understated, or inconsistently applied.

**4. Why the reasoning is incorrect.**
The selling price is the result of several different economic layers. Treating those layers as one number makes it difficult to determine whether a price change is responding to material cost, labor exposure, equipment/subcontract exposure, overhead recovery, risk allowance, or target commercial return.

**5. Corrected approach.**
Separate the calculation into:

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
The estimator can revise one commercial assumption without rebuilding the estimate. A reviewer can also trace the final bid back to the underlying cost components.

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

The source design defines the direct-cost subtotal as the calculation base for subsequent overhead, contingency, and markup allocation. 

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
An estimate is considered competitive because the labor component appears low enough to support the target selling price.

**2. The decision relied on an unnoticed faulty input.**
The labor rate applied to a takeoff line does not consistently correspond to the division or trade represented by that line.

**3. The flaw changes the recommendation.**
A project containing plumbing piping, HVAC ducting, or other specialized work may be priced using a generic or stale labor assumption. The resulting direct labor cost is understated even when the quantity and labor-hours-per-unit assumptions are correct.

**4. Why the reasoning is incorrect.**
Labor quantity and labor price are different dimensions.

A correct labor-hours estimate multiplied by an incorrect hourly rate still produces an incorrect labor cost.

**5. Corrected approach.**
Keep the trade-to-rate relationship in the centralized assumptions area and derive the applied labor rate from the selected division/trade.

**6. Corrected decision outcome.**
The estimate becomes consistent across projects using the same estimating policy. If a standard labor rate changes, the assumption can be updated centrally instead of searching individual estimates.

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

The source specifies `Applied Labor Rate` as a formula-generated field and uses `MAP`, `LAMBDA`, and `XLOOKUP` to match the takeoff division/trade to the standard labor-rate table. 

</details>

---

#### Trap 3 — Managing bids as isolated estimates instead of a pipeline

**1. A decision was made.**
Management reviews individual estimates when they need to know how much work is currently being pursued.

**2. The decision relied on an unnoticed process failure.**
The estimating workbook contains the bid amount, but the post-estimate status is not consistently consolidated.

**3. The flaw changes the recommendation.**
Management may know that several bids were prepared without knowing how much value is still pending, which opportunities were won or lost, or what the overall bid pipeline looks like.

**4. Why the reasoning is incorrect.**
An estimate answers a project-level pricing question.

A bid tracker answers a portfolio-level commercial question.

Those are different decisions and require different views of the same project master data.

**5. Corrected approach.**
Maintain the project master with a controlled bid-status field:

```text
Draft
Submitted
Won
Lost
Pending
```

Then use the project-level estimate outputs and project status as the basis for the bid-tracking view.

**6. Corrected decision outcome.**
Management can move from:

```text
"What is this project's estimate?"
```

to:

```text
"What does the current estimating pipeline represent?"
```

The source architecture explicitly defines `07_Bid_Tracker` as the bid pipeline view for project bid amounts, award status, and win-rate information. 

**7. Formula**

<details>
<summary>Pipeline aggregation logic</summary>

The implementation specification establishes the tracker as an output layer consuming the project and estimate layers. The exact workbook formula implementation for every tracker KPI is not fully specified in the available source material, so the following should be treated as the intended calculation logic rather than an asserted source formula:

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

The source confirms the business purpose of the tracker but does not provide a complete cell-by-cell formula dictionary for these output KPIs. 

</details>

---

### Example Scenario

Consider a commercial mechanical project with a mixed piping and equipment scope.

The takeoff contains:

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

The material component is:

```text
1,200 × $18.50
= $22,200
```

The labor component is:

```text
1,200 × 0.12 × $48.00
= $6,912
```

The equipment component is:

```text
1,200 × $1.50
= $1,800
```

The direct cost therefore becomes:

```text
$22,200
+ $6,912
+ $1,800
= $30,912
```

Assume the commercial assumptions are:

| Parameter     | Rate |
| ------------- | ---: |
| Overhead      |  10% |
| Contingency   |   5% |
| Target Markup |  15% |

Overhead:

```text
$30,912 × 10%
= $3,091.20
```

Contingency:

```text
($30,912 + $3,091.20) × 5%
= $1,700.16
```

Markup:

```text
($30,912 + $3,091.20 + $1,700.16) × 15%
= $5,355.50
```

Final bid:

```text
$30,912.00
+ $3,091.20
+ $1,700.16
+ $5,355.50
= $41,058.86
```

The useful result is not merely the final `$41,058.86`.

The estimate now provides a traceable cost structure:

| Cost Layer       |         Amount | Share of Final Bid |
| ---------------- | -------------: | -----------------: |
| Direct Material  |     $22,200.00 |             54.09% |
| Direct Labor     |      $6,912.00 |             16.84% |
| Direct Equipment |      $1,800.00 |              4.38% |
| Overhead         |      $3,091.20 |              7.53% |
| Contingency      |      $1,700.16 |              4.14% |
| Markup           |      $5,355.50 |             13.05% |
| **Final Bid**    | **$41,058.86** |        **100.00%** |

This changes the review conversation.

Instead of asking whether `$41,058.86` "feels competitive," the estimator can identify the actual cost drivers.

The project has a particularly large material component. Labor is the second-largest direct cost. Equipment exposure is relatively smaller. The commercial adjustments are separately visible.

If the material quotation changes, the material input can be updated.

If the standard labor rate changes, the applied labor rate can update from the assumptions table.

If the commercial policy changes, overhead, contingency, or markup can be changed centrally.

The calculation chain then remains:

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

That is the intended decision-support boundary of the workbook: **make the number easier to build, inspect, revise, and carry into the next commercial decision.**

### Formula Reference

The following formula groups document the calculation logic specified by the source implementation. The formulas are deliberately kept close to their workbook structure so that another Excel practitioner can reproduce the calculation chain.

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

The source identifies this sheet as the centralized parameter layer and specifically defines overhead, target markup, contingency, labor rates, and equipment rates as controlled inputs. 

**Non-obvious rule:** downstream calculation formulas should reference these cells rather than embedding commercial assumptions directly.

</details>

<details>
<summary>04_Quantity_Takeoff — Labor Rate Lookup</summary>

**Purpose:** Automatically determine the applied labor rate from the selected division/trade.

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

**Design:** one configured formula spills through the working range.

The source explicitly identifies `H` as formula-generated and ties it to the centralized trade-rate assumptions. 

</details>

<details>
<summary>05_Estimate_Engine — Source Data Inheritance</summary>

**Purpose:** Keep the calculation layer synchronized with the takeoff layer.

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!A2:C1000
)
```

This inherits:

```text
Project ID
Division
Item Description
```

from `04_Quantity_Takeoff`.

The source defines `05_Estimate_Engine` as a pure calculation layer and prohibits manual entry in the calculation area. 

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

The source specifies `D2:D1000` as the spill range for this calculation. 

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

The source specifies this as the labor-cost calculation and identifies labor as a direct project cost component. 

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

The source treats this component as the direct equipment / subcontract cost layer. 

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

This subtotal becomes the base for the commercial adjustment stages. 

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

The source explicitly defines `B5` as the global overhead-rate parameter. 

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

The source defines contingency as a risk allowance applied after direct cost and overhead. 

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

The source defines `B6` as the target markup parameter used to determine the final commercial uplift. 

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

The source identifies `K` as the final line-item bid output and defines it as the sum of the direct and commercial cost layers. 

</details>

<details>
<summary>06_Bid_Summary — Project-Level Aggregation</summary>

`06_Bid_Summary` is designed to summarize the estimate for a selected `Project ID`.

The source establishes the business purpose as:

* selecting a project;
* automatically aggregating the cost structure;
* exposing commercial metrics;
* presenting the estimate at project level rather than requiring line-by-line review.

The exact cell-by-cell formulas for the summary sheet are not fully specified in the available source material. Therefore, the following represents the reproducible aggregation pattern rather than an asserted source formula:

```excel
=SUMIFS(
    '05_Estimate_Engine'!$G:$G,
    '05_Estimate_Engine'!$A:$A,
    Selected_Project_ID
)
```

The same `SUMIFS` pattern can be applied to:

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

The source architecture confirms that `06_Bid_Summary` is downstream of the project and estimate layers and is intended to summarize costs by selected Project ID. 

</details>

<details>
<summary>07_Bid_Tracker — Portfolio-Level Bid Logic</summary>

`07_Bid_Tracker` moves the model from project-level estimating into pipeline tracking.

The underlying project status values specified by the source are:

```text
Draft
Submitted
Won
Lost
Pending
```

The tracker can therefore organize the estimating portfolio around:

* project;
* client;
* bid date;
* bid amount;
* current status;
* awarded value;
* lost opportunities;
* win-rate analysis.

The source defines the tracker as the automated view of project bid amounts, award status, and win rate. 

Where a concrete implementation is required, the standard Excel aggregation pattern is:

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

These formulas document the intended business calculation. They are not presented as source-extracted cell formulas where the source does not specify exact cells.

</details>

<details>
<summary>08_Dashboard — Management View</summary>

`08_Dashboard` is the final presentation layer.

The source describes this sheet as the management cockpit for visualizing:

* active bids;
* pipeline;
* cost composition;
* bid-related management information.

The dependency direction is:

```text
03_Project_Setup
        +
05_Estimate_Engine
        ↓
08_Dashboard
```

The dashboard should therefore consume existing project and estimate outputs rather than independently recreating cost calculations.

This preserves a single calculation source and prevents the management layer from becoming a second, disconnected estimating model. 

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

The source design explicitly distinguishes **manual input areas, formula-generated areas, and parameter-control areas**, including the convention that blue cells represent manual entry, gray cells represent formulas, and yellow cells represent parameter controls. 

### Implementation Notes

#### Dynamic-array compatibility

The workbook relies on modern Excel functions including:

```text
MAP
LAMBDA
XLOOKUP
IF
SUMIFS
```

The calculation architecture is designed around entering a formula once in the first calculation row and allowing it to spill through the working range.

This is a deliberate alternative to manually copying formulas through every estimate line.

#### Calculation-layer discipline

`05_Estimate_Engine` should remain calculation-only.

The intended boundary is:

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

A user should not manually edit the calculated direct costs, overhead allocation, contingency, markup, or final bid values.

#### Commercial assumption discipline

The following pattern is intentionally avoided:

```excel
=G2*10%
```

when `10%` represents the organization's configurable overhead policy.

The preferred pattern is:

```excel
=G2*'02_Assumptions'!$B$5
```

The same rule applies to target markup and contingency.

This keeps commercial policy separate from calculation mechanics.

#### Project-key discipline

`Project ID` functions as the primary key.

The relationship is:

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

This is the core referential structure of the workbook.

#### Separation of facts and assumptions

The model distinguishes between:

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

and:

**Commercial assumptions**

```text
Currency Symbol
Overhead Rate
Target Markup
Contingency Rate
Standard Labor Rates
Equipment Rates
```

This distinction is central to reproducibility.

A change in project scope should change the project data.

A change in commercial policy should change the assumptions.

Those two events should not require the same maintenance action.

### Reproducibility Checklist

Before using the workbook for a real bid, verify:

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

The purpose of this checklist is not to replace estimating judgment.

It is to prevent the workbook itself from becoming the source of avoidable estimating inconsistency.

</details>
</details>

## Other Tools in This Series

* **Construction Management** — project control for budgets, contracts, progress, payments, holdbacks, and change orders.
* **Construction Assembly-Based Tender Estimating** — reusable assembly-based estimating and tender pricing.
* **Pricing & Break-even Decision Calculator** — pricing, contribution, and break-even decision support.
* **Marketing Budget Allocation Simulator** — structured budget allocation under return and operational constraints.

## License

This project is released under the **Apache License 2.0**.

Use, modification, distribution, and derivative works are permitted subject to the terms and conditions of the Apache License 2.0.

See the `LICENSE` file for the complete license text.

