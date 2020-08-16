import tw, {styled} from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`


export const lightTheme = {
    body: '#fff',
    text: '#363537',
    sun: "orange",
    hover: 'background:url("cookie.jpg") no-repeat center center',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
  }
  
  export const darkTheme = {
    body: '#000',
    text: '#FAFAFA',
    sun: "#E2E2E2",
    hover: "background:rgba(144,205,244,var(--bg-opacity))",
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
  }

export const Background = styled.div`
    width:100vw;
    height:100vh;
`;

export const Sun = styled.div`
${tw` absolute right-0 m-10`}
    width: 200px;
    height:200px;
    background-color:${({ theme }) => theme.sun};
    border-radius:50%;
`;

export const Roof = styled.div`
    ${tw` absolute left-0 right-0 ml-auto mr-auto bg-orange-700`}
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%); 
    top: -200px;
    width:500px;
    height:200px;
`;

export const Building = styled.div`
    ${tw`absolute bottom-0 left-0 right-0 m-auto bg-gray-400`}
    width:500px;
    height:500px;



`;

export const WindowOne = styled.div`
${tw` absolute top-0 left-0 m-10 border border-blue-700 bg-blue-300`}
    width:100px;
    height:100px;
    border-radius:50%;
    :hover{
        ${({ theme }) => theme.hover};
    }
`;

export const WindowTwo = styled.div`
${tw` absolute top-0 right-0 m-10 border border-blue-700 bg-blue-300`} 
    ${({ theme }) => theme.enter};
    width:100px;
    height:100px;
    border-radius:50%;
    :hover{
        ${({ theme }) => theme.hover};
    }
`;

export const Banner = styled.div`
${tw`absolute left-0 right-0 ml-auto mr-auto bg-green-400 text-center text-green-900 text-2xl border border-green-700`}
    top:-25px;
    width:200px;
    height:50px;
`;

export const Door = styled.div`
${tw`absolute bottom-0 left-0 right-0 ml-auto mr-auto bg-yellow-800`}
    width:150px;
    height:300px;
`;