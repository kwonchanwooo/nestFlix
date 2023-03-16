import React from 'react';
import { Movie } from '@/typings';
import Image from 'next/image';
import { baseUrl } from '@/constants/movie';

interface Props {
	movie: Movie;
}
function Thumbnails({ movie }: Props) {
	return (
		<div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:min-w-[260px] md:hover:scale-[1.1]'>
			<Image
				src={`${baseUrl}w300${movie.backdrop_path}`}
				fill
				sizes='20vw'
				alt={movie.title}
				className='rounded-sm object-cover md:rounded'
			/>
		</div>
	);
}

export default Thumbnails;
