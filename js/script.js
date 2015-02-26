
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var street = $('#street').val();
    var city = $('#city').val();
    var address = street.trim() + ', ' + city.trim();
    
    $greeting.text('So you want to live at ' + address + '?');

    var imgTag = '<img class="bgimg" src=https://maps.googleapis.com/maps/api/streetview?size=600x400&location="'
        + address + '">';
    $body.append(imgTag);

    var nytURL = 'http://api.nytimes.com/svc/search/v2/articlesearch.response-format?'
        + 'q=' + city + '&api-key=9034b285a2f81ada9edfafcd9df4488a:2:71280081';

    // anonymous function will be run when response returns from server
    $.getJSON(nytURL, function(data) {
        console.log(data);
    });

    // var articleItem = '<li class="article">'
    //     + '<a href="' + articleURL + '">' + linkText + '</a>'
    //     + '<p>' + articleText + '</p>';
    // $nytElem.append(articleItem);

    // once response comes back, figure out how to parse it and display it to the page

    return false;
};

$('#form-container').submit(loadData);

//loadData();
