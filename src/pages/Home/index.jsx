import { Container, Box } from './styles';
import gift from '../../assets/gifts.svg';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <Container>
      <Box>
        <img src={gift} alt="Imagem de um cartão com um presente" />
        <Link to="/card">
          Clique aqui para abrir.
        </Link>
      </Box>
    </Container>
  )
}