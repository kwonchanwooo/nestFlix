import Header from '@/components/Header';
import type { NextPage } from 'next';
import Head from 'next/head';
import requests from '@/utils/requests';
import { Movie } from '@/typings';

const Home: NextPage = (props) => {
	console.log(props);
	return (
		<div className='relative h-screen bg-gradient-to-b from-[#333] to-[#141414]'>
			<Head>
				<title>HELLOFLIX</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<main>
				<section></section>
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [top, sf, drama, fantasy, thriller] = await Promise.all([
		fetch(requests.top).then((res) => res.json()),
		fetch(requests.sf).then((res) => res.json()),
		fetch(requests.drama).then((res) => res.json()),
		fetch(requests.fantasy).then((res) => res.json()),
		fetch(requests.thriller).then((res) => res.json()),
	]);

	return {
		props: {
			topRated: top.results,
			sf: sf.results,
			drama: drama.results,
			fantasy: fantasy.results,
			thriller: thriller.results,
		},
	};
};
