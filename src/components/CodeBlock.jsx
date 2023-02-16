import styled from "styled-components";
import { CodeBlock, railscast } from "react-code-blocks";

const Container = styled.div`
  width: 500px;
  height: 300px;
`;

const CodeBlocks = () => {
  const code = `const hyunjung = {
    name : 김현정,
    education : [코드스테이츠 Software 
      Engineering Frontend 41기 수료,
      한입 크기로 잘라 먹는 리액트 수강],
     study : [typescript, redux, tailwindCSS] 
  }`;

  return (
    <Container>
      <CodeBlock
        text={code}
        language={"javascript"}
        showLineNumbers={false}
        theme={railscast}
        wrapLines
      />
    </Container>
  );
};

export default CodeBlocks;
