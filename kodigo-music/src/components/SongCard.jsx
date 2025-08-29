export default function SongCard({ song }) {
  return (
    <div className="song-card">
        {/* Imagen de la portada del album de la cancion */}
      <img src={song.image} alt={song.name} className="song-cover" />
      <h3>{song.name}</h3> {/* Nombre de la cancion*/}
      <p>{song.artist}</p>{/* Artista de la cancion*/}

       {/* Si la canción tiene preview, se muestra el reproductor de audio */}
      {song.audio && (
        <audio controls src={song.audio} className="song-audio" />
      )}
    </div>
  );
}
