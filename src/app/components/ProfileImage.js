"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ProfileImage = ({ fallbackSrc, className, alt, width, height }) => {
    const [profileImageUrl, setProfileImageUrl] = useState(fallbackSrc);

    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const response = await fetch("/api/profile-pic");
                const data = await response.json();
                setProfileImageUrl(data.imageUrl);
            } catch (error) {
                console.error("Error fetching profile image:", error);
            }
        };

        fetchProfileImage();
        const intervalId = setInterval(fetchProfileImage, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Image
            className={className}
            src={profileImageUrl || fallbackSrc}
            alt={alt}
            width={width}
            height={height}
            priority
        />
    );
};

export default ProfileImage;
