export interface Profile {
  id: string;
  email: string;
  full_name: string;
  avatar_url: string;
  headline: string;
  location: string;
  created_at: string;
}

export interface Post {
  id: string;
  user_id: string;
  content: string;
  image_url?: string;
  likes: number;
  comments: number;
  created_at: string;
  profile: Profile;
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
  profile: Profile;
}