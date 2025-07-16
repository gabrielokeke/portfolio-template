
import GalleryAlbum from "@/components/GalleryAlbum";

const albums = [
  {
    title: "Texas Style Shoot",
    images: [
      { src: "/model1.jpg", title: "model1 Power" },
      { src: "/model2.jpg", title: "Beautiful Girl" },
      { src: "/model2.jpg", title: "Lovely Smile" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },
  {
    title: "Christmas Season",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Studio Drama",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Boho Bloom",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Runway Royalty",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Black & Bold",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Vintage Vibes",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Power Moves",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

    {
    title: "Urban Edge",
    images: [
      { src: "/model2.jpg", title: "Graceful Pose" },
      { src: "/model2.jpg", title: "Charming Look" },
      { src: "/model1.jpg", title: "Strength Symbol" },
      { src: "/model1.jpg", title: "Fist Power" },
    ],
  },

];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-40 bg-black py-16 px-4">
      <h1 className="text-center text-3xl font-bold mb-10 text-yellow-400">
        Your Name's Gallery
      </h1>

      {albums.map((album, i) => (
        <GalleryAlbum key={i} album={album} />
      ))}
    </div>
  );
}
