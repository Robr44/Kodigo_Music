import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";

// Estados a mostrar segun el proceso de la exploracion de canciones
export default function ExploreView() {
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Función para buscar canciones en la API de iTunes
  const fetchSongs = async (term) => {
    if (!term.trim()) return;
    setLoading(true); // Estado de cargando
    setMsg("");

    try {
      // Llamar a la API de iTunes
      const res = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&media=music&limit=12`
      );
      const data = await res.json();

      const mapped = (data.results || [])
        .map((r) => ({
          id: r.trackId, // Id de cancion
          name: r.trackName, // Nombe cancion
          artist: r.artistName, // Nombe artista
          image: r.artworkUrl100.replace(/100x100bb/, "300x300bb"),
          audio: r.previewUrl, // Link de audio
        }))
        .filter((s) => s.audio); // Filtrar canciones

      setSongs(mapped); // Guardar canciones en estado

      // Mostrar mensaje si no se encuentran canciones
      if (mapped.length === 0) setMsg("No se encontraron canciones.");
    } catch (err) {
      console.error(err);
      // Si hay problemas de red o de la Api mostrar este 
      setMsg("No se pudo buscar. Intenta de nuevo.");
    } finally {
      setLoading(false); // quitar cargando al terminar
    }
  };

  // Cuando carga el componente se realiza una busqueda inicial que se mostrara
  useEffect(() => {
    fetchSongs("Kevin Kaarl");
  }, []);

  // Manejar envio de la busqueda
  const onSubmit = (e) => {
    e.preventDefault();
    fetchSongs(query);
  };

  return (
    <div className="page">
      <h2>Explora tu Música Preferida</h2>

      {/* Barra de búsqueda de canciones*/}
      <form className="search-bar" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar artista o canción..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {/* Mensaje del estado de la busqueda como errores o no se encontraron resultados */}
      {msg && <p className="status">{msg}</p>}

      {/* Mostrar las canciones registradas usando un grid */}
      <div className="songs-grid">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} /> // Agregar una tarjeta por cada cancion
        ))}
      </div>
    </div>
  );
}
