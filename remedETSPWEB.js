$(document).ready(function() {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokemon',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        displayPokeLists(data);
    },
    error: function (error) {
      console.error("Error: ", error);
    }
  });
  function displayPokeLists(pokeList) {
    let output = '';
    $.each(pokeList.results, function(index, poke) {
      let oldName = poke.name;
      let newName = oldName[0].toUpperCase() + oldName.slice(1);
      output += `
      <div class="col-sm-3 mb-4">
        <div class="card flex-fill border-primary">
          <div class="card-body shadow d-flex flex-column align-items-center">
            <h5 class="card-title">${newName}</h5>
            <a href="${poke.url}" class="btn btn-primary">Detail</a>
          </div>
        </div>
      </div>
      `;
    });
    $('#pokeList').append(output);
  }
});