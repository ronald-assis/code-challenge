import Input from '../Input';
import Button from '../Button';

const Main = () => {
  return (
    <main>
      <form>
        <Input
          type={'number'}
          id={'square-meter'}
          span={'metro quadrado (1m2)'}
        />
        <Input
          type={'number'}
          id={'square-meter'}
          span={'Quantidade de janela'}
        />
        <Button type={'submit'} span={'Enviar'} />
      </form>
    </main>
  );
};

export default Main;
