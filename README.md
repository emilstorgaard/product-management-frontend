# Product Management Frontend

Dette er Product Mangement Frontend

Product Management er et website, som giver overblik over produkter, gør det muligt at oprette, ændre og filtrere i produkter.

Det er et dynamisk website, hvor brugervenlighed er i centrum. Hjemmesiden er designet til at være responsive, hvilket betyder, at den automatisk tilpasser sig enhver skærmstørrelse, fra desktop til mobile enheder.

## Funktioner
-   **Pagination:** Se 10 produkter per side¨

-   **Oprette produkt:** Opret produkt

-   **Redigere produkt:** Rediger produkt

-   **Filtrere produkter:** Filtrer produktlisten

## Teknologi

-   **Frontend**: Next.js
-   **Backend**: C# .NET
-   **Database**: MySQL
-   **Deployment**: Docker

## Projekt Opsætning
### Lokalt:

1. **Klon Repositoriet**

    ```
    git clone https://github.com/emilstorgaard/product-management-frontend.git
    ```

2. change directory to the project folder

    ```
    cd product-management-frontend
    ```

3. **Installer Dependencies**

    ```
    npm install
    ```

5. **Køre ProductMangementBackend API**

    https://github.com/emilstorgaard/productManagementBackend

6. **Starte Projektet Lokalt**

    ```
    npm run dev
    ```

### Docker:
For at bygge og køre projektet ved hjælp af Docker, følg disse trin:
1. **Byg Docker Image**
    ```
    docker build -t product_management_frontend .
    ```
2. **Kør Containeren**
    ```
    docker run -p 8888:3000 product_management_frontend
    ```
    Herefter er applikationen tilgængelig på `localhost:8888`.

© Emil Storgaard Andersen, 2024.