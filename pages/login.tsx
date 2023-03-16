import Head from 'next/head';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
	email: string;
	password: string;
}
function login() {
	const [login, setLogin] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const join: SubmitHandler<Inputs> = async ({ email, password }) => {
		console.log('email', email);
		console.log('pw', password);
		if (login) {
		} else {
		}
	};
	return (
		<div className='relative flex h-screen flex-col  md:items-center md:justify-center'>
			<Head>
				<title>Netflix Member</title>
				<link rel='icon' href='favicon.ico' />
			</Head>

			<img
				src='https://rb.gy/ulxxee'
				alt='netflix'
				width={260}
				height={130}
				className='absolute left-4 top-4 object-contain cursor-pointer md:left10 md:top-6 md:mt-0 md:max-w-md md:px-14'
			/>

			<form
				className='relative mt-24 space-y-8 rounded bg-black/70 py-10 px-6 md:max-w-md md:px-14'
				onSubmit={handleSubmit(join)}
			>
				<h1 className='text-4xl font-semibold'>Sign In</h1>

				<div className='space-y-4'>
					<input type='email' placeholder='Email' className='input' {...register('email', { required: true })} />
					<input type='password' placeholder='Password' className='input' {...register('password', { required: true })} />
				</div>

				<button className='w-full rounded bg-[red] py-3 font-semibold' onClick={() => setLogin(true)}>
					Sign In
				</button>

				<div className='text-[gray]'>
					New to Netflix?{' '}
					<button className='text-white ml-4 hover:underline' onClick={() => setLogin(false)}>
						Sign Up Now
					</button>
				</div>
			</form>
		</div>
	);
}

export default login;
