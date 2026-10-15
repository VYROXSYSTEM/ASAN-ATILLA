// Supplemental catalogue copy. No prices, quantities, vessel schedules or specifications are asserted here.
(function () {
  const copy = {
    en: {
      ship: "SEA FREIGHT INQUIRY",
      shipDesc: "Ask about potential bulk shipments by sea. Routes, availability and terms require confirmation."
    },
    uk: {
      ship: "МОРСЬКИЙ ЗАПИТ",
      shipDesc: "Запитайте про можливе морське постачання. Маршрути, наявність і умови потребують підтвердження."
    },
    tr: {
      ship: "DENİZ NAKLİYESİ TALEBİ",
      shipDesc: "Olası deniz sevkiyatlarını sorun. Rotalar, uygunluk ve koşullar teyit gerektirir."
    },
    de: {
      ship: "ANFRAGE ZUM SEETRANSPORT",
      shipDesc: "Fragen Sie mögliche Seelieferungen an. Routen, Verfügbarkeit und Bedingungen müssen bestätigt werden."
    },
    pl: {
      ship: "ZAPYTANIE O TRANSPORT MORSKI",
      shipDesc: "Zapytaj o możliwe dostawy morskie. Trasy, dostępność i warunki wymagają potwierdzenia."
    },
    fr: {
      ship: "DEMANDE DE TRANSPORT MARITIME",
      shipDesc: "Renseignez-vous sur les expéditions maritimes possibles. Itinéraires, disponibilité et conditions sont à confirmer."
    },
    es: {
      ship: "CONSULTA DE TRANSPORTE MARÍTIMO",
      shipDesc: "Consulta posibles envíos marítimos. Rutas, disponibilidad y condiciones deben confirmarse."
    }
  };

  Object.entries(copy).forEach(([language, values]) => {
    Object.assign(window.aaCatalog[language], values);
  });

  document.getElementById("lang")?.dispatchEvent(new Event("change"));
})();
