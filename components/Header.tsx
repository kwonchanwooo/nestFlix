import Link from 'next/link';
import { FaBell, FaSearch } from 'react-icons/fa';

function Header(props: any) {
	return (
		<header>
			<div>
				<h1>
					<img src='https://rb.gy/ulxxee' alt='netflix' width={100} className='cursor-pointer' />
				</h1>

				<ul className='space-x-4 flex md:flex'>
					<li className='headerLink'>Home</li>
					<li className='headerLink'>TV SHOW</li>
					<li className='headerLink'>Movies</li>
					<li className='headerLink'>New & Popular</li>
					<li className='headerLink'>My list</li>
				</ul>
			</div>

			<div>
				<FaSearch>
					<p>Kids</p>
				</FaSearch>
				<Link href='/'>
					<img src='https://rb.gy/g1pwyx' alt='profile' className='rounded' />
				</Link>
				<FaBell></FaBell>
			</div>
		</header>
	);
}

export default Header;
