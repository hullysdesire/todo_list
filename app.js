// app todo_list
(() => { 
    // variables d'état
    let toDoListArray = [];
    // variables de l'interface utilisateur
    const form = document.querySelector(".form"); 
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList"); 
  
    // écouteurs d'événements
    form.addEventListener('submit', e => {
      // empêcher le comportement par défaut - Rechargement de la page
      e.preventDefault();
      // attribuer un ID unique à l'élément
      let itemId = String(Date.now());
      // obtenir/assigner la valeur de l'entrée
      let toDoItem = input.value;
      // passer l'ID et l'élément aux fonctions
      addItemToDOM(itemId , toDoItem);
      addItemToArray(itemId, toDoItem);
      // vider la boîte d'entrée. (c'est le comportement par défaut mais nous l'avons supprimé)
      input.value = '';
    });
    
    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id')
      if (!id) return // l'utilisateur a cliqué sur autre chose      
      // passer l'id aux fonctions
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });
    
    // fonctions 
    function addItemToDOM(itemId, toDoItem) {    
      // créer un élément li
      const li = document.createElement('li')
      li.setAttribute("data-id", itemId);
      // ajouter le texte de toDoItem à li
      li.innerText = toDoItem
      // ajouter li au DOM
      ul.appendChild(li);
    }
    
    function addItemToArray(itemId, toDoItem) {
      // ajouter l'élément au tableau comme un objet avec un ID pour pouvoir le trouver et le supprimer plus tard
      toDoListArray.push({ itemId, toDoItem});
      console.log(toDoListArray)
    }
    
    function removeItemFromDOM(id) {
      // obtenir l'élément de liste par ID de données
      var li = document.querySelector('[data-id="' + id + '"]');
      // supprimer l'élément de liste
      ul.removeChild(li);
    }
    
    function removeItemFromArray(id) {
      // créer un nouveau toDoListArray avec tous les li qui ne correspondent pas à l'ID
      toDoListArray = toDoListArray.filter(item => item.itemId !== id);
      console.log(toDoListArray);
    }
    
  })();