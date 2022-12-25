import { Container, Card } from './styles';
import { Line } from '../../components/LineIcons';
export function Main() {
  return (
    <Container>
      <Card>
        <Line />
        <div>
          <h1>Feliz Natal!</h1>
        </div>
        <Line />
      </Card>
    </Container>
  )
}