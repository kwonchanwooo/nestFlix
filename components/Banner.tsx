import { Movie } from '@/typings';
import { useState, useEffect } from 'react';

interface Props {
	original: Movie[];
}
function Banner({ original }: Props) {
	const [movie, setMovie] = useState<Movie | null>(null);
	useEffect(() => {
		setMovie(original[Math.floor(Math.random() * 19)]);
	}, [original]);
	console.log(movie);
	return <div></div>;
}

export default Banner;
