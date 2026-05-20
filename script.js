// 1. getElementById()
    const title = document.getElementById("title");

     // 2. querySelector()
    const box = document.querySelector("#box");

     // 3. addEventListener()
    document.getElementById("changeTextBtn")
    .addEventListener("click", function(){


         // 4. value property
        document.getElementById("inputText").value
      // 5. textContent
      box.textContent = text;
    });

     // 6. style property
    document.getElementById("changeColorBtn")
    .addEventListener("click", function(){

      box.style.backgroundColor = "orange";
    });

    // 7. hide element
    document.getElementById("hideBtn")
    .addEventListener("click", function(){

      box.style.display = "none";
    });

    // 8. show element
    document.getElementById("showBtn")
    .addEventListener("click", function(){

      box.style.display = "block";
    });