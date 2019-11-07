/* playlist can only store 1 song per artist as cannot store duplicate keys */

var playlist = new Object({["Deerhunter"]: "Nothing Ever Happened"}); 

updatePlaylist(playlist, "Radiohead", "Idioteque");
var newList = updatePlaylist(playlist, "Angels of Light", "Not Here/Not Now");

console.log("Original: " + playlist["Angels of Light"]);
console.log("     New: " + newList["Angels of Light"]);

removeFromPlaylist(newList, "Radiohead");
console.log(playlist); 
console.log(newList); 

function updatePlaylist(playlistObject, artistName, songName) {
  playlistObject[artistName] = songName;
  return playlistObject;
}

function removeFromPlaylist(playlistObject, artistName) {
  delete playlistObject[artistName]; 
  return playlistObject; 
}