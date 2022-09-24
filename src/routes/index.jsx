import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cervo from '../pages/Cervo';
import Leao from '../pages/Leao';
import Gato from '../pages/Gato';
import Bufalo from '../pages/Bufalo';
import Ovelha from '../pages/Ovelha';
import Abelha from '../pages/Abelha';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidenav from '../components/Sidenav';
import Aside from '../components/Aside';
import * as S from './styles';
import { ThemeContext } from '../providers/ThemeProvider';
import { useContext } from 'react';

export default function Router() {
	const { pageSelected } = useContext(ThemeContext);
	console.log(pageSelected);
	return (
		<BrowserRouter>
			<S.Structure>
				<Header />
				<Footer />
				<Sidenav page={pageSelected} />
				<Aside />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cervo" element={<Cervo />} />
					<Route path="/leao" element={<Leao />} />
					<Route path="/gato" element={<Gato />} />
					<Route path="/bufalo" element={<Bufalo />} />
					<Route path="/ovelha" element={<Ovelha />} />
					<Route path="/abelha" element={<Abelha />} />
				</Routes>
			</S.Structure>
		</BrowserRouter>
	);
}
