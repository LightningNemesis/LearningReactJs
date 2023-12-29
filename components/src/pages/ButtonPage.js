import {
  FcAreaChart,
  FcElectronics,
  FcShipped,
  FcTimeline,
} from "react-icons/fc";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Button clicked!!");
  };

  return (
    <div>
      <div>
        <Button className={"my-2"} primary rounded outline>
          <FcAreaChart />
          primary
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <FcElectronics />
          secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          <FcShipped />
          success
        </Button>
      </div>
      <div>
        <Button warning rounded outline>
          <FcElectronics />
          warning
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <FcTimeline />
          danger
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
