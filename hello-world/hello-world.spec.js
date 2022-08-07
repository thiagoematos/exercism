import Printer from './hello-world';

describe('Impressora', () => {
  test('Definir mensagem padrão para página de teste.', () => {
    // given
    const hp = new Printer();
    const expectedDefaultMessage = 'Hello, World!';

    // when
    const defaultMessage = hp.getDefaultMessageOfTestPage();

    // then
    expect(defaultMessage).toEqual(expectedDefaultMessage);
  });
});
