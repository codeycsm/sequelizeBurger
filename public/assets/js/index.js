$(`#submit`).on(`click`, function() {
  let newBurger = $(`#newBurger`).val();
  $.post(`/new`, { newBurger }).then(function(result) {
    console.log(result);
  });
});

$(`#uneaten`).on(`click`, `button`, function() {
  let id = $(this).attr(`id`);
  $.ajax({
    url: `/update`,
    type: `PUT`,
    data: { id }
  }).then(function(result) {
    console.log(result);
  });
});
