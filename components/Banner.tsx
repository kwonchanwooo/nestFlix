import { baseUrl } from '@/constants/movie';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Movie } from '@/typings';

interface Props {
	original: Movie[];
}

function Banner({ original }: Props) {
	const [Movie, setMovie] = useState<Movie | null>(null);

	useEffect(() => {
		setMovie(original[Math.floor(Math.random() * original.length - 1)]);
	}, [original]);

	console.log(Movie);

	return (
		<section>
			<div>
				<Image src={`${baseUrl}${Movie?.backdrop_path}`} alt={`${Movie?.title}`} fill className='object-cover' />
			</div>
		</section>
	);
}

export default Banner;
