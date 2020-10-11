import {saludar} from "../src/index";

describe('Saludar', () => {

  it('should ', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation()
    saludar();
    expect(spy).toHaveBeenCalledWith('Hola Mundo')
  });

});
