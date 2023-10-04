# Calcolo biglietto del treno

### Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
    
#### Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
    - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


- chiedere all' utente in numero di km che vuole percorrere
  - inizializzare la variabile sui km
- chiedere l' età all' utente
  - inizializzare la variabile sull età
- calcolo prezzo base del biglietto in base ai km
  - dichiarare una variabile sul prezzo del biglietto al km di 0,21 euro
  - dichiarare una variabile prezzo base dove concateniamo i km con il prezzo base al km del biglietto 
- calcolo dello sconto in base all'età
  - dichiarare variabili  sconto in euro
    - 40%
    - 20%
- prezzo finale del biglietto sottraendo al prezzo base lo sconto 
  - creare una variabile prezzo finale 
  -  - concatenare prezzo base con lo sconto   
    - SE < 18 anni:
      - sconto del 20
    - ALTRIMENTI SE > 65 anni
      - sconto del 40%
    - ALTRIMENTI
      - nessuno sconto 

- stampare il prezzo finale sull' HTML