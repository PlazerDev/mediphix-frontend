import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import logo from "./../../assets/images/mediphix_logo_black.png";
import FooterItemSet from "./FooterItemSet";

function Footer() {
  return (
    <div>
      <div className="flex flex-row justify-between mb-8">
        <div className="flex">
          <img src={logo} alt="Logo" className="w-32 object-contain" />
        </div>
        <div className="flex flex-row gap-32">
          <FooterItemSet
            title="PRODUCTs"
            items={[
              "Mediphix for Patients",
              "Mediphix for Doctors",
              "Mediphix for Medical Centers",
            ]}
          />
          <FooterItemSet
            title="Resources"
            items={["Help Center", "Blog", "Tutorials"]}
          />
          <FooterItemSet
            title="Company"
            items={["About Us", "Press", "Events", "Careers"]}
          />
        </div>
      </div>
      <hr className="h-0.5 bg-mediphix_text_d" />
      <div className="flex flex-row justify-between py-4">
        <p className="text-mediphix_text_b">
          &copy; 2024 Mediphix All Right Reserved.
        </p>
        <div className="flex flex-row gap-8">
          <div className="flex flex-row gap-4">
            <p className="text-mediphix_text_c hover:text-mediphix_text_a hover:cursor-pointer">
              Terms
            </p>
            <p className="text-mediphix_text_c hover:text-mediphix_text_a hover:cursor-pointer">
              Privacy
            </p>
            <p className="text-mediphix_text_c hover:text-mediphix_text_a hover:cursor-pointer">
              Contact
            </p>
          </div>
          <div className="flex flex-row gap-4 text-mediphix_text_b text-lg">
            <YoutubeFilled />
            <FacebookFilled />
            <TwitterCircleFilled />
            <InstagramFilled />
            <LinkedinFilled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
