import { LOGO_URL } from "../utils/constants";
export const Footer = () => {
  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Careers</li>
          <li className="px-4">List of Stores</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
