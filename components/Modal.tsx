import { modalState, movieState } from '@/atoms/globalAtom';
import Image from 'next/image';
import { useRecoilState, useRecoilValue } from 'recoil';
import { baseUrl } from '@/constants/movie';
import { useRef } from 'react';

function Modal() {
	const [ShowModal, setShowModal] = useRecoilState(modalState);
	const Movie = useRecoilValue(movieState);
	const ref = useRef<any>(null);

	console.log(Movie);

	return (
		<aside className='fixed w-full h-[100vh] top-0 left-0 z-[10] bg-[rgba(0,0,0,.9)] p-10 flex items-center justify-center'>
			<article className='w-[600px] h-[100%]'>
				<div className='relative w-full h-[60%]'>
					<Image
						src={`${baseUrl}w780${Movie?.poster_path}`}
						fill
						className='object-contain'
						onLoadingComplete={() => ref.current.remove()}
						alt={`${Movie?.name || Movie?.title}`}
					/>
					<div
						className='w-[40px] h-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[4px] border-solid border-[orange] rounded-[50%] border-l-[transparent] animate-ani-rotation'
						ref={ref}
					></div>
				</div>

				<div>
					<h2 className='text-white text-4xl mb-5 text-center mt-3'>{Movie?.name || Movie?.title}</h2>
					<p>{Movie?.overview}</p>
				</div>
			</article>
			<span className='absolute top-10 right-10 text-[16px] text-white cursor-pointer' onClick={() => setShowModal(false)}>
				close
			</span>
		</aside>
	);
}

export default Modal;
