import * as S from './styles';
import Header from '../../components/Header';
import Sidenav from '../../components/Sidenav';
import Aside from '../../components/Aside';
import Footer from '../../components/Footer';

import wolf1 from '../../assets/imgs/wolf1.jpg';
import wolf2 from '../../assets/imgs/wolf2.jpg';
import wolf3 from '../../assets/imgs/wolf3.jpg';

function Home() {
	return (
		<S.Structure>
			<Header />
			<Sidenav />
			<S.Main>
				<div className="title">
					<h1>Lobo Cinza</h1>
					<span>da família canis lupus</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">72</span>
						<span className="label">kg</span>
					</div>
					<div>
						<span className="number">13</span>
						<span className="label">age</span>
					</div>
				</div>
				<p className="col-wide">
					É um sobrevivente da Era do Gelo, originário do Pleistoceno
					Superior, cerca de 300 mil anos atrás.[2] O sequenciamento
					de DNA e estudos genéticos reafirmam que o lobo cinzento é
					ancestral do cão doméstico.
				</p>
				<img src={wolf1} alt="wolf-1" />
				<p className="emphasis">
					É um sobrevivente da Era do Gelo, originário do Pleistoceno
					Superior, cerca de 300 mil anos atrás.[2] O sequenciamento
					de DNA e estudos.
				</p>
				<img src={wolf2} alt="wolf-2" />
				<p>
					O peso e tamanho dos lobos variam muito em todo o mundo,
					tendendo a aumentar proporcionalmente com a latitude, como
					previsto pela teoria de Christian Bergmann. Em geral, a
					altura, medida a partir dos ombros, varia de 60 a 95
					centímetros.
				</p>
				<p>
					O peso varia geograficamente. Em média, os lobos europeus
					pesam 38,5 kg; os lobos da América do Norte, 36 kg; os lobos
					indianos e árabes, 25 kg.[7] Embora raros, lobos com mais de
					77 kg foram encontrados no Alasca, Canadá,[8] e na antiga
					União Soviética.
				</p>
				<blockquote className="quote col-wide">
					<p>
						“Há algo no uivar do lobo que tira um homem do aqui e
						agora e o transporta para uma floresta da mente.”
					</p>
				</blockquote>
				<ul className="atributes">
					<li>Surgiu: 12.000 anos</li>
					<li>Tipo: Mamífero</li>
					<li>Idade Média: 13 anos</li>
					<li>Macho adulto: 80kg</li>
					<li>Fêmea adulta: 55kg</li>
					<li>Família: Lupus</li>
				</ul>
				<div className="information">
					<p>
						É um sobrevivente da Era do Gelo, originário do
						Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O
						sequenciamento de DNA e estudos genéticos reafirmam que
						o lobo cinzento é ancestral do cão doméstico.
					</p>
					<p>
						É um sobrevivente da Era do Gelo, originário do
						Pleistoceno Superior, cerca de 300 mil anos atrás.[2] O
						sequenciamento de DNA e estudos genéticos reafirmam que
						o lobo cinzento é ancestral do cão doméstico.
					</p>
				</div>
				<img className="col-wide" src={wolf3} alt="wolf-3" />
			</S.Main>
			<Aside />
			<Footer />
		</S.Structure>
	);
}

export default Home;
