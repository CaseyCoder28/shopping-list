//Requirements
// * In terms of user experience, your shopping list app must allow users to:

// * permanently remove items from the list

// Additionally:

// Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().

// * enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
$(`#js-shopping-list-form`).submit(function(event){
  event.preventDefault();
  let itemName = $(`#shopping-list-entry`).val();
  let template = `
<li>
  <span class="shopping-item">${itemName}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>` 

  $(`.shopping-list`).append(template)
  $(`.shopping-item-toggle`).click(function(event){
    $(this).closest(`li`).children(`span`).toggleClass(`shopping-item__checked`);
  });
});


// * check and uncheck items on the list by clicking the "Check" button
$(`.shopping-item-toggle`).click(function(event){
  $(this).closest(`li`).children(`span`).toggleClass(`shopping-item__checked`);
  
 if ($(this).closest(`li`).children(`span`).hasClass(`shopping-item__checked`)){
  $(this).children(`span`).text(`uncheck`) 
 }
 else{
  $(this).children(`span`).text(`check`)
 }
});


//* permanently remove items from the list












