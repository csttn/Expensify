import DotEnv from "dotenv";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
configure({ adapter: new Adapter() });

DotEnv.config({ path: ".env.test" });
