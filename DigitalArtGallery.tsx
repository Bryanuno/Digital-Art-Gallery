import React, { useState } from "react";

type Artwork = { url: string; title: string; artist: string; };

const initialGallery: Artwork[] = [
  { url: "https://images.unsplash.com/photo-1464983953574-0892a716854b", title: "Mountain Path", artist: "John Doe" },
  { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", title: "Sunset Lake", artist: "Jane Smith" },
  { url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308", title: "Abstract", artist: "Alex Ray" }
];

export default function DigitalArtGallery() {
  const [gallery, setGallery] = useState<Artwork[]>(initialGallery);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  function addArtwork(e: React.FormEvent) {
    e.preventDefault();
    if (!artist.trim() || !title.trim() || !url.trim()) return;
    setGallery([{ url, title, artist }, ...gallery]);
    setArtist(""); setTitle(""); setUrl("");
  }

  return (
    <div style={{ margin: 40, fontFamily: "Arial" }}>
      <h1>Digital Art Gallery</h1>
      <form onSubmit={addArtwork}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <input value={artist} onChange={e => setArtist(e.target.value)} placeholder="Artist" required />
        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="Image URL" required />
        <button>Add Artwork</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginTop: 32 }}>
        {gallery.map((art, idx) => (
          <div key={idx} style={{ width: 240, background: "#f7f7f7", borderRadius: 10, padding: 10 }}>
            <img src={art.url} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8 }} alt={art.title} />
            <h3>{art.title}</h3>
            <p>by <i>{art.artist}</i></p>
          </div>
        ))}
      </div>
    </div>
  );
}