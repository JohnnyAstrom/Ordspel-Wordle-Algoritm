/*
Funktionen ska ta emot två strängar: guessedWord och correctWord.
Den ska returnera en array med ett objekt per bokstav i gissningen.

Varje objekt ska innehålla:
- letter: Själva bokstaven.
- result: Ett av följande värden:
  - "correct": bokstaven finns och är på rätt plats
  - "misplaced": bokstaven finns i correctWord men är på fel plats
  - "incorrect": bokstaven finns inte i correctWord

Viktigt:
- Bokstäver matchas i två steg:
  1. Först kontrolleras om bokstaven är på rätt plats ("correct")
  2. Om inte, kontrolleras om bokstaven finns någon annanstans i correctWord ("misplaced")

- En bokstav i correctWord får bara användas en gång. Exempelvis:
  Om det bara finns ett "L" i correctWord, ska bara ett "L" i guessedWord kunna få "correct" eller "misplaced".

Exempel:

guessedWord:  "H E L L O"
correctWord:  "C Y C L E"

Return:
[
  { letter: "H", result: "incorrect" },
  { letter: "E", result: "misplaced" },
  { letter: "L", result: "correct" },
  { letter: "L", result: "misplaced" },
  { letter: "O", result: "incorrect" }
]
*/

/****TESTSTRATEGI**** 

Testfall 1: - Alla bokstäver är korrekta och på rätt plats
guessedWord: "ABCDE"
correctWord: "ABCDE"
- Förväntat resultat: Alla bokstäver ska ha result: "correct"


Testfall 2: - Alla bokstäver är fel
guessedWord: "ABCDE"
correctWord: "FGHIJ"
- Förväntat resultat: Alla bokstäver ska ha result: "incorrect"

Testfall 3: - Några bokstäver är korrekta och på rätt plats
guessedWord: "ABCDE"
correctWord: "ABFGH"
- Förväntat resultat:
- A: "correct"
- B: "correct"
- C, D, E: "incorrect"

Testfall 4: -Rätt bokstav på fel plats
guessedWord: "ABCDE"
correctWord: "ECDAB"
- Förväntat resultat: Alla bokstäver ska ha result: "misplaced"

Testfall 5: - Dubletter i guessedWord men bara en finns i correctWord
guessedWord: "AABCD"
correctWord: "CDAEF"
- Förväntat resultat:
- A: "misplaced"
- A: "incorrect" - Finns bara en A i correctWord
- B: "incorrect"
- C: "correct"
- D: "misplaced"

Testfall 6: - Dubletter där en bokstav är korrekt och en är på fel plats
guessedWord: "AABCD"
correctWord: "AEAEE"
- Förväntat resultat:
- A: "correct"
- A: "misplaced"
- B, C, D: "incorrect"



*/