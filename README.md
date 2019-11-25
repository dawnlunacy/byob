# BYOB - Build Your Own Backend

This API is intended for music enthusiast. Find artists and their albums. If you cannot find information on artists or albums, feel free to make a contribution to help us share information about music with the world.

## API Endpoints

<table>
  <thead>
    <tr>
      <th>Purpose</th>
      <th>URL</th>
      <th>Verb</th>
      <th>Request Body</th>
      <th>Sample Success Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      Get All Artists 
    </th>
    <th>
      /api/v1/artists
    </th>
    <th>
    GET
    </th>
    <th>
    none
    </th>
    <th>
    Sample Response
    </th>
  </tr>
    <tr>
    <th>
      Get All Albums
    </th>
    <th>
      /api/v1/albums
    </th>
    <th>
    GET
    </th>
    <th>
    none
    </th>
    <th>
    Sample Response
    </th>
  </tr>
    <tr>
    <th>
      Get specific artist by name
    </th>
    <th>
      /api/v1/artists/:artistName
    </th>
    <th>
    GET
    </th>
    <th>
    none
    </th>
    <th>
    {
    "id": 205,
    "id_artist": "111480",
    "artist_name": "Tool",
    "website": "www.toolband.com",
    "created_at": "2019-11-23T18:12:43.090Z",
    "updated_at": "2019-11-23T18:12:43.090Z",
    "artist_genre": "Progressive Metal",
    "biography": "Tool is an American rock band from Los Angeles, California. Formed in 1990, the group's line-up has included drummer Danny Carey, guitarist Adam Jones, and vocalist Maynard James Keenan. Since 1995, Justin Chancellor has been the band's bassist, replacing their original bassist Paul D'Amour. Tool has won three Grammy Awards, performed worldwide tours, and produced albums topping the charts in several countries. The band emerged with a heavy metal sound on their first studio album Undertow in 1993, and later became a dominant act in the alternative metal movement with the release of their second effort, Ã†nima, in 1996. Their efforts to unify musical experimentation, visual arts, and a message of personal evolution continued with Lateralus (2001) and the most recent album 10,000 Days (2006), gaining the band critical acclaim and commercial success around the world.\nDue to Tool's incorporation of visual arts and relatively long and complex releases, the band is generally described as a style-transcending act and part of progressive rock and art rock. The relationship between the band and today's music industry is ambivalent, at times marked by censorship and the band members' insistence on privacy."
}
    </th>
  </tr>
      <tr>
    <th>
      Get specific album by name
    </th>
    <th>
      /api/v1/albums/:albumName
    </th>
    <th>
    GET
    </th>
    <th>
    none
    </th>
    <th>
    {
    "id": 8,
    "id_artist": "111480",
    "album_name": "Fear Inoculum",
    "year_released": 2019,
    "album_artist": "Tool",
    "album_genre": "Progressive Metal",
    "created_at": "2019-11-23T18:12:43.801Z",
    "updated_at": "2019-11-23T18:12:43.801Z"
    }
    </th>
  </tr>
    </tr>
      <tr>
    <th>
      Get artist's entire album information  
    </th>
    <th>
      /api/v1/albums/artist/:artistName
    </th>
    <th>
    GET
    </th>
    <th>
    none
    </th>
    <th>
    [
    {
        "id": 1,
        "id_artist": "111480",
        "album_name": "Lateralus",
        "year_released": 2001,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.709Z",
        "updated_at": "2019-11-23T18:12:43.709Z"
    },
    {
        "id": 2,
        "id_artist": "111480",
        "album_name": "Undertow",
        "year_released": 1993,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.743Z",
        "updated_at": "2019-11-23T18:12:43.743Z"
    },
    {
        "id": 3,
        "id_artist": "111480",
        "album_name": "10,000 Days",
        "year_released": 2006,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.745Z",
        "updated_at": "2019-11-23T18:12:43.745Z"
    },
    {
        "id": 4,
        "id_artist": "111480",
        "album_name": "Ænima",
        "year_released": 1996,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.745Z",
        "updated_at": "2019-11-23T18:12:43.745Z"
    },
    {
        "id": 5,
        "id_artist": "111480",
        "album_name": "Opiate",
        "year_released": 1992,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.754Z",
        "updated_at": "2019-11-23T18:12:43.754Z"
    },
    {
        "id": 6,
        "id_artist": "111480",
        "album_name": "Salival",
        "year_released": 2000,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.768Z",
        "updated_at": "2019-11-23T18:12:43.768Z"
    },
    {
        "id": 7,
        "id_artist": "111480",
        "album_name": "72826",
        "year_released": 1991,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.773Z",
        "updated_at": "2019-11-23T18:12:43.773Z"
    },
    {
        "id": 8,
        "id_artist": "111480",
        "album_name": "Fear Inoculum",
        "year_released": 2019,
        "album_artist": "Tool",
        "album_genre": "Progressive Metal",
        "created_at": "2019-11-23T18:12:43.801Z",
        "updated_at": "2019-11-23T18:12:43.801Z"
    }
]
    </th>
  </tr>
      </tr>
      <tr>
    <th>
      Post an artist
    </th>
    <th>
      /api/v1/artists
    </th>
    <th>
    POST
    </th>
    <th>
    Requires: 
    {
      idArtist: (empty String)
      artistName: (String),
      artistGenre: (String),
      website:(String),
      bigraphy: (String)
    }
    </th>
    <th>
    Sample Response
    </th>
  </tr>
        </tr>
      <tr>
    <th>
      Post an album
    </th>
    <th>
      /api/v1/albums
    </th>
    <th>
    POST
    </th>
    <th>
    Requires: 
    {
      idArtist: (empty String)
      albumName: (String),
      Year Released : (String or Integer),
      albumArtist :(String),
      albumGenre: (String)
    }
    </th>
    <th>
    Sample Response
    </th>
  </tr>
        <tr>
    <th>
      Delete an artist and their albums
    </th>
    <th>
      /api/v1/artist/:artistName
    </th>
    <th>
    DELETE
    </th>
    <th>
    none
    </th>
    <th>
    Sample Response
    </th>
  </tr>
</table>


