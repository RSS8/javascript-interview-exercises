(() => {
  
    const companies = [
      {id: 1, name: 'Amazon', location: 'Seattle'},
      {id: 2, name: 'Apple', location: 'Cupertino'},
      {id: 3, name: 'Facebook', location: 'Menlo Park'},
      {id: 4, name: 'Google', location: 'Mountain View'},
      {id: 5, name: 'Leeroy', location: 'Sundsvall'},
      {id: 6, name: 'Tesla', location: 'Palo Alto'}   
    ]
    /** 
     * Försökte utgå ifrån det jag gjort i förra uppgiften. 
     * Men antingen så tog inte .checked rätt och även att den sista i listan var den som 
     * styrde alla rutorna. Ville helst köra på den tanken men fick ändra taktik och 
     * titta på Array.map() istället. 
     * Använder även Fragments helt nu för att inte det ska uppdateras hela tiden till html-sidan.
     * Nedan lite bakgrundsinfo som jag kollat.
     * Sparade inte alla länkar till exempel tyvärr. 
     * https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209
     * http://www.discovermeteor.com/blog/understanding-javascript-map/
     * https://www.w3schools.com/jsref/jsref_map.asp
    */

    companies.map((listItems) => 
    { 
      setup(listItems.location, listItems.id); 

    });
    
    var checkedArr = [];
    var location;
    var id;
    var listitem;
    var company;
    var location;
    var list = document.getElementById('list'); 
    var header = document.createElement('h2');
    var headerTxt = document.createTextNode("Välj stad nedan för att lista Företag");
    var fragment = document.createDocumentFragment();
    var setUpFragment;
    var populatelistFragment;

    // Sidans rubrik
    header.appendChild(headerTxt);
    header.appendChild(document.createElement('p'));
    document.body.insertBefore(header, list);
  
    /**1: Lägger in checkboxar och labels
     * 2: Lägger det till ett fragment
     * 3: Lägger till lyssnare på varje checkbox och functionen som aktiveras
     * vid click kollas och om den är true så sparas namnet på checkboxen i en array. Om den 
     * är falsk(unchecked) så tas det namnet bort från Arrayen.
     * 4: Kollar längd på <li> elementet och raderar inför varje gång companies arrayen
     * och arrayen som sparar checkboxnamnen ska jämföras. Annars skrivs ju Arrayen
     * ut flera gånger.
     * 5: Arrayerna jämförs och listan med de markerade städernas företag skapas och
     * skrivs ut. En eventlistener läggs även till vid klick i listan.
     * */
    function setup (location, id) {
      //1
      setUpFragment = document.createDocumentFragment();
      var input = document.createElement('input');
      var label = document.createElement('label');
      input.type = 'checkbox';
      input.name = location;
      input.id = id;    
      label.for = input.name;
      label.innerHTML = location;
      //2
      setUpFragment.appendChild(input);
      setUpFragment.appendChild(label);
      setUpFragment.appendChild(document.createElement('p'));
      //3
      input.addEventListener('click', () => {
        if (input.checked) {
          if (checkedArr.indexOf(location) < 0) {
            checkedArr.push(location);
          }
          } else if (input.checked===false){
          checkedArr.splice(checkedArr.indexOf(location), 1);  
        }
        populatelistFragment = document.createDocumentFragment();
        //4
        var listlenght = list.getElementsByTagName("li").length;
        for (var l = 0; l <listlenght; l++){
        list.removeChild(list.childNodes[0]); 
        }    
        //5         
            companies.map((listItems) => {
              for (var arr=0; arr < checkedArr.length; arr++) {
                if (listItems.location === checkedArr[arr]) {
                  var listitem = document.createElement("li");
                  var company = listItems.name+ " located at " ;
                  var location = listItems.location;
                  listitem.innerHTML= company + location;
                  populatelistFragment.appendChild(listitem);

                  listitem.addEventListener("click", function(event) {
                    alert("Clicked: " + this.innerText);
                 }, 
                 false);
                }
              }
            
              });
        
            list.appendChild(populatelistFragment);
      });
      document.body.insertBefore(setUpFragment, list);
    }
    
  })()
  