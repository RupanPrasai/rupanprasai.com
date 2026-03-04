const photoModules = import.meta.glob('/public/images/photos/*.webp', {
  eager: true,
  query: '?url',
  import: 'default'
}) as Record<string, string>;

const descriptorMap: Record<string, string> = {
  headshot: 'professional headshot',
  portrait: 'professional portrait',
  outdoor: 'outdoor portrait',
  formal: 'formal portrait',
  table: 'workspace portrait'
};

export interface PhotoItem {
  src: string;
  filename: string;
  descriptor: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

const toDescriptor = (filename: string) => {
  const normalized = filename.toLowerCase();
  const matchingKey = Object.keys(descriptorMap).find((key) => normalized.includes(key));

  return matchingKey ? descriptorMap[matchingKey] : 'photo';
};

const getFilenameFromKey = (key: string) => key.split('/').pop() ?? key;

const toPlainCaption = (text: string) => text.replace(/[—–]+/g, ' ').replace(/\s+/g, ' ').trim();

export const getPhotoItems = async (): Promise<PhotoItem[]> => {
  return Object.entries(photoModules)
    .map(([key, src]) => ({ filename: getFilenameFromKey(key), src: src.replace('/public', '') }))
    .sort((a, b) => a.filename.localeCompare(b.filename))
    .map(({ filename, src }) => {
      const descriptor = toDescriptor(filename);
      const caption = toPlainCaption(`Rupan Prasai ${descriptor}`);

      return {
        src,
        filename,
        descriptor,
        alt: `Rupan Prasai ${descriptor}`,
        caption,
        width: 1600,
        height: 1600
      };
    });
};

export const getRepresentativePhoto = (photos: PhotoItem[]): PhotoItem | undefined => {
  const preferred = photos.find((photo) => photo.filename.toLowerCase().includes('headshot'));
  return preferred ?? photos[0];
};
