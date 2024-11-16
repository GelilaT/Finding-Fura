export type Blog = {
    id: number;
    title: string;
    content: string;
    image: string;
    active: boolean;
    author_name: string | null;
    author_title: string | null;
    additional_content: string | null;
    created_at: Date;
}