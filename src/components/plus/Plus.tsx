import { CreditCard } from "lucide-react";
import { Headset } from "lucide-react";
import { Truck } from "lucide-react";
export default function plus() {
  return (
    <div className="row flex items-center justify-center mt-10 pb-10 gap-24 bg-[#FFF9FA]">
      <div className="col1">
        <div className="row flex justify-center items-center w-80">
          <div className="colicons">
            <CreditCard size={64} />
          </div>
          <div className="colexp pl-4">
            <div className="rowtit">
              <h1 className="font-bold text-lg">Safe Payment</h1>
            </div>
            <div className="rowtitexp">
              <p className="text-sm">With Our Payment Gateway, dont worry about your information</p>
            </div>
          </div>
        </div>
      </div>
      <div className="separator bg-[#34333A] h-16 w-0.5 "></div>
      <div className="col2">
        <div className="row flex justify-center items-center w-80">
          <div className="colicons">
            <Headset size={64} />
          </div>
          <div className="colexp pl-4">
            <div className="rowtit">
              <h1 className="font-bold text-lg">Friendly Services</h1>
            </div>
            <div className="rowtitexp">
              <p className="text-sm">Quickly Responses to help your problem and solve it</p>
            </div>
          </div>
        </div>
      </div>

      <div className="separator bg-[#34333A] h-16 w-0.5 "></div>
      <div className="col3">
        <div className="row flex justify-center items-center w-80">
          <div className="colicons">
            <Truck size={64} />
          </div>
          <div className="colexp pl-4">
            <div className="rowtit">
              <h1 className="font-bold text-lg">Fast Shipping</h1>
            </div>
            <div className="rowtitexp">
              <p className="text-sm">Get your Product As soon as possible an try fabulous product </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
