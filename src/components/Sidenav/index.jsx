import bufalo from '../../assets/icons/vaca.svg';
import abelha from '../../assets/icons/abelha.svg';
import gato from '../../assets/icons/gato.svg';
import cervo from '../../assets/icons/cervo.svg';
import ovelha from '../../assets/icons/ovelha.svg';
import leao from '../../assets/icons/leao.svg';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

const Sidenav = ({ page }) => {
	const navigate = useNavigate();
	return (
		<S.Sidenav page={page}>
			<ul>
				<li>
					<p
						id="cervo"
						onClick={() => {
							navigate('/cervo');
						}}
					>
						<img src={cervo} alt="cervo" />
					</p>
				</li>
				<li>
					<p
						id="leao"
						onClick={() => {
							navigate('/leao');
						}}
					>
						<img src={leao} alt="leao" />
					</p>
				</li>
				<li>
					<p
						id="gato"
						onClick={() => {
							navigate('/gato');
						}}
					>
						<img src={gato} alt="gato" />
					</p>
				</li>
				<li>
					<p
						id="bufalo"
						onClick={() => {
							navigate('/bufalo');
						}}
					>
						<img src={bufalo} alt="bufalo" />
					</p>
				</li>
				<li>
					<p
						id="ovelha"
						onClick={() => {
							navigate('/ovelha');
						}}
					>
						<img src={ovelha} alt="ovelha" />
					</p>
				</li>
				<li>
					<p
						id="abelha"
						onClick={() => {
							navigate('/abelha');
						}}
					>
						<img src={abelha} alt="abelha" />
					</p>
				</li>
			</ul>
		</S.Sidenav>
	);
};

export default Sidenav;
