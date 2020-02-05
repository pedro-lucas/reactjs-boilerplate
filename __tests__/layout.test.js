import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Layout from '~/layouts/default';
import LayoutAuth from '~/layouts/auth';
import './utils/forceConsoleError';
import { store } from '~/store';

it('Renderizar corretamente o layout default', () => {
   try {
      renderer.create(
         <Provider store={store}>
            <Layout>
               <div>Teste</div>
            </Layout>
         </Provider>
      );
      expect(true).toBeTruthy();
   } catch (e) {
      expect(false).toBeTruthy();
   }
});

it('Deve gerar erro na renderização do layout default', () => {
   expect(() => {
      renderer.create(<Layout />);
   }).toThrow(Error);
});

it('Renderizar corretamente o layout auth', () => {
   try {
      renderer.create(
         <LayoutAuth>
            <div>Teste</div>
         </LayoutAuth>
      );
      expect(true).toBeTruthy();
   } catch (e) {
      expect(false).toBeTruthy();
   }
});

it('Deve gerar erro na renderização do layout auth', () => {
   expect(() => {
      renderer.create(<LayoutAuth />);
   }).toThrow(Error);
});
