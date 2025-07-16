"use client";

import GalleryItem from "./GalleryItem";

interface Album {
  title: string;
  images: { src: string; title: string }[];
}

interface GalleryAlbumProps {
  album: Album;
}

const GalleryAlbum: React.FC<GalleryAlbumProps> = ({ album }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6">{album.title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {album.images.map((img, i) => (
          <GalleryItem key={i} src={img.src} title={img.title} />
        ))}
      </div>
    </section>
  );
};

export default GalleryAlbum;
