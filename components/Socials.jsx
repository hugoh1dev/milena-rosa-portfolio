import Link from 'next/link';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

const socials = [
    {
        icon: <FaFacebookF />,
        path: ''
    },
    {
        icon: <FaLinkedin />,
        path: ''
    },
    {
        icon: <RiInstagramFill />,
        path: ''
    },
    {
        icon: <RiWhatsappFill />,
        path: ''
    },
];

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link 
                        href={item.path} 
                        key={index} 
                        className={iconStyles}
                    >
                        <span>{item.icon}</span>
                    </Link>
                );
            })}
        </div>
  );
};

export default Socials;