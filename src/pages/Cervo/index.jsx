import * as S from './styles';

import cervo1 from '../../assets/imgs/cervo1.jpg';
import cervo2 from '../../assets/imgs/cervo2.jpg';
import cervo3 from '../../assets/imgs/cervo3.jpg';

function Cervo() {
	return (
		<>
			<S.Main>
				<div className="title">
					<h1>Cervus canadensis</h1>
					<span>da família cervidae</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">320</span>
						<span className="label">kg</span>
					</div>
					<div>
						<span className="number">13</span>
						<span className="label">kg</span>
					</div>
				</div>
				<p className="col-wide">
					O watapi/uapiti ou cervo-canadense (Cervus canadensis) é uma
					espécie de veado encontrado na Ásia e noroeste da América do
					Norte. Alguns pesquisadores a consideram uma subespécie do
					veado-vermelho (Cervus elaphus canadensis), mas estudos
					genéticos recentes indicam tratar-se de uma espécie
					separada.
				</p>
				<img src={cervo1} alt="cervo-1" />
				<p className="emphasis">
					É uma espécie ruminante, alimentando-se de ervas, cascas de
					árvores e folhas.
				</p>
				<img src={cervo2} alt="cervo-2" />
				<p>
					O nome uapiti significa "garupa branca" e é derivado de uma
					língua nativa da América do Norte - o Shawnee - pertencente
					à família das Línguas algonquinas.
				</p>
				<p>
					Além de serem maiores que as fêmeas, os machos se
					diferenciam por terem uma galhada, que cresce a partir da
					primavera e que cai no inverno.
				</p>
				<blockquote className="quote col-wide">
					<p>
						“Os cervos que você avista no verão, aqueles na orla da
						floresta, são sobreviventes do inverno, apenas os mais
						fortes.”
					</p>
				</blockquote>
				<ul className="atributes">
					<li>Ordem: Artiodactyla</li>
					<li>Tipo: Mamífero</li>
					<li>Idade Média: 13 anos</li>
					<li>Macho adulto: 320kg</li>
					<li>Fêmea adulta: 225kg</li>
					<li>Família: Cervídeo</li>
				</ul>
				<div className="information">
					<p>
						A distribuição geográfica o uapiti inclui a Ásia e a
						América do Norte. No continente asiático a espécie
						ocorre na Mongólia, sudeste da Sibéria, nordeste da
						China (Manchúria) e Península Coreana. Na América do
						Norte ocupam o centro-oeste do continente (Estados
						Unidos e Canadá).
					</p>
					<p>
						Os filhotes, geralmente um por fêmea, nascem na
						primavera. Fora do período de formação de haréns, os
						uapitis vivem em grupos de indivíduos do mesmo sexo.
					</p>
				</div>
				<img className="col-wide" src={cervo3} alt="cervo-3" />
			</S.Main>
		</>
	);
}

export default Cervo;
