import * as S from './styles';

import bufalo1 from '../../assets/imgs/bufalo1.jpg';
import bufalo2 from '../../assets/imgs/bufalo2.jpg';
import bufalo3 from '../../assets/imgs/bufalo3.jpg';

function Bufalo() {
	return (
		<>
			<S.Main>
				<div className="title">
					<h1>Syncerus caffer</h1>
					<span>da família bovidae</span>
				</div>
				<div className="characteristics">
					<div>
						<span className="number">900</span>
						<span className="label">kg</span>
					</div>
					<div>
						<span className="number">15</span>
						<span className="label">kg</span>
					</div>
				</div>
				<p className="col-wide">
					O búfalo-africano (Syncerus caffer), também conhecido como
					búfalo-cafre, búfalo-do-cabo, búfalo-negro-africano ou ainda
					búfalo-da-cafraria, é um mamífero bovino nativo da África. O
					búfalo-africano, é encontrado normalmente na savana em
					países por toda a África sub-saariana, embora geralmente
					confinado em áreas protegidas.
				</p>
				<img src={bufalo1} alt="bufalo-1" />
				<p className="emphasis">
					Ambos os sexos têm chifres, apesar do tamanho e formato ser
					variável.
				</p>
				<img src={bufalo2} alt="bufalo-2" />
				<p>
					O búfalo-africano embora fisicamente semelhante ao búfalo
					comum encontrado na pecuária do norte do Brasil, é um animal
					de maior porte e selvagem. O búfalo adulto é muito forte,
					impondo respeito mesmo a um grupo de leões que possa cruzar
					o seu caminho. Além do homem, possui como predador natural o
					leão, mas mesmo um indivíduo da manada é capaz de se
					defender usando a força ou a proteção da própria.
				</p>
				<p>
					Regularmente pelo número de animais na manada, pela
					dispersão no terreno e pela falta de defesa de animais
					idosos, os leões podem matar e comer um búfalo, mas isto
					exige que um grupo de leões se organize e ataque um único
					animal.É muito raro um leão conseguir ferir com gravidade ou
					matar um búfalo adulto atacando-o sozinho.
				</p>
				<blockquote className="quote col-wide">
					<p>
						“O búfalo não é tão perigoso quanto todo mundo o faz
						parecer. As estatísticas provam que nos Estados Unidos
						mais americanos morrem em acidentes automobilísticos do
						que por búfalos.”
					</p>
				</blockquote>
				<ul className="atributes">
					<li>Ordem: Artiodactyla</li>
					<li>Tipo: Mamífero</li>
					<li>Idade Média: 13 anos</li>
					<li>Macho adulto: 500kg</li>
					<li>Fêmea adulta: 900kg</li>
					<li>Família: bovidae</li>
				</ul>
				<div className="information">
					<p>
						Nos animais da savana, os chifres são em forma de
						gancho, curvando-se para baixo a partir de sua origem no
						crânio antes de enrolar para cima e para dentro.
					</p>
					<p>
						Atualmente estima-se que sobrevivem 900 000, sendo a
						maioria na savana da África oriental. Os motivos para a
						diminuição da população dos búfalos-africanos foram a
						caça predatória, o uso do seu habitat como campos de
						agricultura, secas e a introdução no continente africano
						de pestes e doenças. Atualmente é considerado um animal
						fora do risco de extinção devido a proteção em parques
						nacionais e reservas privadas nas regiões da savana
						africana, entretanto o seu habitat é diminuído em área a
						cada ano.
					</p>
				</div>
				<img className="col-wide" src={bufalo3} alt="bufalo-3" />
			</S.Main>
		</>
	);
}

export default Bufalo;
