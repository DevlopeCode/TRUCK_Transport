function checkdata() {
  var tan_10 = Number(document.getElementById("10_ton").value);
  var tan_20 = Number(document.getElementById("20_ton").value);
  var tan_30 = Number(document.getElementById("30_ton").value);
  var tan_40 = Number(document.getElementById("40_ton").value);
  var tan_50 = Number(document.getElementById("50_ton").value);
  var weigth = Number(document.getElementById("weigth").value);

  var tan_50_index = 0;
  var tan_40_index = 0;
  var tan_30_index = 0;
  var tan_20_index = 0;
  var tan_10_index = 0;
  var result_50 = document.getElementById('result_50');
  var result_40 = document.getElementById('result_40');
  var result_30 = document.getElementById('result_30');
  var result_20 = document.getElementById('result_20');
  var result_10 = document.getElementById('result_10');
  function fun_50() {
    if (weigth >= 50 || tan_10 + tan_20 + tan_30 + tan_40 == 0) {
      for (var i = 0; i < tan_50; i++) {
        if (weigth >= 50 || tan_10 + tan_20 + tan_30 + tan_40 == 0) {
          tan_50_index++;
          weigth = weigth - 50;
        } else {
          break;
        }
      }
    }
  }
  function fun_40() {
    if (weigth >= 40 || tan_10 + tan_20 + tan_30 == 0) {
      for (var i = 0; i < tan_40; i++) {
        if (weigth >= 40 || tan_10 + tan_20 + tan_30 == 0) {
          tan_40_index++;
          weigth = weigth - 40;
        } else {
          break;
        }
      }
    }
  }

  function fun_30() {
    if (weigth >= 30 || tan_10 + tan_20 == 0) {
      for (var i = 0; i < tan_30; i++) {
        if (weigth >= 30 || tan_10 + tan_20 == 0) {
          tan_30_index++;
          weigth = weigth - 30;
        } else {
          break;
        }
      }
    }
  }

  function fun_20() {
    if (weigth >= 20 || tan_10 == 0) {
      for (var i = 0; i < tan_20; i++) {
        if (weigth >= 20 || tan_10 == 0) {
          tan_20_index++;
          weigth = weigth - 20;
        } else {
          break;
        }
      }
    }
  }

  function fun_10() {
    if (weigth > 0) {
      for (var i = 0; i < tan_10; i++) {
        if (weigth > 0) {
          tan_10_index++;
          weigth = weigth - 10;
        } else {
          break;
        }
      }
    }
  }

  fun_50();
  fun_40();
  fun_30();
  fun_20();
  fun_10();
   result_50.innerHTML=`${tan_50_index} Truck of 50TON`;
   result_40.innerHTML=`${tan_40_index} Truck of 40TON`;
   result_30.innerHTML=`${tan_30_index} Truck of 30TON`;
   result_20.innerHTML=`${tan_20_index} Truck of 20TON`;
   result_10.innerHTML=`${tan_10_index} Truck of 10TON`;
  console.log({
    tan_50_index,
    tan_40_index,
    tan_30_index,
    tan_20_index,
    tan_10_index
  });
}
