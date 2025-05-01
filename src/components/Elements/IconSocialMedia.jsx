import React from "react";
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoWhatsapp,
} from "react-icons/io5";

const IconSocialMedia = () => {
    return (
        <>
            <div className="mt-6 flex gap-4 md:mt-8">
                <a href="https://www.instagram.com" target="_blank">
                    <IoLogoInstagram className="icon" />
                </a>
                <a href="https://www.github.com" target="_blank">
                    <IoLogoGithub className="icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                >
                    <IoLogoLinkedin className="icon" />
                </a>
                <a href="https://wa.me/" target="_blank">
                    <IoLogoWhatsapp className="icon" />
                </a>
            </div>
        </>
    );
};

export default IconSocialMedia;
