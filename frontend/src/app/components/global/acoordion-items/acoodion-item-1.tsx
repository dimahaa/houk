import "./acoodion-item-1.scss";
import Button from "../../global/buttons/button";

interface AccordionItem1Props {
  title: string;
  content: string;
  isActive: boolean;
  onShow: () => void;
}

const AccordionItem1 = ({
  title,
  content,
  isActive,
  onShow,
}: AccordionItem1Props) => {
  return (
    <div className="acoordion-item-1-div1">
      <div className="acoordion-item-1-div2">
        <h4>{title}</h4>
        <Button onClick={onShow} iconLeft={null} iconRight={null}>
          {isActive ? "-" : "+"}
        </Button>
      </div>

      {isActive && (
        <div className="acoordion-item-1-div3">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem1;
