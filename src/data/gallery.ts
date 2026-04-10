export interface GalleryItem {
  id: number;
  title: string;
  src: string;
  alt: string;
  category: string;
}

function createGallerySection(
  globResult: Record<string, { default: string }>,
  baseTitle: string,
  category: string,
  startIndex = 0
): GalleryItem[] {
  return Object.entries(globResult)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([_, module], index) => {
      const id = startIndex + index + 1;

      return {
        id,
        title: baseTitle,
        src: module.default,
        alt: `${baseTitle} – immagine ${index + 1}`,
        category,
      };
    });
}

//kickoff meeting
const kickoffImages = import.meta.glob(
  "../assets/img/gallery/kickoff_2025_11_14/*.webp",
  { eager: true }
) as Record<string, { default: string }>;

const kickoffGallery = createGallerySection(
  kickoffImages,
  "Riunione di apertura | 14/11/2025",
  "kickoff"
);

// altre immagini future da workshop, test, ecc.
// const workshopImages = import.meta.glob(...)

export const galleryItems: GalleryItem[] = [
  ...kickoffGallery,
  // ...workshopGallery
];