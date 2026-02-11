export type PortfolioCategory = "all" | "board-books" | "picture-books" | "alphabets" | "wimmelbuch";

export interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: Exclude<PortfolioCategory, "all">;
  year: number;
}

export const PORTFOLIO_TABS: { value: PortfolioCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "board-books", label: "Board Books" },
  { value: "picture-books", label: "Picture Books" },
  { value: "alphabets", label: "Counting & ABCs" },
  { value: "wimmelbuch", label: "Wimmelbuch" },
];

export const portfolioImages: PortfolioImage[] = [
  { id: 1, src: "/images/portfolio/01.jpg", alt: "What Makes Dog Happy — touch and feel board book", width: 1920, height: 3346, category: "board-books", year: 2022 },
  { id: 2, src: "/images/portfolio/02.jpg", alt: "Animal train with balloons", width: 1920, height: 1557, category: "picture-books", year: 2022 },
  { id: 3, src: "/images/portfolio/03.jpg", alt: "Peek-a-boo board book spread — birdie and kitten", width: 1576, height: 900, category: "board-books", year: 2022 },
  { id: 4, src: "/images/portfolio/04.jpg", alt: "Peek-a-Boo Baby — color-changing bath book", width: 800, height: 956, category: "board-books", year: 2022 },
  { id: 5, src: "/images/portfolio/05.png", alt: "Farm shaped sound book spread", width: 1920, height: 1058, category: "board-books", year: 2023 },
  { id: 6, src: "/images/portfolio/06.jpg", alt: "Potty training bathroom scene", width: 3840, height: 1920, category: "picture-books", year: 2023 },
  { id: 7, src: "/images/portfolio/07.jpg", alt: "Bunny collecting Easter eggs", width: 1920, height: 1557, category: "picture-books", year: 2023 },
  { id: 8, src: "/images/portfolio/08.jpg", alt: "Lift-The-Flap Easter book cover", width: 1920, height: 1920, category: "board-books", year: 2023 },
  { id: 9, src: "/images/portfolio/09.jpg", alt: "Jungle party busy scene", width: 1920, height: 1557, category: "wimmelbuch", year: 2023 },
  { id: 10, src: "/images/portfolio/10.jpg", alt: "K is for kites, L is for learning to ride a bike", width: 1920, height: 960, category: "alphabets", year: 2023 },
  { id: 11, src: "/images/portfolio/11.jpg", alt: "Egyptian museum busy scene", width: 3840, height: 3114, category: "wimmelbuch", year: 2023 },
  { id: 12, src: "/images/portfolio/12.jpg", alt: "Dinosaur soccer game", width: 1920, height: 1557, category: "wimmelbuch", year: 2023 },
  { id: 13, src: "/images/portfolio/13.jpg", alt: "Mouse character poses", width: 1920, height: 1555, category: "picture-books", year: 2024 },
  { id: 14, src: "/images/portfolio/14.jpg", alt: "Christmas scene — animals decorating the tree", width: 1920, height: 1557, category: "picture-books", year: 2024 },
  { id: 15, src: "/images/portfolio/15.jpg", alt: "ABC of Activities with Tommy and Purr — book cover", width: 1170, height: 1170, category: "alphabets", year: 2024 },
  { id: 16, src: "/images/portfolio/16.jpg", alt: "Green city playground busy scene", width: 1920, height: 1536, category: "wimmelbuch", year: 2024 },
  { id: 17, src: "/images/portfolio/17.jpg", alt: "Little Red Riding Hood in the forest", width: 3840, height: 3114, category: "picture-books", year: 2024 },
  { id: 18, src: "/images/portfolio/18.jpg", alt: "Cute bat hanging from a branch", width: 1800, height: 1800, category: "picture-books", year: 2024 },
  { id: 19, src: "/images/portfolio/19.jpg", alt: "Kids fishing on a boat with swan and underwater life", width: 1920, height: 1920, category: "picture-books", year: 2024 },
  { id: 20, src: "/images/portfolio/20.jpg", alt: "Boy in colorful patterned trees", width: 1920, height: 1920, category: "picture-books", year: 2024 },
  { id: 21, src: "/images/portfolio/21.jpg", alt: "8 worms — counting page", width: 1920, height: 1920, category: "alphabets", year: 2024 },
  { id: 22, src: "/images/portfolio/22.jpg", alt: "Mama and baby giraffe in the jungle", width: 1920, height: 1920, category: "picture-books", year: 2024 },
  { id: 23, src: "/images/portfolio/23.png", alt: "U is for unicorn costume — alphabet page", width: 1080, height: 1080, category: "alphabets", year: 2024 },
  { id: 24, src: "/images/portfolio/24.jpg", alt: "Girl and bear — character studies", width: 3840, height: 3840, category: "picture-books", year: 2025 },
  { id: 25, src: "/images/portfolio/25.jpg", alt: "Sky — girl looking up at clouds", width: 1920, height: 1920, category: "alphabets", year: 2025 },
  { id: 26, src: "/images/portfolio/26.jpg", alt: "Children lying in a flower field", width: 1920, height: 1920, category: "picture-books", year: 2025 },
  { id: 27, src: "/images/portfolio/27.jpg", alt: "Zoo visit busy scene", width: 1920, height: 1407, category: "wimmelbuch", year: 2025 },
  { id: 28, src: "/images/portfolio/28.jpg", alt: "Rainy day in town — animals on the street", width: 1920, height: 1920, category: "picture-books", year: 2025 },
  { id: 29, src: "/images/portfolio/29.jpg", alt: "7 birds — counting page", width: 1920, height: 1920, category: "alphabets", year: 2025 },
  { id: 30, src: "/images/portfolio/30.png", alt: "Rocking horse with alphabet blocks", width: 1080, height: 1080, category: "picture-books", year: 2025 },
  { id: 31, src: "/images/portfolio/31.jpg", alt: "London city busy scene", width: 1920, height: 1557, category: "wimmelbuch", year: 2025 },
  { id: 32, src: "/images/portfolio/32.jpg", alt: "1 Snappy Birthday — crocodile card", width: 1500, height: 2100, category: "alphabets", year: 2025 },
  { id: 33, src: "/images/portfolio/33.jpg", alt: "2 Happy Birthday — elephant card", width: 1500, height: 2100, category: "alphabets", year: 2025 },
  { id: 34, src: "/images/portfolio/34.jpg", alt: "3 Happy Birthday — turtle card", width: 1500, height: 2100, category: "alphabets", year: 2025 },
  { id: 35, src: "/images/portfolio/35.jpg", alt: "4 Happy Birthday — tiger card", width: 1500, height: 2100, category: "alphabets", year: 2025 },
  { id: 36, src: "/images/portfolio/36.jpg", alt: "5 Happy Birthday — zebra card", width: 1500, height: 2100, category: "alphabets", year: 2025 },
  { id: 37, src: "/images/portfolio/37.jpg", alt: "Leila — girl holding a dinosaur toy", width: 1500, height: 2100, category: "picture-books", year: 2025 },
];

/** Get unique years from portfolio data, sorted newest first */
export function getPortfolioYears(): number[] {
  const years = [...new Set(portfolioImages.map((img) => img.year))];
  return years.sort((a, b) => b - a);
}
