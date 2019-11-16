// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(song) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/songs",
      data: JSON.stringify(song)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/songs",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/songs/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    console.log(data);
    var $examples = data.map(function(song) {
      var $artist = $("<a>")
      .text(song.artist)
      .attr("href", "/song/" + song.id);

      var $track = $("<a>")
      .text(song.track)
      .attr("href", "/song/" + song.id);
      var $summary = $("<a>")
      .text(song.track_summary);

      var $img = $("<img>")
      .attr({class:"float-left",src:song.track_image});

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": song.id
        })
        .append($img).append($artist).append('<br>').append($track).append('<br>').append($summary);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("x");

        $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
  var search_artist = $exampleText.val().trim();
  var search_track = $exampleDescription.val().trim();
  console.log(search_artist);
  console.log(search_track);
  // var song = {
  //   artist: $exampleText.val().trim(),
  //   track: $exampleDescription.val().trim(),
  // }
  if (!(search_artist && search_track)) {
    alert("You must enter an example text and description!");
    return;
  }else{
  var api_key = "6336c0362dff24693fdbf7412aa57a22";
  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=" + api_key + "&artist=" + search_artist + "&track=" + search_track +"&format=json";
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response){
      console.log(response);
      var results = response.track;
      var song = {
        artist: results.album.artist,
        track: results.album.title,
        track_image: results.album.image[3]["#text"],
        track_published: results.wiki.published,
        track_summary: results.wiki.summary
      };
    
      API.saveExample(song).then(function() {
        refreshExamples();
      });
    
      $exampleText.val("");
      $exampleDescription.val("");
    });
  };

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);
