export function meetcal() {
    setTimeout(function () {
  
      /*Class Links*/
      var OS = "https://meet.google.com/xmd-tpzp-zqb";
      var OS_LAB = "https://meet.google.com/orj-evrr-rqm";
      var DBMS = "https://meet.google.com/wtx-ynmn-mqq";
      var DBMS_LAB = "https://meet.google.com/ism-visn-jqx";
      var WT = "https://meet.google.com/njx-febs-ktn";
      var WT_LAB = "https://meet.google.com/njx-febs-ktn";
      var PDC = "https://meet.google.com/osj-bvqq-opb";
      var AFL = "https://us02web.zoom.us/j/86356146691?pwd=aHFEa0xiMFlnK3h5UDhDYkVyVWEzdz09";
      var COA = "https://meet.google.com/osw-qpuv-kdc";
      
      var BC = "https://meet.google.com/xmd-tpzp-zqb"; //Not Yet Given
  
      var REST = "https://unofficial.kiit.ml";
  
  
      var d = new Date();
      var day = d.toLocaleString("default", { weekday: "short" });
      var min = new Date().getMinutes();
      var hrs = new Date().getHours();
      var com = parseFloat(hrs + "." + min);
      var chk = parseFloat(com);
  
      /*Mapping Link*/
  
      //Monday
      if (day == "Mon") {
        if (chk >= 7.30 && chk < 8.50) {
          // DBMS
          window.location.href = DBMS;
        } else if (chk >= 8.50 && chk < 10.50) {
          // DBMS LAB
          window.location.href = DBMS_LAB;
        } else if (chk >= 10.50 && chk < 11.50) {
          // PDC
          window.location.href = PDC;
        } else if (chk >= 11.50 && chk < 12.50) {
          // AFL
          window.location.href = AFL;
        } else if (chk >= 12.50 && chk < 14.30) {
          // COA
          window.location.href = COA;
        } else {
          // REST
          window.location.href = REST;
        }
      }
  
      //Tuesday
      if (day == "Tue") {
        if (chk >= 7.30 && chk < 8.50) {
          // OS
          window.location.href = OS;
        } else if (chk >= 8.50 && chk < 9.50) {
          // COA
          window.location.href = COA;
        } else if (chk >= 9.50 && chk < 10.50) {
          // PDC
          window.location.href = PDC;
        } else if (chk >= 10.50 && chk < 11.50) {
          // AFL
          window.location.href = AFL;
        } else if (chk >= 11.50 && chk < 13.30) {
          // WT
          window.location.href = WT;
        } else {
          // REST
          window.location.href = REST;
        }
      }
  
      //Wednesday
      if (day == "Wed") {
        if (chk >= 7.30 && chk < 8.50) {
          // WT
          window.location.href = WT;
        } else if (chk >= 8.50 && chk < 10.50) {
          // WT LAB
          window.location.href = WT_LAB;
        } else if (chk >= 10.50 && chk < 11.50) {
          // OS
          window.location.href = OS;
        } else if (chk >= 11.50 && chk < 12.50) {
          // DBMS
          window.location.href = DBMS;
        } else if (chk >= 12.50 && chk < 14.30) {
          // PDC
          window.location.href = PDC;
        } else {
          // REST
          window.location.href = REST;
        }
      }
  
      //Thursday
      if (day == "Thu") {
        if (chk >= 7.30 && chk < 8.50) {
          // WT
          window.location.href = WT;
        } else if (chk >= 8.50 && chk < 9.50) {
          // AFL
          window.location.href = AFL;
        } else if (chk >= 9.50 && chk < 10.50) {
          // DBMS
          window.location.href = DBMS;
        } else if (chk >= 10.50 && chk < 11.50) {
          // COA
          window.location.href = COA;
        } else if (chk >= 11.50 && chk < 13.30) {
          // PDC
          window.location.href = PDC;
        } else if (chk >= 13.30 && chk < 18.30) {
          // BC
          window.location.href = BC;
        } else {
          // REST
          window.location.href = REST;
        }
      }
  
      //Friday
      if (day == "Fri") {
        if (chk >= 7.30 && chk < 8.50) {
          // DBMS
          window.location.href = DBMS;
        } else if (chk >= 8.50 && chk < 9.50) {
          // AFL
          window.location.href = AFL;
        } else if (chk >= 9.50 && chk < 10.50) {
          // COA
          window.location.href = COA;
        } else if (chk >= 10.50 && chk < 11.50) {
          // OS
          window.location.href = OS;
        } else if (chk >= 11.50 && chk < 14.30) {
          // OS_LAB
          window.location.href = OS_LAB;
        } else {
          // REST
          window.location.href = REST;
        }
      }
  
      //Saturday
      if (day == "Sat") {
        // if (chk >= 7.30 && chk < 8.50) {
        //   // DBMS
        //   window.location.href = DBMS;
        // } else if (chk >= 8.50 && chk < 9.50) {
        //   // AFL
        //   window.location.href = AFL;
        // } else if (chk >= 9.50 && chk < 10.50) {
        //   // COA
        //   window.location.href = COA;
        // } else if (chk >= 10.50 && chk < 11.50) {
        //   // OS
        //   window.location.href = OS;
        // } else if (chk >= 11.50 && chk < 14.30) {
        //   // OS_LAB
        //   window.location.href = OS_LAB;
        // } else {
        //   // REST
          window.location.href = REST;
        // }
      }
      //Sunday
      if (day == "Sun") {
        // if (chk >= 7.30 && chk < 8.50) {
        //   // DBMS
        //   window.location.href = DBMS;
        // } else if (chk >= 8.50 && chk < 9.50) {
        //   // AFL
        //   window.location.href = AFL;
        // } else if (chk >= 9.50 && chk < 10.50) {
        //   // COA
        //   window.location.href = COA;
        // } else if (chk >= 10.50 && chk < 11.50) {
        //   // OS
        //   window.location.href = OS;
        // } else if (chk >= 11.50 && chk < 14.30) {
        //   // OS_LAB
        //   window.location.href = OS_LAB;
        // } else {
        //   // REST
          window.location.href = REST;
        // }
      }
      //Add more days here
      
    }, 10800);
  };
