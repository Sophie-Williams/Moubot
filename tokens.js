//store the endpoint private key
//in this case, we're picking up premier league fixtures for Chelsea FC.
var resultsEndpoint = 'http://api.football-data.org/alpha/teams/61/fixtures';
var resultsToken = 'YOUR-OWN-TOKEN';
//make this available to the server.
exports.resultsToken = resultsToken;
exports.resultsEndpoint = resultsEndpoint;