import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cervo from '../pages/Cervo';
import Leao from '../pages/Leao';
import Gato from '../pages/Gato';
import Bufalo from '../pages/Bufalo';
import Ovelha from '../pages/Ovelha';
import Abelha from '../pages/Abelha';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cervo" element={<Cervo />} />
				<Route path="/leao" element={<Leao />} />
				<Route path="/gato" element={<Gato />} />
				<Route path="/bufalo" element={<Bufalo />} />
				<Route path="/ovelha" element={<Ovelha />} />
				<Route path="/abelha" element={<Abelha />} />
			</Routes>
		</BrowserRouter>
	);
}
