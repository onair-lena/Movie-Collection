export type Films = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: { name: string }[];
  budget: string;
  revenue: string;
  id: number;
  production_countries: { name: string }[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  tagline: string;
};

export type Cast = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type Crew = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type CastAndStuff = {
  cast: Cast[];
  crew: Crew[];
  adult: boolean;
};

export type Videos = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: Date;
  site: string;
  size: number;
  type: string;
};

export type Reviews = {
  id: number;
  page: number;
  results: {
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string;
      rating: number;
    };
    content: string;
    created_at: Date;
    id: string;
    updated_at: Date;
    url: string;
  }[];
  total_pages: number;
  total_results: number;
};
