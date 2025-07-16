"use client"

import GalleryItem from "@/components/GalleryItem"

const images = [
  { src: "/fist.jpg", title: "Fist Power" },
  { src: "/girl.jpg", title: "Beautiful Girl" },
  { src: "/girl.jpg", title: "Lovely Smile" },
  { src: "/girl.jpg", title: "Graceful Pose" },
  { src: "/girl.jpg", title: "Charming Look" },
  { src: "/girl.jpg", title: "Sunshine Mood" },
  { src: "/girl.jpg", title: "Casual Style" },
  { src: "/fist.jpg", title: "Strength Symbol" },
  { src: "/fist.jpg", title: "Determined" },
  { src: "/fist.jpg", title: "Power Move" },
  { src: "/fist.jpg", title: "Bold Statement" },
  { src: "/fist.jpg", title: "Unstoppable" },
  { src: "/fist.jpg", title: "Fearless" },
  { src: "/fist.jpg", title: "Confident" },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-40 bg-black py-16 px-4">
      <h1 className="text-center text-3xl font-bold mb-10 text-yellow-400">
        Jannie&apos;s Gallery
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <GalleryItem key={i} src={img.src} title={img.title} />
        ))}
      </div>
    </div>
  )
}
