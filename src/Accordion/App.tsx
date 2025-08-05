import { Accordion } from "./Accordion/Accordion";
import { AccordionPanel } from "./AccordionPanel";

export const App = () => {
  return (
    <Accordion>
      <AccordionPanel title="Accordion Title">
        <div> Hello World</div>
      </AccordionPanel>
    </Accordion>
  );
};
