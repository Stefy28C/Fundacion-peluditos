function submitDonation() {
    var amount = document.getElementsByName("cantidad_donacion")[0].value;
    var frequency = document.getElementsByName("frecuencia_donacion")[0].value;
    var total = amount * getFrequencyMultiplier(frequency);
  
    alert("¡Gracias por tu donación! Has donado un total de $" + total + " y ayudarás a alimentar a los perritos durante un tiempo determinado.");
  }
  
  function getFrequencyMultiplier(frequency) {
    switch (frequency) {
      case "mensual":
        return 1;
      case "trimestral":
        return 3;
      case "anual":
        return 12;
      default:
        return 1;
    }
  }
  