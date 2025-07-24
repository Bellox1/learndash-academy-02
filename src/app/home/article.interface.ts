export interface ISection {
  title: string;
  topicCount: number;
  isLocked: boolean;
  topics?: { title: string }[];
}

export interface IArticle {
  id: number;
  category: string;
  title: string;
  date: string;
  price: string;
  description1: string;
  image: string;
  description2: string;
  keyConcepts: string[];
  sections: ISection[];
} 