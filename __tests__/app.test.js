import React from 'react';
import renderer from 'react-test-renderer';
import App from '~/App';

it('Renderizar corretamente a aplicação', () => {
   renderer.create(<App />);
});
