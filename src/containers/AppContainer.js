// == Import
import { useSelector } from 'react-redux';
import {
  selectFirstThingTitle,
  selectFirstThingParagraph,
} from '../selectors/firstThingSelectors';
import {
  selectSecondThingTitle,
  selectSecondThingParagraph,
} from '../selectors/secondThingSelectors';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

// == Composant
function App() {
  const firstTitle = useSelector(selectFirstThingTitle);
  const firstParagraph = useSelector(selectFirstThingParagraph);
  const secondTitle = useSelector(selectSecondThingTitle);
  const secondParagraph = useSelector(selectSecondThingParagraph);

  return (
    <div className="app">
      <Title title={firstTitle} />
      <Paragraph text={firstParagraph} />
      <Title title={secondTitle} />
      <Paragraph text={secondParagraph} />
    </div>
  );
}

// == Export
export default App;
