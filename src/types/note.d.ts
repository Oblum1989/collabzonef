export interface NoteProps {
  id: number;
  title: string;
  content: string;
  url: string;
  created_at: string;
}

export interface CategoryProps {
  id: number;
  name: string;
}