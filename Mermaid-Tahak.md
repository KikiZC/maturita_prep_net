# 📊 Mermaid Diagramy pro CtrlPay (Tahák pro dokumentaci)

Tento soubor obsahuje šablony diagramů, které můžeš použít ve své části dokumentace (Frontend & Repos). V Obsidianu se tyto bloky automaticky vykreslí jako grafy.

---

## 1. Flowchart (Architektura Frontendu)
Tento graf ukazuje, jak tečou data od uživatele přes tvůj kód až do databáze/API.

```mermaid
graph TD
    %% Definice prvků
    U[Uživatel]
    V[Avalonia View / .axaml]
    VM[ViewModel / .cs]
    R[Repository / CtrlPay.Repos]
    W[HttpWorker]
    A((Backend API))

    %% Propojení (tok dat)
    U -->|Klikne na tlačítko| V
    V <-->|Data Binding| VM
    VM -->|Volá metodu| R
    R -->|Používá| W
    W -->|HTTP Request| A
    
    %% Stylování pro přehlednost
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style U fill:#dfd,stroke:#333
```
*   **Tip:** Použij `graph LR` pro zobrazení zleva doprava nebo `graph TD` pro shora dolů.

---

## 2. Sequence Diagram (Průběh přihlášení)
Ideální pro vysvětlení komunikace mezi tvým Repozitářem a API v čase.

```mermaid
sequenceDiagram
    autonumber
    participant V as View (Login)
    participant VM as ViewModel
    participant R as AuthRepo
    participant A as API

    V->>VM: Zadá login a heslo
    VM->>R: LoginAsync(user, pass)
    Note over R,A: Komunikace přes HttpWorker
    R->>A: POST /api/auth/login
    A-->>R: 200 OK (Vrací JWT Token)
    R-->>VM: Úspěšně přihlášen
    VM-->>V: Navigace na Dashboard
```
*   **Note over:** Vytvoří žlutou poznámku přes vybrané účastníky.
*   **-->>:** Přerušovaná šipka značí návratovou hodnotu (response).

---

## 3. State Diagram (Stavy platby)
Pokud dokumentuješ, jak se mění stavy v UI (např. barva ikonky u platby), použij toto.

```mermaid
stateDiagram-v2
    [*] --> Waiting: Vytvořeno v UI
    Waiting --> Processing: Odesláno na API
    Processing --> Paid: Platba přijata
    Processing --> Error: Chyba sítě
    Paid --> [*]
    Error --> Waiting: Opakovat pokus
```

---

## 4. Class Diagram (Struktura Repozitářů)
Tímhle ukážeš, jak máš zorganizované třídy v projektu `CtrlPay.Repos`.

```mermaid
classDiagram
    class BaseRepo {
        <<abstract>>
        #HttpWorker _worker
        #CheckResponse(resp)
    }
    class PaymentRepo {
        +GetPayments() Task
        +CreatePayment(p) Task
    }
    class CustomerRepo {
        +GetCustomers() Task
    }

    BaseRepo <|-- PaymentRepo : Dědí z
    BaseRepo <|-- CustomerRepo : Dědí z
    PaymentRepo --> HttpWorker : Používá
```
*   `BaseRepo <|-- PaymentRepo` znamená, že PaymentRepo dědí z BaseRepo.
*   `+` je public metoda, `#` je protected (přístupná pro potomky).

---

## Jak to použít v dokumentaci?
1. Zkopíruj si vybraný blok (včetně těch tří zpětných apostrofů a slova `mermaid`).
2. Vlož ho do svého hlavního dokumentu.
3. Uprav texty v uvozovkách nebo názvy krabiček podle toho, co zrovna popisuješ.

*Vytvořeno pro projekt CtrlPay.*
