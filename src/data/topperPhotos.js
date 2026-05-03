// To add a new topper: drop their photo in public/toppers/ and add one line here.
// filename must match exactly what's in public/toppers/ (case-sensitive on Linux).
export const topperPhotos = [
  { filename: 'Nirmal-Mishra.png',     name: 'Nirmal Mishra',     percentage: '95.40%', board: 'SSC', year: '2024-25' },
  { filename: 'Parth-Jaiswal.png',     name: 'Parth Jaiswal',     percentage: '94.20%', board: 'SSC', year: '2024-25' },
  { filename: 'Laxmi-Pilaya.png',      name: 'Laxmi Paliya',      percentage: '93.60%', board: 'SSC', year: '2024-25' },
  { filename: 'Aditi-Sakat.png',       name: 'Aditi Sakat',       percentage: '92.40%', board: 'SSC', year: '2024-25' },
  { filename: 'Sanchit-Tiwari.png',    name: 'Sanchit Tiwari',    percentage: '92.40%', board: 'SSC', year: '2024-25' },
  { filename: 'abhishek-khansuli.png', name: 'Abhishek Khansuli', percentage: '92.40%', board: 'SSC', year: '2024-25' },
  { filename: 'Anjali-Balotiya.png',   name: 'Anjali Balotiya',   percentage: '91.80%', board: 'SSC', year: '2024-25' },
  { filename: 'Yogita-Phulwaria.png',  name: 'Yogita Phulwariya', percentage: '91.60%', board: 'SSC', year: '2024-25' },
  { filename: 'Kartik-Mahendra.png',   name: 'Kartik Mahendra',   percentage: '91.20%', board: 'SSC', year: '2024-25' },
  { filename: 'Sadhana-Jajoriya.png',  name: 'Sadhana Jajoriya',  percentage: '90.60%', board: 'SSC', year: '2024-25' },
  { filename: 'Rajeev-Tiwari.png',     name: 'Rajeev Tiwari',     percentage: '90.40%', board: 'SSC', year: '2024-25' },
  { filename: 'Harimohan-Gupta.png',   name: 'Harimohan Gupta',   percentage: '90.00%', board: 'SSC', year: '2024-25' },
  { filename: 'Jitesh-Mourya.png',     name: 'Jitesh Mourya',     percentage: '90.00%', board: 'SSC', year: '2024-25' },
];

// Lookup by name (case-insensitive) → photo URL
const _lookup = new Map(topperPhotos.map(t => [t.name.toLowerCase(), t.filename]));

export function getTopperPhoto(name) {
  const filename = _lookup.get(name.toLowerCase());
  return filename ? `/toppers/${filename}` : null;
}
