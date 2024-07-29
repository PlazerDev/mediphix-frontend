import img from "./../../assets/images/landing-page/landing_page_img.png";

function FirstSectionImg() {
  return (
    <div className="mt-8 flex justify-center items-center">
      <img src={img} alt="" className="object-contain w-full" />
    </div>
  );
}

export default FirstSectionImg;
