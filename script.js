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