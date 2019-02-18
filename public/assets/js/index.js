$(`#submit`).on(`click`, function() {
  let newBurger = $(`#newBurger`).val();
  if (newBurger === "") {
    alert(`You must type a burger.`);
  } else {
    $.post(`/new`, { newBurger }).then(function(result) {});
  }
});

$(`#uneaten`).on(`click`, `button`, function() {
  if (
    $(this)
      .siblings(`input`)
      .val() === ""
  ) {
    alert("Enter your name so we know who ate it.");
  } else {
    let eaten = {
      id: $(this).attr(`id`),
      name: $(this)
        .siblings(`input`)
        .val()
    };
    $.ajax({
      url: `/update`,
      type: `PUT`,
      data: eaten
    }).then(function(result) {});
  }
});
