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
   * Då större mängd data ska processas tar det längre tid och det jag gjorde i första uppgifterna
   * är mer tidsödande. Om man använder appendChild och så får man ett smidigare
   * och snabbare flöde. 
   * Nedan länk för bakgrund till min ide.
   * Man märker ju mer skillnaden när datamängden är större.
   * https://coderwall.com/p/o9ws2g/why-you-should-always-append-dom-elements-using-documentfragments
  var rows= "";
  var list = document.getElementById('list');

  for ( a =0; a< companies.length; a++){
      rows += '<li> ' + companies[a].name + " located at " + companies[a].location+ '</li>'
  };
  list.innerHTML = rows;
  var listrow = document.getElementById('list').getElementsByTagName('li');
  for (var lr = 0; lr<listrow.length; lr++){
      listrow[lr].addEventListener('click', function (event){
          alert("Clicked: " + this.innerText);
      })
     
  }
*/
console.time('Function #1');
    var popupfragment = document.createDocumentFragment();

    var list = document.getElementById("list");
    for (var a = 0; a < companies.length; a++) {
        var listitem = document.createElement("li");
        var company = companies[a].name+ " located at " ;
        var location = companies[a].location;
        listitem.innerHTML= company + location;
        list.appendChild(listitem);

        listitem.addEventListener("click", function(event) {
           alert("Clicked: " + this.innerText);
        }, 
        false);
    
    }
console.timeEnd('Function #1')
})()
