import * as S from './styles';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useNavigate } from 'react-router-dom';

import wildbest from '../../assets/imgs/wildbeast.svg';

const Header = () => {
	const navigate = useNavigate();
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<S.Header>
			<a className="logo" onClick={() => navigate('/')}>
				<img src={wildbest} alt="Wild Beast" />
			</a>
			<nav>
				<ul>
					<li>
						<label className="switch">
							<input type="checkbox"></input>
							<span
								className="slider"
								onClick={() => {
									toggleTheme(theme);
								}}
							></span>
						</label>
					</li>
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
	);
};

export default Header;
