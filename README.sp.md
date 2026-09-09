[ 🌐 عربي ](README.ar.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Plantilla de Excel para Estimación de Ofertas de Fontanería y Mecánica Comercial & Toolkit de Seguimiento de Proyectos

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-informational.svg)](#)
[![Tool Type: Estimating + Tracking](https://img.shields.io/badge/Tool%20Type-Estimating%20%2B%20Tracking-success.svg)](#)

**Una hoja de cálculo gratuita de estimación de fontanería comercial sin instalación y una plantilla de gestión de ofertas para contratistas mecánicos. Convierte los datos brutos del levantamiento de cantidades (takeoff) MEP (Mecánico, Eléctrico, Fontanería) en una línea base de oferta transparente, un desglose de costos directos y un panel de pipeline de ofertas de proyectos de construcción, sin cuotas recurrentes de suscripción de software.**

<p><strong>Sin registro. Sin instalación. Gratis en tu navegador.</strong></p>

Prueba gratis la versión en navegador. Si necesitas la versión de Excel completamente desbloqueada para el costeo de obras permanente, puedes comprarla con una garantía de devolución del dinero de 30 días, sin preguntas.

> 🌐 **[Prueba el Estimador de Ofertas de Fontanería HTML Gratuito en el Navegador](https://hyvoid.github.io/commercial-hvac-plumbing-bid-estimator/)** — Versión de evaluación en navegador / HTML
> 
> 📥 **[Descarga el Libro de Excel Reutilizable de Estimación MEP](https://www.theseusworkshop.com/l/sbazzz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=commercial-hvac-plumbing-estimating)** — Plantilla completa de estimación de proyectos sin conexión

## ¿Quieres probarlo?

Este proyecto está incluido en el Construction Toolkit.

Prueba esta y otras herramientas ligeras de construcción gratis durante 30 días — incluyendo herramientas para estimación, licitaciones, costos de obra y operaciones diarias.

→ [Prueba el Construction Toolkit](https://theseusworkshop.com/l/fqtoi/BIDSEASON?utm_source=github&utm_medium=GitHub%20portfolio)

> 

---

## Cómo Esta Herramienta de Estimación de Construcción Resuelve los Puntos Críticos de las Licitaciones

En lugar de dispersar fórmulas en varias pestañas, este toolkit vincula los fallos comunes de estimación con soluciones automatizadas:

| Punto crítico | Solución | Descripción |
|---|---|---|
| Totales de oferta a ciegas | Desglose de costos de oferta a nivel de proyecto | Rastrea al instante el material directo, la mano de obra directa, el costo de equipos/subcontratos, los costos indirectos, la contingencia, el margen comercial (markup) y el valor final de la oferta en una sola cadena de cálculo ininterrumpida. |
| Levantamientos de cantidades (takeoff) desconectados | Exposición de cantidades de ingeniería | El ID del proyecto, la división/especialidad (trade), la descripción del ítem MEP, la unidad, la cantidad, la tarifa de material, las horas-hombre por unidad y las tarifas de equipo permanecen vinculados permanentemente a la hoja de levantamiento de cantidades (takeoff) subyacente. |
| Costos de mano de obra desactualizados | Supuestos centralizados de costos de mano de obra | Las tarifas estándar de mano de obra de los oficios de HVAC y fontanería se mantienen en una tabla maestra y se aplican automáticamente a las divisiones de takeoff correspondientes. |
| Fórmulas de precios rotas | Control de la estructura de precios comerciales | Los costos indirectos, la contingencia y el margen comercial (markup) objetivo se controlan desde una única capa de supuestos, lo que evita sobrescrituras accidentales de fórmulas. |
| Historial de ofertas perdido | Software de visibilidad del pipeline de ofertas | Realiza un seguimiento del estado del proyecto, las ofertas enviadas, el valor de licitación adjudicado, las oportunidades perdidas y las analíticas generales de tasa de éxito en todo tu portafolio de construcción. |
| Falta de vista ejecutiva | Paneles de visibilidad de costos para la gerencia | Los resúmenes de proyectos seleccionados exponen la salud financiera exacta del pipeline de ofertas y la integridad estructural de cada oferta comercial. |

---

## ¿Quién Necesita Esta Plantilla de Estimación y Licitación MEP? (Roles y Escenarios)

Este toolkit está estructurado explícitamente para profesionales de la construcción que necesitan un análisis de costos confiable y con capacidad sin conexión:

- **Estimadores mecánicos que necesitan una hoja de cálculo de licitaciones HVAC:** Necesitas cotizar conductos, RTUs y tuberías sin batallar con software excesivamente complejo y pesado. Esta plantilla separa tus cantidades de takeoff de tus tarifas de margen comercial (markup).
- **Contratistas de fontanería comercial que buscan una plantilla de takeoff de fontanería:** Necesitas aplicar al instante tarifas estándar de mano de obra del oficio a miles de pies lineales de tubería de cobre o PVC. Ingresa el levantamiento de cantidades (takeoff) una sola vez y deja que el motor centralizado de supuestos calcule los costos directos.
- **Gerentes de proyecto de construcción que buscan software de seguimiento de ofertas:** Estás gestionando múltiples licitaciones y necesitas una vista a nivel de portafolio. Usa el panel para hacer seguimiento de qué ofertas están en borrador, pendientes, ganadas o perdidas, calculando automáticamente tu tasa de éxito agregada.
- **Gerentes de preconstrucción que requieren una base de datos de costos MEP:** Necesitas un flujo de trabajo de estimación reproducible donde los datos de materiales y los supuestos comerciales (como los costos indirectos y la contingencia) no se mezclen peligrosamente en la misma celda.

---

## Flujo de Trabajo de Inicio Rápido: Cómo Estimar y Hacer Seguimiento de Ofertas Mecánicas

Sigue estos pasos para generar una línea base de oferta transparente.

### Paso 1: Configura los Supuestos Comerciales (Define tus Márgenes)
**Acción:** Abre la pestaña `02_Assumptions` para fijar tus parámetros comerciales globales.
Mantén de forma centralizada los parámetros que controlan el modelo de estimación. Los controles típicos incluyen el Símbolo de moneda, la Tasa de costos indirectos, el Margen comercial (markup) objetivo, la Tasa de contingencia, las Tarifas estándar de mano de obra por oficio y las Tarifas estándar de equipo. *Nunca escribas estos valores repetidamente en fórmulas de cálculo individuales.*

### Paso 2: Crea el Registro del Proyecto (Registra los Detalles de la Oferta)
**Acción:** Abre `03_Project_Setup` para generar el identificador principal del proyecto.
Ingresa el ID del proyecto, el Nombre del proyecto, el Nombre del cliente, la Fecha de oferta, el Estimador principal y el Estado de la oferta. Este **ID del proyecto** actúa como la clave de la base de datos que vincula tus datos comerciales directamente con tu levantamiento de cantidades (takeoff).

### Paso 3: Ingresa el Levantamiento de Cantidades (Takeoff) (Introduce las Cantidades de Tubería y Conductos)
**Acción:** Abre `04_Quantity_Takeoff` e ingresa tus datos de ingeniería.
Registra el ID del proyecto, la División / Especialidad (trade), la Descripción del ítem, la Cantidad, la Tarifa unitaria de material, las Horas de mano de obra / Unidad y la Tarifa unitaria de equipo. *La tarifa de mano de obra aplicada se completa automáticamente a partir de tus supuestos de tarifas por oficio del Paso 1.*

### Paso 4: Analiza el Pipeline de Ofertas y Descarga la Plantilla de Excel Reutilizable
**Acción:** Deja que `05_Estimate_Engine` ejecute la cadena de costos automáticamente y luego exporta tus datos.
Revisa `06_Bid_Summary` para los precios del proyecto, `07_Bid_Tracker` para el seguimiento del pipeline de licitaciones y `08_Dashboard` para los KPIs de gerencia. 

**¿Listo para implementarlo en tu próxima licitación?**  
📥 **[Descarga aquí el Libro de Excel de Estimación MEP completamente funcional](https://www.theseusworkshop.com/l/sbazzz?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=commercial-hvac-plumbing-estimating)** y reutilízalo en todos tus proyectos futuros.

---

## Por Qué Construí Esta Alternativa al Software de Licitaciones de Construcción

La estimación comercial rara vez falla porque un estimador no pueda multiplicar la cantidad por la tarifa. Se vuelve poco confiable cuando **los datos de ingeniería, los supuestos comerciales y las decisiones finales de precios se mezclan entre sí**.

Una cantidad puede provenir de un software de takeoff. Una tarifa de material puede provenir de una cotización de proveedor. Una tarifa de mano de obra puede provenir de un supuesto estándar del oficio. Los costos indirectos pueden estar incrustados en una fórmula. La contingencia puede añadirse manualmente. Y el margen comercial (markup) puede cambiarse justo antes de la presentación.

El número final aún puede parecer razonable, pero el razonamiento detrás del número se vuelve imposible de auditar. Construí este toolkit en torno a una regla simple de separación:

> **Los datos de ingeniería deben ingresarse una sola vez. Los supuestos comerciales deben controlarse de forma centralizada. El cálculo de construcción debe permanecer reproducible.**

Por ejemplo, una línea como `4" Copper Pipe Type L` lleva consigo su ID de proyecto, especialidad (trade), unidad, cantidad, tarifa de material, horas-hombre por unidad y tarifa de equipo/subcontrato como datos de ingeniería innegables. El motor luego procesa esto en costo directo de material, costo directo de mano de obra y costo directo de equipo antes de aplicar de forma segura los costos indirectos, la contingencia y el margen comercial (markup).

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

## Detalles Técnicos — Continuación

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

### Tres Trampas que Atrapan Incluso a los Estimadores con Experiencia

#### Trampa 1 — Tratar la oferta final como un número único

**1. Se tomó una decisión.**
Se presenta una oferta después de revisar solo el precio final de venta y un margen esperado general.

**2. La decisión se basó en una debilidad del modelo que pasó inadvertida.**
La estimación no separó claramente el costo directo de producción de los costos indirectos, la contingencia y el margen comercial (markup).

**3. El defecto cambia la recomendación.**
Una oferta puede parecer competitiva porque la cifra visible de costo directo se ve aceptable, mientras que los ajustes comerciales necesarios para cubrir los costos indirectos operativos y la incertidumbre del proyecto están ausentes, subestimados o aplicados de manera inconsistente.

**4. Por qué el razonamiento es incorrecto.**
El precio de venta es el resultado de varias capas económicas diferentes. Tratar esas capas como un solo número dificulta determinar si un cambio de precio responde al costo de material, a la exposición de mano de obra, a la exposición de equipos/subcontratos, a la recuperación de costos indirectos, a la asignación de riesgo o al retorno comercial objetivo.

**5. Enfoque corregido.**
Separa el cálculo en:

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

**6. Resultado de la decisión corregido.**
El estimador puede revisar un supuesto comercial sin reconstruir la estimación. Un revisor también puede rastrear la oferta final hasta los componentes de costo subyacentes.

**7. Fórmula**

<details>
<summary>Cálculo del costo directo y la oferta final</summary>

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

El diseño de la fuente define el subtotal de costos directos como la base de cálculo para la asignación posterior de costos indirectos, contingencia y margen comercial (markup). 

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

#### Trampa 2 — Usar una tarifa de mano de obra sin controlar la relación con el oficio

**1. Se tomó una decisión.**
Una estimación se considera competitiva porque el componente de mano de obra parece lo suficientemente bajo para sostener el precio de venta objetivo.

**2. La decisión se basó en una entrada defectuosa que pasó inadvertida.**
La tarifa de mano de obra aplicada a una línea de takeoff no corresponde de manera consistente a la división u oficio representado por esa línea.

**3. El defecto cambia la recomendación.**
Un proyecto que contiene tuberías de fontanería, conductos de HVAC u otros trabajos especializados puede ser cotizado usando un supuesto de mano de obra genérico o desactualizado. El costo directo de mano de obra resultante queda subestimado incluso cuando los supuestos de cantidad y de horas-hombre por unidad son correctos.

**4. Por qué el razonamiento es incorrecto.**
La cantidad de mano de obra y el precio de la mano de obra son dimensiones diferentes.

Una estimación correcta de horas-hombre multiplicada por una tarifa horaria incorrecta sigue produciendo un costo de mano de obra incorrecto.

**5. Enfoque corregido.**
Mantén la relación oficio-tarifa en el área centralizada de supuestos y deriva la tarifa de mano de obra aplicada a partir de la división/especialidad (trade) seleccionada.

**6. Resultado de la decisión corregido.**
La estimación se vuelve consistente entre proyectos que usan la misma política de estimación. Si una tarifa estándar de mano de obra cambia, el supuesto puede actualizarse de forma centralizada en lugar de buscar en estimaciones individuales.

**7. Fórmula**

<details>
<summary>Coincidencia de tarifas de mano de obra por oficio</summary>

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

**Celda inicial:** `H2`

**Rango de trabajo:** `H2:H1000`

La fuente especifica `Applied Labor Rate` como un campo generado por fórmula y usa `MAP`, `LAMBDA` y `XLOOKUP` para hacer coincidir la división/especialidad (trade) del takeoff con la tabla estándar de tarifas de mano de obra. 

</details>

---

#### Trampa 3 — Gestionar las ofertas como estimaciones aisladas en lugar de un pipeline de ofertas

**1. Se tomó una decisión.**
La gerencia revisa estimaciones individuales cuando necesita saber cuánto trabajo se está persiguiendo actualmente.

**2. La decisión se basó en un fallo de proceso que pasó inadvertido.**
El libro de Excel de estimación contiene el monto de la oferta, pero el estado posterior a la estimación no se consolida de manera consistente.

**3. El defecto cambia la recomendación.**
La gerencia puede saber que se prepararon varias ofertas sin saber cuánto valor sigue pendiente, qué oportunidades se ganaron o perdieron, o cómo se ve el pipeline de ofertas en general.

**4. Por qué el razonamiento es incorrecto.**
Una estimación responde a una pregunta de precios a nivel de proyecto.

Un seguimiento de ofertas responde a una pregunta comercial a nivel de portafolio.

Son decisiones diferentes y requieren vistas diferentes de los mismos datos maestros del proyecto.

**5. Enfoque corregido.**
Mantén el maestro de proyectos con un campo de estado de oferta controlado:

```text
Draft
Submitted
Won
Lost
Pending
```

Luego usa los resultados de la estimación a nivel de proyecto y el estado del proyecto como base para la vista de seguimiento de ofertas.

**6. Resultado de la decisión corregido.**
La gerencia puede pasar de:

```text
"What is this project's estimate?"
```

a:

```text
"What does the current estimating pipeline represent?"
```

La arquitectura de la fuente define explícitamente `07_Bid_Tracker` como la vista del pipeline de ofertas para los montos de oferta del proyecto, el estado de adjudicación y la información de tasa de éxito. 

**7. Fórmula**

<details>
<summary>Lógica de agregación del pipeline</summary>

La especificación de implementación establece el seguimiento como una capa de salida que consume las capas de proyecto y de estimación. La implementación exacta de fórmulas del libro de Excel para cada KPI del seguimiento no está completamente especificada en el material fuente disponible, por lo que lo siguiente debe tratarse como la lógica de cálculo prevista en lugar de una fórmula fuente afirmada:

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

La fuente confirma el propósito comercial del seguimiento, pero no proporciona un diccionario completo de fórmulas celda por celda para estos KPIs de salida. 

</details>

---

### Escenario de Ejemplo

Considera un proyecto mecánico comercial con un alcance mixto de tuberías y equipos.

El levantamiento de cantidades (takeoff) contiene:

| Entrada               |                   Valor |
| ------------------- | ----------------------: |
| ID del proyecto          |          `PRJ-2026-014` |
| División / Especialidad (trade)    |       `Plumbing-Piping` |
| Ítem                | `4" Copper Pipe Type L` |
| Cantidad            |              `1,200 LF` |
| Tarifa unitaria de material  |           `$18.50 / LF` |
| Horas de mano de obra / Unidad  |          `0.12 hr / LF` |
| Tarifa de mano de obra aplicada  |           `$48.00 / hr` |
| Tarifa unitaria de equipo |            `$1.50 / LF` |

El componente de material es:

```text
1,200 × $18.50
= $22,200
```

El componente de mano de obra es:

```text
1,200 × 0.12 × $48.00
= $6,912
```

El componente de equipo es:

```text
1,200 × $1.50
= $1,800
```

Por lo tanto, el costo directo se convierte en:

```text
$22,200
+ $6,912
+ $1,800
= $30,912
```

Supón que los supuestos comerciales son:

| Parámetro     | Tasa |
| ------------- | ---: |
| Costos indirectos      |  10% |
| Contingencia   |   5% |
| Margen comercial (markup) objetivo |  15% |

Costos indirectos:

```text
$30,912 × 10%
= $3,091.20
```

Contingencia:

```text
($30,912 + $3,091.20) × 5%
= $1,700.16
```

Margen comercial (markup):

```text
($30,912 + $3,091.20 + $1,700.16) × 15%
= $5,355.50
```

Oferta final:

```text
$30,912.00
+ $3,091.20
+ $1,700.16
+ $5,355.50
= $41,058.86
```

El resultado útil no es meramente el `$41,058.86` final.

La estimación ahora proporciona una estructura de costos rastreable:

| Capa de costo       |         Monto | Participación en la oferta final |
| ---------------- | -------------: | -----------------: |
| Material directo  |     $22,200.00 |             54.09% |
| Mano de obra directa     |      $6,912.00 |             16.84% |
| Equipo directo |      $1,800.00 |              4.38% |
| Costos indirectos         |      $3,091.20 |              7.53% |
| Contingencia      |      $1,700.16 |              4.14% |
| Margen comercial (markup)           |      $5,355.50 |             13.05% |
| **Oferta final**    | **$41,058.86** |        **100.00%** |

Esto cambia la conversación de revisión.

En lugar de preguntarse si `$41,058.86` «se siente competitivo», el estimador puede identificar los impulsores de costo reales.

El proyecto tiene un componente de material particularmente grande. La mano de obra es el segundo costo directo más grande. La exposición de equipos es relativamente menor. Los ajustes comerciales son visibles por separado.

Si la cotización de material cambia, la entrada de material puede actualizarse.

Si la tarifa estándar de mano de obra cambia, la tarifa de mano de obra aplicada puede actualizarse desde la tabla de supuestos.

Si la política comercial cambia, los costos indirectos, la contingencia o el margen comercial (markup) pueden cambiarse de forma centralizada.

La cadena de cálculo queda entonces así:

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

Ese es el límite previsto de soporte a decisiones del libro de Excel: **hacer que el número sea más fácil de construir, inspeccionar, revisar y llevar a la siguiente decisión comercial.**

### Referencia de Fórmulas

Los siguientes grupos de fórmulas documentan la lógica de cálculo especificada por la implementación fuente. Las fórmulas se mantienen deliberadamente cercanas a su estructura del libro de Excel para que otro profesional de Excel pueda reproducir la cadena de cálculo.

<details>
<summary>02_Assumptions — Parámetros Comerciales Globales</summary>

| Celda / Rango | Parámetro           | Propósito                               |
| ------------ | ------------------- | ------------------------------------- |
| `B4`         | Símbolo de moneda     | Controla la presentación global de la moneda |
| `B5`         | Tasa de costos indirectos       | Controla la asignación de costos indirectos          |
| `B6`         | Margen comercial (markup) objetivo       | Controla el margen comercial (markup)            |
| `B7`         | Tasa de contingencia    | Controla la asignación de riesgo               |
| `B11:B20`    | Nombre del oficio          | Claves de búsqueda de oficios estándar            |
| `C11:C20`    | Tarifa de mano de obra / Hr     | Tarifas estándar de costo de mano de obra             |
| `E11:E20`    | Tipo de equipo      | Categorías estándar de equipo         |
| `F11:F20`    | Tarifa de equipo / Hr | Tarifas estándar de equipo              |

La fuente identifica esta hoja como la capa centralizada de parámetros y define específicamente los costos indirectos, el margen comercial (markup) objetivo, la contingencia, las tarifas de mano de obra y las tarifas de equipo como entradas controladas. 

**Regla poco obvia:** las fórmulas de cálculo posteriores deben hacer referencia a estas celdas en lugar de incrustar directamente los supuestos comerciales.

</details>

<details>
<summary>04_Quantity_Takeoff — Búsqueda de Tarifa de Mano de Obra</summary>

**Propósito:** Determinar automáticamente la tarifa de mano de obra aplicada a partir de la división/especialidad (trade) seleccionada.

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

**Entrada:** `Division / Trade`

**Salida:** `Applied Labor Rate`

**Celda inicial:** `H2`

**Diseño:** una fórmula configurada se derrama a través del rango de trabajo.

La fuente identifica explícitamente `H` como generado por fórmula y lo vincula a los supuestos centralizados de tarifas por oficio. 

</details>

<details>
<summary>05_Estimate_Engine — Herencia de Datos Fuente</summary>

**Propósito:** Mantener la capa de cálculo sincronizada con la capa de takeoff.

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!A2:C1000
)
```

Esto hereda:

```text
Project ID
Division
Item Description
```

de `04_Quantity_Takeoff`.

La fuente define `05_Estimate_Engine` como una capa de cálculo pura y prohíbe la entrada manual en el área de cálculo. 

</details>

<details>
<summary>05_Estimate_Engine — Costo Directo de Material</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!F2:F1000
)
```

**Propósito:**

```text
Quantity × Material Unit Rate
```

**Salida:** `Direct Material Cost`

La fuente especifica `D2:D1000` como el rango de derrame para este cálculo. 

</details>

<details>
<summary>05_Estimate_Engine — Costo Directo de Mano de Obra</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!G2:G1000
    * '04_Quantity_Takeoff'!H2:H1000
)
```

**Propósito:**

```text
Quantity
× Labor Hours / Unit
× Applied Labor Rate
```

**Salida:** `Direct Labor Cost`

La fuente especifica esto como el cálculo del costo de mano de obra e identifica la mano de obra como un componente del costo directo del proyecto. 

</details>

<details>
<summary>05_Estimate_Engine — Costo Directo de Equipo</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    '04_Quantity_Takeoff'!E2:E1000
    * '04_Quantity_Takeoff'!I2:I1000
)
```

**Propósito:**

```text
Quantity × Equipment Unit Rate
```

**Salida:** `Direct Equipment Cost`

La fuente trata este componente como la capa de costo directo de equipo / subcontrato. 

</details>

<details>
<summary>05_Estimate_Engine — Subtotal de Costos Directos</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    D2:D1000
    + E2:E1000
    + F2:F1000
)
```

**Propósito:**

```text
Direct Material Cost
+ Direct Labor Cost
+ Direct Equipment Cost
```

**Salida:** `Direct Cost Subtotal`

Este subtotal se convierte en la base para las etapas de ajustes comerciales. 

</details>

<details>
<summary>05_Estimate_Engine — Asignación de Costos Indirectos</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    G2:G1000
    * '02_Assumptions'!$B$5
)
```

**Propósito:**

```text
Direct Cost Subtotal × Overhead Rate
```

**Parámetro:** `02_Assumptions!B5`

La fuente define explícitamente `B5` como el parámetro global de tasa de costos indirectos. 

</details>

<details>
<summary>05_Estimate_Engine — Monto de Contingencia</summary>

```excel
=IF(
    '04_Quantity_Takeoff'!A2:A1000="",
    "",
    (G2:G1000 + H2:H1000)
    * '02_Assumptions'!$B$7
)
```

**Propósito:**

```text
(Direct Cost + Overhead) × Contingency Rate
```

**Parámetro:** `02_Assumptions!B7`

La fuente define la contingencia como una asignación de riesgo aplicada después del costo directo y los costos indirectos. 

</details>

<details>
<summary>05_Estimate_Engine — Monto de Margen Comercial (Markup)</summary>

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

**Propósito:**

```text
(Direct Cost + Overhead + Contingency)
× Target Markup
```

**Parámetro:** `02_Assumptions!B6`

La fuente define `B6` como el parámetro de margen comercial (markup) objetivo utilizado para determinar el incremento comercial final. 

</details>

<details>
<summary>05_Estimate_Engine — Oferta Final</summary>

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

**Propósito:**

```text
Direct Cost
+ Overhead
+ Contingency
+ Markup
```

**Salida:** `Line Item Final Bid`

La fuente identifica `K` como la salida final de oferta por línea y la define como la suma de las capas de costos directos y comerciales. 

</details>

<details>
<summary>06_Bid_Summary — Agregación a Nivel de Proyecto</summary>

`06_Bid_Summary` está diseñado para resumir la estimación de un `Project ID` seleccionado.

La fuente establece el propósito comercial como:

* seleccionar un proyecto;
* agregar automáticamente la estructura de costos;
* exponer métricas comerciales;
* presentar la estimación a nivel de proyecto en lugar de requerir una revisión línea por línea.

Las fórmulas exactas celda por celda para la hoja de resumen no están completamente especificadas en el material fuente disponible. Por lo tanto, lo siguiente representa el patrón de agregación reproducible en lugar de una fórmula fuente afirmada:

```excel
=SUMIFS(
    '05_Estimate_Engine'!$G:$G,
    '05_Estimate_Engine'!$A:$A,
    Selected_Project_ID
)
```

El mismo patrón `SUMIFS` puede aplicarse a:

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

La arquitectura de la fuente confirma que `06_Bid_Summary` está aguas abajo de las capas de proyecto y de estimación, y está destinado a resumir costos por el Project ID seleccionado. 

</details>

<details>
<summary>07_Bid_Tracker — Lógica de Ofertas a Nivel de Portafolio</summary>

`07_Bid_Tracker` mueve el modelo de la estimación a nivel de proyecto al seguimiento del pipeline de ofertas.

Los valores de estado del proyecto subyacentes especificados por la fuente son:

```text
Draft
Submitted
Won
Lost
Pending
```

El seguimiento puede por lo tanto organizar el portafolio de estimación en torno a:

* proyecto;
* cliente;
* fecha de oferta;
* monto de la oferta;
* estado actual;
* valor adjudicado;
* oportunidades perdidas;
* análisis de tasa de éxito.

La fuente define el seguimiento como la vista automatizada de los montos de oferta del proyecto, el estado de adjudicación y la tasa de éxito. 

Donde se requiera una implementación concreta, el patrón estándar de agregación de Excel es:

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

Estas fórmulas documentan el cálculo comercial previsto. No se presentan como fórmulas de celda extraídas de la fuente donde la fuente no especifica celdas exactas.

</details>

<details>
<summary>08_Dashboard — Vista de Gerencia</summary>

`08_Dashboard` es la capa final de presentación.

La fuente describe esta hoja como la cabina de gestión para visualizar:

* ofertas activas;
* pipeline de ofertas;
* composición de costos;
* información de gestión relacionada con ofertas.

La dirección de dependencia es:

```text
03_Project_Setup
        +
05_Estimate_Engine
        ↓
08_Dashboard
```

El panel debe por lo tanto consumir los resultados existentes de proyecto y de estimación en lugar de recrear de manera independiente los cálculos de costos.

Esto preserva una única fuente de cálculo y evita que la capa de gestión se convierta en un segundo modelo de estimación desconectado. 

</details>

### Reglas de Validación

| Campo                     | Regla                                                                              | Comportamiento ante errores                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `Project ID`              | Debe identificar el registro maestro del proyecto en `03_Project_Setup`.                    | Los ID de proyecto sin coincidencia crean relaciones proyecto-takeoff rotas y resúmenes de proyecto poco confiables. |
| `Project Name`            | Se ingresa como datos maestros del proyecto.                                                   | Un nombre faltante debilita los informes y la identificación a nivel de proyecto.                                       |
| `Client Name`             | Se ingresa como datos maestros del proyecto.                                                   | La información de cliente faltante limita la revisión a nivel de cliente.                                                 |
| `Bid Date`                | Usa una fecha válida en formato `YYYY-MM-DD`.                                          | Las fechas inválidas comprometen la programación de ofertas y el análisis por período.                                           |
| `Estimator`               | Campo de texto que identifica al estimador responsable.                                 | La ausencia de responsable debilita la rendición de cuentas en la revisión.                                                       |
| `Bid Status`              | Usa valores controlados: `Draft`, `Submitted`, `Won`, `Lost`, `Pending`.            | Los valores no estándar rompen la agrupación consistente del pipeline de ofertas.                                                |
| `Division / Trade`        | Debe corresponder a la lista estándar de oficios donde se requiera la búsqueda de tarifa de mano de obra. | Los valores sin coincidencia pueden provocar que se use el comportamiento de respaldo de la búsqueda.                                    |
| `Item Description`        | Texto descriptivo de takeoff obligatorio.                                                | Las descripciones faltantes reducen la auditabilidad de las estimaciones a nivel de línea.                                      |
| `Unit`                    | Unidad de estimación válida como `LF`, `EA` o `SQFT`.                              | Las unidades incorrectas pueden invalidar la relación cantidad/tarifa.                                         |
| `Quantity`                | Cantidad medida numérica del takeoff.                                                | Las cantidades en blanco o inválidas impiden un cálculo significativo de costos directos.                                |
| `Material Unit Rate`      | Base numérica de costo de material.                                                      | Las tarifas faltantes o incorrectas distorsionan el costo directo de material.                                               |
| `Labor Hours / Unit`      | Supuesto numérico de esfuerzo de mano de obra.                                                  | Las horas faltantes o incorrectas distorsionan el costo directo de mano de obra.                                                  |
| `Applied Labor Rate`      | Generado por fórmula a partir de la tabla centralizada de tarifas de mano de obra.                          | Una tarifa inesperada debe desencadenar la revisión del mapeo de división/especialidad (trade) y de la tabla de supuestos.             |
| `Equipment Unit Rate`     | Base numérica de costo de equipo o subcontrato.                                      | Los valores faltantes producen una exposición incompleta de equipos/subcontratos.                                      |
| `Overhead Rate`           | Porcentaje mantenido en `02_Assumptions!B5`.                                     | Un valor incorrecto afecta todas las estimaciones que usan el parámetro.                                             |
| `Target Markup`           | Porcentaje mantenido en `02_Assumptions!B6`.                                     | Un valor incorrecto cambia la capa comercial del precio de venta.                                            |
| `Contingency Rate`        | Porcentaje mantenido en `02_Assumptions!B7`.                                     | Un valor incorrecto cambia la asignación de riesgo.                                                            |
| `Calculation Layer`       | `05_Estimate_Engine` no debe contener entradas manuales.                             | Las sobrescrituras manuales comprometen la reproducibilidad prevista de la estimación.                              |
| `Currency Symbol`         | Mantenido de forma centralizada en `02_Assumptions!B4`.                                      | Una configuración incorrecta afecta la presentación en lugar del cálculo numérico subyacente.           |
| `Formula Spill Area`      | Las celdas de destino deben permanecer libres de valores manuales.                             | Un derrame de matriz dinámica bloqueado produce el comportamiento `#SPILL!` de Excel.                                         |
| `Assumption Cells`        | Los parámetros comerciales deben ser porcentajes numéricos o valores configurados válidos.     | Los supuestos inválidos propagan resultados de cálculo incorrectos o inutilizables.                               |
| `Project-to-Takeoff Link` | Cada fila de takeoff debe contener un Project ID válido.                              | Las líneas de cantidades huérfanas no pueden incluirse de manera confiable en los informes a nivel de proyecto.                        |
| `Project Status`          | El estado debe permanecer dentro de la lista controlada.                                  | Los valores de estado inválidos crean análisis inconsistentes del pipeline de ofertas y de la tasa de éxito.                              |

El diseño de la fuente distingue explícitamente las **áreas de entrada manual, áreas generadas por fórmula y áreas de control de parámetros**, incluida la convención de que las celdas azules representan la entrada manual, las celdas grises representan fórmulas y las celdas amarillas representan controles de parámetros. 

### Notas de Implementación

#### Compatibilidad con matrices dinámicas

El libro de Excel depende de funciones modernas de Excel, entre ellas:

```text
MAP
LAMBDA
XLOOKUP
IF
SUMIFS
```

La arquitectura de cálculo está diseñada en torno a ingresar una fórmula una sola vez en la primera fila de cálculo y permitir que se derrame a través del rango de trabajo.

Esta es una alternativa deliberada a copiar manualmente las fórmulas en cada línea de estimación.

#### Disciplina de la capa de cálculo

`05_Estimate_Engine` debe permanecer como una capa exclusivamente de cálculo.

El límite previsto es:

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

Un usuario no debe editar manualmente los costos directos calculados, la asignación de costos indirectos, la contingencia, el margen comercial (markup) ni los valores de la oferta final.

#### Disciplina de los supuestos comerciales

El siguiente patrón se evita intencionalmente:

```excel
=G2*10%
```

cuando `10%` representa la política configurable de costos indirectos de la organización.

El patrón preferido es:

```excel
=G2*'02_Assumptions'!$B$5
```

La misma regla se aplica al margen comercial (markup) objetivo y a la contingencia.

Esto mantiene la política comercial separada de la mecánica de cálculo.

#### Disciplina de la clave de proyecto

`Project ID` funciona como la clave principal.

La relación es:

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

Esta es la estructura referencial central del libro de Excel.

#### Separación de datos y supuestos

El modelo distingue entre:

**Datos del proyecto / de ingeniería**

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

y:

**Supuestos comerciales**

```text
Currency Symbol
Overhead Rate
Target Markup
Contingency Rate
Standard Labor Rates
Equipment Rates
```

Esta distinción es central para la reproducibilidad.

Un cambio en el alcance del proyecto debe cambiar los datos del proyecto.

Un cambio en la política comercial debe cambiar los supuestos.

Esos dos eventos no deberían requerir la misma acción de mantenimiento.

### Lista de Verificación de Reproducibilidad

Antes de usar el libro de Excel para una oferta real, verifica:

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

El propósito de esta lista de verificación no es reemplazar el criterio de estimación.

Es evitar que el propio libro de Excel se convierta en la fuente de inconsistencias de estimación evitables.

</details>

## Otras Herramientas de Esta Serie

* **Construction Management** — control de proyectos para presupuestos, contratos, avances, pagos, retenciones y órdenes de cambio.
* **Construction Assembly-Based Tender Estimating** — estimación reutilizable basada en ensamblajes y precios de licitación.
* **Pricing & Break-even Decision Calculator** — soporte de decisiones de precios, contribución y punto de equilibrio.
* **Marketing Budget Allocation Simulator** — asignación estructurada de presupuesto bajo restricciones de retorno y operativas.

## Licencia

Este proyecto se publica bajo la licencia **Apache License 2.0**.

El uso, la modificación, la distribución y las obras derivadas están permitidos sujetos a los términos y condiciones de la Apache License 2.0.

Consulta el archivo `LICENSE` para el texto completo de la licencia.