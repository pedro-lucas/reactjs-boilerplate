import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 250px;
   height: 100%;
   background: #282828;
   color: white;
   font-size: 1.2em;
   font-weight: bold;
`;

export const Container = styled.div`
   display: block;
   padding: 10px;
   border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
`;

export const TextSpan = styled.span`
   vertical-align: middle;
   display: inline-block;
   margin-left: 5px;
   text-transform: uppercase;
`;

export const imgStyle = {
   width: '30px',
   height: 'auto',
   display: 'inline-block',
   verticalAlign: 'middle',
};
