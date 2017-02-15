var bandcamp = require('../lib/index');

var albumUrl = 'http://musique.coeurdepirate.com/album/blonde';
bandcamp.getAlbumFans(albumUrl, function(error, albumFans) {
  if (error) {
    console.log(error);
  } else {
    console.log(albumFans);
  }
});