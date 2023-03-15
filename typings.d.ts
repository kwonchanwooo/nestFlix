export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	release_date: string;
	id: number;
	title: string;
	origin_language: string;
	original_title: string;
	video: boolean;
	vote_average: number;
	vote_counte: number;
	overview: string;
	popularity: number;
	poster_path: string;
}

export interface IndexProps {
	topRated: MOVIE[];
	sf: MOVIE[];
	drama: MOVIE[];
	fantasy: MOVIE[];
	thriller: MOVIE[];
	animation: MOVIE[];
}
