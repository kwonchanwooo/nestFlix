export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	release_date: string;
	id: number;
	title: string;
	original_language: string;
	original_title: string;
	video: boolean;
	vote_average: number;
	vout_counte: number;
	overview: string;
	popularity: number;
	poster_path: string;
}

export interface TV {
	backdrop_path: string;
	genre_ids: number[];
	first_air_date: string;
	id: number;
	name: string;
	original_country: string[];
	original_language: string;
	original_name: string;
	video: boolean;
	vote_average: number;
	vout_count: number;
	overview: string;
	popularity: number;
	poster_path: string;
}
