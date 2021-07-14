import "./Descriptions.css";
import pigIcon from "../images/Icon/1x/iconCompleteColorPig.png";
import gearIcon from "../images/Icon/1x/iconCompleteColorWeight.png";
import atomIcon from "../images/Icon/1x/iconCompleteColorInnovation.png";

const Descriptions = () => {
  return (
    <div className="descriptions-container">
      <div>
        <img src={pigIcon} alt="Piggy bank icon" />
        <h3>Don't break the bank</h3>
        <p>
          Affordable fitness products that keep your pockets in mind so you can
          focus on what matters.
        </p>
      </div>
      <div>
        <img src={gearIcon} alt="Dumbbell icon" />
        <h3>Quality gear</h3>
        <p>Made with durable materials and ready for wear and tear.</p>
      </div>
      <div>
        <img src={atomIcon} alt="Dumbbell icon" />
        <h3>Innovative designs</h3>
        <p>Offering the latest and greatest in activewewar and fitness gear.</p>
      </div>
    </div>
  );
};

export default Descriptions;
