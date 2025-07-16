"use client"

interface GalleryItemProps {
  src: string
  title: string
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, title }) => {
  return (
    <div className="text-center rounded-lg p-3 bg-[#111] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <img
        src={src}
        alt={title}
        className="w-full h-40 object-contain rounded-md mx-auto"
      />
      <p className="mt-2 text-sm font-semibold text-gray-200">{title}</p>
    </div>
  )
}

export default GalleryItem
