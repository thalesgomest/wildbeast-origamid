import * as S from './styles';

import ovelha1 from '../../assets/imgs/ovelha1.jpg';
import ovelha2 from '../../assets/imgs/ovelha2.jpg';
import ovelha3 from '../../assets/imgs/ovelha3.jpg';

function Ovelha() {
	return (
		<>
			<S.Main>
				<div className="title">
					<h1>Ovis aries</h1>
					<span>da família caprinae</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">100</span>
						<span className="label">kg</span>
					</div>
					<div>
						<span className="number">11</span>
						<span className="label">age</span>
					</div>
				</div>
				<p className="col-wide">
					A ovelha (Ovis aries) é um mamífero ruminante bovídeo da
					sub-família Caprinae. O carneiro é o macho da ovelha e os
					juvenis são cordeiros, anhos ou borregos. É um animal de
					enorme importância econômica como fonte de carne,
					laticínios, lã e couro.
				</p>
				<img src={ovelha1} alt="ovelha-1" />
				<p className="emphasis">
					Ambos os sexos têm chifres, apesar do tamanho e formato ser
					variável.
				</p>
				<img src={ovelha2} alt="ovelha-2" />
				<p>
					Criada em cativeiro em todos os continentes, a ovelha foi
					domesticada na Idade do Bronze a partir do Urial (Ovis
					orientalis), que vive actualmente nas montanhas da Turquia e
					Iraque, ou de outras espécies da ovinos da região. As
					ovelhas são, quase sempre, criadas em rebanhos. O manejo
					requer cuidados, seja pelo fato de se tratar de um rebanho
					grande, ou por serem animais sensíveis.
				</p>
				<p>
					Além do frio, os criadores devem atentar para raposas, lobos
					e outros predadores, que cercam as fêmeas e roubam-lhes os
					filhotes. A lã, retirada no início do verão, importante
					fonte de renda para o criador, torna a crescer, garantindo
					ao animal a sua própria defesa ao frio.
				</p>
				<blockquote className="quote col-wide">
					<p>
						"No fim das contas, a lã de uma ovelha negra é
						igualmente quente.”
					</p>
				</blockquote>
				<ul className="atributes">
					<li>Ordem: Artiodactyla</li>
					<li>Tipo: Mamífero</li>
					<li>Idade Média: 14 anos</li>
					<li>Macho adulto: 100kg</li>
					<li>Fêmea adulta: 80kg</li>
					<li>Família: Caprinae</li>
				</ul>
				<div className="information">
					<p>
						As ovelhas domésticas são descendentes do
						muflão-asiático, que é encontrado nas montanhas da
						Turquia ao Irã meridional. Evidências da domesticação
						datam de 9000 a.C. no que é hoje o Iraque.
					</p>
					<p>
						Evidências das primeiras domesticações são encontradas
						em PPNB Jericho e Zawi Chemi Shanidar. As ovelhas de lã
						enrolada são encontradas somente desde a Idade do
						Bronze. O muflão-europeu (Ovis musimon) encontrado na
						Córsega e na Sardenha assim como em Creta e a extinta
						ovelha-selvagem-do-Chipre são possíveis descendentes das
						primeiras ovelhas domésticas que se tornaram selvagens.
					</p>
				</div>
				<img className="col-wide" src={ovelha3} alt="ovelha-3" />
			</S.Main>
		</>
	);
}

export default Ovelha;
