import * as S from './styles';

function Home() {
	return (
		<S.Structure>
			<S.Header>
				<a href="#" className="logo">
					<img
						src="/src/assets/imgs/wildbeast.svg"
						alt="Wild Beast"
					/>
				</a>
				<nav>
					<ul>
						<li>
							<a href="#">sobre</a>
						</li>
						<li>
							<a href="#">animais</a>
						</li>
						<li>
							<a href="#">contato</a>
						</li>
					</ul>
				</nav>
			</S.Header>
			<S.Sidenav>
				<ul>
					<li>
						<a href="#">
							<img src="src/assets/icons/cervo.svg" alt="cervo" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="src/assets/icons/leao.svg" alt="leao" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="src/assets/icons/gato.svg" alt="gato" />
						</a>
					</li>
					<li>
						<a href="#">
							<img src="src/assets/icons/vaca.svg" alt="ovelha" />
						</a>
					</li>
					<li>
						<a href="#">
							<img
								src="src/assets/icons/ovelha.svg"
								alt="ovelha"
							/>
						</a>
					</li>
					<li>
						<a href="#">
							<img
								src="src/assets/icons/abelha.svg"
								alt="abelha"
							/>
						</a>
					</li>
				</ul>
			</S.Sidenav>
			<S.Main>
				<div className="title">
					<h1>Lobo Cinza</h1>
					<span>da família canis lupus</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">72</span>
						<span className="labe">kg</span>
					</div>
					<div>
						<span className="numero">13</span>
						<span className="label">kg</span>
					</div>
				</div>
				<p>
					É um sobrevivente da Era do Gelo, originário do Pleistoceno
					Superior, cerca de 300 mil anos atrás.[2] O sequenciamento
					de DNA e estudos genéticos reafirmam que o lobo cinzento é
					ancestral do cão doméstico.
				</p>
				<img src="src/assets/imgs/wolf1.jpg" alt="wolf-1" />
				<p>
					É um sobrevivente da Era do Gelo, originário do Pleistoceno
					Superior, cerca de 300 mil anos atrás.[2] O sequenciamento
					de DNA e estudos.
				</p>
				<img src="src/assets/imgs/wolf2.jpg" alt="wolf-2" />
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
				<blockquote className="quote">
					<p>
						“Há algo no uivar do lobo que tira um homem do aqui e
						agora e o transporta para uma floresta da mente.”
					</p>
				</blockquote>
				<ul>
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
				<img src="src/assets/imgs/wolf3.jpg" alt="wolf-3" />
			</S.Main>
			<S.Aside>
				<div className="advertisement">
					<img src="src/assets/imgs/anuncio-1.jpg" alt="anuncio-1" />
				</div>
				<div className="advertisement">
					<img src="src/assets/imgs/anuncio-2.jpg" alt="anuncio-2" />
				</div>
			</S.Aside>
			<S.Footer>
				<p>
					Thales Gomes & Origamid © 2022. Alguns direitos reservados
				</p>
			</S.Footer>
		</S.Structure>
	);
}

export default Home;
